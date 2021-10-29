import React from 'react'
import './NewsletterForm.css';
function NewsletterForm() {
    return (    
            <form  onSubmit={localStorage.setItem("tokenNL","settokenNL")} className="FormNL">
                <h4>Subscribite a nuestras actualizaciones!</h4>
                <input
                type="email"
                required
                className="InputEmailNL"
                placeholder="Email"
                ></input>
                <button className="ButonNL">Enviar</button>
                <p>No te preocupes, no te enviaremos spam</p>
            </form>
    )
}
export default NewsletterForm
