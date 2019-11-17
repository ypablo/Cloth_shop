import React from 'react'
import CustomButton from "../custom-button/button"
import "./cart.styles.scss"

export default function Cart() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
