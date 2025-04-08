import { useState } from 'react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/storie.css'
import { use } from 'react';

export default function AppNoia() {

    const [parole, setParole] = useState({
        'sostantivo': "",
        'verbo': "",
        'nome': "",
        'luogo': "",
        'verbo2': "",
        'sostantivo2': "",
        'verbo3': "",
        'esclamazione': "",
        'verbo4': "",
        'numero': "",
        'misuraTempo': "",
        'numero2': "",
        'verbo5': "",
        'animale': "",
        'sostantivo3': "",
        'aggettivo2': "",
        'sostantivo4': "",
        'parteCorpo': "",
        'sostantivoCibo': "",
        'aggettivo3': "",
        'verbo6': "",
        'verbo7': "",
        'saluto': "",
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
                    <h1 className="text-center">NOIA</h1>
                </div>
                {avvisoParole==true ? 
                    <div className="col-12 mb-3">
                        <h5 className="text-center text-danger">Compila tutti i campi</h5>
                    </div>
                : null}
                {mostraStoriaFinita==true ? 
                    <div className="col-12 col-md-6 mb-3">
                        Mi ritrovo rinchiusa qui, in questa dannatissima 
                        <span className='parole'> {parole.sostantivo}</span>
                        . Il tempo sembra non passare, ormai le uniche cose che posso fare sono 
                        <span className='parole'> {parole.verbo} </span>
                        e leggere. Mi manca uscire con i miei amici. Con 
                        <span className='parole'> {parole.nome} </span>
                        ricordo andavamo sempre al 
                        <span className='parole'> {parole.luogo} </span>
                        per 
                        <span className='parole'> {parole.verbo2} </span>
                        quei dannatissimi 
                        <span className='parole'> {parole.sostantivo2}</span>
                        . Non voglio 
                        <span className='parole'> {parole.verbo3}</span>
                        . 
                        <span className='parole'> {parole.esclamazione}</span>
                        ! Sto 
                        <span className='parole'> {parole.verbo4}</span>
                        , dite che sono pazza? E' da 
                        <span className='parole'> {parole.numero} </span>
                        <span className='parole'> {parole.misuraTempo} </span>
                        che sono rinchiusa. Ripenso con nostalgia alle grandi uscite con gli amici, eravamo sempre tantissimi, alle volte anche più di 
                        <span className='parole'> {parole.numero2}</span>
                        . Mi sentivo come se avessi dovuto 
                        <span className='parole'> {parole.verbo5} </span>
                        un 
                        <span className='parole'> {parole.animale}</span>
                        . Sicuramente ora non lo farei, come potrei con tutti questi 
                        <span className='parole'> {parole.sostantivo3} </span>
                        <span className='parole'> {parole.aggettivo2} </span>
                        è diventato impossibile perfino mangiarsi un 
                        <span className='parole'> {parole.sostantivo4}</span>
                        . Con questo della bava esce dal mio 
                        <span className='parole'> {parole.parteCorpo}</span>
                        . Quasi quasi vado a cucinarmi dello 
                        <span className='parole'> {parole.sostantivoCibo} </span>
                        <span className='parole'> {parole.aggettivo3}</span>
                        , è davvero troppo che lo 
                        <span className='parole'> {parole.verbo6}</span>
                        . Con questo vado a 
                        <span className='parole'> {parole.verbo7}</span>
                        . 
                        <span className='parole'> {parole.saluto}</span>
                        !
                    </div>
                    :
                    <div className="col-12 col-md-6">
                        Mi ritrovo rinchiusa qui, in questa dannatissima 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo': e.target.value})} />
                        . Il tempo sembra non passare, ormai le uniche cose che posso fare sono 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo': e.target.value})} />
                        e leggere. Mi manca uscire con i miei amici. Con 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="nome" onChange={(e) => setParole({...parole, 'nome': e.target.value})} />
                        ricordo andavamo sempre al 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="luogo" onChange={(e) => setParole({...parole, 'luogo': e.target.value})} />
                        per 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo2': e.target.value})} />
                        quei dannatissimi 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo2': e.target.value})} />
                        . Non voglio 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo3': e.target.value})} />
                        . 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="esclamazione" onChange={(e) => setParole({...parole, 'esclamazione': e.target.value})} />
                        ! Sto 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo4': e.target.value})} />
                        , dite che sono pazza? E' da 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero': e.target.value})} />
                        <input className="rounded mx-1 mt-1" type="text" placeholder="misura del tempo" onChange={(e) => setParole({...parole, 'misuraTempo': e.target.value})} />
                        che sono rinchiusa. Ripenso con nostalgia alle grandi uscite con gli amici, eravamo sempre tantissimi, alle volte anche più di 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero2': e.target.value})} />
                        . Mi sentivo come se avessi dovuto 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo5': e.target.value})} />
                        un 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="animale" onChange={(e) => setParole({...parole, 'animale': e.target.value})} />
                        . Sicuramente ora non lo farei, come potrei con tutti questi 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo3': e.target.value})} />
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo2': e.target.value})} />
                        è diventato impossibile perfino mangiarsi un 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo4': e.target.value})} />
                        . Con questo della bava esce dal mio 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="parte del corpo" onChange={(e) => setParole({...parole, 'parteCorpo': e.target.value})} />
                        . Quasi quasi vado a cucinarmi dello 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo/cibo" onChange={(e) => setParole({...parole, 'sostantivoCibo': e.target.value})} />
                        <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo3': e.target.value})} />
                        , è davvero troppo che lo 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo6': e.target.value})} />
                        . Con questo vado a 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo7': e.target.value})} />
                        . 
                        <input className="rounded mx-1 mt-1" type="text" placeholder="saluto" onChange={(e) => setParole({...parole, 'saluto': e.target.value})} />
                        !
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