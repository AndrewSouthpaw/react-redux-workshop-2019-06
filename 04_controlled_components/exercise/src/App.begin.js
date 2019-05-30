import React from 'react'
import './App.scss'
import { formDataToObject } from './lib/formDataToObject'

/**
 * Goal:
 * - Refactor `EditPizza` to use controlled components
 * - BONUS: refactor the input checkboxes or radio buttons into separate components to cut down on redundancy
 */

class EditPizza extends React.Component {
  savePizza = (e) => {
    e.preventDefault()
    this.props.onSave({
      ...this.props.pizza,
      editing: false,
      ...formDataToObject(e.target),
    })
  }

  render() {
    const { id, size, toppings } = this.props.pizza
    return (
      <form onSubmit={this.savePizza}>
        <div>ID: {id}</div>
        <div>
          <label>Size: </label>
          <input id={`size-sm-${id}`} type="radio" name="size" value="sm" defaultChecked={size === 'sm'} />
          <label htmlFor={`size-sm-${id}`}>Small</label>
          <input id={`size-md-${id}`} type="radio" name="size" value="md" defaultChecked={size === 'md'} />
          <label htmlFor={`size-md-${id}`}>Medium</label>
          <input id={`size-lg-${id}`} type="radio" name="size" value="lg" defaultChecked={size === 'lg'} />
          <label htmlFor={`size-lg-${id}`}>Large</label>
        </div>
        <div>
          <label>Toppings: </label>
          <input
            id={`size-meat-${id}`}
            type="checkbox"
            name="toppings[]"
            value="meat"
            defaultChecked={toppings.includes('meat')}
          />
          <label htmlFor={`size-meat-${id}`}>Meat</label>
          <input
            id={`size-veggie-${id}`}
            type="checkbox"
            name="toppings[]"
            value="veggie"
            defaultChecked={toppings.includes('veggie')}
          />
          <label htmlFor={`size-veggie-${id}`}>Veggie</label>
          <input
            id={`size-cheese-${id}`}
            type="checkbox"
            name="toppings[]"
            value="cheese"
            defaultChecked={toppings.includes('cheese')}
          />
          <label htmlFor={`size-cheese-${id}`}>Extra Cheese</label>
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
    const pizzas = [...this.state.pizzas]
    pizzas[pizza.id] = pizza
    this.setState({ pizzas })
  }

  startPizza = () => {
    const { pizzas } = this.state
    this.setState({ pizzas: [...pizzas, { id: counter++, editing: true, size: '', toppings: [] }] })
  }

  editPizza = (id) => {
    const pizzas = [...this.state.pizzas]
    pizzas[id] = { ...pizzas[id], editing: true }
    this.setState({ pizzas })
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
