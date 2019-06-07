import React from 'react'
import { PizzaTracker } from './PizzaTracker'

export class App extends React.Component {
  static initialOrders = [
    { id: 0, customerName: 'Steve', progress: 0 },
    { id: 1, customerName: 'Mary', progress: 1 },
    { id: 2, customerName: 'Tom', progress: 2 },
    { id: 3, customerName: 'Sue', progress: 3 },
    { id: 4, customerName: 'David', progress: 4 },
  ]

  state = {
    orders: App.initialOrders,
  }

  updateProgress = (orderId, newProgress) => {
    let newOrders = []
    this.state.orders.forEach((value) => {
      if (value.id === orderId) value.progress = newProgress
      newOrders.push(value)
    })
    this.setState({ orders: newOrders })
  }

  completeOrder = (orderId) => {
    let newOrders = []
    this.state.orders.forEach((value) => {
      if (value.id === orderId) return
      newOrders.push(value)
    })
    this.setState({ orders: newOrders })
  }

  render() {
    const { orders } = this.state
    return (
      <div className="App">
        {orders.map((value) => {
          return <PizzaTracker
            progress={value.progress} customerName={value.customerName}
            orderReceived={value.orderReceived}
            id={value.id} key={value.id}
            onUpdateProgress={this.updateProgress}
            onCompleteOrder={this.completeOrder}
          />
        })}
      </div>
    )
  }
}
