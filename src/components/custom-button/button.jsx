import React from 'react'
import "./button.styles.scss"

export default function CustomButton({ children, inverted, isGoogleSignIn, ...otherProps }) {
    return (
        <button className={`${inverted ? "inverted" : ""}
        ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
            {children}
        </button >
    )
}
