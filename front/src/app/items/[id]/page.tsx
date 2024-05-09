import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./Id.module.scss";
import ImageProduct, {
  ImageType,
} from "@/components/ImageProduct/ImageProduct";
import { formatPrice, translateCondition } from "@/utils";

interface ItemProps {
  params: {
    id: string;
  };
}

export default function Item({ params }: ItemProps) {
  const apiResponse = {
    author: {
      name: "",
      lastname: "",
    },
    item: {
      id: "MLA1639167830",
      title:
        "Macbook Pro Macbook Pro 14  M3 Pro Space Black 14 , Apple M3 M3 Pro  18gb De Ram 512gb Ssd, Apple M3 Pro 14-core Gpu 120 Hz 3024x1964px Macos",
      price: {
        currency: "ARS",
        amount: 1980,
        decimals: 2,
      },
      picture: "http://http2.mlstatic.com/D_775701-MLA74422702048_022024-O.jpg",
      thumbnail:
        "http://http2.mlstatic.com/D_775701-MLA74422702048_022024-I.jpg",
      condition: "new",
      free_shipping: true,
      description:
        'La MacBook Pro es la notebook más poderosa de Apple, creada para quienes se proponen nuevos desafíos y logran cosas imposibles. Tiene una pantalla envolvente, procesadores superrápidos, gráficos de última generación, un nuevo teclado Magic Keyboard y un increíble espacio de almacenamiento.\n\nPantalla con gran impacto visual\nSu pantalla de 14" y 3024x1964px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. \n\nEficiencia a tu alcance\nSu procesador Apple M3 de 11 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar. \n\nPotente disco sólido \nEl disco sólido de 512 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Apple M3 Pro 14-Core GPU convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.',
    },
  };
  return (
    <div>
      <Breadcrumb />
      <div className={styles.itemInnerContainer}>
        <div className={styles.descriptionBlock}>
            <ImageProduct
              image={apiResponse.item.picture}
              type={ImageType.LARGE}
            />
              <p className={styles.title}>Descripción del producto</p>
              <p className={styles.description}>{apiResponse.item.description}</p>
        </div>
        <div className={styles.priceBlock}>
          <div className={styles.condition}>{translateCondition(apiResponse.item.condition)} - amount selled</div>
          <div className={styles.title}>{apiResponse.item.title}</div>
          <div className={styles.price}>$ {formatPrice(apiResponse.item.price.amount.toString())}</div>
          <button className={styles.buy}>Comprar</button>
        </div>
      </div>
    </div>
  );
}
