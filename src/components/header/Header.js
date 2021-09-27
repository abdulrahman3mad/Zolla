import React from "react"
import logo from "./logo.png";
import {Button} from "@material-ui/core"
import ListIcon from '@material-ui/icons/List';
import PopDown from "../popDown/PopDown"
import {useState, useRef} from "react"
import {Link} from "react-router-dom"
import "./header.scss"


function Header(){
    const [listClicked, setListClicked] = useState(false)
    const headerRef = useRef()

    function handleListClick(){
        setListClicked(!listClicked)        
    }
    
    window.onscroll = function (){
        if(window.pageYOffset > 120){
            headerRef.current.className= "headerStyleScroll";
            return
        }
        headerRef.current.className= "";
    }

    return(
        <header ref={headerRef}>
            <div className="container">
                <div className="content">
                    <div className="right">
                        <Link to="/"><img src={logo} className="logo"/></Link>
                        <ul>
                            <li><Link to ="/">الصفحة الرئيسية</Link></li>
                            <li><Link to ="/">المواد المرتقبةة</Link></li>
                            <li><Link to ="/">الصفحة الحالية</Link></li>
                        </ul>
                    </div>
                    <div className="left">
                        <Link to="signup">
                            <Button variant="contained" fontWeight="fontWeightBold" color="secondary" 
                            disableElevation >سجل مجاناً</Button>
                        </Link>
                        <Link to="login">
                            <Button className="logIn">دخول</Button>
                        </Link>
                        <ListIcon className="listIcon" onClick={handleListClick}/>
                        {
                            listClicked && <PopDown />
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header