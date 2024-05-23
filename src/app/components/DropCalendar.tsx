import { Eye, FolderArchive, Grab } from 'lucide-react';
import capture2 from '/public/capturecalendar.jpeg';
import './styles/DropCalendar.scss';
import Image from "next/image";

const DropCalendar = () => {
    console.log();
    const cards = [
        {
            id: 1,
            icon: <Eye className="dropCalendar__icon"/>,
            text: 'Optimisez votre stratégie de contenu avec notre fonctionnalité de calendrier éditorial. Obtenez une vue d’ensemble claire de vos publications passées et à venir, le tout en un seul endroit.',
        },
        {
            id: 2,
            icon: <Grab className="dropCalendar__icon"/>,
            text: 'Découvrez notre calendrier éditorial interactif en glisser-déposer. Modifiez facilement les dates de publication ou programmez des posts en brouillon. Une gestion de contenu simplifiée à portée de main.',
        },
        {
            id: 3,
            icon: <FolderArchive className="dropCalendar__icon"/>,
            text: 'Un calendrier éditorial permettant d’avoir une vue d’ensemble sur les publications posté et programmé.',
        },
    ];
    return (
        <section className="dropCalendar">
            <h2 className="dropCalendar__title">
                Une organisation sans failles
            </h2>
            <p className="dropCalendar__subTitle">Un beau calendrier éditorial pour ne pas perdre le fil</p>
            <div className="dropCalendar__boxImg">
                <Image className="dropCalendar__img" src={capture2} alt="" />
            </div>
            <div className="dropCalendar__boxCard">
                {cards.map((card) => (
                    <div key={card.id} className="dropCalendar__card">
                        <div className="dropCalendar__cardBoxTop">
                            {card.icon}
                        </div>
                        <div className="dropCalendar__cardBoxBottom">
                            <p>{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default DropCalendar;
