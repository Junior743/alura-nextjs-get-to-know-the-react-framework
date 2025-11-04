import Image from 'next/image'

import styles from './avatar.module.css'

interface IAvatar {
  name: string
  src: string
  alt?: string
}

const Avatar = ({ name, src, alt }: IAvatar) => {
  return (
    <section className={styles.avatar}>
      <Image
        src={src}
        width={32}
        height={32}
        alt={alt || `Avatar do(a) ${name}`}
      />
      <span>@{name}</span>
    </section>
  )
}

export default Avatar
