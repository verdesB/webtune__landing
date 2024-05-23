import check from '/public/check.png';
import { Button } from './ui/Button';
import './styles/Pricing.scss';
import Image from "next/image";
import {any} from "prop-types";

const Pricing = () => {
    console.log();
    const prices = [
        {
            id: 1,
            checks: 6,
            text: <div className="pricing__boxText">
                <p>Gratuit</p>
                <p>/ Mois</p>
            </div>,
        },
        {
            id: 1,
            checks: 6,
            text: <div className="pricing__boxText">
                <p>Plan Unique</p>
                <p>/ Mois</p>
            </div>,
        },
        {
            id: 1,
            checks: 6,
            text: <div className="pricing__boxText">
                <p>Plan entreprise</p>
                <p>/ Mois</p>
            </div>,
        },
    ];
    return (
        <section className="pricing bg-grid-black/[0.2] bg-[rgb(191,191,191)]">
            <h2 className="pricing__title">
                ... Et une tarification minimale
            </h2>
            <p className="pricing__subTitle">Nous voulons que notre application soit a la portée de tous .</p>
            <div className="pricing__cardsBox">
                {prices.map((price, i) => (
                    <div key={price.id} className="pricing__card">
                        {price.text}
                        <ul className="pricing__cardList">
                            {Array(price.checks).fill(any).map((_, i) => (
                                <li key={i}><Image className="pricing__cardCheck" src={check} alt={''}/></li>
                            ))}
                        </ul>
                        <div className="pricing__cardAction">
                            <Button className="pricing__cardButton">Créer un compte</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};
export default Pricing;
