import React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "@reach/router";
import { useAuth } from "../../context/auth-context";
import { Link } from "@reach/router";

const LoginForm: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit, errors } = useForm();

  const loginFunc = useAuth()?.login;
  const onSubmit = (data: any) => {
    loginFunc(data);
  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <div className="row justify-content-center">
        <form className="col-12 col-md-6 p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="userLoginEmailId">Email address</label>
            <input
              className="form-control"
              name="userLoginEmail"
              id="userLoginEmailId"
              ref={register({
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.userLoginEmail && errors.userLoginEmail.message && (
              <small className="text-danger">
                {errors.userLoginEmail.message}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="userLoginPassId">Password</label>
            <input
              type="password"
              autoComplete="on"
              className="form-control"
              name="userLoginPass"
              id="userLoginPassId"
              ref={register({
                required: true,
              })}
            />
            {errors.userLoginPass && (
              <small className="text-danger">This field is required</small>
            )}
          </div>

          <small className="form-text text-muted mb-4">
            First time? <Link to="/registration">To registration.</Link>
          </small>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
