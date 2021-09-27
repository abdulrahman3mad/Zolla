import "./loading.scss"
import Logo from "./logo.png"

function Loading(){
    return (
        <div className="loadingContainer">
            <img src={Logo} />
            <p>جاري الإنتقال...</p>
        </div>
    )
}

export default Loading