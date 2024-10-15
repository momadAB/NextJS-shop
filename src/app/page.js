import Header from "./components/Header";
import ProductList from "./components/ProductList";

import Image from "next/image";
import pastaImage from "./assets/pasta.jpg";
import delucasLogoImage from "./assets/DeLucasLogo.png";

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <Header></Header>

      {/* Menu Area */}
      <h1 className="text-center m-10 text-[2rem]">MENU</h1>
      <div className="flex justify-center gap-4">
        <ProductList />
      </div>
    </>
  );
}
