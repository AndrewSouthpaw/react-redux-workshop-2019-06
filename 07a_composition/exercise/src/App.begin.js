import React from 'react'
import './App.scss'

export const CompareImages = ({ leftImageUrl, rightImageUrl }) => (
  <div className="SplitPane">
    <div className="split-pane">
      <div>
        <img src={leftImageUrl} />
      </div>

      <div>
        <img src={rightImageUrl} />
      </div>
    </div>
  </div>
)

export const CompareWords = ({ left, right }) => (
  <div className="SplitPane">
    <p>We are comparing words!</p>
    <div className="split-pane">
      <div>
        <p><strong>Word 1</strong></p>
        <p>{left}</p>
      </div>

      <div>
        <p><strong>Word 2</strong></p>
        <p>{right}</p>
      </div>
    </div>
  </div>
)

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

                <CompareWords left="Foo" right="Bar" />
                <CompareImages
                  leftImageUrl="https://www.placecage.com/c/200/300"
                  rightImageUrl="https://www.placecage.com/c/200/301"
                />
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
