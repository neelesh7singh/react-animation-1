import React, { useRef, useEffect } from "react";
import "./animation2.scss";
import People from "./mpumelelo-macu-l_YNobbDYJk-unsplash-min.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const Animation2 = (props) => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".image-container:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.from(container, 0, { css: { visibility: "hidden" } })
      .from(imageReveal, 1.4, { width: "100%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, Power2: Power2.easeInOut, delay: -1.6 });
  });

  return (
    <div className="container" ref={(el) => (container = el)}>
      <div className="image-container">
        <img
          src={People}
          alt="People pic"
          ref={(el) => (image = el)}
          onClick={() => props.history.push("/")}
        />
      </div>
    </div>
  );
};

export default Animation2;
