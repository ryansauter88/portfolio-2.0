export default function Showcase(props) {

    return(
        <div className="show-container">
            <h1>{props.showObj.showName}</h1>
            <h3>Role: {props.showObj.role}</h3>
            <div className="show-first-box">
                <div className="description-text">
                    <p>{props.showObj.showDesc1}</p>
                </div>
                <div className="iframe-container">
                    <iframe src={props.showObj.youtubeLink}></iframe> 
                </div>
            </div>
            <div className="show-second-box">
                <p>{props.showObj.showDesc2}</p>
            </div>
        </div>
    )
}