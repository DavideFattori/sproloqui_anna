import { useState } from 'react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/storie.css'

export default function AppTg() {

    const [parole, setParole] = useState({
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
        '': "",
    });
    const [mostraStoriaFinita, setMostraStoriaFinita] = useState(false)
    const [avvisoParole, setAvvisoParole] = useState(false)
    
    function ControllaParole() {
        let tuttiPieni = true
        Object.values(parole).forEach(value => {
            if (value === "") {
                tuttiPieni = false
            }
        });
        if (tuttiPieni) {
            setAvvisoParole(false)
            setMostraStoriaFinita(true)
        }
        else {
            setAvvisoParole(true)
        }
    }




    return (
        <div>non ancora implementato</div>
        // <div className="container-fluid">
        //     Il 
        //     (sostantivo) 
        //     è un continente che ha come confine la 
        //     (Nazione/luogo) 
        //     e 
        //     (sostantivo)
        //     . Ha molte pianure e 
        //     (sostantivo) 
        //     ma scarseggia di laghi, questo a causa del 
        //     (sostantivo) 
        //     (aggettivo)
        //     . Il clima è 
        //     (aggettivo)
        //     , cosi tanto che le popolazioni devono 
        //     (verbo) 
        //     e 
        //     (verbo) 
        //     per sopravvivere. Qui con noi c'è 
        //     (Nome)
        //     , è venuto in Italia 
        //     (numero) 
        //     (misura di tempo) 
        //     fa. Ci ha descritto i 
        //     (sostantivo) 
        //     che doveva fare per 1 sorso di 
        //     (liquido/sostanza)
        //     . Bisogna non 
        //     (verbo) 
        //     chi ci sta intorno, neanche se ci 
        //     (verbo)
        //     . Questo paese è molto 
        //     (aggettivo) 
        //     e 
        //     (aggettivo)
        //     , però non è consigliabile per le vostre vacanze. Direi che è abbastanza ovvio data la grande mancanza di 
        //     (sostantivo) 
        //     e 
        //     (sostantivo)
        //     , tipici prima della 
        //     (numero) 
        //     guerra mondiale. E qui con tg attualità abbiamo finito, lascio la parola al mio collega che vi parlerà dei 
        //     (animale) 
        //     (aggettivo) 
        //     e delle loro 
        //     (sostantivo)
        //     .
        // </div>
    )
}