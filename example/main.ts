import {createRoot} from "react-dom/client"

import h from "../src"

const root = createRoot(document.getElementById("root"));
root.render(h("h1", "Hello, world!"));
