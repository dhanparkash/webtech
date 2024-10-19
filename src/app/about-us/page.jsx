import Aboutus from "@/components/home-page/about-us";
import Hero from "@/components/home-page/hero";
import Clientsay from "@/components/home-page/cientsay";
import Image from "next/image";
import Form from "@/components/home-page/form";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Aboutus/>
      <Clientsay/>
      <Form/>
    </div>
  );
}
