import Image from 'next/image'
import styles from './page.module.css'
import Menu from '@/components/Menu'
import Slides from '@/components/Slides'


export default function Home() {
  return (
    <div className={styles.container}>
      <Menu></Menu>
      <main>
        <Slides className={styles.slides}></Slides>
      </main>
    </div>
  )
}

