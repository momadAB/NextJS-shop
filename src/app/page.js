import ProductList from "./components/ProductList";
import Image from "next/image";
import pastaImage from "./assets/pasta.jpg";
import delucasLogoImage from "./assets/DeLucasLogo.png";

export default function Home() {
  return (
    <>
      <div className="relative grid justify-items-center font-[family-name:var(--font-geist-sans)] h-[100vh] w-full">
        {/* Background */}
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: `url(${pastaImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
          }}
        ></div>

        {/* Logo */}
        <Image
          className="absolute z-10 h-5/6 bottom-[-5rem] left-[-5rem]"
          src={delucasLogoImage}
          style={{
            width: "auto",
          }}
        />

        {/* Menu button */}
        <button className="absolute z-20 h-44 w-36 bg-lime-800 hover:bg-lime-700 top-10 right-10 rounded-[50px] font-bold text-2xl">
          MENU
        </button>
      </div>

      {/* Menu Area */}
      <h1 className="text-center m-10 size">MENU</h1>
      <div className="flex justify-center gap-4">
        <ProductList />
      </div>
    </>
  );
}
