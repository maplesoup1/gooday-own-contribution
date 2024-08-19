import { FramerButton } from "@/components/framer-button";
import { MenuTap } from "@/components/menu-tap";
import { RotateRect } from "@/components/rotate-rect";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-[100px]">
      <div>Gooday Website</div>
      <RotateRect />

      <FramerButton />

      <MenuTap />
    </main>
  );
}
