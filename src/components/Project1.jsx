
import projectImage1 from "../assets/restaurant_6643359.png";
import "../styles/Project.css";
import projectpic1a from "../assets/projectpic1a.png";
import projectpic2a from "../assets/projectpic2a.png";
import projectpic3a from "../assets/projectpic3a.png";


const Project1 = () => {
  return (
    <>
        
          <div className="col-md-12 mb-4 project-item1" style={{backgroundcolor:" #f0f4f8"}}>
            <div className="project-item">
              <img className="projectimages" src={projectImage1} alt="" />
              <div className="project-info-div">
                <h2>Restaurant Management System</h2>
                <p>
                  A web application for managing restaurant operations,
                  including menu management, order processing, and customer
                  management.
                </p>
                <a
                  href="https://hotel-2ktu.onrender.com"
                  className="project-button mt-3"
                >
                  <i className="fas fa-external-link-alt me-2"></i>Visit Site
                </a>
              </div>
            </div>
            <div className="projectliveimages">
              <img className="firstproject-img" src={projectpic1a} alt="" />
              <img className="firstproject-img" src={projectpic2a} alt="" />
              <img className="firstproject-img" src={projectpic3a} alt="" />
            </div>
          </div>
    </>
  )
}

export default Project1