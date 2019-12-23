import { createContext } from "react";

const AppContext = createContext([
  {
    users: []
  },
  () => {}
]);

export default AppContext;
