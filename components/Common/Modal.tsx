import React from 'react';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div style={{ margin: '100px auto', padding: '20px', backgroundColor: '#fff', width: '300px' }}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
