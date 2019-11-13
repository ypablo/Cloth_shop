import React from 'react'
import "./sign-in.styles.scss"
import SignIn from "../../components/sign-in/sign-in.comp"
import SignUp from "../../components/sign-up/sign-up"

export default function SignInAndSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}
