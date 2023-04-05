import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-[1000px] mx-auto h-[60vh]  flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p>
        We’re sorry, we seem to have lost this page, but we don’t want to lose
        you.
      </p>
      <Link to="/" className="bg-slate-200 px-4 py-4 rounded-xl">
        Back Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
