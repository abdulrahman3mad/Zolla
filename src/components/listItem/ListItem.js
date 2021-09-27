import "./listItem.scss"
import logo from "./logo.png"
import {Button} from "@material-ui/core"

function ListItem(props){
    return (
        <div className="listItem">
            <img src={props.img} />
            <div className="info">
                <div>
                    <Button disabled variant="contained" color="primary" disableElevation size="small" >{props.category}</Button>
                    <span className="price">{props.price}</span>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ListItem