import React, { useEffect, useState } from "react";
import "../styles/RevolveSingle.css";
import { useMediaQuery } from "react-responsive";  // Importing the necessary hook


const RevolveSingle = ({ number, color, content }) => {
  return (
    <div className="circle-outer" style={{ backgroundColor: color }}>
      <div className="circle-inner">
        <h1>{number}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};


const Revolve = ({data, tagline}) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });  // For mobile or tablet
  const isDesktop = useMediaQuery({ minWidth: 768 }); // For desktop

    const totalCircles = 9;
  const grey = "rgb(217, 217, 217)";

  // Generate shades of blue for transition (from grey to blue)
  const shades = Array.from({ length: totalCircles }, (_, i) => {
    const ratio = i / (totalCircles - 1); // Calculate the ratio for the transition
    const blue = 215 - Math.round(ratio * (215 - 73)); // Gradual change from grey to blue
    return `rgb(47, ${blue}, ${blue})`;
  });

  const [colors, setColors] = useState(Array(totalCircles).fill(grey));
  const [progress, setProgress] = useState(0); // Track animation progress
  const [timeInterval, setTimeInterval] = useState(800); // Time interval for animation

  useEffect(() => {
    // Function to update the progress and manage the timing of the interval
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % (totalCircles * 2 - 2)); // Loop progress
    }, timeInterval); // Adjust timing for transitions

    // Cleanup the interval when component unmounts or when timeInterval changes
    return () => clearInterval(interval);
  }, [timeInterval]); // Re-run this effect whenever timeInterval changes

  useEffect(() => {
    const newColors = colors.map((_, index) => {
      let adjustedProgress;
      if (progress < totalCircles - 1) {
        // Forward phase
        adjustedProgress = progress;
        setTimeInterval(800); // Set interval to 800ms during forward phase
      } else {
        // Reverse phase, all circles should abruptly return to grey
        setTimeInterval(100); // Set interval to 100ms during reverse phase
        adjustedProgress = totalCircles - 1;
      }

      // In the reverse phase, all circles abruptly go back to grey
      if (progress >= totalCircles - 1) {
        return grey; // Abruptly return all circles to grey
      }

      // Regular forward phase where each circle changes gradually
      return index <= adjustedProgress ? shades[index] : grey;
    });

    setColors(newColors);
  }, [progress]);

  return (
    <div className="revolve-main">
    <div className="col-md-9 revolve-head">
        <h1>Our <span className=" head-highlight">Development</span> Process</h1>
        <p style={{fontSize:'large'}}className="py-3">{tagline}</p>
    </div>

    {isDesktop && (
      <>
    <div className="row mt-5">
      <div className="d-flex justify-content-center x-1">
        <RevolveSingle number={1} color={colors[0]} content={data[0]} />
        <RevolveSingle number={3} color={colors[2]} content={data[2]} />
        <RevolveSingle number={5} color={colors[4]} content={data[4]} />
        <RevolveSingle number={7} color={colors[6]} content={data[6]} />
      </div>
      <div className="d-flex justify-content-center x-2">
        <RevolveSingle number={2} color={colors[1]} content={data[1]} />
        <RevolveSingle number={4} color={colors[3]} content={data[3]} />
        <RevolveSingle number={6} color={colors[5]} content={data[5]} />
        <RevolveSingle number={8} color={colors[7]} content={data[7]} />
      </div>
    </div>
    </>
  )}
   {isMobile && (
      <>
    <div className="row mt-5">
      <div className="d-flex justify-content-center">
        <RevolveSingle number={1} color={colors[0]} content={data[0]} />
        <RevolveSingle number={2} color={colors[1]} content={data[1]} />
        <RevolveSingle number={3} color={colors[2]} content={data[2]} />
      </div>
      <div className="d-flex justify-content-center">
        <RevolveSingle number={4} color={colors[3]} content={data[3]} />
        <RevolveSingle number={5} color={colors[4]} content={data[4]} />
      </div>
      <div className="d-flex justify-content-center">
        <RevolveSingle number={6} color={colors[5]} content={data[5]} />
        <RevolveSingle number={7} color={colors[6]} content={data[6]} />
        <RevolveSingle number={8} color={colors[7]} content={data[7]} />
      </div>
    </div>
    </>
  )}
   
    </div>
  );
};

export default Revolve;
