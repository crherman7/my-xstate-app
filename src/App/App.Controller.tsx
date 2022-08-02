import { useSpring } from "@react-spring/web";

export default function AppController({ children }: any) {
  const [styles, api] = useSpring(() => ({ opacity: 1 }));

  const onMouseDown = () => {
    api.start({ opacity: 0.2 });
  };

  const onMouseUp = () => {
    api.start({ opacity: 1 });
  };
  
  const onClick = () => new Promise((res) => setTimeout(res, 2000));

  return children({
    styles,
    onClick,
    onMouseUp,
    onMouseDown,
  });
}
