import React from "react";
import { useEffect } from "react";
import "../styles/Home.css";
import Lottie from "lottie-react";
import animationData from "../assets/html-5.json";
import codingimage from "../assets/coding.svg";


import html from "../assets/codingLogos/html.png"
import css from "../assets/codingLogos/css.png"
import js from "../assets/codingLogos/js.png"
import spring from "../assets/codingLogos/spring.png"


const Home = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");

    const handleScroll = () => {
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        console.log(boxTop, windowHeight);

        if (boxTop < windowHeight - 100) {
          box.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const boximagess = {
    height: "65px",
    width: "65px",
    margin: "10px",
  }
  const hello={
    justifyContent: "start",
  }

  return (
    <>
      <div className="home-container">
        <div className="animation-wrapper">
          <Lottie
            animationData={animationData}
            loop={true}
            className="my-lottie"
          />
          <img src={codingimage} alt="" />
        </div>

        <div className="intro-section">
        <h6 style={hello}>Hello, I’m</h6>
          <h1 className="mb-3 mynmfont">Prasad Kshirsagar</h1>
          <p>
            I’m a passionate full-stack developer with a strong foundation in
            Java, Spring Boot, and the MERN stack. <br />
            I love building modern web applications and learning new
            technologies.
            <br />I have worked on real-world projects like a Restaurant
            Management System and Exam Seating Arrangement System. I’m always
            eager to explore new challenges and contribute to innovative
            solutions.
          </p>
        </div>
      </div>

      <div className="home-middle row justify-content-center">
        <div className="box col-5 leftbox">
          <div className="titlebox1">HTML</div>
        <img style={boximagess}  src={html} alt="" />
          <p>
            I started my web development journey with HTML. I learned how to
            structure webpages using semantic tags, create accessible layouts,
            and form the foundation for any website. HTML helped me understand
            how content is organized on the web.
          </p>
        </div>
        <div className="box col-5 rightbox">
          <div className="titlebox1">CSS</div>
        <img style={boximagess} src={css} alt="" />

          <p>
            After learning HTML, I focused on CSS to bring designs to life. I
            practiced Flexbox, Grid, and media queries to build responsive
            layouts. I also explored animations and transitions to create
            interactive UI components with a modern look.
          </p>
        </div>
        <div className="box col-5 leftbox">
          <div className="titlebox1">JavaScript</div>
        <img style={boximagess}  src={js} alt="" />
          <p>
            JavaScript introduced me to programming logic. I learned how to
            manipulate the DOM, handle events, and build dynamic web
            applications. I explored ES6 features, functions, arrays, and used
            JavaScript to add interactivity to my projects.
          </p>
        </div>
        <div className="box col-5 rightbox">
          <div className="titlebox1">Spring Boot</div>
        <img style={boximagess} src={spring} alt="" />
          <p>
            I used Spring Boot to develop backend services in Java. I learned
            how to build REST APIs, connect with databases using JPA, and handle
            user authentication. Spring Boot helped me understand
            enterprise-level application development and how to integrate it
            with frontend technologies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
