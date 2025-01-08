import axios from 'axios';

export const createPaymentIntent = async (amount) => {

    try {
      
      const response = await axios.post(
        'https://api.stripe.com/v1/payment_intents', 
        {
          amount,
          currency: 'usd',
        }, 
        {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      return response.data;

    } 
    catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  };