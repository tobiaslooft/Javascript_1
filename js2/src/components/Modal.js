import React, { useState } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>KLICKA HÄR!</button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Tittut!</h2>
                        <button onClick={closeModal}>Stäng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
