import {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  ReactNode,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { TerminalOutput, TerminalInput } from "~/components/terminal-base";

type TerminalAction =
  | { type: "ADD_INPUT_LINE"; payload: ReactNode }
  | { type: "ADD_OUTPUT_LINE"; payload: ReactNode }
  | { type: "CLEAR_TERMINAL" }
  | { type: "SET_CURRENT_LINE"; payload: ReactNode };

interface TerminalState {
  terminalLineData: ReactNode[];
  currentLine: ReactNode;
}

const initialState: TerminalState = {
  terminalLineData: [
    (
      <TerminalOutput key={0}>
        Protip: Click to speed up portfolio loading
      </TerminalOutput>
    ) as ReactNode,
  ],
  currentLine: null,
};

const TerminalStateContext = createContext<
  | {
      state: TerminalState | undefined;
      dispatch: Dispatch<TerminalAction> | undefined;
    }
  | undefined
>(undefined);

const terminalReducer = (
  state: TerminalState,
  action: TerminalAction
): TerminalState => {
  switch (action.type) {
    case "ADD_INPUT_LINE":
      return {
        ...state,
        terminalLineData: [
          ...state.terminalLineData,
          // @ts-ignore
          // eslint-disable-next-line
          <TerminalInput key={state.terminalLineData.length}>
            {action.payload}
          </TerminalInput>,
        ],
      };
    case "ADD_OUTPUT_LINE":
      return {
        ...state,
        terminalLineData: [
          ...state.terminalLineData,
          // @ts-ignore
          // eslint-disable-next-line
          <TerminalOutput key={state.terminalLineData.length}>
            {action.payload}
          </TerminalOutput>,
        ],
      };
    case "CLEAR_TERMINAL":
      return {
        ...state,
        terminalLineData: [],
      };
    case "SET_CURRENT_LINE":
      return {
        ...state,
        currentLine: action.payload,
      };
    default:
      return state;
  }
};

export const TerminalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(terminalReducer, initialState);

  return (
    <TerminalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </TerminalStateContext.Provider>
  );
};

export const useTerminalState = () => {
  const context = useContext(TerminalStateContext);
  if (context === undefined) {
    throw new Error("useTerminalState must be used within a TerminalProvider");
  }

  const disableTypingSpeedRef = useRef(false);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === "Enter") {
      disableTypingSpeedRef.current = true;
    }
  }, []);

  const handleClickOrTap = useCallback(() => {
    disableTypingSpeedRef.current = true;
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClickOrTap);
    window.addEventListener("touchstart", handleClickOrTap);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClickOrTap);
      window.removeEventListener("touchstart", handleClickOrTap);
    };
  }, [handleKeyPress, handleClickOrTap]);

  return {
    addInputLine: (line: ReactNode) =>
      context?.dispatch?.({ type: "ADD_INPUT_LINE", payload: line }),
    addOutputLine: (line: ReactNode) =>
      context?.dispatch?.({ type: "ADD_OUTPUT_LINE", payload: line }),
    clearTerminal: () => context?.dispatch?.({ type: "CLEAR_TERMINAL" }),
    setCurrentLine: (line: ReactNode) =>
      context?.dispatch?.({ type: "SET_CURRENT_LINE", payload: line }),
    state: context?.state,
    disableTypingSpeedRef,
  };
};
