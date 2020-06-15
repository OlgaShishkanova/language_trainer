import React from "react";
import { RouteComponentProps } from "@reach/router";
import CreateNewPassword from "./CreateNewPassword";
import RemindPasswordForm from "./RemindPasswordForm";
import { useLocation } from "@reach/router";
import {parse} from "query-string"

const ForgotPassword: React.FC<RouteComponentProps> = () => {
  const location = useLocation();
  const searchParams = parse(location.search);
  const token = searchParams?.token

  //TODO: check token function
  //TODO: redirection to NotFound page if token doesn't work

  return <div>{token ? <CreateNewPassword /> : <RemindPasswordForm />}</div>;
};

export default ForgotPassword;
