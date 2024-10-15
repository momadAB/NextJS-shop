import Image from "next/image";

import pepperoniPizzaImage from "./assets/pepperonipizza.jpg";
import alfredoImage from "./assets/alfredo.webp";

const products = [
  { image: pepperoniPizzaImage, name: "Pepperoni Pizza", price: "4.5 KD" },
  { image: alfredoImage, name: "Fettucine Alfredo", price: "5.0 KD" },
];

export default function Products() {
  return (
    <div className="flex gap-4 justify-center h-80 wrap">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-56 overflow-hidden rounded-3xl border-2 justify-between pb-2"
        >
          <Image
            className="brightness-50"
            src={product.image}
            height={250}
            // width={250}
            style={{
              objectFit: "cover",
              maxWidth: "none",
              // width: 250,
              // height: 250,
              // flexShrink: 3,
            }}
          />
          <br />
          <p> {product.name} </p>
          <p className="text-xs"> {product.price} </p>
        </div>
      ))}
    </div>
  );
}
