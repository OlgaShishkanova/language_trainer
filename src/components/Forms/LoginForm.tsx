import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps, navigate } from "@reach/router";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/user/actions";
import { RootState } from "../../store/index";

const LoginForm: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit, errors } = useForm();
  const { errors: apiErrors } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    dispatch(login(data));
  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <div className="row justify-content-center">
        <form className="col-12 col-md-6 p-4" onSubmit={handleSubmit(onSubmit)}>
          <small className="text-danger">{apiErrors.message}</small>
          <div className="form-group">
            <label htmlFor="userEmailId">Email address</label>
            <input
              className="form-control"
              name="userEmail"
              id="userEmailId"
              ref={register({
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.userEmail && errors.userEmail.message && (
              <small className="text-danger">{errors.userEmail.message}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="userPassId">Password</label>
            <input
              type="password"
              autoComplete="on"
              className="form-control"
              name="userPass"
              id="userPassId"
              ref={register({
                required: true,
              })}
            />
            {errors.userPass && (
              <small className="text-danger">This field is required</small>
            )}
          </div>

          <small className="form-text text-muted mb-4">
            First time? <Link to="/registration">To registration.</Link>
          </small>

          <small className="form-text text-muted mb-4">
            <Link to="/forgot-password">Forgot password?</Link>
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
