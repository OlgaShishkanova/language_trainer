import React from "react";
import { useForm } from "react-hook-form";

const RemindPasswordForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    //remindPassFunc(data);
  };

  return (
    <div>
      <h1 className="text-center">Remind the password</h1>
      <p className="text-center">
        Please, enter your email and we send you a link for password changing
      </p>
      <div className="row justify-content-center">
        <form className="col-12 col-md-6 p-4" onSubmit={handleSubmit(onSubmit)}>
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
            {errors.userLoginEmail && errors.userLoginEmail.message && (
              <small className="text-danger">
                {errors.userLoginEmail.message}
              </small>
            )}
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Create new password
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RemindPasswordForm;
