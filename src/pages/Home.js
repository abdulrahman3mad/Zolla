import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import List from "../components/list/List"
import Slider from "../components/slider/Slider"
import LearnersOpinions from "../components/learnersOpinions/LearnersOpinions"

function Home(){
    return (
        <div className="homeContainer">
            <Header />
            <Slider />
            <List title="الدورات الحالية"/>
            <List title="الدورات القادمة"/>
            <LearnersOpinions />
        </div>
    )
}

export default Home

