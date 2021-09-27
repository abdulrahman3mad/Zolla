import "./authForm.scss"
import {Button} from "@material-ui/core"
import React from "react"

function AuthForm(props){
    return (
        <form className="authForm">
            <label>البريد الإلكتروني</label>
            <input type="email" name="email"/>
            
            <label>كلمة السر</label>
            <span>سيظهر في كل الشهادات</span>
            <input type="password" name="password"/>

            { (props.authType == "signup") && (
                <>
                <label>الاسم الثلاثي</label>
                <input type="text" name="displayName" />

                <label>اسم المستخدم</label>
                <input type="text" name="userName"/>
                </>
            )}
            <Button className="signButton" variant="contained" color="primary" disableElevation>{props.authType=="signup"? "اشتراك": "تسجيل دخول"}</Button>
        </form>
    )
}

export default AuthForm