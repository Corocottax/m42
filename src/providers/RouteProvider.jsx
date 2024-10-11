import { createContext, useEffect, useState } from "react";

export const RouteContext = createContext();

const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState();

  useEffect(() => {
    if (route) {
      setTimeout(() => {
        setRoute();
      }, 3000);
    }
  }, [route]);

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
