import { Box } from "@chakra-ui/react";
// import { socket } from "@utils/socket";
// import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   if (!userId) return;

  //   // Nếu đã connect với userId cũ thì disconnect trước
  //   if (socket.connected) {
  //     socket.disconnect();
  //   }

  //   socket.io.opts.query = { userId };
  //   socket.connect();

  //   return () => {
  //     // socket.disconnect();
  //   };
  // }, []);
  return (
    <Box width={"100dvw"} h={"100dvh"} position={"relative"}>
      <Outlet />
    </Box>
  );
};

export default Layout;
