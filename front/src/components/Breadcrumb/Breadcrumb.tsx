import styles from "./Breadcrumb.module.scss"
export default function Breadcrumb() {
    return (
        <div className={styles.text}>
            <p>Categoria 1 {">"} Categoria 2 {">"} Categoria 3</p>
        </div>
    );
  }