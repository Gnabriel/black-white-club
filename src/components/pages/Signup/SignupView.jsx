import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const SignupView = () => {
  return (
    <div className="h-[90vh] min-h-full flex items-center justify-center bg-white">
      <div className="px-6 lg:px-12 py-32 rounded-xl max-w-md w-full space-y-8 bg-gray-lighter">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-black">
            Become a member of the Black White Club!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-dark">
            Already a member?{" "}
            <Link
              to="/signup"
              className="font-medium text-gray-darker hover:text-gray"
            >
              Sign in to your account
            </Link>
            .
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-light placeholder-gray text-gray-darker rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-light placeholder-gray text-gray-darker rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-black focus:ring-transparent border-gray rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-darker"
              >
                I agree to some GDPR stuff.
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-darker focus:outline-none focus:ring-none"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-darker group-hover:text-gray"
                  aria-hidden="true"
                />
              </span>
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupView;
