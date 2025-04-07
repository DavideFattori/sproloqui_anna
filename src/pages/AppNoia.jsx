import { useState } from 'react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/storie.css'

export default function AppNoia() {

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
        //     Mi ritrovo rinchiusa qui, in questa dannatissima 
        //     (sostantivo)
        //     . Il tempo sembra non passare, mai le uniche cose che posso fare sono 
        //     (verbo) 
        //     (aggettivo) 
        //     e leggere. Mi manca uscire con i miei amici. Con 
        //     (nome) 
        //     ricordo andavamo sempre al 
        //     (luogo) 
        //     per 
        //     (verbo) 
        //     quei dannatissimi 
        //     (sostantivo)
        //     . Non voglio 
        //     (verbo)
        //     . 
        //     (Esclamazione)
        //     ! Sto 
        //     (verbo) 
        //     dite che sono pazza? E' da 
        //     (numero) 
        //     (misura di tempo) 
        //     che sono rinchiusa. Ripenso con nostalgia alle grandi uscite con gli amici, eravamo sempre tantissimi, alle volte anche più di 
        //     (numero)
        //     . Mi sentivo come se avessi dovuto 
        //     (verbo) 
        //     un 
        //     (animale)
        //     . Sicuramente ora non lo farei, come potrei con tutti questi 
        //     (sostantivo) 
        //     (aggettivo) 
        //     è diventato impossibile perfino mangiarsi un 
        //     (sostantivo)
        //     . Con questo della bava esce dal mio 
        //     (parte del corpo)
        //     . Quasi quasi vado a cucinarmi dello 
        //     (sostantivo/cibo) 
        //     (aggettivo)
        //     , è davvero troppo che lo 
        //     (verbo)
        //     . Con questo vado a 
        //     (verbo)
        //     . 
        //     (saluto)
        // </div>
    )
}