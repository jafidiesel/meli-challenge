import ProductRow, { IProduct } from '../ProductRow/ProductRow';
import styles from './ProductList.module.scss';

export default function ProductList() {
    // get products from API
    const products = [{
        id: "MLA1669778952",
        price: '100.40',
        description: 'Apple Macbook Pro 14  M3 8gb Ram - 512gb Ssd - Sportouch',
        image: "https://placehold.co/900",
        freeShipping: true
    }, {
        id: "MLA1422410041",
        price: '6159998.46',
        description: 'Apple Macbook Pro M3 512gb 8gb 14.2(3024x1964) Ultimo Modelo',
        image: "http://http2.mlstatic.com/D_667904-MLC53805603669_022023-I.jpg",
        freeShipping: false
    },
    {
        id: "MLA1409034551",
        price: '4267900',
        description: "Apple Macbook Pro 16 M3 18gb 512gb Ssd - Sportouch",
        image: "http://http2.mlstatic.com/D_674370-MLA74410595234_022024-O.jpg",
        freeShipping: false
    },
    {
        id: "MLA1613168860",
        price: '4099999',
        description: 'Apple Macbook Pro 13 Chip M2 512gb Color Gris Espacial',
        image: "http://http2.mlstatic.com/D_667904-MLC53805603669_022023-I.jpg",
        freeShipping: true
    }];

    return <div className={styles.productListContainer}>
        {products.map((product: IProduct) => <ProductRow key={product.id} {...product} />)}
    </div>;
}