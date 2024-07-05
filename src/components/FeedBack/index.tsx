import "./feedback.scss"

const FeedBack = ({ userImg, userName, userLink, userTxt }) => {
    return (
        <article className="feedback">
            <div className="user">
                <div className="user_img">
                    <img src={userImg} alt="User image"/>
                </div>
                <div className="user_info">
                    <h5>{ userName }</h5>
                    <span>{ userLink }</span>
                </div>
            </div>
            <div className="txt">
                <span>{ userTxt }</span>
            </div>
        </article>
    )
}

export default FeedBack;