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
                    <div className="productivity__card">
                        <p className="productivity__text">
                            Découvrez la simplicité de la gestion des réseaux sociaux avec Webtune. Plus besoin de jongler entre différentes plateformes, notre solution vous permet
                            de gérer tous vos réseaux sociaux en un seul endroit. Avec une interface intuitive et
                            organisée, vous pouvez facilement suivre, analyser et interagir avec votre public.
                            Simplifiez votre vie numérique et augmentez votre productivité Webtune.</p>
                    </div>
                    <div className="productivity__card">
                        <p className="productivity__text">Optimisez votre temps sur les réseaux sociaux avec notre application web tout-en-un. Gérez tous vos comptes de manière centralisée et organisée. Que vous soyez un professionnel du marketing ou un utilisateur quotidien, naviguez efficacement dans le monde des médias sociaux. Essayez notre application et découvrez une nouvelle façon de gérer vos réseaux sociaux.</p>
                   </div>
                </div>
            </div>
        </section>
    );
};
export default Productivity;
