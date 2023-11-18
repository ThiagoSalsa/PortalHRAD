import styles from './page.module.css'
import Slides from '../components/Slides/Slides'
import Menu from '../components/Menu/Menu'
import MoreOptions from '../components/MoreOptions/MoreOptions'
import { MousePointerSquare } from 'lucide-react';

export default function Home() {
  return (
      <div className={styles.container}>
          
          <Menu className={styles.menu} ></Menu>
          <Slides></Slides>

          <div className={styles.body}>
            <div className={styles.items}>
                <MoreOptions  link={'10.49.10.10.204'} nome={'intranet'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'https://expressomg.mg.gov.br/SOGo/'} nome={'expressomg'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'http://10.14.96.5/index.php/s/7wAEZCyYe43pRnr'} nome={'Agendas/Cirurgias'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'http://10.49.10.9/sigh/'} nome={'SIGH'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'http://10.14.96.5/index.php/s/WAzFT7GQEdidcs6'} nome={'Escalas'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'http://centraldechamados.fhemig.mg.gov.br/'} nome={'Suporte TI'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'http://10.14.96.5/index.php/s/Me2gs8ZSxM4ogQq'} nome={'Diretório da qualidade'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'http://10.14.96.5/index.php/s/ydQXLwpgyQ9nydN'} nome={'Cardápio'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'http://10.14.96.5/index.php/s/abBWjYnpTmbHaWc'} nome={'formilarios'} img={<MousePointerSquare/>}></MoreOptions>
                <MoreOptions  link={'http://10.14.96.5/index.php/s/qf7tKWNMfFc7sXd'} nome={'formilarios 2'} img={<MousePointerSquare/>}></MoreOptions>

            </div>
          </div>

      </div>
  )
}

