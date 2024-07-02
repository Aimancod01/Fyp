import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="pb-[133px]">
      <h1 className="text-center font-bold text-3xl pt-10">Login</h1>
      <form className="flex mt-10 mx-auto justify-center w-full max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" name="password" type="password" required />
        </div>

        <div className="flex items-center mt-3 justify-between">
          <button
            type="submit"
            className=" bg-orange-500 hover:bg-orange-600 font-bold hover:shadow px-5 py-2 rounded"
          >
            Submit
          </button>
          <p>
            Not a Member?{" "}
            <Link
              to="/register"
              className="bg-orange-500 hover:bg-orange-600 font-bold hover:shadow px-5 py-2 rounded"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
