import { useContext } from "react";
import { AppContext } from "../GlobalContext";
import Card from "../components/Card";
import CardContainer from "../anatomy/CardContainer";
const Homescreen = () => {
  const { lightTheme, main_dark, main_light, currentTheme } =
    useContext(AppContext);
  const style = {
    homescreen: {
      backgroundColor: lightTheme ? currentTheme.bgbody : currentTheme.textbody,
      color: lightTheme ? currentTheme.textbody : currentTheme.bgbody,
      width: "100%",
      height: "100vh",
      transition: " background-color 0.2s, color 0.2s	",
      padding: " 50px 10rem",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
    },
  };
  return (
    <div style={style.homescreen}>
      <CardContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
    </div>
  );
};
export default Homescreen;
