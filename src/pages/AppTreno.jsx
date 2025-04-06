import { useState } from 'react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/storie.css'

export default function AppTreno() {

    const [parole, setParole] = useState({
        'numero': "",
        'nazioneCitta': "",
        'aggettivo': "",
        'citta': "",
        'numero2': "",
        'valuta': "",
        'verbo': "",
        'aggettivo2': "",
        'aggettivo3': "",
        'verbo2': "",
        'numero3': "",
        'verbo3': "",
        'sostantivoFemminile': "",
        'verbo4': "",
        'avverbio': "",
        'numero4': "",
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
            <div className="row">
                <div className="col-12 flex justify-content-center mb-5">
                    <Link className="nav-link underline linkCustom text-center" to={'/'}>indietro</Link>
                </div>
                <div className="col-12 mb-3">
                    <h1 className="text-center">PRENDERE IL TRENO</h1>
                </div>
                {avvisoParole==true ? 
                    <div className="col-12 mb-3">
                        <h5 className="text-center text-danger">Compila tutti i campi</h5>
                    </div>
                : null}
                {mostraStoriaFinita==true ? 
                    <div className="col-12 mb-3">
                        <span className='parole'>{parole.numero} </span>
                        giorni fa dovevo partire per 
                        <span className='parole'> {parole.nazioneCitta} </span>
                        e la mia macchina era rotta, così decisi di prendere il treno. Non ne avevo mai preso uno in vita mia quindi ero 
                        <span className='parole'> {parole.aggettivo}</span>
                        . Su internet cercai i biglietti da 
                        <span className='parole'> {parole.citta} </span>
                        alla mia destinazione, e mi sembrava troppo pagare 
                        <span className='parole'> {parole.numero2} </span>
                        <span className='parole'> {parole.valuta}</span>
                        , ma lasciai stare. Il giorno dopo mi diressi 
                        <span className='parole'> {parole.verbo} </span>
                        verso la 
                        <span className='parole'> {parole.aggettivo2} </span>
                        stazione. Era molto grande, e per evitare di perdermi fermai una persona 
                        <span className='parole'> {parole.aggettivo3} </span>
                        e chiesi informazioni. Mi diressi verso la biglietteria e 
                        <span className='parole'> {parole.verbo2} </span>
                        il mio biglietto. Il mio binario era il numero 
                        <span className='parole'> {parole.numero3}</span>
                        , e mentre stavo 
                        <span className='parole'> {parole.verbo3}</span>
                        , sentii la 
                        <span className='parole'> {parole.sostantivoFemminile} </span>
                        che stava arrivando, quindi mi 
                        <span className='parole'> {parole.verbo4}</span>
                        . Salii e mi sedetti 
                        <span className='parole'> {parole.avverbio} </span>
                        . Troppo tardi mi resi conto che il binario a cui ero salita era il 
                        <span className='parole'> {parole.numero4}</span>
                        .
                    </div>
                    :
                    <div className="col-12">
                        <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero': e.target.value})} />
                        giorni fa dovevo partire per 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="nazione/citta" onChange={(e) => setParole({...parole, 'nazioneCitta': e.target.value})} /> 
                        e la mia macchina era rotta, così decisi di prendere il treno. Non ne avevo mai preso uno in vita mia quindi ero 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo': e.target.value})} />
                        . Su internet cercai i biglietti da 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="citta" onChange={(e) => setParole({...parole, 'citta': e.target.value})} /> 
                        alla mia destinazione, e mi sembrava troppo pagare 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero2': e.target.value})} /> 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="valuta" onChange={(e) => setParole({...parole, 'valuta': e.target.value})} />
                        , ma lasciai stare. Il giorno dopo mi diressi 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo': e.target.value})} /> 
                        verso la 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo2': e.target.value})} />
                        stazione. Era molto grande, e per evitare di perdermi fermai una persona 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo3': e.target.value})} />
                        e chiesi informazioni. Mi diressi verso la biglietteria e 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo2': e.target.value})} /> 
                        il mio biglietto. Il mio binario era il numero 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero3': e.target.value})} />
                        , e mentre stavo 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo3': e.target.value})} />
                        , sentii la 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo femm." onChange={(e) => setParole({...parole, 'sostantivoFemminile': e.target.value})} />
                        che stava arrivando, quindi mi 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo4': e.target.value})} />
                        . Salii e mi sedetti 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="avverbio" onChange={(e) => setParole({...parole, 'avverbio': e.target.value})} />
                        . Troppo tardi mi resi conto che il binario a cui ero salita era il 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero4': e.target.value})} />
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