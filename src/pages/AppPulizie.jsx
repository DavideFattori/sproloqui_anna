import { useState, useRef } from "react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function AppPulizie() {

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
            "Cosa potrei fare oggi?" mi chiedo, (aggettivo). Fuori sta piovendo ed ho la giornata libera dal lavoro. "Credo che farò un po' di pulizie, questa casa sta diventando un/a (sostantivo)". Accendo il telefono e metto la riproduzione casuale, (Canzone/Sostantivo) di (Cantante/Nome) inizia. Prendo la (sostantivo) ed incomincio a (verbo) il pavimento. Una volta finito, vado in cucina a lavare le stoviglie sporche di almeno (numero) giorni, il lavandino era (aggettivo). Poi controllo il frigo in cerca di cibi scaduti. Ci sono (cibi) ammuffiti, (oggetti) di colori strani e latte che puzza di (sostantivo). Passo in salotto e (verbo) la libreria. Li noto un libro che amavo leggere da piccola: "le avventure del (mestiere) (Nome)", Quanti ricordi! Li vicino c'è anche un album di fotografie, che decido di (verbo). Una fotografia con mia/o (parente) in particolare mi riporta al giorno in cui ho (verbo) per la prima volta, una giornata (aggettivo). (Avverbio) rimetto l'album a posto e continuo con il mio lavoro. Arrivata in camera da letto decido di togliere le lenzuola per metterle a (verbo), mettendo al loro posto quelle di (materiale). Apro l'armadio ed una (quantità) di vestiti mi cade addosso. Tra le diverse magliette ne trovo una che pensavo di aver perso: è (colore) con una scritta che dice "(frase a caso)". Ora mi resta di fare solo il bagno. Pulisco lo specchio con il/lo (liquido) spray e libero l'armadietto dei medicinali da maschere al (cibo) e (sostantivo) di bellezza ormai inutili. Soddisfatta del mio lavoro, controllo l'orologio e noto che mancano ancora (numero) ore prima di cena. Credo che andrò a (verbo).
        </div>
    )
}