import React from "react";
const Accordionsmain = () => {
  return (
    <div
      className="py-10 mb-10 px-6"
      style={{ backgroundImage: "url('/header-bg-4.jpg')" }}
    >
      <h2 className="text-white text-3xl font-bold font-manrope text-center py-2">
        Here's how we stand out from the competition:
      </h2>
      <p className="text-center text-white py-2">
        We work collaboratively with you to understand your challenges, goals,
        and vision, ensuring our strategies align with your business growth.
      </p>
      <div className="w-full lg:w-10/12 md:w-full ustify-center m-auto lg:px-12 grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:gap-10 py-0 px-0 sm:gap-0">
        <div className="h-full p-4">
          <div className="sm:w-full w-full h-full">
            <img
              className="w-full h-auto object-cover"
              src="/compititions.webp"
              alt="about Us image"
            />
          </div>
        </div>
        <div className="h-full p-4">
          <div className="mb-5">
            <h2 className="mb-1 text-xl font-semibold text-white">
              Collaboration?
            </h2>
            <p className="text-sm text-white">
              Our Search Engine Optimization (SEO) services are crafted to
              elevate your online presence and drive organic traffic to your
              website. We employ a comprehensive approach that combines
              technical expertise, strategic insights, and creative tactics to
              enhance your visibility in search engine results
            </p>
          </div>
          <div className="mb-5">
            <h2 className="mb-1 text-xl font-semibold text-white">
              Innovation?
            </h2>
            <p className="text-sm text-white">
              Our thirst for innovation drives us to stay ahead of the curve. We
              explore the latest technologies and trends, ensuring your web
              services are always cutting-edge and future-ready.
            </p>
          </div>
          <div>
            <h2 className="mb-1 text-xl font-semibold text-white">
              Transparency?
            </h2>
            <p className="text-sm text-white">
              Trust is the foundation of any successful partnership. We maintain
              open communication, providing regular updates, and keeping you
              informed throughout the entire journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordionsmain;
