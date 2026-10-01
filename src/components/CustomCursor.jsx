import SplashCursor from './SplashCursor'




import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const ring = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Dot follows immediately
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Lower number = more delay
      // Higher number = faster
      ring.current.x +=
        (mouse.current.x - ring.current.x) * 0.06;

      ring.current.y +=
        (mouse.current.y - ring.current.y) * 0.06;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      "a, button, input, textarea, select"
    );

    const handleEnter = () => {
      ringRef.current?.classList.add("cursor-hover");
      dotRef.current?.classList.add("cursor-hover");
    };

    const handleLeave = () => {
      ringRef.current?.classList.remove("cursor-hover");
      dotRef.current?.classList.remove("cursor-hover");
    };

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
      />

      <div
        ref={ringRef}
        className="custom-cursor-ring"
      />
    </>
  );
};

export default CustomCursor;


// import { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });

//       const element = e.target;

//       if (
//         element.closest("a") ||
//         element.closest("button") ||
//         element.closest("input") ||
//         element.closest("textarea")
//       ) {
//         setHovering(true);
//       } else {
//         setHovering(false);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       {/* Small dot */}
//       <div
//         className={`custom-cursor-dot ${
//           hovering ? "cursor-hover" : ""
//         }`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />

//       {/* Outer ring */}
//       <div
//         className={`custom-cursor-ring ${
//           hovering ? "cursor-hover" : ""
//         }`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />
//     </>
//   );
// };

// export default CustomCursor;  




//--------------------------------------------------------------------------------


// import React, { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="cursor-dot"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />

//       <div
//         className="cursor-ring"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />
//     </>
//   );
// };

// export default CustomCursor;










// //-----------------------------------------------------------------------------
// // import React, { useEffect, useState } from "react";

// // const CustomCursor = () => {
// //   const [position, setPosition] = useState({
// //     x: 0,
// //     y: 0,
// //   });

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setPosition({
// //         x: e.clientX,
// //         y: e.clientY,
// //       });
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);

// //     return () => {
// //       window.removeEventListener("mousemove", handleMouseMove);
// //     };
// //   }, []);

// //   return (
// //     <div
// //       className="custom-cursor"
// //       style={{
// //         left: `${position.x}px`,
// //         top: `${position.y}px`,
// //       }}
// //     />
// //   );
// // };

// // export default CustomCursor;

// // import React, { useState, useEffect, useRef } from 'react';

// // const CustomCursor = () => {
// //   const [position, setPosition] = useState({ x: 0, y: 0 });
// //   const [isHovering, setIsHovering] = useState(false);
// //   const dotRef = useRef(null);
// //   const ringRef = useRef(null);

// //   useEffect(() => {
// //     const updatePosition = (e) => {
// //       setPosition({ x: e.clientX, y: e.clientY });
// //     };

// //     const handleMouseOver = (e) => {
// //       const target = e.target;
// //       if (
// //         target.tagName === 'A' ||
// //         target.tagName === 'BUTTON' ||
// //         target.closest('.project-card') ||
// //         target.closest('.btn')
// //       ) {
// //         setIsHovering(true);
// //       } else {
// //         setIsHovering(false);
// //       }
// //     };

// //     window.addEventListener('mousemove', updatePosition);
// //     window.addEventListener('mouseover', handleMouseOver);

// //     return () => {
// //       window.removeEventListener('mousemove', updatePosition);
// //       window.removeEventListener('mouseover', handleMouseOver);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (dotRef.current) {
// //       dotRef.current.style.left = `${position.x}px`;
// //       dotRef.current.style.top = `${position.y}px`;
// //     }
// //     if (ringRef.current) {
// //       ringRef.current.style.left = `${position.x}px`;
// //       ringRef.current.style.top = `${position.y}px`;
      
// //       if (isHovering) {
// //         ringRef.current.style.width = '64px';
// //         ringRef.current.style.height = '64px';
// //         ringRef.current.style.borderColor = '#a78bfa';
// //         ringRef.current.style.backgroundColor = 'rgba(167, 139, 250, 0.08)';
// //       } else {
// //         ringRef.current.style.width = '32px';
// //         ringRef.current.style.height = '32px';
// //         ringRef.current.style.borderColor = '#8b5cf6';
// //         ringRef.current.style.backgroundColor = 'transparent';
// //       }
// //     }
// //   }, [position, isHovering]);

// //   return (
// //     <>
// //       <div
// //         ref={dotRef}
// //         style={{
// //           position: 'fixed',
// //           width: '6px',
// //           height: '6px',
// //           background: '#a78bfa',
// //           borderRadius: '50%',
// //           pointerEvents: 'none',
// //           zIndex: 9999,
// //           transform: 'translate(-50%, -50%)',
// //           transition: 'width 0.2s, height 0.2s',
// //         }}
// //       />
// //       <div
// //         ref={ringRef}
// //         style={{
// //           position: 'fixed',
// //           width: '32px',
// //           height: '32px',
// //           border: '1.5px solid #8b5cf6',
// //           borderRadius: '50%',
// //           pointerEvents: 'none',
// //           zIndex: 9998,
// //           transform: 'translate(-50%, -50%)',
// //           transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s',
// //         }}
// //       />
// //     </>
// //   );
// // };

// // export default CustomCursor;