import styles from "./Breadcrumb.module.scss"

interface BreadcrumbProps {
    categories: string[];
  }

export default function Breadcrumb(props: BreadcrumbProps) {
    if(!props.categories || props.categories.length === 0) return null;
    return (
        <p className={styles.text}>
            {props.categories.map((category, index) => ( <span key={index}>{category} <span className={index === props.categories.length-1 ? styles.hide : ''}>&#62; </span></span>
          ))}
        </p>
    );
  }