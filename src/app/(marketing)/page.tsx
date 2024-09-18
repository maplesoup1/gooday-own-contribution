import { FramerButton } from "@/components/framer-button";
import { MenuTap } from "@/components/menu-tap";
import { RotateRect } from "@/components/rotate-rect";
import ContentBox from "@/components/ruihao/content-box";
import TabNavBar from "@/components/ruihao/TabNavBar";
import { featureTab, pricingTab } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center max-w-[1050px] m-auto">
      <div>Gooday Website</div>
      {/* <RotateRect />

      <FramerButton />

      <MenuTap /> */}

      <div className="flex justify-center items-center h-screen space-x-4">
        <ContentBox>
          <div>
            <h1 className="text-xl font-bold text-center">Card 1</h1>
            <p>This is the content for the first card.</p>
          </div>
        </ContentBox>
        <ContentBox>
          <div>
            <h1 className="text-xl font-bold text-center">Card 2</h1>
            <p>This is the content for the second card.</p>
          </div>
        </ContentBox>
      </div>

      <ContentBox />

      <TabNavBar tabs={featureTab} />
      <TabNavBar tabs={pricingTab} />
    </main>
  );
}
