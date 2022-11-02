import Navbtn from "../components/Navbtn";
import logo from "../anatomy/logo_wishbytech.png";
import Search from "../components/Search";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { lightGreen } from "@mui/material/colors";

const Navbar = () => {
  const main_light_blue = "#4c9cb8";
  const main_dark_blue = "#103045";
  const {lightMode, setLightMode, currentTheme,toggleTheme} = useContext(GlobalContext)
  // const theme = GlobalContextProvider.lightMode?GlobalContextProvider.lightTheme:GlobalContextProvider.darkTheme
  const style = {
    // background: "rgb(76,156,184)",
    // background:
    //   "linear-gradient(170deg, rgba(76,156,184,1) 0%, rgba(16,48,69,1) 100%)",
    // background: "linear-gradient(135, rgba(76,156,184,1) 0%,  rgba(16,48,69,1) 100%)",
    padding: "0.5rem 1rem",
    height: " 100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  // !1003PX MOBILE

  
  return (
    <div style={{
        background:
      "linear-gradient(180deg, "+currentTheme.primaryBlue+" 0%, "+currentTheme.secondaryBlue+" 100%)",
    }}>
      <div style={style}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 4,
          }}
        >
          <img
            src={logo}
            alt=""
            style={{ height: "100%", flex: 1, paddingTop: 10 }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flex: 20,
            }}
          >
            <Navbtn text="Home"></Navbtn>
            <Navbtn text="Shop"></Navbtn>
            <Navbtn text="Oferta"></Navbtn>
            <Navbtn text="Faq"></Navbtn>
            <Navbtn text="Per ne"></Navbtn>
            <Navbtn text="Kontakti"></Navbtn>
            
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <Search></Search>
          
        </div>
        <div style={{flex:1}}>
        <input id="toggle" class="toggle" type="checkbox" onClick={toggleTheme}/>

        </div>
      </div>
      <div className="hotbar">
        <a href="">telefona</a>
        <a href="">kompjutere+laptope</a>
        <a href="">aksesore</a>
      </div>
    </div>
  );
};

export default Navbar;
