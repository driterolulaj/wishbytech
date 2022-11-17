import { ButtonBase, Typography } from "@mui/material";
const styles = {

  button: {
    color: "white",
    borderRadius: "5px 5px 0 0",
   
 
    fontSize: "1Rem",
  },
};

const Navbtn = (props) => {
  const lightblue = "#4c9cb8";

  return (
    <ButtonBase style={styles.button} >
      <a href=""  className=" a">
        {props.text}
      </a>
    </ButtonBase>
   
  );
};

export default Navbtn;
