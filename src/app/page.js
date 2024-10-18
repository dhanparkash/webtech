import Carasoul from "@/components/home-page/carasoul";
import Hero from "@/components/home-page/hero";
import Whychooseus from "@/components/home-page/whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <div className="bg-gray-200 py-10">
        <h2 className="text-black text-4xl text-center">Srvices</h2>
        <div className="columns-3 lg:px-12 py-6">
          <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
              <img
                src="/web-development.jpg"
                alt=""
                className="object-cover w-full mb-4 h-50 sm:h-50 dark:bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">
                Nam cu platonem posidonium sanctus debitis te
              </h2>
              <p className="text-sm dark:text-gray-600">
                Eu qualisque aliquando mel, id lorem detraxit nec, ad elit
                minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius,
                vim ad illud atqui apeirian...
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
              <img
                src="/web-development.jpg"
                alt=""
                className="object-cover w-full mb-4 h-50 sm:h-50 dark:bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">
                Nam cu platonem posidonium sanctus debitis te
              </h2>
              <p className="text-sm dark:text-gray-600">
                Eu qualisque aliquando mel, id lorem detraxit nec, ad elit
                minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius,
                vim ad illud atqui apeirian...
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
              <img
                src="/web-development.jpg"
                alt=""
                className="object-cover w-full mb-4 h-50 sm:h-50 dark:bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">
                Nam cu platonem posidonium sanctus debitis te
              </h2>
              <p className="text-sm dark:text-gray-600">
                Eu qualisque aliquando mel, id lorem detraxit nec, ad elit
                minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius,
                vim ad illud atqui apeirian...
              </p>
            </div>
          </div>
        </div>
      </div>
      <Whychooseus/>
      <Carasoul/>
    </div>
  );
}
