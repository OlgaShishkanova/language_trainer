import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/auth-context";

const CreateNewPassword: React.FC = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const remindPassFunc = useAuth()?.remindThePassword;
  const onSubmit = (data: any) => {
    remindPassFunc(data);
  };

  return (
    <div>
      <h1 className="text-center">Create new password</h1>
      <div className="row justify-content-center">
        <form className="col-12 col-md-6 p-4" onSubmit={handleSubmit(onSubmit)}>
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
              Send
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateNewPassword;
