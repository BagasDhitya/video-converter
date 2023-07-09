import React, { ReactNode } from 'react';

interface ModalProps {
    open: boolean;
    onClose?: () => void;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-md">
                {children}
            </div>
            <button
                className="px-4 py-2 mt-5 text-white bg-red-700 rounded-lg"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    );
};

export default Modal;
