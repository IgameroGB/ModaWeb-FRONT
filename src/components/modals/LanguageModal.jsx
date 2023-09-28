import styled from "@emotion/styled";

// const ModalContainer = styled.div``;

const Modal = styled.div`
  width: 80%;
  max-width: 600px;
  /* height: 100px; */
  background: var(--white-color);
  border-radius: 20px;
  border-bottom: 3px solid var(--gold-color);
`;

const ModalTitle = styled.div`
  width: 100%;
  border-bottom: 3px solid var(--gold-color);

`;

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const LangBtn = styled.button`
  width: 50%;
  border: 3px solid var(--gold-color);
  border-radius: 10px;
  background: white;
  padding: 5px 0;
  margin: 5px 0;
`;

const LanguageModal = ({ modalAnimation, modalClose }) => {
  const handleCloseModal = () => {
    modalClose();
  };
  return (
    <div className="modal-container" onClick={handleCloseModal}>
      <Modal className={`modal ${modalAnimation ? "animate" : ""}`}>
        <ModalTitle>
          <h2>Elige tu idioma</h2>
        </ModalTitle>
        <ModalBody>
          <LangBtn className="active">Español</LangBtn>
          <LangBtn>Inglés</LangBtn>
          <LangBtn>Francés</LangBtn>
          <LangBtn>Italiano</LangBtn>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LanguageModal;
