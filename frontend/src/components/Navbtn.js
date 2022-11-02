import { ButtonBase, Typography } from "@mui/material";

const Navbtn = (props) => {
  const lightblue = "#4c9cb8";
  const styles = {
    a: {
			height:"100%"
		},
  };

  return (
    <ButtonBase style={{color:"white",borderRadius:"2px 2px 0 0"}}>
      <a href="" style={styles.a}>
        {props.text}
      </a>
    </ButtonBase>
  );
};

export default Navbtn;
