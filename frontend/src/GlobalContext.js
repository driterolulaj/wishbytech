import React, { useContext, useEffect, useState } from "react";


const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const main_light_blue = "#4c9cb8";
  const main_dark_blue = "#103045";
	const main_dark = "#10131b"
	const main_light ="#fff"
  const [ lightTheme, setLightTheme ] = useState(false)
	const [currentTheme, setCurrentTheme] = useState({
		mainBlue:main_light_blue,
		secondaryBlue:main_dark_blue,
		bgbody:main_dark,
		textbody:main_light,
		
	})
	// useContext(()=>{
	// 	setCurrentTheme({
	// 		mainBlue:lightTheme?main_light_blue:main_dark_blue,
	// 		secondaryBlue:lightTheme?main_dark_blue:main_light_blue,
	// 		bgbody:lightTheme?main_dark:main_light,
	// 		textbody:lightTheme?main_light:main_dark}
	// 	)
	// },lightTheme)

  return (
    <AppContext.Provider
      value={{setLightTheme,lightTheme,main_dark,main_dark_blue,main_light,main_light_blue,currentTheme}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
