import React, { useEffect, useState } from "react";
import Fade from "./Fade";

const Model = () => {
  const [translation, setTranslation] = useState(30);

  useEffect(() => {
    const id = setInterval(() => {
      setTranslation(-translation);
    }, 1500);

    return () => {
      clearInterval(id);
    };
  }, [translation]);

  return (
    <div className="w-full flex flex-row gap-2 my-16 box-border h-full justify-center items-center gap-[5%]">
      <div className="h-full flex flex-col items-start justify-start w-1/2 gap-10 pt-10">
        <Fade delay={0} className="text-5xl font-bold text-purple-300">
          Model
        </Fade>
        <Fade className="text-lg text-purple-100 leading-loose" delay={300}>
          Our model is uses a{" "}
          <span className="font-bold text-purple-300">neural network</span> to
          create accurate predictions on the food security risk levels of
          regions worldwide, with a validation accuracy of{" "}
          <span className="font-bold text-purple-300">77%.</span>
        </Fade>
        <Fade className="text-lg text-purple-100 leading-loose" delay={600}>
          The neural network was trained through{" "}
          <span className="font-bold text-purple-300">PyTorch</span> and using
          the resnet architechture. In addition, features used in the model
          include pest levels, conflict reports, GDP, food waste, and transport
          information.
        </Fade>
      </div>
      <Fade delay={300} className="w-1/3">
        <img
          src="/neural-net.png"
          style={{
            transform: `translate(0, ${translation}px)`,
            transition: "transform 3s",
          }}
        />
      </Fade>
    </div>
  );
};

export default Model;
