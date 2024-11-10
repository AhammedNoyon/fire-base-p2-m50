import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { Result } from "postcss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successful, setSuccessful] = useState(null);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);

    //clear errorMessage and successMessage
    setErrorMessage("");
    setSuccessful(null);

    //signIn
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessful("Login Successfully");
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <>
      <div className="lg:w-1/3 mx-auto">
        <h3 className="text-2xl font-bold text-center">please login</h3>
        <div className="card bg-base-100  shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <h3 className="text-lg">
                Are you new? please{" "}
                <Link
                  className="text-primary text-xl font-medium underline underline-offset-2"
                  to="/register"
                >
                  Register
                </Link>
              </h3>
            </div>
          </form>
        </div>
        {errorMessage && (
          <p className="text-2xl font-bold text-error">{errorMessage}</p>
        )}
        {successful && (
          <p className="text-2xl font-bold text-success">{successful}</p>
        )}
      </div>
    </>
  );
};

export default Login;
