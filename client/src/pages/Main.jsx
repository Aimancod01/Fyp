import car from "../assets/images/car.jpg";
import tour from "../assets/images/tour.jpg";
import roadside from "../assets/images/roadside.jpg";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="px-10 py-12 ">
      <div className="flex justify-between space-x-10">
        <div className="relative  ">
          <img src={car} alt="" className="h-96 rounded-lg w-96" />
          <h1 className="absolute top-0 pl-20 pt-12 text-white rounded-lg hover:scale-105 transition-all text-2xl font-bold h-96 w-full bg-black bg-opacity-70 ">
            Car Rental Service
          </h1>
        </div>
        <div className="relative">
          <img src={tour} alt="" className="h-96 rounded-lg w-96 " />
          <h1 className="absolute top-0 pl-24 pt-12 text-white rounded-lg hover:scale-105 transition-all text-2xl font-bold h-96 w-full bg-black bg-opacity-70 ">
            Tourism Service
          </h1>
        </div>
        <Link className="relative" to="/roadside">
          <div>
            <img
              src={roadside}
              alt=""
              className="h-96 rounded-lg shadow-lg w-96 "
            />
            <h1 className="absolute top-0 pl-20 pt-12 text-white rounded-lg hover:scale-105 transition-all text-2xl font-bold h-96 w-full bg-black bg-opacity-70 ">
              Roadside Assistance
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Main;
