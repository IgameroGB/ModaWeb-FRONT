import { useState } from "react";
import { Outlet } from "react-router-dom";

import HeaderMain from "../header/HeaderMain";
import BackBlur from "../common/BackBlur";
import Footer from "../footer/Footer";

function Layout() {
  const [blur, setBlur] = useState(false);

  return (
    <>
      <HeaderMain setBlur={setBlur} />
      <Outlet />
      <Footer />

      {blur && <BackBlur />}
    </>
  );
}

export default Layout;
