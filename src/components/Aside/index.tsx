import Image from 'next/image'

import logo from './logo.png'
import styles from './aside.module.css'

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="Logo da Code Connect" />
    </aside>
  )
}
