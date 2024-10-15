import Image from "next/image";
import ProductItem from "./ProductItem";

import pepperoniPizzaImage from "../assets/pepperonipizza.jpg";
import alfredoImage from "../assets/alfredo.webp";

const products = [
  { image: pepperoniPizzaImage, name: "Pepperoni Pizza", price: "4.5 KD" },
  { image: alfredoImage, name: "Fettucine Alfredo", price: "5.0 KD" },
];

export default function ProductList() {
  return (
    <div className="flex gap-4 justify-center h-80 wrap">
      {products.map((product, index) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </div>
  );
}
