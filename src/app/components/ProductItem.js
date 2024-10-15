import React from "react";
import Image from "next/image";

function ProductItem(product) {
  const props = product.product;
  return (
    <div className="flex flex-col items-center w-56 overflow-hidden rounded-3xl border-2 justify-between pb-2">
      <Image
        className="brightness-50"
        src={props.image}
        height={250}
        style={{
          objectFit: "cover",
          maxWidth: "none",
        }}
      />
      <br />
      <p> {props.name} </p>
      <p className="text-xs"> {props.price} </p>
    </div>
  );
}

export default ProductItem;
