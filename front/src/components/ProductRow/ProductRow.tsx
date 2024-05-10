import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import ImageProduct, { ImageType } from "../ImageProduct/ImageProduct";
import styles from "./ProductRow.module.scss";
import { formatPrice } from "@/utils";
import Link from "next/link";

export interface IProduct {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  }
  picture: string;
  condition: string;
  state_address: string;
  free_shipping: boolean;
}

export default function ProductRow(props: IProduct) {
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <Link href={`/items/${props.id}`}>
          <ImageProduct image={props.picture} type={ImageType.SMALL} />
        </Link>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.price}>
          $ {formatPrice(props.price.amount.toString())} 
          {props.free_shipping && (
            <span className={styles.freeShipping}>
              <FontAwesomeIcon icon={faTruck} className={styles.icon} />
            </span>
          )}
        </div>
        <Link href={`/items/${props.id}`} className={styles.link} >
          <div className={styles.title}>{props.title}</div>
        </Link>
      </div>
    </div>
  );
}
