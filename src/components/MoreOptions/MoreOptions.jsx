import styles from './MoreOptions.module.css'

export default function(props){
    return (
        <a href={props.link} className={styles.container}>       
            {props.img}
            {props.nome}
        </a>
    )
}