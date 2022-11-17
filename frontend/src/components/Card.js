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
      justifyContent: "center",
      backgroundColor: lightTheme ? currentTheme.bgbody : currentTheme.textbody,
      color: lightTheme ? currentTheme.textbody : currentTheme.bgbody,
      padding: " 10px",
      width: "200px",
      height: "auto",
      margin: "1.5px",
      boxShadow: "none",
      border:`1px solid ${lightTheme ? currentTheme.textbody : currentTheme.bgbody}`,
      borderRadius:5,
      textAlign:"center"
    },
    img: {
      width: "150px",
      height: "150px",
      borderRadius: 10,
    },
    ps: {
      opacity: "0.7",
      fontSize: "0.7rem",
      color: lightTheme ? currentTheme.textbody : currentTheme.bgbody,
      // color: "green",
      cursor: "pointer",
      textTransform: "uppercase",
      textDecoration: "none",
      border: "none",
      zIndex: 1,
      padding:10
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
      <h3 > 99.99$</h3>
    </div>
    
  );
};

export default Card;
