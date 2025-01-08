import { NextRequest, NextResponse } from "next/server";

const stripe =  require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request){

    try {

        const { amount } = await request.json();

        const paymentIntent = await stripe.paymentIntents.create(
            {
                amount: amount,
                currency: "usd",
                automatic_payment_methods: { enabled: true }
            }
        );

        return NextResponse.json({ clientSecret: paymentIntent.client_secret })

    }
    catch (error) {

        console.log("Error de la API Next: ", error)

        return NextResponse.json(
            { error: 'Error de la API Next JSON: '+error},
            { status: 500 }
        )
    }

}