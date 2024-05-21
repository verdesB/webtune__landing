import { Images, PencilLine, Sparkles } from 'lucide-react';
import gpt from '/public/gpt.jpeg';
import './styles/Assistant.scss';
import Image from "next/image";


const Assistant = () => {
    const Ia = {
        icon: <Sparkles style={{ height: '4rem', width: '4rem', color: '#505050' }} />,
        text: <p>
            L’Intelligence Artificielle (IA) est plus que jamais d’actualité. Elle est là pour nous aider dans de
            nombreux domaines, y compris la gestion des réseaux sociaux. Grâce à l’IA, nous pouvons analyser les
            tendances, comprendre les préférences de notre public et optimiser nos publications. Cependant, il est
            important de se rappeler que l’âme d’une publication vient de nous, les humains. L’IA est un outil
            puissant, mais elle ne remplace pas la créativité, l’empathie et l’humanité que nous apportons à nos
            publications. Ensemble, l’IA et l’humanité peuvent créer une expérience de gestion des réseaux sociaux
            véritablement exceptionnelle.
        </p>,
    };
    const IaFeatures = [
        {
            id: 1,
            icon: <Images />,
            text: <p>
                La génération d’images par IA crée des visuels uniques pour vos posts. À partir de descriptions
                textuelles ou d’images existantes, elle produit du contenu visuel innovant et attrayant.
            </p>,
        },
        {
            id: 2,
            icon: <PencilLine />,
            text: <p>
                L’IA est votre alliée pour optimiser vos textes et stimuler votre créativité. Elle reformule vos écrits
                pour une meilleure clarté et vous propose des idées de posts innovantes.
            </p>,
        },
    ];
    return (

        <section className="assistant bg-grid-black/[0.2] bg-[rgb(191,191,191)]">

            <h2 className="assistant__title">
                Un assistant polyvalent
            </h2>
            <p className="assistant__subTitle">toujours la pour t'aider</p>
            <div className="assistant__containerCards">
                <div className="assistant__cardLeft">
                    <div className="assistant__cardBoxImg">
                        {Ia.icon}
                    </div>
                    <div className="assistant__cardBoxText">
                        {Ia.text}
                    </div>
                </div>
                <div className="assistant__cardMiddle">
                    {IaFeatures.map((item) => (
                        <div key={item.id} className="assistant__subCard">
                            <div className="assistant__subCardBoxIcon">
                                {item.icon}
                            </div>
                            <div className="assistant__subCardBoxText">
                                {item.text}
                            </div>
                        </div>
                    ))}

                </div>
                <div className="assistant__cardRight">
                    <Image className="assistant__cardRightImg" src={gpt} />
                </div>
            </div>
            {/*<GridBackgroundDemo />*/}
        </section>
    );
};
export default Assistant;
