import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class PayPalButton extends React.Component {
    render() {
        const { clearCart, history, total } = this.props;

        const onSuccess = (payment) => {
            clearCart();
            history.push("/");
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'USD';
    
        const client = {
            sandbox: process.env.REACT_APP_APP_ID,
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
            />
        );
    };
};