import "./list.scss"
import ListItem from "../listItem/ListItem"
import listItemImg1 from "./listItem1.png"
import listItemImg2 from "./listItem2.png"
import listItemImg3 from "./listItem3.png"
import {Link} from "react-router-dom"
function List(props){
    return (
        <section className="list">
            <div className="container">
                <div class="upperTitle">
                    <h1>{props.title}</h1>
                   <Link to="courses"><span className="watchAllItems">تصفح الكل</span></Link>
                </div>
                <section className="items">
                    <Link to="course">
                        <ListItem 
                        img={listItemImg3} 
                        category="لغات" 
                        price="1500ج" 
                        description="برنامج اللغة العربية لغير المتحدثين بها" 
                        />
                    </Link>
                    <Link to="course">
                        <ListItem 
                        img={listItemImg3} 
                        category="لغات" 
                        price="1500ج" 
                        description="برنامج اللغة العربية لغير المتحدثين بها" 
                        />
                    </Link>
                    <Link to="course">
                        <ListItem 
                        img={listItemImg3} 
                        category="لغات" 
                        price="1500ج" 
                        description="برنامج اللغة العربية لغير المتحدثين بها" 
                        />
                    </Link>
                    <Link to="course">
                        <ListItem 
                        img={listItemImg3} 
                        category="لغات" 
                        price="1500ج" 
                        description="برنامج اللغة العربية لغير المتحدثين بها" 
                        />
                    </Link>
                </section>
            </div>
        </section>
    )
}

export default List