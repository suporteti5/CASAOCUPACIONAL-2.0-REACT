import React from "react";
import { useSpring, animated } from "react-spring";

/* ICONS */

import { CiCalendarDate } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";

const teste = () => {
  const Number = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 2000,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div>
        {n == 15
          ? number.to((n) => n.toFixed(0))
          : number.to((n) => n.toFixed(3))}
      </animated.div>
    );
  };

  return (
    <>
      <section className="numbers-section">
        <div className="numbers-container">
          <div className="number-content">
            <CiCalendarDate />
            <h5>Mais de</h5>
            <h2>
              <Number n={15} />
            </h2>
            <h5>anos de historia</h5>
          </div>
          <div className="number-content">
            <CiHeart />
            <h5>Mais de</h5>
            <h2>
              <Number n={50} />
            </h2>
            <h5>Vidas Gerenciadas</h5>
          </div>

          <div className="number-content">
            <FiUserPlus />
            <h5>Mais de</h5>
            <h2>
              <Number n={2} />
            </h2>
            <h5>Pessoas Atendidas</h5>
          </div>
          <div className="number-content">
            <CiFolderOn />
            <h5>Mais de</h5>
            <h2>
              <Number n={3} />
            </h2>
            <h5>laudos e documentos</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default teste;
