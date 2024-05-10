import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./Id.module.scss";
import ImageProduct, {
  ImageType,
} from "@/components/ImageProduct/ImageProduct";
import { formatPrice, translateCondition } from "@/utils";

async function getItem(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/${id}`
  );
  return response.json();
}

interface ItemProps {
  params: {
    id: string;
  };
}

export default async function Item({ params }: ItemProps) {
  const data = await getItem(params.id);

  return (
    <div>
      <Breadcrumb categories={[]} />
      <div className={styles.itemInnerContainer}>
        <div className={styles.descriptionBlock}>
            <ImageProduct
              image={data.item.picture}
              type={ImageType.LARGE}
            />
              <p className={styles.title}>Descripción del producto</p>
              <p className={styles.description}>{data.item.description}</p>
        </div>
        <div className={styles.priceBlock}>
          <div className={styles.condition}>{translateCondition(data.item.condition)} - amount selled</div>
          <div className={styles.title}>{data.item.title}</div>
          <div className={styles.price}>$ {formatPrice(data.item.price.amount.toString())}</div>
          <button className={styles.buy}>Comprar</button>
        </div>
      </div>
    </div>
  );
}
