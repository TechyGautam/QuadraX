import{useState, useEffect} from "react";
import Register from './pages/Register/Register'

function App() {
  const [isDark,setIsDark]=useState(() => {
    return localStorage.getItem("quadrax-theme")==="dark";
  });
  useEffect(() => { 
    localStorage.setItem("quadrax-theme",isDark? "dark" : "light");
  },[isDark]);

  const toggleTheme=() =>{setIsDark((prevTheme)=>!prevTheme);};

  return (<div className={isDark?"dark": ""}
     style={{ minHeight:"100vh",
      backgroundColor: "var(--bg-primary)",
     }}>

    <Register isDark={isDark}toggleTheme={toggleTheme}/>
  </div> 
  ); 
}

export default App