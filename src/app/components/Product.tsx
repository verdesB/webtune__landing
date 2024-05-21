import webtune from '/public/webtune1.svg';
import capture1 from '/public/Capture 1.jpeg';
import './styles/Product.scss'
import {Button} from "./ui/Button";
import Image from "next/image";

const Product = () => (
    <section className="product" id="#product">
        <div className='product__boxLeft'>
            <div className="product__imgSubBox">
                <Image className="product__logo" src={webtune} alt="logo webtune"/>
            </div>
            <div className="product__titleBox">
                <h2 className="product__title">
                    Faites vibrer vos réseaux sociaux à chaque publication
                </h2>
            </div>
            <div className="product__subButton">
                <Button variant="outline" className="product__button">Commencer</Button>
            </div>
        </div>
        <div className="product__boxRight">
            <Image
                className="product__capture"
                src={capture1}
            />
        </div>
    </section>
);
export default Product;
