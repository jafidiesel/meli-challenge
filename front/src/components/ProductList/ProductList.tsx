import ProductRow, { IProduct } from '../ProductRow/ProductRow';
import styles from './ProductList.module.scss';

interface ProductListProps{
    items: IProduct[];
}

export default function ProductList(props: ProductListProps) {
    
    return <div className={styles.productListContainer}>
        {props.items.map((product: IProduct) => <ProductRow key={product.id} {...product} />)}
    </div>;
}