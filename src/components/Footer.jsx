

const Footer = () => {
    const footerstyle = {
        height: "60px",
        width: "100%",
        backgroundColor: "#282c34",
        textAlign: "center",
        color : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "0",
    }
  return (
    <>
      <div className="footer__container" style={footerstyle}>Made With ❤️ By Prasad Kshirsagar</div>
    </>
  )
}

export default Footer