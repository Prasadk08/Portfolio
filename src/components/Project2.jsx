import projectImage1 from "../assets/airplane_2200326.png";
import "../styles/Project.css";
import projectpic1a from "../assets/project1b.png";
import projectpic2a from "../assets/project2b.png";

const Project2 = () => {
  return (
    <>
        <div className="col-md-12 mb-4 project-item2" style={{backgroundcolor:" #e8f0fe;"}}>
  <div className="project-item">
    <img className="projectimages" src={projectImage1} alt="" />
    <div className="project-info-div">
      <h2>Wanderlust - World Tour Website</h2>
      <p>
        A travel website that allows users to explore and add world destinations, share information, and plan tours easily with a user-friendly interface.
      </p>
      <a
        href="https://your-wanderlust-site-link.com"
        className="project-button mt-3"
      >
        <i className="fas fa-external-link-alt me-2"></i>Visit Site
      </a>
    </div>
  </div>
  <div className="projectliveimages">
    <img className="firstproject-img" src={projectpic1a} alt="" />
    <img className="firstproject-img" src={projectpic2a} alt="" />
  </div>
</div>


    </>
  )
}

export default Project2