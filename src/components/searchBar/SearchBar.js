import "./searchBar.scss"
import {Button} from "@material-ui/core"

function SearchBar(){
    return (
        <form className="searchBarForm">
            <input type="text" placeholder="ماذا تريد أن تتعلم اليوم؟"/>
            <Button className="searchButton" variant="contained" disableElevation color="primary">بحث</Button> 
        </form>
    )
}

export default SearchBar