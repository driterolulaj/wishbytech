import Navbtn from "../components/Navbtn";
import logo from "../anatomy/logo_wishbytech.png";
import Search from "../components/Search";
import { useContext, useState } from "react";
import { AppContext } from "../GlobalContext";

const Navbar = () => {
  const {main_dark_blue,main_light_blue,lightTheme,setLightTheme,main_light} = useContext(AppContext)
  const style = {
   
    navbar:{
      // padding: "0.5rem 0.5rem",
      height: " 100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: main_light_blue,
    },
    hotbar:{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding:" 10px 0",
      backgroundColor: main_dark_blue,
      fontSize: "0.7em",
    }
   
  };
  // !1003PX MOBILE

  return (
    <div
    // style={{
    //     background:
    //   "linear-gradient(180deg, "+main_light_blue+" 0%, "+main_dark_blue+" 100%)",
    // }}
    >
      <div style={style.navbar}>
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

        <div style={{ flex: "1" }}>
          <Search></Search>
        </div>
        <div style={{ flex: 1,display:"flex",flexAlign:'center',justifyContent:"center" }}>
          <input id="toggle" className="toggle" type="checkbox" onClick={()=>{setLightTheme(!lightTheme);console.log(lightTheme)}} />
        </div>
      </div>
      <div style={style.hotbar}>
        <a href="">Kompjutere, Laptop</a>
        <a href="">Telefone, Tablet</a>
        <a href="">Aksesore</a>
        <a href="">Gaming</a>
        <a href="">Tv, Foto, Audio</a>
      </div>
    </div>
  );
};

export default Navbar;
