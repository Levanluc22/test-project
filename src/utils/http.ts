import { OptionDeployBe } from "@type/optionDeployBe";
import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      // baseURL: OptionDeployBe.DEPLOY_DEPLOY,
      baseURL: OptionDeployBe.DEPLOY_LOCAL,
      timeout: 50000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const http = new Http().instance;
export default http;
