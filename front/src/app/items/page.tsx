import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./Items.module.scss";
import ProductList from "@/components/ProductList/ProductList";
import { getItems } from "@/services/api.service";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

interface ItemProps {
  searchParams: {
    search: string;
  };
}

export default async function Items(props: ItemProps) {
  if (!props.searchParams.search) return <p>Ingrese un parámetro de búsqueda...</p>;
  let data;
  const errorElement = <ErrorMessage message="Ocurrió un error recuperando la lista de productos" />;

  try {
    data = await getItems(props.searchParams.search);
    if(data.error || !data || !data.items) return errorElement;
  } catch (error) {
    data = { items: [], categories: [] };
    return errorElement;
  }

  return (
    <div className={styles.itemsContainer}>
      <Breadcrumb categories={data.categories} />
      <ProductList items={data.items} />
    </div>
  );
}