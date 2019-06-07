import React from 'react'
import './App.scss'

export const ListWithId = ({ items }) => (
  <ul className="FancyListClass FancyListSpecialClass WhyMustThereBeSoManyClasses">
    {items.map(({ id, text }) => (<li key={id}>{id}: {text}</li>))}
  </ul>
)

export const List = ({ items }) => (
  <ul className="FancyListClass FancyListSpecialClass WhyMustThereBeSoManyClasses">
    {items.map(({ id, text }) => (<li key={id}>{text}</li>))}
  </ul>
)

export class App extends React.Component {
  render() {
    const items = [{ id: 1, text: 'One' }, { id: 2, text: 'Two' }, { id: 3, text: 'Three' }]
    return (
      <div>
        <div className="App">
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Launch demo modal
          </button>
        </div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>One fine body.</p>
                <p>List only showing the items</p>
                <List items={items} />
                <p>List showing id and item</p>
                <ListWithId items={items} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
