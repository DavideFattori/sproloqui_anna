import { useState } from 'react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/storie.css'

export default function AppTg() {

    const [parole, setParole] = useState({
        'sostantivo': "",
        'NazioneLuogo': "",
        'sostantivo2': "",
        'sostantivo3': "",
        'sostantivo4': "",
        'aggettivo': "",
        'aggettivo2': "",
        'verbo': "",
        'verbo2': "",
        'nome': "",
        'numero': "",
        'misuraTempo': "",
        'sostantivo5': "",
        'liquidoSostanza': "",
        'verbo3': "",
        'verbo4': "",
        'aggettivo3': "",
        'aggettivo4': "",
        'sostantivo6': "",
        'sostantivo7': "",
        'numero2': "",
        'animale': "",
        'aggettivo5': "",
        'sostantivo8': "",
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
        <div className="container-fluid container-custom">
        <div className="row justify-content-center">
            <div className="col-12 col-md-2 flex justify-content-center mb-5">
                <Link className="nav-link underline linkCustom text-center" to={'/'}>indietro</Link>
            </div>
            <div className="col-12 mb-3">
                <h1 className="text-center">TG ATTUALITÀ</h1>
            </div>
            {avvisoParole==true ? 
                <div className="col-12 mb-3">
                    <h5 className="text-center text-danger">Compila tutti i campi</h5>
                </div>
            : null}
            {mostraStoriaFinita==true ? 
                <div className="col-12 col-md-6 mb-3">
                    Il 
                    <span className='parole'> {parole.sostantivo} </span>
                    è un continente che ha come confine la 
                    <span className='parole'> {parole.NazioneLuogo} </span>
                    e 
                    <span className='parole'> {parole.sostantivo2}</span>
                    . Ha molte pianure e 
                    <span className='parole'> {parole.sostantivo3} </span>
                    ma scarseggia di laghi, questo a causa del 
                    <span className='parole'> {parole.sostantivo4} </span>
                    <span className='parole'> {parole.aggettivo}</span>
                    . Il clima è 
                    <span className='parole'> {parole.aggettivo2}</span>
                    , cosi tanto che le popolazioni devono 
                    <span className='parole'> {parole.verbo} </span>
                    e 
                    <span className='parole'> {parole.verbo2} </span>
                    per sopravvivere. Qui con noi c'è 
                    <span className='parole'> {parole.nome}</span>
                    , è venuto in Italia 
                    <span className='parole'> {parole.numero} </span>
                    <span className='parole'> {parole.misuraTempo} </span>
                    fa. Ci ha descritto i 
                    <span className='parole'> {parole.sostantivo5} </span>
                    che doveva fare per 1 sorso di 
                    <span className='parole'> {parole.liquidoSostanza}</span>
                    . Bisogna non 
                    <span className='parole'> {parole.verbo3} </span>
                    chi ci sta intorno, neanche se ci 
                    <span className='parole'> {parole.verbo4}</span>
                    . Questo paese è molto 
                    <span className='parole'> {parole.aggettivo3} </span>
                    e 
                    <span className='parole'> {parole.aggettivo4}</span>
                    , però non è consigliabile per le vostre vacanze. Direi che è abbastanza ovvio data la grande mancanza di 
                    <span className='parole'> {parole.sostantivo6} </span>
                    e 
                    <span className='parole'> {parole.sostantivo7}</span>
                    , tipici prima della 
                    <span className='parole'> {parole.numero2} </span>
                    guerra mondiale. E qui con tg attualità abbiamo finito, lascio la parola al mio collega che vi parlerà dei 
                    <span className='parole'> {parole.animale} </span>
                    <span className='parole'> {parole.aggettivo5} </span>
                    e delle loro 
                    <span className='parole'> {parole.sostantivo8}</span>
                    .
                </div>
                :
                <div className="col-12 col-md-6">
                    Il 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo': e.target.value})} />
                    è un continente che ha come confine la 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="Nazione/luogo" onChange={(e) => setParole({...parole, 'NazioneLuogo': e.target.value})} />
                    e 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo2': e.target.value})} />
                    . Ha molte pianure e 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo plurale" onChange={(e) => setParole({...parole, 'sostantivo3': e.target.value})} />
                    ma scarseggia di laghi, questo a causa del 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo4': e.target.value})} />
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo': e.target.value})} />
                    . Il clima è 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo2': e.target.value})} />
                    , cosi tanto che le popolazioni devono 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo': e.target.value})} />
                    e  
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo2': e.target.value})} />
                    per sopravvivere. Qui con noi c'è 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="nome" onChange={(e) => setParole({...parole, 'nome': e.target.value})} />
                    , è venuto in Italia 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero': e.target.value})} />
                    <input className="rounded mx-1 mt-1" type="text" placeholder="misura del tempo" onChange={(e) => setParole({...parole, 'misuraTempo': e.target.value})} />
                    fa. Ci ha descritto i 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo5': e.target.value})} />
                    che doveva fare per 1 sorso di 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="liquido/sostanza" onChange={(e) => setParole({...parole, 'liquidoSostanza': e.target.value})} />
                    . Bisogna non 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo3': e.target.value})} />
                    chi ci sta intorno, neanche se ci 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo4': e.target.value})} />
                    . Questo paese è molto 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo3': e.target.value})} />
                    e 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo4': e.target.value})} />
                    , però non è consigliabile per le vostre vacanze. Direi che è abbastanza ovvio data la grande mancanza di 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo6': e.target.value})} />
                    e 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo7': e.target.value})} />
                    , tipici prima della 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero2': e.target.value})} />
                    guerra mondiale. E qui con tg attualità abbiamo finito, lascio la parola al mio collega che vi parlerà dei 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="animale" onChange={(e) => setParole({...parole, 'animale': e.target.value})} />
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo5': e.target.value})} />
                    e delle loro 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo8': e.target.value})} />
                    .
                </div>
            }
            {mostraStoriaFinita==false ?
                <div className="col-12 d-flex justify-content-center mt-3">
                    <button className="btn btn-primary custom-btn" onClick={() => ControllaParole()}>mostra storia</button>
                </div>
                :
                null
            }
        </div>
    </div>
    )
}