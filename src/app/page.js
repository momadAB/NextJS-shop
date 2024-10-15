import Image from "next/image";
import pastaImage from "./assets/pasta.jpg";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <h1>DeLuca's Italian Restaurant</h1>
      <p>Authentic, beloved, and delicious.</p>
      <Image src={pastaImage} width={500} height={500} alt="Pasta" />
    </div>
  );
}
