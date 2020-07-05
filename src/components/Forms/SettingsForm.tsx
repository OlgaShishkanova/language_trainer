import React from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "@reach/router";
import { useAuth } from "../../context/auth-context";

const SettingsForm: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit, errors } = useForm();

  const updateFunc = useAuth()?.updateInfo;
  const data = useAuth()?.data;
  const onSubmit = (data: any) => {
    updateFunc(data);
  };

  return (
    <div>
      <h1 className="text-center">Profile Settings</h1>
      <div className="row justify-content-center">
        <form className="col-12 col-md-6 p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="userUpdateNameId">Name</label>
            <input
              className="form-control"
              name="userName"
              id="userUpdateNameId"
              defaultValue={data?.user?.name}
              ref={register({
                required: "This field is required",
              })}
            />
            {errors.userName && errors.userName.message && (
              <small className="text-danger">{errors.userName.message}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="userUpdateEmailId">Email address</label>
            <input
              className="form-control"
              name="userEmail"
              id="userUpdateEmailId"
              defaultValue={data?.user?.email}
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
            <label htmlFor="userUpdateInterfaceLangId">Interface Language</label>
            <input
              className="form-control"
              name="userUpdateInterfaceLang"
              id="userUpdateInterfaceLangId"
              defaultValue={data?.user?.interfaceLang}
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

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsForm;
