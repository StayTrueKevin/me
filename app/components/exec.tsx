import { WindowState, useWindowState } from "~/hooks/useWindowState";

function Exec() {
  const { windowState, setWindowState } = useWindowState();
  return [WindowState.ExpandedFull, WindowState.ExpandedMinimum].includes(
    windowState
  ) ? null : (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col z-20 h-24 w-24 items-center" onClick={() => setWindowState(WindowState.ExpandedFull)
    }>
      <div className="bg-white h-14 w-14 flex items-center justify-center">
        <img
          src="/logos/exec-icon.png"
          alt="Exec Icon"
          className="h-12 w-12 p-4"
        />
      </div>
      <span className="text-center text-white text-[14px] font-bold mt-1">
        portfolio
      </span>
    </div>
  );
}

export default Exec;
