import { FileText, Video, Image as IconImage } from 'lucide-react';
import media from '/public/mediatheque.jpeg';
import './styles/Medias.scss';
import Image from "next/image";


const Medias = () => {
    const cards = [
        {
            id: 1,
            icon: <IconImage/>,
            text: 'blabla',
        },
        {
            id: 2,
            icon: <Video />,
            text: 'blabla',
        },
        {
            id: 3,
            icon: <FileText />,
            text: 'blabla',
        },
    ];
    return (
        <section className="medias">
            <h2 className="medias__title">
                Un espace pour tes médias
            </h2>
            <p className="medias__subTitle"/>

            <div className="medias__imgBox">
                <Image className="medias__img" src={media} alt={''}/>
            </div>
            <div className="medias__cardBox">
                {cards.map((card) => (
                    <div key={card.id} className="medias__card">
                        {card.icon}
                        {card.text}
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Medias;
