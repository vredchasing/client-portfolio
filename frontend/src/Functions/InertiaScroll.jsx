import { useRef, useEffect, useState } from "react";

function InertiaScroll() {
  const lastScroll = useRef(0);
  const velocity = useRef(0);
  const frameId = useRef(null);
  const [isMouseOrTouchScroll, setIsMouseOrTouchScroll] = useState(false);

  function updateVelocity() {
    let currentVelocity = window.scrollY - lastScroll.current;
    velocity.current = currentVelocity;
    lastScroll.current = window.scrollY;
  }

  function applyInertia() {
    window.scrollBy(0, velocity.current * 0.1);

    velocity.current *= 0.95;

    if (Math.abs(velocity.current) > 0.1) {
      frameId.current = requestAnimationFrame(applyInertia);
    }
  }

  function handleScroll(e) {
    if (isMouseOrTouchScroll) {
      updateVelocity();
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      frameId.current = requestAnimationFrame(() => {
        applyInertia();
      });
    }
  }

  function handleWheel(e) {
    // Detect mouse wheel or touchpad scroll
    setIsMouseOrTouchScroll(true);
    handleScroll(e);
  }

  function handleTouchMove(e) {
    // Detect touch scroll
    setIsMouseOrTouchScroll(true);
    handleScroll(e);
  }

  function handleKeyDown(e) {
    // Handle keyboard scroll
    setIsMouseOrTouchScroll(false);
  }

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [isMouseOrTouchScroll]);

  return null;
}

export default InertiaScroll;
