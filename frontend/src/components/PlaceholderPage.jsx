import React from 'react';

const PlaceholderPage = ({ title }) => {
    return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
            <h1>{title}</h1>
            <p>This page is currently under construction. Coming soon!</p>
        </div>
    );
};

export default PlaceholderPage;
