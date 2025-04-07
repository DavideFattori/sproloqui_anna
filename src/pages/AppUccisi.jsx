import { useState } from "react";
import { Link } from 'react-router';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style/storie.css'

export default function AppUccisi() {

    const [parole, setParole] = useState({
        'aggettivo': "",
        'periodoAnno': "",
        'verbo': "",
        'nome': "",
        'aggettivo2': "",
        'materiale': "",
        'liquido': "",
        'sostantivo': "",
        'sostantivo2': "",
        'verbo2': "",
        'verbo3': "",
        'avverbio': "",
        'aggettivo3': "",
        'verbo4': "",
        'numero': "",
        'posizione': "",
        'sostantivo3': "",
        'aggettivo4': "",
        'avverbio2': "",
        'verbo5': "",
        'sostantivo4': "",
        'parteCorpo': "",
        'verbo6': "",
        'aggettivo5': "",
        'aggettivo6': "",
        'aggettivo7': "",
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
                <h1 className="text-center">QUELLA VOLTA CHE UCCISI</h1>
            </div>
            {avvisoParole==true ? 
                <div className="col-12 mb-3">
                    <h5 className="text-center text-danger">Compila tutti i campi</h5>
                </div>
            : null}
            {mostraStoriaFinita==true ? 
                <div className="col-12 mb-3">
                    Mi ricordo di quella volta che uccisi una persona. Era una 
                    <span className='parole'> {parole.aggettivo} </span>
                    giornata di
                    <span className='parole'> {parole.periodoAnno} </span>
                    e stavo
                    <span className='parole'> {parole.verbo} </span>
                    con
                    <span className='parole'> {parole.nome}</span>
                    . Avevamo deciso di fare un pic-nic e quindi portammo tutto il necessario: una tovaglia
                    <span className='parole'> {parole.aggettivo2}</span>
                    , dei piatti, posate e bicchieri di
                    <span className='parole'> {parole.materiale}</span>
                    ; e da mangiare delle pizze, un/a 
                    <span className='parole'> {parole.liquido}</span>
                    , dei/delle 
                    <span className='parole'> {parole.sostantivo} </span>
                    e un/a 
                    <span className='parole'> {parole.sostantivo2}</span>
                    . Ci 
                    <span className='parole'> {parole.verbo2} </span>
                    per terra e incominciammo a 
                    <span className='parole'> {parole.verbo3} </span>
                    <span className='parole'> {parole.avverbio}</span>
                    . Eravamo in un boschetto
                    <span className='parole'> {parole.aggettivo3} </span>
                    e non c'era nessuno.
                    <span className='parole'> {parole.verbo4} </span>
                    tanto, e stavamo mangiando l'ultima pizza. Lei/lui aveva già mangiato 
                    <span className='parole'> {parole.numero} </span>
                    fette, quindi l'ultima era la mia.  
                    <span className='parole'> {parole.nome} </span>
                    mi indicò un punto 
                    <span className='parole'> {parole.posizione} </span>
                    di me ed esclamò: "Guarda, un/a 
                    <span className='parole'> {parole.sostantivo3}</span>
                    !" Ed io, 
                    <span className='parole'> {parole.aggettivo4}</span>
                    , mi girai 
                    <span className='parole'> {parole.avverbio2}</span>
                    , ma non c'era niente. Quando mi voltai, la/lo vidi mangiarsi la mia ultima fetta di pizza! 
                    <span className='parole'> {parole.verbo5} </span>
                    il primo oggetto a portata di mano, che era un/a 
                    <span className='parole'> {parole.sostantivo4} </span>
                    e glielo/a piantai in/nel 
                    <span className='parole'> {parole.parteCorpo}</span>
                    . Lui/Lei 
                    <span className='parole'> {parole.verbo6} </span>
                    e cadde a terra 
                    <span className='parole'> {parole.aggettivo5}</span>
                    .
                    <span className='parole'> {parole.aggettivo6}</span>
                    , scavai una buca e ci buttai dentro il corpo 
                    <span className='parole'> {parole.aggettivo7} </span>
                    del/la mia/o amico/a e me ne andai facendo finta di niente. NESSUNO TOCCA LA MIA PIZZA!

                </div>
                :
                <div className="col-12">
                    Mi ricordo di quella volta che uccisi una persona. Era una 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo': e.target.value})} />
                    giornata di
                    <input className="rounded mx-1 mt-1" type="text" placeholder="periodoAnno" onChange={(e) => setParole({...parole, 'periodoAnno': e.target.value})} />
                    e stavo 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo': e.target.value})} />
                    con
                    <input className="rounded mx-1 mt-1" type="text" placeholder="nome" onChange={(e) => setParole({...parole, 'nome': e.target.value})} />
                    . Avevamo deciso di fare un pic-nic e quindi portammo tutto il necessario: una tovaglia 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo2': e.target.value})} />
                    , dei piatti, posate e bicchieri di 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="materiale" onChange={(e) => setParole({...parole, 'materiale': e.target.value})} />
                    ; e da mangiare delle pizze, un/a 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="liquido" onChange={(e) => setParole({...parole, 'liquido': e.target.value})} />
                    , dei/delle 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo': e.target.value})} />
                    e un/a 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo2': e.target.value})} />
                    . Ci 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo2': e.target.value})} />
                    per terra e incominciammo a 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo3': e.target.value})} />
                    <input className="rounded mx-1 mt-1" type="text" placeholder="avverbio" onChange={(e) => setParole({...parole, 'avverbio': e.target.value})} />
                    . Eravamo in un boschetto
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo3': e.target.value})} />
                    e non c'era nessuno.
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo4': e.target.value})} />
                    tanto, e stavamo mangiando l'ultima pizza. Lei/lui aveva già mangiato 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="numero" onChange={(e) => setParole({...parole, 'numero': e.target.value})} />
                    fette, quindi l'ultima era la mia. 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="nome" value={parole.nome} onChange={(e) => setParole({...parole, 'nome': e.target.value})} />
                    mi indicò un punto 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="posizione" onChange={(e) => setParole({...parole, 'posizione': e.target.value})} />
                    di me ed esclamò: "Guarda, un/a 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo3': e.target.value})} />
                    !" Ed io, 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo4': e.target.value})} />
                    , mi girai 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="avverbio" onChange={(e) => setParole({...parole, 'avverbio2': e.target.value})} />
                    , ma non c'era niente. Quando mi voltai, la/lo vidi mangiarsi la mia ultima fetta di pizza! 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo5': e.target.value})} />
                    il primo oggetto a portata di mano, che era un/a 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="sostantivo" onChange={(e) => setParole({...parole, 'sostantivo4': e.target.value})} />
                    e glielo/a piantai in/nel 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="parte del corpo" onChange={(e) => setParole({...parole, 'parteCorpo': e.target.value})} /> 
                    . Lui/Lei 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="verbo" onChange={(e) => setParole({...parole, 'verbo6': e.target.value})} />
                    e cadde a terra 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo5': e.target.value})} />
                    .
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo6': e.target.value})} />
                    , scavai una buca e ci buttai dentro il corpo 
                    <input className="rounded mx-1 mt-1" type="text" placeholder="aggettivo" onChange={(e) => setParole({...parole, 'aggettivo7': e.target.value})} />
                    del/la mia/o amico/a e me ne andai facendo finta di niente. NESSUNO TOCCA LA MIA PIZZA!
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