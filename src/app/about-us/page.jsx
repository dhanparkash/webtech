import Aboutus from "@/components/home-page/about-us";
import Clientsay from "@/components/home-page/cientsay";
import Aboutushero from "@/components/home-page/aboutushero";
export default function Home() {
  return (
    <div>
      <Aboutushero />
      <Aboutus />
      <div className="w-full sm:w-full mx-auto mt-0 pt-0 py-10 mb-0 bg-cover">
        <section className="xl:w-12/12 md:w-12/12 sm:w-full mx-auto xl:pt-0 grid grid-cols-2 gap-7">
          <div
            className="text-white bg-cover p-20 bg-[#0d2753]">
            <h2 class="text-white text-5xl font-bold text-center py-6">
              Why Fit?
            </h2>
            <p class="text-white text-2xl  text-center">
              We bring expertise across a wide range of technologies, including
              front-end (React, Angular, Vue.js), back-end (Node.js, Python,
              Java), wordpress development shopify development.
            </p>
          </div>
          <div
            className="text-white bg-cover p-20 bg-[#0d2753]">
            <h2 class="text-white text-5xl font-bold text-center py-6">
              What we do.
            </h2>
            <p class="text-white text-2xl text-center">
              We prioritize crafting intuitive and visually appealing user
              interfaces that align with modern design standards.
            </p>
          </div>
        </section>
      </div>
      <Clientsay />
    </div>
  );
}
