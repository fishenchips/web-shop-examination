import { useToast } from "@chakra-ui/react";
import { useContext } from "react";
import Link from "next/link";

import { CartContext } from "../../store/CartContext";
import { PlatziProduct } from "../../types/product";
import { ImageCarousel } from "../Carousel/ImageCarousel";
import styles from "./Product.module.css";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  images,
}: PlatziProduct) => {
  const cartCtx = useContext(CartContext);
  const toast = useToast();

  if (!id)
    return (
      <p>
        Product doesnt exist. Press <Link href="/products">here</Link> to see
        our products!
      </p>
    );

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      title: title,
      amount: 1,
      price: price,
      image: images![0],
    });
    toast({
      title: `${title} added to cart.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const productPrice = `${price} kr`;

  return (
    <>
      <div className={styles.productPage}>
        <div className={styles.productInfo}>
          <div className={styles.productPicture}>
            <ImageCarousel imagesArray={images} altText={title} />
          </div>
          <div className={styles.productTitle}>
            <h3>{title}</h3>
            <p>{productPrice}</p>
            <i>{category?.name}</i>
            <button onClick={addToCartHandler}>Add to cart</button>
          </div>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
