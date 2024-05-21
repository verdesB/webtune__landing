import Image from "next/image";
import BackgroundSparkles from "@/app/components/BackgroundSparkles";
import Header from "@/app/components/Header";
import Product from "@/app/components/Product";
import Productivity from "@/app/components/Productivity";
import DropCalendar from "@/app/components/DropCalendar";
import Assistant from "@/app/components/Assistant";
import Medias from "@/app/components/Medias";
import Pricing from "@/app/components/Pricing";

export default function Home() {
  return (
      <div style={{position: 'relative'}}>
         <BackgroundSparkles/>
         <Header/>
          <Product/>
          <Productivity/>
          <DropCalendar/>
          <Assistant/>
          <Medias/>
          <Pricing/>

      </div>
  );
}
