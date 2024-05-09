import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./Items.module.scss"
import ProductList from "@/components/ProductList/ProductList";

interface ItemProps {
  searchParams: {
    search: string;
  };
};

export default function Items(props: ItemProps) {
    return (
      <div className={styles.itemsContainer}>
        <Breadcrumb />
        <ProductList />
      </div>
    );
  }
  