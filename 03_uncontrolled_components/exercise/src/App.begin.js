import React from 'react'
import './App.scss'
import { formDataToObject } from './lib/formDataToObject'

/**
 * Goal:
 * - Implement EditPizza to allow user to configure their pizza size and toppings
 * - Have `EditPizza` return the data from the form to the `onSave` prop as a new pizza configuration
 * - In `App`, take the new pizza and update the pizza in state
 * - Be able to begin editing a pizza that's been saved with `editPizza`
 * - Editing the pizza again should prepopulate the form with the current configuration of the pizza
 */

class EditPizza extends React.Component {
  savePizza = (e) => {
    /**
     * todo:
     * - prevent regular form event behavior
     * - gather form data using `formDataToObject` and return a new pizza object with updated values
     */
  }

  render() {
    const { pizza } = this.props
    return (
      <form onSubmit={this.savePizza}>
        <p>ID: {pizza.id}</p>
        <p>Size</p>
        <div>
          {/* give user choice among sm, md, lg values for pizza as radio buttons */}
          {/* remember to default to the current value for the pizza */}
        </div>
        <p>Toppings</p>
        <div>
          {/* give user choice among meat, veggie, cheese values for pizza toppings as checkboxes */}
          {/* give form input name should be `toppings[]` to denote it's an array */}
          {/* remember to default to the current value for the pizza */}
        </div>
        <button type="submit">Save</button>
      </form>
    )
  }
}

const Pizza = ({ pizza }) => (
  <span>ID: {pizza.id} | Size: {pizza.size} | Toppings: {pizza.toppings.join(', ')}</span>
)

let counter = 0

export class App extends React.Component {
  state = {
    pizzas: [],
  }

  handleSave = (pizza) => {
    /* todo: update the pizza in state */
  }

  startPizza = () => {
    const { pizzas } = this.state
    this.setState({ pizzas: [...pizzas, { id: counter++, editing: true, size: '', toppings: [] }] })
  }

  editPizza = (id) => {
    /* todo: update the pizza in state to be editing */
  }

  render() {
    const { pizzas } = this.state
    return (
      <div className="App">
        <h1>Pizza Yert</h1>
        <button onClick={this.startPizza}>Create New Pizza</button>
        {pizzas.map(pizza => (
          pizza.editing ? (
            <div className="pizza-row" key={pizza.id}>
              <EditPizza pizza={pizza} onSave={this.handleSave} />
            </div>
          ) : (
            <div className="pizza-row" key={pizza.id}>
              <Pizza pizza={pizza} />
              <button onClick={() => { this.editPizza(pizza.id) }}>Edit</button>
            </div>
          )
        ))}
      </div>
    )
  }
}
