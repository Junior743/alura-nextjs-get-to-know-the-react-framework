import postsObject from '../../posts.json'
import { ICardPost } from '@/styles'
import CardPost from '@/components/CardPost'

export default function Home() {
  return (
    <main>
      {postsObject.posts?.map((post: ICardPost) => (
        <CardPost {...post} />
      ))}
    </main>
  )
}
