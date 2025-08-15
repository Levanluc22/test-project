import { OptionDeployBe } from "@type/optionDeployBe";
import { io } from "socket.io-client";
const SOCKET_URL = OptionDeployBe.DEPLOY_DEPLOY;
// const SOCKET_URL = OptionDeployBe.DEPLOY_LOCAL;

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  query: {
    userId: localStorage.getItem("userId") || "",
  },
});
