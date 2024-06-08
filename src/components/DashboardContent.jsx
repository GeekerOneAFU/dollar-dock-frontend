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
                <div className="column-12">
                    <div className="row">
                        <div 
                            className="column-4 mt-40 mb-40 p-5" 
                            style={{ boxShadow: 'var(--monster-shadow), var(--hard-shadow), var(--light-shadow)' }}
                        ><h2>I'm column 4</h2></div>

                        <div 
                            className="column-6 mt-40 mb-40 p-5"
                            style={{ boxShadow: 'var(--monster-shadow), var(--hard-shadow), var(--light-shadow)' }}
                        ><h2>I'm column 6</h2></div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default DashboardContent;