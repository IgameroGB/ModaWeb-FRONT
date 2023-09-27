import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { handleBlur } from "../../js/modals";

import HeaderMain from "../header/HeaderMain";
import BackBlur from "../common/BackBlur";
import Footer from "../footer/Footer";
import LanguageModal from "../modals/LanguageModal";

function Layout() {
  const [blur, setBlur] = useState(false);
  const [modal, setModal] = useState("");

  /* Control modal lenguaje */
  useEffect(() => {
    setTimeout(() => {
      handleBlur(setBlur, true);
      setModal("language");
    }, 0);
  }, []);

  return (
    <>
      <HeaderMain setBlur={setBlur} />
      <Outlet />
      <Footer />

      {modal == "language" && <LanguageModal />}

      <BackBlur blur={blur} />
    </>
  );
}

export default Layout;
