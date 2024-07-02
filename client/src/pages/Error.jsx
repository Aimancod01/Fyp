import { useRouteError } from "react-router-dom";
import err from "../assets/images/error.png";
function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="h-screen bg-gray-100 space-y-6 flex items-center flex-col justify-center">
        <img src={err} className="h-32" alt="" />
        <h1 className="font-bold text-2xl">No Route Found</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.data}</p>
    </div>
  );
}

export default Error;
