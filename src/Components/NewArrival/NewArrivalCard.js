import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const NewArrivalCard = ({ data }) => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const cardBounds = event.currentTarget.getBoundingClientRect();
    const relativeX = clientX - cardBounds.left;
    const relativeY = clientY - cardBounds.top;
    gsap.to(cursorRef.current, {
      left: relativeX,
      top: relativeY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const cursor = cursorRef.current;

    if (isHovered) {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    } else {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    }
  }, [isHovered]);
  const colorStyle = {
    bgColor: data.bColor,
  };
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="w-[49%] relative flex flex-col items-center py-10 text-center gap-[64px]"
    >
      <Link to={`/shop/${data.id}`}>
        <div
          ref={cursorRef}
          className="w-[250px] -z-10 h-[250px] rounded-full  absolute pointer-events-none"
          style={{
            backgroundColor: colorStyle.bgColor,
            left: 0,
            top: 0,
            transform: "translate(-50%, -50%)",
            transformOrigin: "50% 50%",
            pointerEvents: "none",
          }}
        ></div>

        <img alt={data.name} className="w-[640px]" src={data.img_url} />
        <div>
          <p className="text-[12px] uppercase">{data.name}</p>
          <p className="text-[10px] mt-2">${data.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewArrivalCard;
