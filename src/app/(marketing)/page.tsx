import { MenuTap } from "@/components/menu-tap";
import { RotateRect } from "@/components/rotate-rect";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-20">
      <div>Gooday Website</div>
      <RotateRect />

      <MenuTap />
    </main>
  );
}
