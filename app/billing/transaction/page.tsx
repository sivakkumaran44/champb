import React from 'react'
import BillingNavigation from '../components/PlanandPricing/BillingNavigation'
import TransactionsPage from './components/TransactionsAndInvoices/TransactionsPage'

const page = () => {
  return (
    <div>
      <BillingNavigation/>
        <TransactionsPage/>
    </div>
  )
}

export default page