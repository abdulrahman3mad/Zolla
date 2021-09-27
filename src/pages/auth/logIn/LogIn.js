import "../auth.scss"
import Header from "../../../components/header/Header"
import AuthForm from "../../../components/authForm/AuthForm"
import {Link} from "react-router-dom"

function LogIn(){
    return (
        <section className="authContainer">
            <Header />
            <h2>سجل دخول</h2>
            <p>ليس لديك حساب بعد؟<Link to="signup">انضم إلينا</Link></p>
            <main>
                <AuthForm authType="login"/>
            </main>
        </section>
    )
}


export default LogIn