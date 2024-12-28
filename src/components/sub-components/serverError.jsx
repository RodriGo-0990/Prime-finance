import React from "react";
import '../../css/serverError.css'
import { LuServerOff } from "react-icons/lu";
function serverError() {
    return(
        <>
        <div className="container-server-error">
            <div className="content-server-error">
                <LuServerOff size={50} color={"grey"}/>
                <p>Server Error:<br/> Servidor em manutenção!</p>
            </div>
        </div>
        </>
    )
}
export default serverError;