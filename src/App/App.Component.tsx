import { animated } from "@react-spring/web";

import AppController from "./App.Controller";
import AppMachine from "./App.Machine";
import loader from "../assets/loader.png";

export default function AppComponent() {
  return (
    <AppController>
      {({ onMouseUp, onMouseDown, styles, onClick, imgStyles }: any) => (
        <AppMachine onClick={onClick}>
          {({ send, state }: any) => {
            return (
              <div className="lg:hidden md:hidden flex h-screen justify-center items-center">
                <animated.button
                  onMouseUp={onMouseUp}
                  onMouseDown={onMouseDown}
                  style={styles}
                  onClick={send("FETCH", { foo: "bar" })}
                  className="h-10 bg-slate-500 text-white rounded-md w-32 flex justify-center items-center"
                >
                  <p className={`${!state.matches("idle") && "hidden"}`}>
                    API Request
                  </p>
                  <animated.img
                    src={loader}
                    style={imgStyles}
                    className={`${
                      !state.matches("loading") && "hidden"
                    } h-5 w-5`}
                  />
                  <p className={`${!state.matches("success") && "hidden"}`}>
                    {state.context.data}
                  </p>
                  <p className={`${!state.matches("failure") && "hidden"}`}>
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
