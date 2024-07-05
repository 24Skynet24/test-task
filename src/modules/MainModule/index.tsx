import ButtonGradient from "../../components/Button/index";
import StoreLink from "../../components/StoreLink/index";
import "./mainModule.scss"

import {ratings, storeLinks, feedbacks, coins} from "../../static/data";
import {rating, storeLink, feedback, coin} from "../../types/index";
import FeedBack from "../../components/FeedBack/index";


const RateEl = ({rate, subtitle}: rating) => {
    return (
        <article>
            <h6>{rate}</h6>
            <span>{subtitle}</span>
        </article>
    )
}

const MainModule = () => {
    return (
        <main>
            {coins.map((el:coin, id: number) => {
                return <img src={el.img} alt={el.alt} className={`absolute_img ${el.name}`} key={id}/>
            })}
            <div className="container">
                {feedbacks.map((el:feedback, id: number) => {
                    return <div className={`absolute_feedback feed_${id}`} key={id}><FeedBack {...el}/></div>
                })}

                <h1>
                    Do you want to Learn more About cryptocurrencies
                    <span className="gradient"> quickly and easily ?</span>
                </h1>
                <span className="more_info">
                    Subscribe to our channel to learn more
                </span>
                <div className="ratings">
                    { ratings.map((el: rating, id:number) => {
                        return <RateEl {...el} key={id}/>
                    }) }
                </div>
                <ButtonGradient/>
                <div className="store_links">
                    {storeLinks.map((el: storeLink, id: number) => {
                        return <StoreLink {...el} key={id}/>
                    })}
                </div>
            </div>
        </main>
    )
}
export default MainModule;