import Image from "next/image";
import StickyTabBar from "./components/stickyTabBar";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-[100vw] lg:h-screen">
        <Image
          src="/james.webp"
          alt="James Cover photo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h1 className="absolute top-20 left-10 text-2xl lg:text-6xl text-black">
        Hi, I&apos;m James!
      </h1>
      <h1 className="absolute top-80 right-10 text-2xl lg:text-6xl text-black">
        and Barry &#128054;
      </h1>
      <StickyTabBar />
    </main>
  );
}
