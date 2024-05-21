import { Images, PencilLine, Sparkles } from 'lucide-react';
import gpt from '/public/gpt.jpeg';
import './styles/Assistant.scss';
import Image from "next/image";


const Assistant = () => {
    const Ia = {
        icon: <Sparkles style={{ height: '4rem', width: '4rem', color: '#505050' }} />,
        text: <p>
            L&rsquo;Intelligence Artificielle (IA) est plus que jamais d&rsquo;actualité. Elle est là pour nous aider dans de
            nombreux domaines, y compris la gestion des réseaux sociaux. Grâce à l&rsquo;IA, nous pouvons analyser les
            tendances, comprendre les préférences de notre public et optimiser nos publications. Cependant, il est
            important de se rappeler que l&rsquo;âme d&rsquo;une publication vient de nous, les humains. L&rsquo;IA est un outil
            puissant, mais elle ne remplace pas la créativité, l&rsquo;empathie et l&rsquo;humanité que nous apportons à nos
            publications. Ensemble, l&rsquo;IA et l&rsquo;humanité peuvent créer une expérience de gestion des réseaux sociaux
            véritablement exceptionnelle.
        </p>,
    };
    const IaFeatures = [
        {
            id: 1,
            icon: <Images />,
            text: <p>
                La génération d&apos;images par IA crée des visuels uniques pour vos posts. À partir de descriptions
                textuelles ou d&apos;images existantes, elle produit du contenu visuel innovant et attrayant.
            </p>,
        },
        {
            id: 2,
            icon: <PencilLine />,
            text: <p>
                L&apos;IA est votre alliée pour optimiser vos textes et stimuler votre créativité. Elle reformule vos écrits
                pour une meilleure clarté et vous propose des idées de posts innovantes.
            </p>,
        },
    ];
    return (

        <section className="assistant bg-grid-black/[0.2] bg-[rgb(191,191,191)]">

            <h2 className="assistant__title">
                Un assistant polyvalent
            </h2>
            <p className="assistant__subTitle">toujours la pour t&apos;aider</p>
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
                    <Image className="assistant__cardRightImg" src={gpt} alt="gpt4" />
                </div>
            </div>
            {/*<GridBackgroundDemo />*/}
        </section>
    );
};
export default Assistant;
