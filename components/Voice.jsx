import { useState } from "react";

const Voice = () => {
  const [start, setStart] = useState(true);
  return (
    <>
      <button
        className=""
        onClick={(e) => {
          e.preventDefault();
          setStart(!start);
        }}
      >
        defvgb
      </button>
      <div className="fullpage-wrapper">
        <div className="reactor-container">
          <div className="reactor-container-inner circle abs-center"></div>
          <div className="tunnel circle abs-center"></div>
          <div className="core-wrapper circle abs-center"></div>
          <div className="core-outer circle abs-center"></div>
          <div className="core-inner circle abs-center"></div>
          <div
            className={`coil-container ${
              start ? "coil-container-animation" : ""
            }`}
          >
            <div className="coil coil-1"></div>
            <div className="coil coil-2"></div>
            <div className="coil coil-3"></div>
            <div className="coil coil-4"></div>
            <div className="coil coil-5"></div>
            <div className="coil coil-6"></div>
            <div className="coil coil-7"></div>
            <div className="coil coil-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voice;
