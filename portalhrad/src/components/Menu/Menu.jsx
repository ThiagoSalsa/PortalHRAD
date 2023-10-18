"use client"
import {AlignJustify} from 'lucide-react';
import styles from './Menu.module.css';

export default function Menu(){


    return (
        <header className={styles.header}>
            
            <a href="/"><img src="/FHEMIG.png" alt="Logo da Fundação Hospitalar do Estado de Minas Gerais" /></a>

            <nav className={styles.nav}>
                <ul className={styles.menus}>
                    <li className={styles.topicos}><a href="">Informativos</a></li>
                    <li className={styles.topicos}><a href="">Intranet</a></li>
                    <li className={styles.topicos}><a href="">ExpressoMG</a></li>
                    <li className={styles.topicos}><a href="">Agendas/Cirurgias</a></li>
                    <li className={styles.topicos}><a href="">SIGH</a></li>
                    <li className={styles.topicos}><a href="">Escalas</a></li>
                    <li className={styles.topicos}><a href="">Suporte TI</a></li>
                </ul>
            </nav>

            <AlignJustify  id={styles.btn}/>

        </header>
    )
}

