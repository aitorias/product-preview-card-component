import style from "./Product.module.css";

export default function Product({
  category,
  name,
  description,
  currentPrice,
  price,
}) {
  return (
    <section className={style.product}>
      <span className={style.category}>{category}</span>
      <h1 className={style.name}>{name}</h1>
      <p className={style.description}>{description}</p>
      <div className={style.prices}>
        <span className={style.currentPrice}>${currentPrice}</span>
        <span className={style.price}>${price}</span>
      </div>
      <button type="button" className={style.addToCart}>
        <img src={`/images/icon-cart.svg`} />
        Add to Cart
      </button>
    </section>
  );
}
