import { useEffect, useRef, useState } from "react";

function CustomCursorTracker() {
  const cursorTrackerRef = useRef(null);
  const animationFrameId = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  function updateCursorPosition(e) {
    position.current = { x: e.clientX, y: e.clientY };
    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(() => {
        if (cursorTrackerRef.current) {
          cursorTrackerRef.current.style.left = `${position.current.x}px`;
          cursorTrackerRef.current.style.top = `${position.current.y}px`;
          setOpacity(1);
        }
        animationFrameId.current = null;
      });
    }
  }

  useEffect(() => {
    const handleCursorMovement = (e) => {
      setOpacity(1);
      updateCursorPosition(e);
      cursorTrackerRef.current.style.opacity = '1'
    };

    window.addEventListener('mousemove', handleCursorMovement);

    return () => {
      window.removeEventListener('mousemove', handleCursorMovement);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <span
      className="cursor-tracker"
      ref={cursorTrackerRef}
    ></span>
  );
}

export default CustomCursorTracker;
