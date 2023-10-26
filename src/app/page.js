import styles from './page.module.css'
import Slides from '../components/Slides/Slides'
import Menu from '../components/Menu/Menu'



export default function Home() {
  return (
    <div>
      <Menu></Menu>
      <Slides></Slides>
    </div>
  )
}

