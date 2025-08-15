import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterContainer from "@routes/router-container";

function App() {
  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
}

export default App;
