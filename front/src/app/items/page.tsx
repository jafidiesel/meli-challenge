import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./Items.module.scss"
import ProductList from "@/components/ProductList/ProductList";

async function getItems(search: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items?q=${search}&limit=4`);
  return response.json();
}

interface ItemProps {
  searchParams: {
    search: string;
  };
};

export default async function Items(props: ItemProps) {
  if(!props.searchParams.search) return null;
  const data = await getItems(props.searchParams.search);

    return (
      <div className={styles.itemsContainer}>
        <Breadcrumb categories={data.categories} />
        <ProductList items={data.items} />
      </div>
    );
  
}