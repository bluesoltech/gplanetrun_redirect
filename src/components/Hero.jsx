import {
  CalendarIcon,
  CurrencyRupeeIcon,
  TagIcon,
} from "@heroicons/react/20/solid";
import Banner from "../assets/banner.jpg";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const features = [
  {
    name: "Date.",
    description: "April 7",
    icon: CalendarIcon,
  },
  {
    name: "Prizes",
    description: "worth more than 1,00,000*",
    icon: CurrencyRupeeIcon,
  },
  {
    name: "Category",
    description: "5KM Fun Run and 10KM Time Run",
    icon: TagIcon,
  },
];

export default function Hero() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.screen.width <= 1280 ? setShow(false) : setShow(true);
    // console.log("change");
  }, [window.screen.width]);

  function detectWindowSize() {
    window.innerWidth <= 1280 ? setShow(false) : setShow(true);
  }

  window.onresize = detectWindowSize;

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-5 w-full flex flex-col items-center">
      <div className="py-4 px-6 lg:px-8">
        <div className="sm:flex sm:flex-col xl:flex-row justify-evenly items-around">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#273775]">
                The Marathon
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Green Planet Run
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The run is about celebrating the passion of environmental
                sustainability and improvising reusable economy. This run is
                also for health awareness & advocating appropriate handling of
                e-waste as it impacts our health due to hazardous gasses &
                particles.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-[#273775]"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {show && (
            <img
              src={Banner}
              alt="Banner"
              className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0"
            />
          )}
        </div>
      </div>
      <button className=" mt-4 bg-transparent hover:bg-[#273775] text-[#21285B] font-semibold hover:text-white py-2 px-4 border border-[#273775] hover:border-transparent rounded">
        <a href="https://allevents.in/ahmedabad/green-planet-run-marching-green-20/80002144413442?ref=smdl">
          Register Now
        </a>
      </button>
    </div>
  );
}
