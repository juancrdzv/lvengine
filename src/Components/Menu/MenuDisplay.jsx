import React from "react";
import { Link } from 'react-router-dom';


export const MenuDisplay = () => {
    return (<div>
        El jardin del dr melon
            <div>
            <Link to="/game" >Ir a mi jardin</Link>
        </div>
        <div>
            <Link to="/gardenadmin" >Agregar plantas</Link>
        </div>
    </div>);
} 