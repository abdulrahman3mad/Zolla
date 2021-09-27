import Header from "../../../components/header/Header"
import AuthForm from "../../../components/authForm/AuthForm"
import {Link} from "react-router-dom"
import "../auth.scss"

function SignUp(){
    return (
        <section className="authContainer">
            <Header />
            <h2>انضم إلينا</h2>
            <p>لديك حساب بالفعل? <Link to="login">سجل دخول</Link></p>
            <main>
                <AuthForm authType="signup" />
            </main>
        </section>
    )
}

export default SignUp