import styles from "./Id.module.scss";
import ImageProduct, {
  ImageType,
} from "@/components/ImageProduct/ImageProduct";
import { formatPrice, translateCondition } from "@/utils";
import { getItem } from "@/services/api.service";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

interface ItemProps {
  params: {
    id: string;
  };
}

export default async function Item({ params }: ItemProps) {
  let data = null;
  const errorElement = <ErrorMessage message="Ocurrió un error recuperando el producto" />;
  
  try {
    data = await getItem(params.id);
    if(data.error) return errorElement;
    
  } catch (err) {
    console.error(err);
    return errorElement;
  }
  
  if (!data || !data.item) return <div>Cargando...</div>;

  return (
     <div className={styles.itemInnerContainer}>
        <div className={styles.descriptionBlock}>
            <ImageProduct
              image={data.item.picture}
              type={ImageType.LARGE}
            />
              <p className={styles.title}>Descripción del producto</p>
              <p className={styles.description}>{data.item.description ? data.item.description : "No hay descripción para el producto"}</p>
        </div>
        <div className={styles.priceBlock}>
          <div className={styles.condition}>{translateCondition(data.item.condition)}</div>
          <div className={styles.title}>{data.item.title}</div>
          <div className={styles.price}>$ {formatPrice(data.item.price.amount.toString())}</div>
          <button className={styles.buy}>Comprar</button>
        </div>
      </div>
  );
}
