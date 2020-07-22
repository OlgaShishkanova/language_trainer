import React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "@reach/router";
import { useDispatch } from "react-redux";
import { register as userRegister } from "../../store/user/actions";

const RegistrationForm: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(userRegister(data));
  };

  return (
    <div>
      <h1 className="text-center">Registration</h1>
      <div className="row justify-content-center">
        <form className="col-12 col-md-6 p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="userNameId">Name</label>
            <input
              className="form-control"
              name="userName"
              id="userNameId"
              ref={register({
                required: "This field is required",
              })}
            />
            {errors.userName && errors.userName.message && (
              <small className="text-danger">{errors.userName.message}</small>
            )}
          </div>

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
              autoComplete="off"
              className="form-control"
              name="userPass"
              id="userPassId"
              ref={register({
                required: "This field is required",
                validate: (value) => value.length >= 8 || "Too short!",
              })}
            />

            <small className="form-text text-muted">
              Password must be at least 8 characters
            </small>
            {errors.userPass && errors.userPass.message && (
              <small className="text-danger">{errors.userPass.message}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="userPassRepeatId">Repeat Password</label>
            <input
              type="password"
              autoComplete="off"
              className="form-control"
              name="userPassRepeat"
              id="userPassRepeatId"
              ref={register({
                required: "This field is required",
                validate: (value) =>
                  value === watch("userPass") || "Passwords don't match.",
              })}
            />
            {errors.userPassRepeat && errors.userPassRepeat.message && (
              <small className="text-danger">
                {errors.userPassRepeat.message}
              </small>
            )}
          </div>
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

export default RegistrationForm;
