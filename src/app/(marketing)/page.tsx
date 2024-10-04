import { FramerButton } from "@/components/framer-button";
import Chat_button from "@/components/home/chat_assitants/Chat_button";
import ContactUs from "@/components/home/contact-us";
import FAQ from "@/components/home/faq";
import Feature from "@/components/home/feature";
import Navigation_bar from "@/components/home/navigation bar/Navigation_bar";
import { MenuTap } from "@/components/menu-tap";
import { RotateRect } from "@/components/rotate-rect";
import Font_test from "@/components/home/font_test";
import Hero from "@/components/home/hero";
import Review from "@/components/review/page";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[1150px] m-auto">
      {/* <Navigation_bar/>
      <Hero />
      <Feature />
      <ContactUs />
      <FAQ />
      <Chat_button /> */}

      <Hero/>
      <Review/>
    </main>
  );
}
