import React, { useRef } from "react";
import Button from "../components/Button";

const Hero = () => {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const hero = heroRef.current;

    if (!hero) return;

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hero.style.setProperty("--mouse-x", `${x}px`);
    hero.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
  ref={heroRef}
  id="home"
  className="hero"
  onMouseMove={handleMouseMove}
>
  <div className="cursor-glow"></div>

  <div className="hero-bg-wrapper">
  <div className="hero-bg-name-base">SUNNY</div>
  <div className="hero-bg-name">SUNNY</div>
  </div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">HELLO, I'M</p>

          <h1 className="hero-name">Sunny</h1>

          <div className="hero-title">
            <span>Software Developer</span>
            <span className="hero-title-badge">Full Stack</span>
          </div>

          <p className="hero-description">
            I build modern web experiences using{" "}
            <strong>React</strong>, <strong>Java</strong>, and{" "}
            <strong>.NET Core</strong>. Passionate about clean code and
            seamless UI.
          </p>

          <div className="hero-buttons">
            <Button variant="primary" href="#projects">
              View Projects
            </Button>

            <Button variant="outline" href="#contact">
              Contact Me
            </Button>
          </div>

          <div className="scroll-indicator">
            <span className="scroll-line"></span>
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;