import styled from "@emotion/styled";

const ModalClose = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 3%;
  right: 3%;
  background-color: #fff;
`;

const Modal = styled.div`
  width: 80%;
  max-width: 600px;
  /* height: 100px; */
  background: var(--white-color);
  border-radius: 20px;
  border-bottom: 3px solid var(--gold-color);
`;

const ModalLayout = ({ modalAnimation, modalClose, content }) => {
  const handleCloseModal = () => {
    modalClose();
  };

  return (
    <div className="modal-container" onClick={handleCloseModal}>
      {/* Cerrar modal pulsando en el cuadro ^ */}
      <Modal className={`modal ${modalAnimation ? "animate" : ""}`}>
        <ModalClose onClick={handleCloseModal} />
        {/* Cerrar modal Boton ^ */}
        {content}
      </Modal>
    </div>
  );
};

export default ModalLayout;
