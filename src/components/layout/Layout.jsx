import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { handleBlur } from "../../js/modals";

import HeaderMain from "../header/HeaderMain";
import BackBlur from "../common/BackBlur";
import Footer from "../footer/Footer";
import ModalLayout from "../modals/ModalLayout";
import LanguageModal from "../modals/LanguageModal";

function Layout() {
  const [blur, setBlur] = useState(false);
  const [modal, setModal] = useState("");
  const [modalAnimation, setModalAnimation] = useState(false);
  const [blurAnimation, setBlurAnimation] = useState(false);

  /* Control modal lenguaje */
  useEffect(() => {
    // setTimeout(() => {
    //   handleBlur(setBlur, true);
    //   setModal("language");
    //   setModalAnimation(true);
    // }, 1000);
  }, []);

  const modalOpen = (modal) => {
    handleBlur(setBlur, true);
    setModal(modal);
    setTimeout(() => {
      setModalAnimation(true);
      setBlurAnimation(true);
    }, 1000);
  };

  const modalClose = () => {
    setTimeout(() => {
      setModal("");
      handleBlur(setBlur, false);
    }, 400);
    setBlurAnimation(false);
    setModalAnimation(false);
  };

  useEffect(() => {
    modalOpen("language");
  }, []);

  return (
    <>
      <HeaderMain />
      <Outlet />
      <Footer />

      {modal == "language" && (
        <ModalLayout
          modalAnimation={modalAnimation}
          modalClose={modalClose}
          content={<LanguageModal />}
        />
      )}
      {/* {modal && <BackBlur blurAnimation={blurAnimation} />} */}

      {blur && <BackBlur blurAnimation={blurAnimation} />}
    </>
  );
}

export default Layout;
