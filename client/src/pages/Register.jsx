import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="pb-[58px]">
      <h1 className="text-center font-bold text-3xl pt-6">Register</h1>
      <form className="flex mt-10 mx-auto justify-center w-full max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            name="name"
            type="name"
            placeholder="name"
            required
          />
        </div>
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
            Already a Member?{" "}
            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 font-bold hover:shadow px-5 py-2 rounded"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
