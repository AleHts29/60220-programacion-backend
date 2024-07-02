import Stripe from 'stripe';
import config from '../config/config.js';


export default class PaymentService {
    constructor() {
        this.stripe = new Stripe(config.stripeSecretKey)
    }


    createPaymentIntent = async (data) => {
        const paymentIntent = await this.stripe.paymentIntents.create(data)
        console.log("Stripe result:");
        console.log(paymentIntent);
        return paymentIntent
    }
}