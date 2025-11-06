import { remark } from 'remark'
import html from 'remark-html'
import DOMPurify from 'dompurify'

import logger from '@/logger'

import { ICardPost } from '@/styles'

interface IPostPageProps {
  params: { slug: string }
}

async function getPostBySlug(slug: string): Promise<ICardPost | undefined> {
  const endpoint = process.env.ENDPOINT_API
  if (!endpoint) throw new Error('ENDPOINT_API is not defined')

  const response = await fetch(`${endpoint}/posts?slug=${slug}`).catch(
    (err) => {
      throw new Error(err)
    }
  )

  if (!response.ok) {
    logger.error(
      `Erro ao tentar buscar posts: ${response.status} - ${JSON.stringify(
        response.json()
      )}`
    )
    return
  }

  logger.info(`Posts obtidos com sucesso}`)
  const cardPost = (await response.json()) as ICardPost[]
  if (!cardPost.length) {
    return
  }

  return cardPost[0]
}

function markdownToHtml(markdown: string) {
  const result = remark().use(html).processSync(markdown)
  // "DOMPurify.sanitize": Assim, você garante segurança extra na sua aplicação,
  // mantendo longe qualquer risco de XSS (cross-site scripting),
  // que pode causar danos sérios aos usuários ou à sua aplicação.
  return DOMPurify.sanitize(result.toString())
}

const PostPage = async ({ params }: IPostPageProps) => {
  const post = await getPostBySlug(params.slug)
  if (post?.markdown) post.markdown = markdownToHtml(post?.markdown)

  return (
    <>
      <h1 style={{ color: 'white' }}>{post?.title}</h1>
      <div
        style={{ padding: 16, background: 'white' }}
        dangerouslySetInnerHTML={{ __html: post?.markdown || '' }}
      />
    </>
  )
}

export default PostPage
