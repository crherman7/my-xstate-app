import { animated } from "@react-spring/web";

import AppController from "./App.Controller";
import AppMachine from "./App.Machine";

export default function AppComponent() {
  return (
    <AppController>
      {({ onMouseUp, onMouseDown, styles, onClick }: any) => (
        <AppMachine onClick={onClick}>
          {({ send, state }: any) => {
            return (
              <div className="flex h-screen justify-center items-center">
                <animated.button
                  onMouseUp={onMouseUp}
                  onMouseDown={onMouseDown}
                  style={styles}
                  onClick={() => send("FETCH")}
                  className="h-10 bg-slate-500 text-white rounded-md px-8"
                >
                  <p className={`${state.matches("idle") ? "" : "hidden"}`}>
                    API Request
                  </p>
                  <p className={`${state.matches("loading") ? "" : "hidden"}`}>
                    Loading...
                  </p>
                  <p className={`${state.matches("success") ? "" : "hidden"}`}>
                    {state.context.data}
                  </p>
                  <p className={`${state.matches("failure") ? "" : "hidden"}`}>
                    {state.context.error}
                  </p>
                </animated.button>
              </div>
            );
          }}
        </AppMachine>
      )}
    </AppController>
  );
}
