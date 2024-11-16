import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export type StripeError = {
  type: string
  message: string
  code?: string
  decline_code?: string
  payment_intent?: Stripe.PaymentIntent
}

export type CartItemMetadata = {
  templateId: string
  tier: string
  quantity: number
  price: number
}

export type StripeMetadata = {
  requestId: string
  orderItems: string // JSON stringified CartItemMetadata[]
  customerEmail?: string
  customerName?: string
}

export type PaymentIntentResponse = {
  clientSecret: string
  amount: number
  requestId: string
}