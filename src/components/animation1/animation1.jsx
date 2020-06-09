import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import "./animation1.css";

const Animation = () => {
  let app = useRef(null);
  let circleYellow = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [large, setlarge] = useState(false);
  useEffect(() => {
    TweenMax.to(app, 0.3, { css: { visibility: "visible" } });
    // this is the long way

    // TweenMax.from(circleYellow, 1.5, {
    //   opacity: 0,
    //   x: 100,
    //   ease: Power3.easeOut,
    // });
    // TweenMax.from(circleRed, 1.5, {
    //   opacity: 0,
    //   x: 100,
    //   ease: Power3.easeOut,
    //   delay: 0.4,
    // });
    // TweenMax.from(circleBlue, 1.5, {
    //   opacity: 0,
    //   x: 100,
    //   ease: Power3.easeOut,
    //   delay: 0.6,
    // });

    //  .2 is the delay between the animations
    TweenMax.staggerFrom(
      [circleYellow, circleRed, circleBlue],
      0.8,
      { opacity: 0, x: 100, ease: Power3.easeOut },
      0.2
    );
  }, []);

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setlarge(true);
  };

  const handleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setlarge(false);
  };

  return (
    <div className="App" ref={(el) => (app = el)}>
      <header className="App-header">
        <div className="circle-container">
          <div className="circle" ref={(el) => (circleYellow = el)}></div>
          <div
            className="circle red"
            onClick={() => (large ? handleShrink() : handleExpand())}
            ref={(el) => (circleRed = el)}
          ></div>
          <div className="circle blue" ref={(el) => (circleBlue = el)}></div>
          <Link to="/ani2" className="link">
            Animation2
          </Link>
          <Link to="/slider" className="link">
            Slider
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Animation;
