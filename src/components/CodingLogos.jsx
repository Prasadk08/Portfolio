import html from "../assets/codingLogos/html.png";
import css from "../assets/codingLogos/css.png";
import js from "../assets/codingLogos/js.png";
import mongo from "../assets/codingLogos/mongo.png";
import node from "../assets/codingLogos/nodejs.png";
import react from "../assets/codingLogos/React.png";
import spring from "../assets/codingLogos/spring.png";
import express from "../assets/codingLogos/Express.png";
import java from "../assets/codingLogos/java.png";
import "../styles/codingLogos.css";

const CodingLogos = () => {
  return (
    <>
      <div className="coding-logos mt-2">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={java} alt="" />
        <img src={spring} alt="" />
        <img src={node} alt="" />
        <img src={react} alt="" />
        <img src={express} alt="" />
        <img src={mongo} alt="" />
      </div>
    </>
  );
};

export default CodingLogos;
