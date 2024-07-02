import tour1 from "../assets/images/tour1.jpg";
import tour2 from "../assets/images/tour2.jpg";
import tour3 from "../assets/images/tour3.jpg";
import car1 from "../assets/images/car1.jpg";
import car2 from "../assets/images/car2.jpg";
import car3 from "../assets/images/car3.jpg";

import { MdOutlinePayments } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { GiMechanicGarage } from "react-icons/gi";
import bg from "../assets/images/bg-img.jpg";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="p-10 min-h-screen bg-gray-100">
        <div className="flex justify-between pt-5">
          <div className=" space-y-8 mt-14">
            <h1 className="text-6xl font-bold">
              Discover the Joy of Seamless Travel
            </h1>
            <h3 className="text-2xl pb-4 font-bold">
              Rent Cars, Book Tours, and Get Roadside Assistance
            </h3>

            <Link to="/main">
              <button className="px-5 rounded font-bold py-2 bg-orange-500 hover:bg-orange-600 shadow-lg ">
                Explore Now
              </button>
            </Link>
          </div>
          <img src={bg} className="shadow-lg h-[400px] rounded" alt="bg" />
        </div>
        <div className="mt-20">
          <h1 className="text-center text-5xl font-bold">Key Features</h1>
          <div className="mt-10 flex justify-between">
            <div className="flex items-center justify-center space-x-3 bg-orange-500 text-2xl rounded shadow-xl w-[380px] p-4 mb-20">
              <IoCarSport />
              <p className="font-bold">Real-time Availability</p>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-orange-500 text-2xl rounded shadow-xl w-[380px] p-4 mb-20">
              <GiMechanicGarage />
              <p className="font-bold"> Roadside Assistance</p>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-orange-500 text-2xl rounded shadow-xl w-[380px] p-4 mb-20">
              <MdOutlinePayments />
              <p className="font-bold">Secure Payment</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-center text-5xl font-bold">
            Features Cars & Tours
          </h1>
          <div className="mt-10 h-[480px] ">
            <Carousel>
              <img src={car1} alt="..." />
              <img src={car2} alt="..." />
              <img src={car3} alt="..." />
              <img src={tour1} alt="..." />
              <img src={tour2} alt="..." />
              <img src={tour3} alt="..." />
            </Carousel>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="text-center text-5xl font-bold">About Us</h1>
          <div className="mt-10 w-full space-x-6 flex justify justify-between">
            <div className="border-2 p-2 rounded shadow-lg ">
              <h2 className="text-center font-bold text-2xl mb-3 text-orange-500 ">
                Our Story
              </h2>
              <p className="text-center text-gray-500">
                Our journey began with a simple vision: to revolutionize the way
                people experience travel and road safety. Founded by a group of
                passionate car enthusiasts and seasoned travel experts, Explore
                Ride Mechanics was born out of a desire to provide seamless,
                reliable, and top-quality automotive services to travelers and
                locals alike. From our humble beginnings, we have grown into a
                trusted name in the car rental, tourism, and roadside assistance
                industry. Our commitment to excellence and customer satisfaction
                has been the cornerstone of our success. We understand that
                every journey is unique, and we strive to offer personalized
                solutions that cater to your specific needs.
              </p>
            </div>
            <div className="border-2 p-2 rounded shadow-lg ">
              <h2 className="text-center font-bold text-2xl mb-3 text-orange-500 ">
                Mission
              </h2>
              <p className="text-center text-gray-500">
                Our mission is clear: to provide exceptional automotive services
                that enhance your travel experience and ensure your safety on
                the road. We are dedicated to: Quality and Reliability: Offering
                a diverse fleet of well-maintained, reliable vehicles for every
                occasion. Customer Satisfaction: Delivering unparalleled
                customer service with a focus on your convenience and comfort.
                Safety and Assistance: Providing prompt and professional
                roadside assistance to keep you moving, no matter where you are.
                Sustainable Tourism: Promoting responsible travel practices that
                preserve the beauty of our destinations for future generations.
              </p>
            </div>
            <div className="border-2 p-2 rounded shadow-lg ">
              <h2 className="text-center font-bold text-2xl mb-3 text-orange-500 ">
                Why Choose Us?
              </h2>
              <p className="text-center text-gray-500">
                Wide Range of Vehicles: From compact cars to luxury SUVs, our
                fleet is equipped to meet your diverse travel needs. Tailored
                Tours: Experience curated tours that showcase the best of each
                destination, guided by local experts. 24/7 Roadside Assistance:
                Our team is always on standby, ready to assist you with any
                roadside emergencies. Competitive Pricing: Enjoy top-tier
                services at affordable rates, ensuring you get the best value
                for your money. Eco-Friendly Initiatives: We are committed to
                reducing our carbon footprint through sustainable practices and
                eco-friendly vehicles.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-8 px-8">
          <h1 className="text-center text-5xl font-bold">Contact Us</h1>
          <div className="flex space-x-44 mt-12 items-center">
            <section className="">
              <form action="#" className="space-y-6" data-form>
                <div className="space-y-6">
                  <input
                    type="text"
                    name="fullname"
                    className="rounded text-orange-500 w-full border-0 placeholder:text-orange-500"
                    placeholder="Full name"
                    required
                    data-form-input
                  />

                  <input
                    type="email"
                    name="email"
                    className="rounded text-orange-500 border-0 w-full placeholder:text-orange-500"
                    placeholder="Email address"
                    required
                    data-form-input
                  />
                </div>

                <textarea
                  name="message"
                  className="rounded h-52 outline-none border-0 text-orange-500 w-full placeholder:text-orange-500"
                  placeholder="Your Message"
                  required
                  data-form-input
                ></textarea>

                <button
                  className="bg-orange-500 px-5 py-2 rounded-lg font-bold hover:bg-orange-600 "
                  type="submit"
                  data-form-btn
                >
                  <p>Send Message</p>
                </button>
              </form>
            </section>
            <section className="" data-mapbox>
              <figure className="">
                <iframe
                  className="rounded-lg shadow-2xl border-2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274330387!2d74.00471844300726!3d31.483103656420948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713632142098!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </figure>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
