import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Calculator } from "@presentation/pages";
// import { CustomThemeProvider } from "../hooks/GlobalThemeProvider";

export const Router = () => {
  return (
    // <CustomThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
    // </CustomThemeProvider>
  );
};

export default Router;
