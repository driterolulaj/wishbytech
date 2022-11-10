import { ButtonBase, Typography } from "@mui/material";

const Navbtn = (props) => {
  const lightblue = "#4c9cb8";
  const styles = {
    a: {
      fontWeight:"600",
      textDecoration: "none",
      color: "inherit",
      display:"inline-block",
      position:"relative",
      "&:after": {
        background: "none repeat scroll 0 0 transparent",
        bottom: 0,
        content: "''",
        display: "block",
        height: "2px",
        left: "50%",
        position: "absolute",
        transition: "width 0.3s ease 0s, left 0.3s ease 0s",
        width: 0,
      },
      "&:hover:after:":{
        width:"100%",
        left:"0%"
      }
    },
    
    button: {
      color: "white",
      borderRadius: "5px 5px 0 0",
     
   
      fontSize: "1Rem",
    },
  };

  return (
    <ButtonBase style={styles.button}>
      <a href="" style={styles.a} className="nav-link">
        {props.text}
      </a>
    </ButtonBase>
   
  );
};

export default Navbtn;
