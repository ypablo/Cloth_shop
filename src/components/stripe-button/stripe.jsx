import React from 'react'
import "./stripe.styles.scss"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_PVKprtmFXFILedSt3DILX8nw001jmFALud"
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Cloths Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton


