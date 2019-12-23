import { createStore, createHooks } from "react-global-hook";

import actions from "./actions";

const initialState = {
  style:'light',
  visible:true,
  menuShow: true,
  breadcrumb: ["Home"],
  token: null,
  userId: null,
  login: (token, userId, tokenExpiration) => {},
  logout: () => {}
};

const store = createStore(initialState, actions);
export const useGlobal = createHooks(store);

// export const [useGlobal, getGlobal] = createState(initialState, actions);
// });

// in the component that set the store values use the following:
// add this in the import section of the component
//   // global state store
//   import { getGlobal } from "./store/mainStore";
//
// add this in the function area
//    const [, actions] = getGlobal();
//
// and to invoke the action use the following:
//   actions.xxxx, where xxxxx is the function in the action of the store
//
//
// in the component that uses the store values use the folloing:
// add this in the import section of the compoment
//  // global state store
//  import { useGlobal } from "./store/mainStore";
//
// add this in the function area
//    const [state] = useGlobal(["menuShow"]);
//
// to get the value use the following:
//    {state.xxxx}, where xxxx is the store property that holds the value
