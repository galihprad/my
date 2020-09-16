import React, { useEffect } from "react";
import Foto from "../asset/foto.png";

const Home = () => {
  useEffect(() => {
    myMove();
  }, []);
  const handleMouseEnter = (e) => {
    e.target.style.background = "grey";
    e.target.style.color = "#E8E8E8";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "#E8E8E8";
    e.target.style.color = "grey";
  };

  function myMove() {
    var elem = document.getElementById("pict");
    var elem2 = document.getElementById("pict2");
    var deg = 360;
    var id = setInterval(frame, 2);
    function frame() {
      if (deg === 1080) {
        clearInterval(id);
      } else {
        deg++;
        elem2.style.backgroundImage = `linear-gradient(${deg}deg, #E8E8E8 ${50}%, rgba(0,0,0,0) ${50}%)`;
        elem.style.backgroundImage = `linear-gradient(${
          deg * 1.5
        }deg, #E8E8E8 ${50}%, #2196f3 ${50}%)`;
      }
    }
  }
  console.log("render");
  return (
    <div style={homeSt}>
      <div style={pictureSt} id="pict">
        <div style={picture2St} id="pict2">
          <div style={pictureCircleSt}>
            <img style={fotoSt} src={Foto} alt="foto" />
          </div>
        </div>
      </div>
      <h2 style={nameSt}>
        Hi, I'm <span style={namesSt}> Galih Pradipto</span>
      </h2>
      <h4>Front-end Developer</h4>
      <div style={socmedSt}>
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Email
        </span>
        &nbsp; |&nbsp;
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Twitter
        </span>
        &nbsp;|&nbsp;
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Instagram
        </span>
        &nbsp;|&nbsp;
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Github
        </span>
      </div>
      <div style={menuSt}>
        <div
          style={boxSt}
          id="box1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          BLOG
        </div>
        <div
          style={boxSt}
          id="box2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          PORTFOLIOS
        </div>
      </div>
    </div>
  );
};

export default Home;

// STYLE //

const homeSt = {
  width: "100%",
  height: "100vh",
  background: "#E8E8E8",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const pictureSt = {
  width: "200px",
  height: "200px",
  borderRadius: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const picture2St = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const pictureCircleSt = {
  width: "97%",
  height: "97%",
  borderRadius: "50%",
  background: "#E8E8E8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const menuSt = {
  marginTop: "4%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const boxSt = {
  width: "160px",
  height: "40px",
  background: "#E8E8E8",
  margin: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "4px grey solid",
};

const socmedSt = {
  marginTop: "2%",
};

const fotoSt = {
  width: "90%",
  height: "90%",
  borderRadius: "50%",
};

const nameSt = {
  margin: "40px 0 -10px 0",
};

const namesSt = {
  borderBottom: "3px solid #2196f3",
  height: "5px",
};
