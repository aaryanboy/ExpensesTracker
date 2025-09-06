'use client';

import SideBar from "@/components/SideBar";
import { useTheme } from "./(theme)/ThemeContext";


export default function Home() {

  const { theme, toggleTheme, isDark } = useTheme();
  return (
  <div className={`${theme.background}`}>  
  
 <SideBar/>


  
  </div>
  
  );
}


// // page.jsx
// "use client";
// import React from "react";
// import { useTheme } from "./ThemeContext";

// export default function Page() {
//   const { theme, toggleTheme, isDark } = useTheme();

//   return (
    // <div className={`${theme.background} ${theme.text} min-h-screen flex flex-col justify-center items-center transition-colors duration-500`}>
//       <h1 className="text-4xl font-bold mb-6">{isDark ? "Dark Mode" : "Light Mode"}</h1>

//       <button
//         onClick={toggleTheme}
//         className={`${theme.primary} px-6 py-3 rounded-lg text-white font-semibold hover:opacity-80 transition`}
//       >
//         Toggle Theme
//       </button>

//       <div className={`${theme.secondary} mt-6 p-4 rounded-md`}>
//         <p>This box also changes color based on theme.</p>
//       </div>
//     </div>
//   );
// }
