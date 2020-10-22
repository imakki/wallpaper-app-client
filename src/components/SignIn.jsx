import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signInemail, setSignInEmail] = useState('');
  const [signInpassword, setSignInPassword] = useState('');

  const handleOnChangeTextboxSignInEmail = (e) => {
    setSignInEmail(e.target.value);
  };
  const handleOnChangeTextboxSignInPassword = (e) => {
    setSignInPassword(e.target.value);
  };

  const userSignIn = useSelector((state) => state.userSignIn);
  const { loading, userInfo, error } = userSignIn;

  useEffect(() => {
    if (userInfo) {
      history.push('/home');
    }
  }, [userInfo]);

  const signInHandler = (e) => {
    e.preventDefault();
    if (signInemail && signInpassword) {
      dispatch(signin(signInemail, signInpassword));
    } else {
      alert('Email and Password required!');
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="h-100 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-40 w-3/6">
          <div className="max-w-md w-full">
            <div>
              <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Sign In
              </h2>
            </div>
            <p>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
            </p>
            <div className="mt-8">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm">
                <div>
                  <input
                    value={signInemail}
                    onChange={handleOnChangeTextboxSignInEmail}
                    aria-label="Email address"
                    name="email"
                    type="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="-mt-px">
                  <input
                    value={signInpassword}
                    onChange={handleOnChangeTextboxSignInPassword}
                    aria-label="Password"
                    name="password"
                    type="password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-5">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={signInHandler}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>
              <div className="text-center">
                <p className="text-gray-600">New to this website?</p>
              </div>
              <div>
                <Link to="/register">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
