// Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        style={{
          padding: 20,
          background: "#FFF",
          borderRadius: "2px",
          display: "inline-block",
          minHeight: "300px",
          margin: "1rem",
          position: "relative",
          minWidth: "300px",
          boxShadow: "0 3px 7px rgba(0, 0, 0, 0.3)",
          justifySelf: "center",
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
