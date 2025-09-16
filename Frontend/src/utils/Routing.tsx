import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../data/RoutingData";
import Loader from "./Loader";

const Routing = () => {
  const element = useRoutes(routes);

  return (
    <Suspense fallback={<div><Loader /></div>}>
      {element}
    </Suspense>
  );
};

export default Routing;
