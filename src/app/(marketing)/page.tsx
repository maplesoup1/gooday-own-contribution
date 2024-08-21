import { FramerButton } from "@/components/framer-button";
import Chat_button from "@/components/home/chat_assitants/Chat_button";
import ContactUs from "@/components/home/contact-us";
import FAQ from "@/components/home/faq";
import Feature from "@/components/home/feature";
import Hero from "@/components/home/hero";
import { MenuTap } from "@/components/menu-tap";
import { RotateRect } from "@/components/rotate-rect";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-[100px]">
      <Hero />
      <Feature />
      <ContactUs />
      <FAQ />
      <Chat_button />
    </main>
  );
}
