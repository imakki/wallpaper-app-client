import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [signUpemail, setSignUpEmail] = useState('');
  const [signUppassword, setSignUpPassword] = useState('');
  const [username, setUsername] = useState('');

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  const handleOnChangeTextboxSignUpEmail = (e) => {
    setSignUpEmail(e.target.value);
  };
  const handleOnChangeTextboxSignUpPassword = (e) => {
    setSignUpPassword(e.target.value);
  };
  const handleOnChangeTextboxUsername = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo, history]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (signUpemail && signUppassword && username) {
      dispatch(register(username, signUpemail, signUppassword));
    } else {
      alert('Username, email and password required!');
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="h-100 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-3/6">
          <div className="max-w-md w-full mt-40">
            <div>
              <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Register
              </h2>
            </div>
            <div>
              {loading && <div>Loading...</div>}
              {error && <div>{userInfo.msg}</div>}
            </div>
            <div className="mt-8">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm">
                <div className="-mt-px">
                  <input
                    value={username}
                    onChange={handleOnChangeTextboxUsername}
                    aria-label="Firstname"
                    name="firstname"
                    type="text"
                    className="appearance-none rounded-t-md rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Firstname"
                  />
                </div>
                <div>
                  <input
                    value={signUpemail}
                    onChange={handleOnChangeTextboxSignUpEmail}
                    aria-label="Email address"
                    name="email"
                    type="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Email address"
                  />
                </div>
                <div className="-mt-px">
                  <input
                    value={signUppassword}
                    onChange={handleOnChangeTextboxSignUpPassword}
                    aria-label="Password"
                    name="password"
                    type="password"
                    className="appearance-none rounded-b-md rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleRegister}
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
              </div>
              <div className="text-center">
                <p className="text-gray-600">Or</p>
              </div>
              <div>
                <Link to="/">
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
                    Sign In
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

export default Register;
