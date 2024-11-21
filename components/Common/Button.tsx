import React from 'react';

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}
        >
            {children}
        </button>
    );
};

export default Button;
