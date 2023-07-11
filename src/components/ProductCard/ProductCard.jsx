import ImageCard from "../ImageCard/ImageCard";
import Product from "../Product/Product";

import style from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <article className={style.productCard}>
      <ImageCard
        mobileImage={`/images/image-product-mobile.jpg`}
        desktopImage={`/images/image-product-desktop.jpg`}
      />
      <Product
        category={`perfume`}
        name={`Gabrielle Essence Eau De Parfum`}
        description={`A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.`}
        currentPrice={"149.99"}
        price={`169.99`}
      />
    </article>
  );
}
