import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr"; // "swr/_internal"
import { App } from "./App";
// import { store } from "./states/Store";

const fetcher = (url) => fetch(url).then((response) => response.json());
// console.log(store);
export function Root() {
  return (
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}
