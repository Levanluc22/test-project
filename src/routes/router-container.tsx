import { ChakraProvider } from "@chakra-ui/react";
import layoutRouters from "@configs/layoutRoutes";
import Layout from "@pages/layout";
import { defaultTheme } from "@themes/defaut-theme";
import { Route, Routes } from "react-router-dom";

const RouterContainer = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <ChakraProvider theme={defaultTheme}>
            <Layout />
          </ChakraProvider>
        }
      >
        {layoutRouters.map((route) => (
          <Route key={route.path} {...route}></Route>
        ))}
      </Route>
    </Routes>
  );
};

export default RouterContainer;
