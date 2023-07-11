import style from "./ImageCard.module.css";

export default function ImageCard({ mobileImage, desktopImage, alt }) {
  return (
    <figure className={style.imageCard}>
      <picture>
        <source
          type="image/png"
          media="(min-width: 768px)"
          srcSet={desktopImage}
        />
        <img
          src={mobileImage}
          alt={`${alt} picture`}
          title={alt}
          className={style.image}
        />
      </picture>
    </figure>
  );
}
