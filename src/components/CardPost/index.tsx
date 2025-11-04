import Image from 'next/image'

import Avatar from '../Avatar'
import { ICardPost } from '@/styles'

import styles from './card-post.module.css'

const CardPost = ({
  id,
  cover,
  title,
  slug,
  body,
  markdown,
  author,
}: ICardPost) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image
            src={cover}
            width={438}
            height={133}
            alt={`Capa do post de título ${title}`}
          />
        </figure>
      </header>

      <section className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{body}</p>
      </section>

      <footer className={styles.footer}>
        <Avatar name={author.name} src={author.avatar} />
      </footer>
    </article>
  )
}

export default CardPost
