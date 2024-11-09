const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
