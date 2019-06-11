import React from 'react'
import './App.scss'

export const Comparator = ({ left, right }) => (
  <div className="SplitPane">
    <div className="split-pane">
      {left}
      {right}
    </div>
  </div>
)

export const CompareImages = ({ leftImageUrl, rightImageUrl }) => (
  <Comparator
    left={<div><img src={leftImageUrl} /></div>}
    right={<div><img src={rightImageUrl} /></div>}
  />
)

export const Word = ({ title, word }) =>(
  <>
    <p><strong>{title}</strong></p>
    <p>{word}</p>
  </>
)

export const CompareWords = ({ left, right }) => (
  <Comparator
    left={<div><Word title="Word 1" word={left} /></div>}
    right={<div><Word title="Word 2" word={right} /></div>}
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

const Button = ({ btnAction = 'button', type, children, ...rest}) => (
  <button type={btnAction} className={`btn btn-${type}`} {...rest}>
    {children}
  </button>
)

const Modal = ({ title, children }) => (
  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <Button type="" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </Button>
          <h4 className="modal-title" id="myModalLabel">{title}</h4>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <Button type="default" data-dismiss="modal" icon="trash">Close</Button>
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
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Launch demo modal
          </button>
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
