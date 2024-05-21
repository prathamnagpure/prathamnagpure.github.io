import { useEffect, useRef } from "react";
import "./App.css";
import Phone from "./components/Phone";

const App = () => {

  const tgX = useRef(0);
  const tgY = useRef(0);
  const interbubble = useRef(document.querySelector<HTMLDivElement>(".interactive"));

  useEffect(() => {

    function handleMouseMove(event: MouseEvent) {
      tgX.current = event.clientX;
      tgY.current = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    function move() {
      if (interbubble.current) {
        interbubble.current.style.transform = `translate(${Math.round(tgX.current)}px, ${Math.round(tgY.current)}px)`
        requestAnimationFrame(move);
      } else {
        interbubble.current = document.querySelector<HTMLDivElement>(".interactive");
      }
    }
    move();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [])

  return (
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="g1"/>
        <div className="g2"/>
        <div className="g3"/>
        <div className="g4"/>
        <div className="g5"/>
        <div className="interactive"/>
      </div>
    </div>
  );
}

export default App;
