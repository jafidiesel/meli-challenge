import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import ImageProduct, { ImageType } from "../ImageProduct/ImageProduct";
import styles from "./ProductRow.module.scss";
import { formatPrice } from "@/utils";
import Link from "next/link";

export interface IProduct {
  id: string;
  price: string;
  description: string;
  image: string;
  freeShipping: boolean;
}

export default function ProductRow(props: IProduct) {
  // get product from API
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <Link href={`/items/${props.id}`}>
          <ImageProduct image={props.image} type={ImageType.SMALL} />
        </Link>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.price}>
          $ {formatPrice(props.price)} 
          {props.freeShipping && (
            <span className={styles.freeShipping}>
              <FontAwesomeIcon icon={faTruck} className={styles.icon} />
            </span>
          )}
        </div>
        <Link href={`/items/${props.id}`} className={styles.link} >
          <div className={styles.title}>{props.description}</div>
        </Link>
      </div>
    </div>
  );
}
