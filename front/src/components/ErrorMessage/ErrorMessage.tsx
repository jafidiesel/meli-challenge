import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage( props: ErrorMessageProps) {
  return <div className={styles.container}>
    {props.message}
  </div>;
}