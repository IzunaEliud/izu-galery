import React from 'react'
import { Link } from 'react-router-dom'
import Face from './../assets/img/face.png'

export default function Footer() {
    return (
        <footer>
            <div id="contact-me">
                <div id="c">
                    <img id="footer-img" src={Face} alt="izu galery" width="300px"/>
                </div>
                <div id="form-contact">
                    <input id="text-cm" type="text" placeholder="enter your sugestion"/><br/>
                    <input id="email-cm" type="text" placeholder="enter your mail"/><br/>
                    <button id="send-me">Send</button>

                </div>
            </div>
            <hr/>
            <div id="contact">
                Abidjan,Cote d'ivoire +225 0554608932
            </div>
            <div id="reseaux">
                <Link to="#">Github</Link>
            </div>
        </footer>
    )
}
