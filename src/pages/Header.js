// import React from "react";

// const Header = () => {
//   return (
//     <header className="flex items-center justify-center bg-blue-500 text-white p-4">
//       <h1 className="text-2xl font-bold mr-4">Meu Site</h1>
//       <nav>
//         <ul className="flex items-center justify-center space-x-4">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">Sobre</a></li>
//           <li><a href="#contact">Contato</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import { Box, IconButton, useTheme } from "@mui/material";


const Header = () => {


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        sx={{ bgcolor: "#F90303" }} 
        borderRadius="3px"
      >
        HEADER
      </Box>
    </Box>
  );
};

export default Header;