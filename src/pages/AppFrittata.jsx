import { useState, useRef } from "react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function AppFrittata() {

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
            Un (aggettivo) giorno mi venne fame e volli fare una frittata. Aprii il mio frigo (aggettivo) e (verbo) dentro, ma era quasi vuoto, c'erano solo (cibo/sostantivo) e (cibo/sostantivo), e qualche (sostantivo).
            Allora, (aggettivo), uscii e andai a (verbo) ciò che mi serviva. Arrivai al (negozio) più vicino e mi (verbo). 
            Andai a cercare il (sostantivo) e il (cibo/sostantivo) per fare la frittata, li trovai e andai alla cassa, che mi fece pagare (numero) euro. Io, (aggettivo), (verbo) alla cassiera e dissi (esclamazione), io non spendo così tanto!" Me ne andai (aggettivo) e non feci più la frittata.
        </div>
    )
}