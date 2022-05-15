import React from 'react'
import axios from 'axios';
import { useTranslation } from 'react-i18next'

export default function Donate() {

    const { t } = useTranslation();

    const loadScript = (src) => {
        return new Promise((resovle) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resovle(true);
            };

            script.onerror = () => {
                resovle(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (amount) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("You are offline... Failed to load Razorpay SDK");
            return;
        }

        const options = {
            key: "USE_YOUR_API",
            currency: "INR",
            amount: amount * 1000,
            name: "R3hab the Refugee",
            description: "Thanks for purchasing",

            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert("Payment Successfully");
            },
            prefill: {
                name: "R3hab the Refugee",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className='text-white grid place-items-center'>
            <h1 className="text-5xl py-2">{t('navLinkDonate')}</h1>

            <div className='py-8 grid place-items-center min-h-screen'>
                <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl text-white' onClick={() => displayRazorpay(5)}>Pay amount</button>
            </div>

        </div>
    )
}
