import "./slider.scss"
import SearchBar from "../searchBar/SearchBar"
import {Typography, Button} from "@material-ui/core"

function Slider(){
    return (
        <div className="slider">
            <h1>تعلم<span> فعال</span> من خلال منصة ظُّلّة</h1>
            <SearchBar />
        </div>
    )
}

export default Slider