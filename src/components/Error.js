import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h3>Oops..</h3>
      <h2>Something went wrong!!</h2>
      <p>{err.status}:{err.statusText}</p>
    </div>
  );
};

export default Error;
