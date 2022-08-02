import { useSpring } from "@react-spring/web";

export default function AppController({ children }: any) {
  const [styles, api] = useSpring(() => ({ opacity: 1 }));
  const imgStyles = useSpring({
    loop: true,
    from: {
      transform: "rotateZ(0deg)",
    },
    to: {
      transform: "rotateZ(360deg)",
    },
    config: {
      duration: 750
    }
  });

  const onMouseDown = () => {
    api.start({ opacity: 0.2 });
  };

  const onMouseUp = () => {
    api.start({ opacity: 1 });
  };

  const onClick = (evt: any) =>
    new Promise((res) =>
      setTimeout(() => {
        console.log(evt);
        return res({});
      }, 2000)
    );

  return children({
    styles,
    onClick,
    onMouseUp,
    onMouseDown,
    imgStyles,
  });
}
