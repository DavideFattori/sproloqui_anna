import { useState, useRef } from "react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function AppMatrimonio() {

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
            Oggi devo andare al matrimonio di mia cugina (Nome donna), quindi incomincio a prepararmi. Prendo un (abbigliamento) (colore) e lo indosso (avverbio), poi infilo le mie scarpe (marca). Una volta finito di preparmi raggiungo il mio (veicolo) e mi metto alla guida (avverbio). Una volta arrivata, la cerimonia (aggettivo) era già incominciata, e dopo essersi scambiati le (sostantivi), vado (avverbio) verso il buffet, ero lì solo per quello. C'era di tutto da (cibo) a (sostantivo), da (sostantivo) a (cibo), da bere c'era (liquido) (aggettivo) e (liquido) (aggettivo). Mi (verbo) sul tavolo e prendo (quel briciolo che basta) di (cibo) e vado a mangiare (avverbio) le mie cose. Ma subito vedo la sposa scappare inseguita da un (animale) (aggettivo) mentre (verbo). Dovemmo scappare tutti e io tornai a casa senza aver mangiato.
        </div>
    )
}