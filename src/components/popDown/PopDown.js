import "./popDown.scss"
import SearchBar from "../searchBar/SearchBar"
import {Button} from "@material-ui/core"

function PopDown(){
    return (
        <div className="popDownContent">
            <ul>
                <li>الصفحة الرئيسية</li>
                <li>المواد المرتقبة</li>
                <li>المواد الحالية</li>
                <li className="siteSystem">
                    <Button className="headerSignButton" variant="outlined">دخول</Button>
                    <span className="lang">En</span>
                </li>
                <li>
                 <SearchBar />
                </li>
            </ul>
        </div>
    )
}

export default PopDown