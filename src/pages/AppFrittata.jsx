import { useState } from 'react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/storie.css'

export default function AppFrittata() {

    const [parole, setParole] = useState({
        'aggettivo': "",
        'aggettivo2': "",
        'verbo': "",
        'ciboSostantivo': "",
        'ciboSostantivo2': "",
        'sostantivo': "",
        'aggettivo3': "",
        'verbo2': "",
        'negozio': "",
        'verbo3': "",
        'sostantivo2': "",
        'ciboSostantivo3': "",
        'numero': "",
        'aggettivo4': "",
        'verbo4': "",
        'esclamazione': "",
        'aggettivo5': "",
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
                    <h1 className="text-center">LA FRITTATA</h1>
                </div>
                {avvisoParole==true ? 
                    <div className="col-12 mb-3">
                        <h5 className="text-center text-danger">Compila tutti i campi</h5>
                    </div>
                : null}
                {mostraStoriaFinita==true ? 
                    <div className="col-12 col-md-6 mb-3">
                        Un 
                        <span className='parole'> {parole.aggettivo} </span>
                        giorno mi venne fame e volli fare una frittata. Aprii il mio frigo 
                        <span className='parole'> {parole.aggettivo2} </span>
                        e 
                        <span className='parole'> {parole.verbo} </span>
                        dentro, ma era quasi vuoto, c'erano solo 
                        <span className='parole'> {parole.ciboSostantivo} </span>
                        e 
                        <span className='parole'> {parole.ciboSostantivo2}</span>
                        , e qualche 
                        <span className='parole'> {parole.sostantivo}</span>
                        . Allora, 
                        <span className='parole'> {parole.aggettivo3}</span>
                        , uscii e andai a 
                        <span className='parole'> {parole.verbo2} </span>
                        ciò che mi serviva. Arrivai al 
                        <span className='parole'> {parole.negozio} </span>
                        più vicino e mi 
                        <span className='parole'> {parole.verbo3}</span>
                        . Andai a cercare il 
                        <span className='parole'> {parole.sostantivo2} </span>
                        e il 
                        <span className='parole'> {parole.ciboSostantivo3} </span>
                        per fare la frittata, li trovai e andai alla cassa, che mi fece pagare 
                        <span className='parole'> {parole.numero} </span>
                        euro. Io, 
                        <span className='parole'> {parole.aggettivo4}</span>
                        , 
                        <span className='parole'> {parole.verbo4} </span> 
                        alla cassiera e dissi 
                        <span className='parole'> {parole.esclamazione}</span>
                        , io non spendo così tanto!" Me ne andai 
                        <span className='parole'> {parole.aggettivo5} </span>
                        e non feci più la frittata.
                    </div>
                    :
                    <div className="col-12 col-md-6">
                        Un 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo': e.target.value})} />
                        giorno mi venne fame e volli fare una frittata. Aprii il mio frigo 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo2': e.target.value})} />
                        e 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo': e.target.value})} />
                        dentro, ma era quasi vuoto, c'erano solo 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="cibo/sostantivo" onChange={(e) => setParole({...parole, 'ciboSostantivo': e.target.value})} />
                        e 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="cibo/sostantivo" onChange={(e) => setParole({...parole, 'ciboSostantivo2': e.target.value})} />
                        , e qualche 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo': e.target.value})} />
                        . Allora, 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo3': e.target.value})} />
                        , uscii e andai a 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo2': e.target.value})} />
                        ciò che mi serviva. Arrivai al 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="negozio" onChange={(e) => setParole({...parole, 'negozio': e.target.value})} />
                        più vicino e mi 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo3': e.target.value})} />
                        . Andai a cercare il 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo2': e.target.value})} />
                        e il 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="cibo/sostantivo" onChange={(e) => setParole({...parole, 'ciboSostantivo3': e.target.value})} />
                        per fare la frittata, li trovai e andai alla cassa, che mi fece pagare 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero': e.target.value})} />
                        euro. Io, 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo4': e.target.value})} />
                        , 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo4': e.target.value})} />
                        alla cassiera e dissi 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="esclamazione" onChange={(e) => setParole({...parole, 'esclamazione': e.target.value})} />
                        , io non spendo così tanto!" Me ne andai 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo5': e.target.value})} />
                        e non feci più la frittata.
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