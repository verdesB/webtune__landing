import { Eye, FolderArchive, Grab } from 'lucide-react';
import capture2 from '/public/Capture d’écran_7-5-2024_111442_localhost.jpeg';
import './styles/DropCalendar.scss';
import Image from "next/image";

const DropCalendar = () => {
    console.log();
    const cards = [
        {
            id: 1,
            icon: <Eye className="dropCalendar__icon"/>,
            text: 'Un calendrier éditorial permettant d’avoir une vue d’ensemble sur les publications posté et programmé.',
        },
        {
            id: 2,
            icon: <Grab className="dropCalendar__icon"/>,
            text: 'Un calendrier éditorial permettant d’avoir une vue d’ensemble sur les publications posté et programmé.',
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
