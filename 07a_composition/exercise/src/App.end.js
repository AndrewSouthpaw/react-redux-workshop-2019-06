import React from 'react'
import './App.scss'

export const Compare = ({ left, right }) => (
  <div className="SplitPane">
    <div className="split-pane">
      {left}
      {right}
    </div>
  </div>
)

export const CompareImages = ({ leftImageUrl, rightImageUrl }) => (
  <Compare
    left={<img src={leftImageUrl} />}
    right={<img src={leftImageUrl} />}
  />
)

export const CompareWords = ({ left, right }) => (
  <Compare
    left={
      <div>
        <p><strong>Word 1</strong></p>
        <p>{left}</p>
      </div>
    }
    right={
      <div>
        <p><strong>Word 2</strong></p>
        <p>{right}</p>
      </div>
    }
  />
)

export const Lister = ({ children }) => (
  <ul className="FancyListClass FancyListSpecialClass WhyMustThereBeSoManyClasses">
    {children}
  </ul>
)

export const ListWithId = ({ items }) => (
  <Lister>
    {items.map(({ id, text }) => (<li key={id}>{id}: {text}</li>))}
  </Lister>
)

export const List = ({ items }) => (
  <Lister>
    {items.map(({ id, text }) => (<li key={id}>{text}</li>))}
  </Lister>
)

const Button = ({ type, size, children, ...rest }) => (
  <button type="button" className={`btn btn-${type}${size ? ` btn-${size}` : ''}`} {...rest}>
    {children}
  </button>
)

const Modal = ({ children, title }) => (
  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title" id="myModalLabel">{title}</h4>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <Button type="default" data-dismiss="modal">Close</Button>
          <Button type="primary">Save changes</Button>
        </div>
      </div>
    </div>
  </div>
)

export class App extends React.Component {
  render() {
    const items = [{ id: 1, text: 'One' }, { id: 2, text: 'Two' }, { id: 3, text: 'Three' }]
    return (
      <div>
        <div className="App">
          <Button type="primary" size="lg" data-toggle="modal" data-target="#myModal">
            Launch demo modal
          </Button>
        </div>
        <Modal title="Modal title">
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
        </Modal>
      </div>
    )
  }
}
