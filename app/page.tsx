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

      <h2
        className={`absolute top-20 left-20 text-6xl font-semibold text-black`}
      >
        Hi, I'm James!
      </h2>
      <StickyTabBar />
    </main>
  );
}
