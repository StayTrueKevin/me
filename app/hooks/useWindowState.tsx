import { createContext, useContext, useReducer } from "react";

export enum WindowState {
  Closed = "CLOSED",
  Minimized = "MINIMIZED",
  ExpandedFull = "EXPANDED_FULL",
  ExpandedMinimum = "EXPANDED_MINIMUM",
}

const initialState = { windowState: WindowState.ExpandedFull };

function reducer(state: { windowState: WindowState }, action: { type: WindowState }) {
  switch (action.type) {
    case WindowState.Closed:
    case WindowState.Minimized:
    case WindowState.ExpandedFull:
    case WindowState.ExpandedMinimum:
      return { ...state, windowState: action.type };
    default:
      throw new Error();
  }
}

const WindowStateContext = createContext<
  | {
      windowState: WindowState;
      setWindowState: (windowState: WindowState) => void;
    }
  | undefined
>(undefined);

export function WindowStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setWindowState = (windowState: WindowState) => {
    dispatch({ type: windowState });
  };

  return (
    <WindowStateContext.Provider value={{ windowState: state.windowState, setWindowState }}>
      {children}
    </WindowStateContext.Provider>
  );
}

export function useWindowState() {
  const context = useContext(WindowStateContext);
  if (context === undefined) {
    throw new Error(
      "useWindowState must be used within a WindowStateProvider"
    );
  }
  return { windowState: context.windowState, setWindowState: context.setWindowState };
}
