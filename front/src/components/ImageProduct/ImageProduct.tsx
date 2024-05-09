import styles from "./ImageProduct.module.scss";

export enum ImageType {
    SMALL = "small",
    LARGE = "large"
};

interface ImageProductProps {
    image: string;
    type: ImageType;
};

export default function ImageProduct(props: ImageProductProps) {
    const typeClassName = props.type === ImageType.SMALL ? styles.imageSmall : styles.imageLarge;
    return <div className={typeClassName}>
        <img src={props.image} alt="Product" className={styles.image} />
    </div>;
}