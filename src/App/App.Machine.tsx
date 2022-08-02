import { useMachine } from "@xstate/react";
import { useMemo } from "react";
import { assign, createMachine } from "xstate";

export default function AppMachine({ children, onClick }: any) {
  const appMachine = useMemo(
    () =>
      createMachine({
        id: "promise",
        initial: "idle",
        context: {
          data: undefined,
          error: undefined,
        },
        states: {
          idle: {
            on: {
              FETCH: "loading",
            },
          },
          loading: {
            // @ts-ignore
            invoke: {
              id: "onPromise",
              src: (_ctx, _evt) => onClick(),
              onDone: {
                target: "success",
                actions: assign({ data: "Success!!" }),
              },
              onError: {
                target: "failure",
                actions: assign({ error: "Failure!!" }),
              },
            },
          },
          success: {},
          failure: {
            on: {
              RETRY: "loading",
            },
          },
        },
      }),
    []
  );

  const [state, send] = useMachine(appMachine);

  return children({
    send,
    state,
  });
};
