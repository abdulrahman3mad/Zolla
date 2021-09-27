import "./courses.scss"
import Header from "../../components/header/Header"
import ListItem from "../../components/listItem/ListItem"
import courseImg from "./listItem1.png"
import CourseSearchForm from "../../components/courseSearchForm/CourseSearchForm"
import List from "../../components/list/List"
function Course(){
    return (
        <section>
            <Header />
            <main className="mainContent">
                    <div className="content">
                        <div className="right">
                            <CourseSearchForm />
                        </div>
                        <div className="left">
                            <div className="courseStates">
                                <div className="container">
                                    <span>الكل</span>
                                    <span>الحالية</span>
                                    <span>المرتقبة</span>
                                    <span>المنتهية</span>
                                </div>
                            </div>
                            <List/>
                        </div>
                    </div>
            </main>
        </section>
    )
}

export default Course