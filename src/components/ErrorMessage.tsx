import React from "react";
import { FieldError } from "react-hook-form";

type ErrorMessageProps = {
  error?: FieldError;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return <p className="text-red-700 text-sm font-light">{error.message}</p>;
};

export default ErrorMessage;
