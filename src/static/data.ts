import {rating, storeLink, feedback, coin} from "../types/index";
import feedBackImg1 from "../assets/img/fd1.png"
import feedBackImg2 from "../assets/img/fd2.png"
import feedBackImg3 from "../assets/img/fd3.png"
import feedBackImg4 from "../assets/img/fd4.png"
import storeImg1 from "../assets/img/googleplay.svg"
import storeImg2 from "../assets/img/app.svg"
import btc from "../assets/img/Bitcoin.png"
import eth from "../assets/img/Ethereum.png"
import lit from "../assets/img/Litecoin.png"

const ratings: rating[] = [
    {
        rate: "20k+",
        subtitle: "subscribers",
    },
    {
        rate: "19,5K",
        subtitle: "successful cases",
    },
    {
        rate: "4.8/5",
        subtitle: "rating",
    },
]
const feedbacks: feedback[] = [
    {
        userImg: feedBackImg1,
        userName: "Lorenzo",
        userLink: "@lorenzoo",
        userTxt: "Amazing Telegram bot! Provides real-time crypto prices and news"
    },
    {
        userImg: feedBackImg2,
        userName: "Adalina",
        userLink: "@ada",
        userTxt: "Must-have bot for crypto traders. Accurate signals and analysis"
    },
    {
        userImg: feedBackImg3,
        userName: "Alexander",
        userLink: "@alex_x",
        userTxt: "Superb cryptocurrency bot! Quick updates and reliable data"
    },
    {
        userImg: feedBackImg4,
        userName: "Rushana",
        userLink: "@Hana",
        userTxt: "Efficient and user-friendly bot. Simplifies crypto trading tasks"
    },
]
const storeLinks: storeLink[] = [
    {
        img: storeImg1,
        subTitle: "get it on",
        title: "Google play",
        link: "https://play.google.com/",
    },
    {
        img: storeImg2,
        subTitle: "Available on the",
        title: "App Store",
        link: "https://www.apple.com/app-store/",
    },
]
const coins: coin[] = [
    {
        img: btc,
        name: "btc",
        alt: "Bitcoin"
    },
    {
        img: lit,
        name: "lit",
        alt: "Litecoin"
    },
    {
        img: eth,
        name: "eth",
        alt: "Ethereum"
    },
]

export {
    ratings,
    feedbacks,
    storeLinks,
    coins
}

