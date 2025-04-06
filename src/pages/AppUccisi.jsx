import { useState, useRef } from "react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function AppUccisi() {

    let parole = {
            'numero': "",
            'nazione/citta': "",
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
        }
    



    return (
        <div className="container-fluid">
            Mi ricordo di quella volta che uccisi una persona. Era una (aggettivo) giornata di (periodo dell'anno) e stavo (verbo) con (Nome). Avevamo deciso di fare un pic-nic e quindi portammo tutto il necessario: una tovaglia (aggettivo), dei piatti, posate e bicchieri di (materiale); e da mangiare delle pizze, un/a (liquido), dei/delle (sostantivo) e un/a (sostantivo). Ci (verbo) per terra e incominciammo a (verbo) (avverbio). Eravamo in un boschetto (aggettivo) e non c'era nessuno. (Verbo) tanto, e stavamo mangiando l'ultima pizza. Lei/lui aveva già mangiato (numero) fette, quindi l'ultima era la mia. (Nome) mi indicò un punto (posizione) di me ed esclamò: "Guarda, un/a (Sostantivo)!" Ed io, (aggettivo), mi girai (avverbio), ma non c'era niente. Quando mi voltai, la/lo vidi mangiarsi la mia ultima fetta di pizza! (Verbo) il primo oggetto a portata di mano, che era un/a (sostantivo) e glielo/a piantai in/nel (parte del corpo). Lui/lei (verbo) e cadde a terra (aggettivo). (Aggettivo), scavai una buca e ci buttai dentro il corpo (aggettivo) del/la mia/o amico/a e me ne andai facendo finta di niente. NESSUNO TOCCA LA MIA PIZZA!
        </div>
    )
}