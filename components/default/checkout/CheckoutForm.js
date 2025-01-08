'use client'
import React from 'react';
import { CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import convertToCents from '../helpers/convertToCents';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import initConfig from '@/components/configs/initConfig';
import { useRouter } from 'next/navigation';

// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useState } from 'react';
// import { Box, Button } from '@mui/material';

const CheckoutForm = ({ onClose, amount, open }) => {

  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    fetch("/api/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: convertToCents(amount)
        })
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

  }, [amount]);

  const handleSubmit = async (event) => {

    event.preventDefault();
    setLoading(true);

    if(!stripe || !elements){
      return;  
    }

    const { error: submitError } = await elements.submit();

    if(submitError){
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'http://localhost:3000'+'/team-details'
      }
    });

    if(error){
      setErrorMessage(error.message);
    }
    
    setLoading(false)
    onClose()
    router.push('/team-details')

  };

  if(!clientSecret || !stripe || !elements){

    return (
      <div 
        className='
          flex 
          items-center,
          justify-center
        '
      >
        <div
          className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid
          border-current border-e-transparent align-[-0.125en] text-surface
          motion-reduce: animate-[spin_1.5s_linear_infinite] dark:text-white'
          role="status"
        >
          <span 
            className='!absolute !-m-px !h-px !w-px !overflow-hidden
            !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'
          >
            Loading...
          </span>

        </div>

      </div>
    )

  }

  return (
    <Modal
      open={open}
      onClose={() => { }}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '455px',
          height: '600px',
          borderRadius: '15px',
          justifyContent: 'center',
          alignItems: 'center',
          outline: 'none',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',


        }}
      >
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
        >
          <img src="/assets/images/shapes/Banner1800gray.png" alt="" />
        </div>

        <div className="welcome-text" style={{marginBottom: 10}}>
          <p> Pago con Tarjeta </p>
        </div>

        <form onSubmit={handleSubmit}>
          {clientSecret && <PaymentElement  
            // options={{
            //   paymentMethodOrder: ['card'],
            // }}
          />}
          {errorMessage && <div> {errorMessage} </div>}
          <button
            className="thm-btn-session"
            disabled={!stripe || loading}
            style={{
              marginTop: 20,
              width: '380px',
              outline: 'none',
              border: 'none',
              borderRadius: 5,
            }}
          > 
            {/* Pay {amount} */}
            {!loading ? 'Pay $ '+amount+' USD ': 'Loading...'}
          </button>
        </form>
      </Box>
    </Modal>
  )
};

export default CheckoutForm;