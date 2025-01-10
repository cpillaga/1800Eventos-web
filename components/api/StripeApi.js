import initConfig from "../configs/initConfig";
import axios from 'axios';

const CONSULTAR_STRIPE_URL = initConfig.host + "/api/stripe/consultarStripe";

export function consultar_stripe(data) {

    return axios.post(
        
        `${CONSULTAR_STRIPE_URL}`, 
        data,
        {
            timeout:50000
        }
    )
        .then(r=> r) 
        .catch(err => err)

}

// export const createPaymentIntent = async (amount) => {

//     try {
      
//       const response = await axios.post(
//         'https://api.stripe.com/v1/payment_intents', 
//         {
//           amount,
//           currency: 'usd',
//         }, 
//         {
//           headers: {
//             'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//       );

//       return response.data;

//     } 
//     catch (error) {
//       console.error('Error creating payment intent:', error);
//       throw error;
//     }
//   };