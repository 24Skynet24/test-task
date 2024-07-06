import "./storeLink.scss"
import {storeLink} from "../../types/index"


const StoreLink = ({ img, subTitle, title, link }: storeLink) => {
    return (
        <a href={link} target="_blank" className="store_link">
            <div className="inner">
                <div className="img">
                    <img src={img} alt={title}/>
                </div>
                <div className="txt">
                    <span className="sub_title">{ subTitle }</span>
                    <span className="title">{ title }</span>
                </div>
            </div>
        </a>
    );
};

export default StoreLink;