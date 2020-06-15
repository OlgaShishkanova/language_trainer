import React from "react";
import { RouteComponentProps } from "@reach/router";
import CreateNewPassword from "./CreateNewPassword";
import RemindPasswordForm from "./RemindPasswordForm";
import { useLocation } from "@reach/router";
// import {parse} from "query-string"

const ForgotPassword: React.FC<RouteComponentProps> = () => {
  //TODO: download query-string library

  const location = useLocation();
  const search = location.search;
  //const searchParams = parse(search);
  console.log("search", search);

  //TODO: redirection to NotFound page if token doesn't work

  return <div>{search ? <CreateNewPassword /> : <RemindPasswordForm />}</div>;
};

export default ForgotPassword;
