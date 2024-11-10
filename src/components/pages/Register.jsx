import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [eye, setEye] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const checked = event.target.checkbox.checked;
    // console.log(email, password, checked);

    //error message
    setErrorMessage("");
    setSuccessful(false);

    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters");
      return;
    }

    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regex.test(password)) {
      return setErrorMessage(
        "Password is invalid. It must contain at least one uppercase,one lowercase, one digit, one special character"
      );
    }

    // validate checked
    if (!checked) {
      return setErrorMessage("Please accepts our terms and conditions");
    }
    //sing in email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessful(true);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <div className="lg:w-1/3 mx-auto">
        <h3 className="text-3xl font-bold italic my-2 text-center">
          Register Please:
        </h3>
        <div className="card bg-base-100 w-full  shrink-0 shadow-xl">
          <form onSubmit={handleSubmit} className="card-body">
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={eye ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <button
                onClick={() => setEye(!eye)}
                className="absolute text-xl right-4 top-[50px]"
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* terms and conditions start */}
            <div className="form-control">
              <label className="cursor-pointer justify-start gap-2 label">
                <input
                  name="checkbox"
                  type="checkbox"
                  className="checkbox checkbox-success"
                />
                <Link className="label-text underline">
                  accept our terms and conditions
                </Link>
              </label>
            </div>
            {/* terms and conditions end */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
              <h3 className="text-lg">
                Are you already haven? please{" "}
                <Link
                  className="text-primary text-xl font-medium underline underline-offset-2"
                  to="/login"
                >
                  Login
                </Link>
              </h3>
            </div>
          </form>
        </div>
        {errorMessage && (
          <p className="text-warning text-xl font-bold">{errorMessage}</p>
        )}
        {successful && (
          <p className="text-success text-xl font-bold">
            Register Successfully
          </p>
        )}
      </div>
    </>
  );
};

export default Register;
