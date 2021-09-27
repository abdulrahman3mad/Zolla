import "./learnersOpinions.scss"
import learnersImg from "./feedback.png"
import learnerImg from "./listItem3.png"
import {Link} from "react-router-dom"

function LearnersOpinions(){
    return (
        <section className="learnersOpinions">
            <div className="container">
                <div className="content">
                    <div className="info">
                        <p class="title">ما يقوله المتعلمون عنا</p>
                        {(window.innerWidth<=769) &&
                          <img src={learnersImg} className="learnersImg" />
                        }   
                        <p className="learnerTalk">منصة مذهلة ورائعة للتعلم، وبفضل محتواها التعليمي المتميز تعلمت الكثير حقاًمنصة مذهلة ورائعة للتعلم، وبفضل محتواها التعليمي المتميز تعلمت الكثير حقاًمنصة مذهلة ورائعة للتعلم، وبفضل محتواها التعليمي المتميز تعلمت الكثير حقاً</p>
                        <div className="learnerInfo">
                            <img src={learnerImg} className="learnerImg"/>
                            <div>
                                <Link to="profile">
                                    <p>محمد بن علي</p>
                                    <span>مهندس معماري</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {(window.innerWidth >= 769) && 
                        <img src={learnersImg} className="learnersImg" />
                    }
                </div>
            </div>
        </section>
    )
}

export default LearnersOpinions