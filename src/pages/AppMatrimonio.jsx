import { useState } from 'react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/storie.css'

export default function AppMatrimonio() {

    const [parole, setParole] = useState({
        'nomeDonna': "",
        'abbigliamento': "",
        'colore': "",
        'avverbio': "",
        'marca': "",
        'veicolo': "",
        'avverbio2': "",
        'aggettivo': "",
        'sostantivoPlurale': "",
        'avverbio3': "",
        'cibo': "",
        'sostantivo': "",
        'sostantivo2': "",
        'cibo2': "",
        'liquido': "",
        'aggettivo2': "",
        'liquido2': "",
        'aggettivo3': "",
        'verbo': "",
        'piccolaQuantita': "",
        'cibo3': "",
        'avverbio4': "",
        'animale': "",
        'aggettivo4': "",
        'verbo2': "",
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
                    <h1 className="text-center">IL MATRIMONIO</h1>
                </div>
                {avvisoParole==true ? 
                    <div className="col-12 mb-3">
                        <h5 className="text-center text-danger">Compila tutti i campi</h5>
                    </div>
                : null}
                {mostraStoriaFinita==true ? 
                    <div className="col-12 mb-3">
                        Oggi devo andare al matrimonio di mia cugina 
                        <span className='parole'> {parole.nomeDonna}</span>
                        , quindi incomincio a prepararmi. Prendo un 
                        <span className='parole'> {parole.abbigliamento} </span>
                        <span className='parole'> {parole.colore} </span>
                        e lo indosso 
                        <span className='parole'> {parole.avverbio}</span>
                        , poi infilo le mie scarpe 
                        <span className='parole'> {parole.marca}</span>
                        . Una volta finito di preparmi raggiungo il mio 
                        <span className='parole'> {parole.veicolo} </span>
                        e mi metto alla guida 
                        <span className='parole'> {parole.avverbio2}</span>
                        . Una volta arrivata, la cerimonia 
                        <span className='parole'> {parole.aggettivo} </span>
                        era già incominciata, e dopo essersi scambiati le 
                        <span className='parole'> {parole.sostantivoPlurale}</span>
                        , vado 
                        <span className='parole'> {parole.avverbio3} </span>
                        verso il buffet, ero lì solo per quello. C'era di tutto da 
                        <span className='parole'> {parole.cibo} </span>
                        a 
                        <span className='parole'> {parole.sostantivo}</span>
                        , da 
                        <span className='parole'> {parole.sostantivo2} </span>
                        a 
                        <span className='parole'> {parole.cibo2}</span>
                        , da bere c'era 
                        <span className='parole'> {parole.liquido} </span>
                        <span className='parole'> {parole.aggettivo2} </span>
                        e 
                        <span className='parole'> {parole.liquido2} </span>
                        <span className='parole'> {parole.aggettivo3}</span>
                        . Mi 
                        <span className='parole'> {parole.verbo} </span>
                        sul tavolo e prendo 
                        <span className='parole'> {parole.piccolaQuantita} </span> 
                        di 
                        <span className='parole'> {parole.cibo3} </span>
                        e vado a mangiare 
                        <span className='parole'> {parole.avverbio4} </span>
                        le mie cose. Ma subito vedo la sposa scappare inseguita da un 
                        <span className='parole'> {parole.animale} </span>
                        <span className='parole'> {parole.aggettivo4} </span>
                        mentre 
                        <span className='parole'> {parole.verbo2}</span>
                        .
                    </div>
                    :
                    <div className="col-12">
                        Oggi devo andare al matrimonio di mia cugina 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="nome femminile" onChange={(e) => setParole({...parole, 'nomeDonna': e.target.value})} />
                        , quindi incomincio a prepararmi. Prendo un 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="abbigliamento" onChange={(e) => setParole({...parole, 'abbigliamento': e.target.value})} />
                        <input className="rounded mx-1 mt-1" type="text" placeholder="colore" onChange={(e) => setParole({...parole, 'colore': e.target.value})} />
                        e lo indosso 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="avverbio" onChange={(e) => setParole({...parole, 'avverbio': e.target.value})} />
                        , poi infilo le mie scarpe 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="marca" onChange={(e) => setParole({...parole, 'marca': e.target.value})} />
                        . Una volta finito di preparmi raggiungo il mio 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="veicolo" onChange={(e) => setParole({...parole, 'veicolo': e.target.value})} />
                        e mi metto alla guida 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="avverbio" onChange={(e) => setParole({...parole, 'avverbio2': e.target.value})} />
                        . Una volta arrivata, la cerimonia 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo': e.target.value})} />
                        era già incominciata, e dopo essersi scambiati le 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivoPlurale" onChange={(e) => setParole({...parole, 'sostantivoPlurale': e.target.value})} />
                        , vado 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="avverbio" onChange={(e) => setParole({...parole, 'avverbio3': e.target.value})} />
                        verso il buffet, ero lì solo per quello. C'era di tutto da 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="cibo" onChange={(e) => setParole({...parole, 'cibo': e.target.value})} />
                        a 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo': e.target.value})} />
                        , da 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo2': e.target.value})} />
                        a 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="cibo" onChange={(e) => setParole({...parole, 'cibo2': e.target.value})} /> 
                        , da bere c'era 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="liquido" onChange={(e) => setParole({...parole, 'liquido': e.target.value})} />
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo2': e.target.value})} />
                        e 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="liquido" onChange={(e) => setParole({...parole, 'liquido2': e.target.value})} />
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo3': e.target.value})} />
                        . Mi 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo': e.target.value})} />
                        sul tavolo e prendo 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="piccola quantità" onChange={(e) => setParole({...parole, 'piccolaQuantita': e.target.value})} />
                        di 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="cibo" onChange={(e) => setParole({...parole, 'cibo3': e.target.value})} />
                        e vado a mangiare 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="avverbio" onChange={(e) => setParole({...parole, 'avverbio4': e.target.value})} />
                        le mie cose. Ma subito vedo la sposa scappare inseguita da un 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="animale" onChange={(e) => setParole({...parole, 'animale': e.target.value})} />
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo4': e.target.value})} />
                        mentre 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo2': e.target.value})} />
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