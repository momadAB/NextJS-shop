import Image from "next/image";

import pepperoniPizzaImage from "./assets/pepperonipizza.jpg";
import alfredoImage from "./assets/alfredo.webp";

const products = [
  { image: pepperoniPizzaImage, name: "Pepperoni Pizza", price: "4.5 KD" },
  { image: alfredoImage, name: "Fettucine Alfredo", price: "5.0 KD" },
];

export default function Products() {
  return (
    <div className="flex gap-4 justify-center">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={product.image}
            height={250}
            width={250}
            style={{ objectFit: "cover" }}
          />
          <p> {product.name} </p>
          <p className="text-xs"> {product.price} </p>
        </div>
      ))}
    </div>
  );
}
