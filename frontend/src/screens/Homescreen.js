import { useContext } from "react"
import { AppContext } from "../GlobalContext"
import Card from "../components/Card"
const  Homescreen = ()=> {
	const {lightTheme, main_dark, main_light,currentTheme} = useContext(AppContext)
	const style = {
		homescreen:{
			backgroundColor:lightTheme?currentTheme.bgbody:currentTheme.textbody,
			color:lightTheme?currentTheme.textbody:currentTheme.bgbody,
			width:"100%",
			height:"100vh",
			transition:" background-color 0.3s, color 0.3s	",
			padding:" 50px 10rem"
		}
	}
	return (
		<div style={style.homescreen}>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, inventore quod! Veritatis nesciunt blanditiis odio? Voluptatem sit veniam perspiciatis perferendis.</h1>
				{/* <Card></Card> */}
		</div>
	)
}
export default Homescreen