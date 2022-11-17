

import { useContext } from "react";
import { AppContext } from "../GlobalContext";
const CardContainer = ({children}) => {
	const {
    main_dark_blue,
    main_light_blue,
    lightTheme,
    setLightTheme,
    main_light,
    main_dark,
    currentTheme
  } = useContext(AppContext);
	const style={
		cardContainer:{
			display: "grid",
			gridGap:"2px",
			flexWrap:"wrap",
			gridTemplateColumns:" 1fr 1fr 1fr",
	
			width:"fit-content",
			height:"fit-content",
			maxWidth:"60%"
		}
	}

	return(
		<div style={style.cardContainer}>{children}</div>
	)
}



export default CardContainer