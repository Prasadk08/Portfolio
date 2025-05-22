import React, { useEffect } from "react";
import prasadImage from "../assets/prasadimage.jpg";
import "../styles/about.css";
import bookImage from "../assets/book_3145765.png";
import collegeimg from "../assets/learning_10822259.png";
import universityimg from "../assets/university_8074800.png";
import finalimg from "../assets/confident-businessman-3d-model-serious-expression-professional-attire-elegant-style.png";
import CodingLogos from "../components/CodingLogos";

const About = () => {
  const[isVisible, setIsVisible] = React.useState(false);
  const aboutmiddlecontr = {
    transform: isVisible ? "translateY(0)" : "translateY(145px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 0.8s ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  useEffect(()=>{
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

  },[])

  return (
    <>
      <div className="about-container relative">
        <div className="image-section">
          <img className="profile-image" src={prasadImage} alt="" />
          <h2 className="name-heading">Prasad Pramod Kshirsagar</h2>
        </div>
        <div className="myaboutinfo" style={aboutmiddlecontr}>
          <div className="abttitlehi">Hey Hi! 😎✨</div>
          <p>
            I am a passionate full-stack developer with a strong foundation in
            Java, Spring Boot, and the MERN stack. I love building modern web
            applications and learning new technologies. I have worked on
            real-world projects like a Restaurant Management System and Exam
            Seating Arrangement System. I’m always eager to explore new
            challenges and contribute to innovative solutions.
          </p>
        <CodingLogos />
        </div>
      </div>
      <div className="aboutmiddlecontr">
        <h1
          style={{
            textAlign: "center",
            borderBottom: "5px solid blue",
            display: "inline-block",
          }}
        >
          About Me
        </h1>

        
        <div className="about-p-container">
          <div className="edu-block">
            <img className="abouteduimg" src={bookImage} alt="book" />
            <p>I completed My Secondary Education with 78%</p>
          </div>

          <div className="edu-block">
            <img className="abouteduimg" src={collegeimg} alt="college" />
            <p>
              After that I went to NavKrishna Valley Jr. College for My Higher
              and Secondary Education <br /> And Got 88% in HSC
            </p>
          </div>

          <div className="edu-block">
            <img className="abouteduimg" src={universityimg} alt="university" />
            <p>
              Then I took admission in PVPIT, Budhgaon for my B.Tech. in
              Computer Science and Engineering
            </p>
          </div>

          <div className="edu-block">
            <img className="abouteduimg" src={finalimg} alt="final" />
            <p>
              Currently I am Final Year Student and looking forward to
              contribute myself in <br /> I.T Industries and to Showcase my
              skills
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
