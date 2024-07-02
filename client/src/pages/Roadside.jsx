import Map from "../components/Map";

function Roadside() {
  return (
    <div className="flex flex-row space-x-10 justify-between p-10">
      <form action="" className="flex p-7 rounded w-full flex-col bg-gray-400">
        <div className="text-center mb-5 text-xl font-bold">
          <h1>RoadSide Assistance</h1>
        </div>
        <div className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
              className="rounded "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact" className="font-bold">
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Contact Number"
              required
              className="rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="location" className="font-bold">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              required
              className="rounded"
            />
          </div>
          <button className="bg-orange-500 px-6 py-2 rounded font-bold hover:bg-orange-600 hover:shadow-lg transition-all ">
            Add
          </button>
        </div>
      </form>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default Roadside;
