import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/home.css';

export default function AppHome() {


    return (
        <div className='container-fluid container-custom-home'>
            <div className="row flex justify-content-center">
                <div className="col-12 mb-5" data-aos="fade-down">
                    <h1 className='text-center fw-bold'>
                        Benvenuti in Simpatici Sproloqui
                    </h1>
                </div>
                <div className="col-10 mb-4" data-aos="fade-left" data-aos-delay="1000">
                    <h5 className='text-center'>
                        In questo gioco ci sono delle storie che vanno completate con le parole inserite dai partecipanti!
                    </h5>
                </div>
                <div className="col-12 mt-3">
                    <h3 className='text-center' data-aos="fade-up" data-aos-delay="2300">
                        Scegli una storia
                    </h3>
                </div>
                <div className="col-12 d-flex flex-column align-items-center fs-5 mt-3">
                    <Link className='nav-link linkCustom mb-2' to={'/treno'} data-aos="fade-right" data-aos-delay="2400">Prendere il treno</Link>
                    <Link className='nav-link linkCustom mb-2' to={'/matrimonio'} data-aos="fade-left" data-aos-delay="2500">Il matrimonio</Link>
                    <Link className='nav-link linkCustom mb-2' to={'/uccisi'} data-aos="fade-right" data-aos-delay="2600">Quella volta che uccisi</Link>
                    <Link className='nav-link linkCustom mb-2' to={'/frittata'} data-aos="fade-left" data-aos-delay="2700">La frittata</Link>
                    <Link className='nav-link linkCustom mb-2' to={'/tg'} data-aos="fade-right" data-aos-delay="2800">TG attualità</Link>
                </div>
            </div>
        </div>
    )
}
