import React from "react";
import ReactDOM from 'react-dom/client';
import Bar from "../../partials/Bar";


export default function Warehouse() {
    // Name Bar Start
    ReactDOM.createRoot(document.getElementById('bar')).render(
        <React.StrictMode>
            <Bar nameBar={'Warehouse Page'}/>
        </React.StrictMode>,
    )
    // Name Bar End
    
    return (
        <>
            <section className="content">
                <h1>Ini Warehouse Page</h1>
            </section>
        </>
    );
}