import Image from "next/image";
import products from '/public/productivity.png';
import './styles/Productivity.scss';

const Productivity = () => {
    console.log();
    return (
        <section className="productivity bg-grid-black/[0.2] bg-[rgb(191,191,191)]">
            <h2 className="productivity__title">
                Gagnez en productivité
            </h2>
            <p className="productivity__subTitle">Un pour les gouverner tous</p>
            <div className="productivity__box">
                <div className="productivity__imgBox">
                    <Image className="productivity__img" src={products} alt="" />
                </div>
                <div className="productivity__textBox">
                    <p className="productivity__text">
                        L’objectif principal de notre application est de centraliser les différents réseaux sociaux, minimisant ainsi les manipulations nécessaires pour l’utilisateur sur chaque plateforme.</p>
                    <p className="productivity__text">En regroupant tout en un seul endroit, nous permettons à l’utilisateur de rester concentré sur le contenu sans se perdre dans les transitions entre différentes applications.</p>

                </div>
            </div>
        </section>
    );
};
export default Productivity;
