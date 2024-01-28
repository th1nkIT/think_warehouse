import React from "react";
import ReactDOM from 'react-dom/client';
import Bar from "../partials/Bar";


export default function Dashboard() {
    // Name Bar Start
    ReactDOM.createRoot(document.getElementById('bar')).render(
        <React.StrictMode>
            <Bar />
        </React.StrictMode>,
    )
    // Name Bar End
    
    return (
        <>
            <section className="content">
                {/* Title Page Start */}
                    <h1>Dashboard</h1>
                {/* Title Page Start */}

                {/* Card Dashboard Start */}
                {/* Card Dashboard End */}

                {/* Diagram Dashboard Start */}
                {/* Diagram Dashboard End */}
            </section>
        </>
    );
}