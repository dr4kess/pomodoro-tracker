import { RouteObject } from "react-router-dom";
import { createAuthRotes, createLoginRoutes } from "./routes";


export const getValidRoutes = (isAuth: boolean): RouteObject[] => {
  if (!isAuth) return createLoginRoutes();
  return createAuthRotes();
};
    
