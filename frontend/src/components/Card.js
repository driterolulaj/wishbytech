import { useContext } from "react";
import { AppContext } from "../GlobalContext";



const Card = () => {
  const {
    main_dark_blue,
    main_light_blue,
    lightTheme,
    setLightTheme,
    main_light,
    main_dark,
    currentTheme,
  } = useContext(AppContext);

  const style = {
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: lightTheme ? currentTheme.bgbody : currentTheme.textbody,
      color: lightTheme ? currentTheme.textbody : currentTheme.bgbody,
      padding: 2,
      width: "200px",
      height: "300px",
      margin: 1,
      boxShadow: "none",
    },
    img: {
      width: "150px",
      height: "150px",
      borderRadius: 10,
    },
    ps: {
      opacity: "0.7",
      fontSize: "0.9rem",
      color: lightTheme ? currentTheme.textbody : currentTheme.bgbody,
      // color: "green",
      cursor: "pointer",
      textTransform: "uppercase",
      textDecoration: "none",
      border: "none",
      zIndex: 1,
    }
    ,
  };

  return (
    <div style={style.cardContainer}>
      <img
        style={style.img}
        src="https://external.webstorage.gr/mmimages/image/10/1/29/50/1421065-264x264-800x800-96x96-560x560.jpg"
        alt=""
      />
     <a href="" style={style.ps}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nemo.
      </a>
      <h3> Lorem ipsum dolor sit.</h3>
    </div>
    
  );
};

export default Card;
