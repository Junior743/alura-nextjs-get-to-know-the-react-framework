import Image from 'next/image'

interface IAvatar {
  name: string
  src: string
  alt?: string
}

const Avatar = ({ name, src, alt }: IAvatar) => {
  return (
    <ul>
      <li>
        <Image src={src} alt={alt || 'Avatar'} width={32} height={32} />
      </li>
      <li>@{name}</li>
    </ul>
  )
}

export default Avatar
