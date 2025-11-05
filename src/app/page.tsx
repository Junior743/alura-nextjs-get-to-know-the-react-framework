import Link from 'next/link'

import logger from '@/logger'
import { ICardPost, IPagination } from '@/styles'
import CardPost from '@/components/CardPost'

import styles from './page.module.css'

async function getPosts(
  currentPage: number
): Promise<IPagination<ICardPost[]> | undefined> {
  const endpoint = process.env.ENDPOINT_API
  if (!endpoint) throw new Error('ENDPOINT_API is not defined')

  const response = await fetch(
    `${endpoint}/posts?_page=${currentPage}&_per_page=6`
  ).catch((err) => {
    throw new Error(err)
  })

  if (!response.ok) {
    logger.error(
      `Erro ao tentar buscar posts: ${response.status} - ${JSON.stringify(
        response.json()
      )}`
    )
    return
  }

  logger.info(`Posts obtidos com sucesso}`)
  return (await response.json()) as IPagination<ICardPost[]>
}

export default async function Home() {
  const postsPaginated = await getPosts(1)

  return (
    <main className={styles.container}>
      {postsPaginated?.data.map((post: ICardPost, index: number) => (
        <CardPost key={index} {...post} />
      ))}

      {postsPaginated?.prev && (
        <Link href={`/?page=${postsPaginated?.prev}`}>Página anterior</Link>
      )}

      {postsPaginated?.next && (
        <Link href={`/?page=${postsPaginated?.next}`}>Próxima página</Link>
      )}
    </main>
  )
}
