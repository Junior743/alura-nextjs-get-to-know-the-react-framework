import Image from 'next/image'

import Avatar from '../Avatar'
import { ICardPost } from '@/styles'

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
    <article>
      <header>
        <figure>
          <Image src={cover} alt={title} width={438} height={133} />
        </figure>
      </header>
      <section>
        <h2>{title}</h2>
        <p>{body}</p>
      </section>
      <footer>
        <Avatar name={author.name} src={author.avatar} />
      </footer>
    </article>
  )
}

export default CardPost
