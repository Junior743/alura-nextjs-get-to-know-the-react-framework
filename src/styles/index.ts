export interface IAuthor {
  id: number
  name: string
  username: string
  avatar: string
}

export interface ICardPost {
  id: number
  cover: string
  title: string
  slug: string
  body: string
  markdown: string
  author: IAuthor
}

export interface IPagination<T> {
  prev?: number
  next?: number
  first: number
  last: number
  pages: number
  items: number
  data: T
}
