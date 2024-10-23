import Aboutus from "@/components/home-page/about-us";
import Hero from "@/components/home-page/hero";
import Clientsay from "@/components/home-page/cientsay";
import Form from "@/components/home-page/form";
import Whychooseus from "@/components/home-page/whychooseus";
import Accordionsmain from "@/components/home-page/accordionsmain";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full lg:w-8/12 md:w-11/12 -m-2 mx-auto py-16 px-5">
        <h2 className="text-indigo-700 md:text-2xl font-bold font-manrope leading-normal text-center py-5 sm:text-[24px]">
          Transform Your Online Presence With Professional Web Development , SEO
          and Graphic Design Services.
        </h2>
        <p className="text-black">
          We are a team of dedicated professionals committed to transforming
          your digital vision into reality. At Advik IT Solutions, with years of
          experience in the industry, we specialize in creating custom websites.
          SEO and Graphic Design Services that are visually captivating and
          technically robust. Our approach is client-centric, ensuring that each
          project is tailored to meet your specific needs and goals. From the
          initial concept to the final launch, we focus on deliverings
          exceptional quality and outstanding user experiences. At our core, we
          believe in the power of technology to drive success, and we strive to
          be your trusted partner in navigating the digital landscape.
        </p>
      </div>
      <div className="py-10 md-w:11/12">
        <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal text-center">
          Services
        </h2>
        <div className="lg:w-11/12 lg:px-12 grid xl:grid-cols-4 md:grid-cols-2 md:w-11/12 sm:grid-cols-1 gap-5 py-6 mx-auto px-5">
          <div className="h-full p-4 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
              <img
                src="/webdev.png"
                alt=""
                className="object-cover mb-4 h-50 w-32 m-auto sm:h-50 dark:bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">
                Web Design and Development
              </h2>
              <p className="text-sm dark:text-gray-600">
                Web design and development services are meticulously designed to
                elevate your online presence into a captivating and
                high-performance platform.
              </p>
            </div>
          </div>
          <div className="h-full p-4 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
              <img
                src="/webdevelopment.png"
                alt=""
                className="object-cover mb-4 h-50 sm:h-50 dark:bg-gray-500 w-32 m-auto"
              />
              <h2 className="mb-1 text-xl font-semibold">Graphic Designing</h2>
              <p className="text-sm dark:text-gray-600">
                Graphic design services encompass a wide array of creative
                solutions aimed at visually communicating messages, concepts,
                and ideas effectively.
              </p>
            </div>
          </div>
          <div className="h-full p-4 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
              <img
                src="/shopping.png"
                alt=""
                className="object-cover mb-4 h-50 sm:h-50 dark:bg-gray-500 w-32 m-auto"
              />
              <h2 className="mb-1 text-xl font-semibold">
                E-Commerce Solutions
              </h2>
              <p className="text-sm dark:text-gray-600">
                Our e-commerce solutions are designed to empower businesses of
                all sizes to thrive in the digital marketplace. We offer
                comprehensive services tailored to enhance online sales,
                streamline operations, and provide exceptional shopping
                experiences for customers.
              </p>
            </div>
          </div>
          <div className="h-full p-4 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
              <img
                src="/seo.png"
                alt=""
                className="object-cover mb-4 h-50 sm:h-50 dark:bg-gray-500 w-32 m-auto"
              />
              <h2 className="mb-1 text-xl font-semibold">
                Search Engine Optimization
              </h2>
              <p className="text-sm dark:text-gray-600">
                Our Search Engine Optimization (SEO) services are crafted to
                elevate your online presence and drive organic traffic to your
                website. We employ a comprehensive approach that combines
                technical expertise, strategic insights, and creative tactics to
                enhance your visibility in search engine results
              </p>
            </div>
          </div>
        </div>
      </div>
      <Whychooseus/>
      <Aboutus />
      <Accordionsmain/>
      <Clientsay />
      <Form />
    </div>
  );
}