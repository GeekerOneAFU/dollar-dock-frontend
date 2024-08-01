import { useState, useEffect } from 'react';
import { MdAutorenew } from 'react-icons/md';

const DashboardContent = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <div className="row">
                <h1>Dashboard 
                    <span>
                        {
                            loading ?
                            <MdAutorenew
                                size={25}
                                style={{ animation: 'fastSpin 2.9s linear forwards' }} 
                            />
                            : 'The system is upto date.'
                        }
                    </span>
                </h1>
            </div>
            <div className="row">

                <div className="column-2 mt-10 mb-10 p-5" style={boxShadowStyle}>
                    <h2>I'm column 2</h2>
                </div>

                <div className="column-3 mt-10 mb-10 p-5" style={boxShadowStyle}>
                    <h2>I'm column 3</h2>
                </div>

                <div className="column-6 mt-10 mb-10 p-5" style={boxShadowStyle}>
                    <h2>I'm column 6</h2>
                </div>
                
            </div>
        </>
        
    )
}

const boxShadowStyle = {
    boxShadow: 'var(--monster-shadow), var(--hard-shadow), var(--light-shadow)'
}

export default DashboardContent;