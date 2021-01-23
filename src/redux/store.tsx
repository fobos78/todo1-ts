import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { todoReduser } from "./reducers";

export const store = createStore(todoReduser, composeWithDevTools());
