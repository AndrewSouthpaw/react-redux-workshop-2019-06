import React from 'react'
import './App.scss'

export class PickableCages extends React.Component {
  state = {
    cageChoices: {},
  }

  static cages = [
    { id: 1, url: 'https://www.placecage.com/200/301' },
    { id: 2, url: 'https://www.placecage.com/200/302' },
    { id: 3, url: 'https://www.placecage.com/200/303' },
    { id: 4, url: 'https://www.placecage.com/200/304' },
  ]

  toggleCage = (id) => {
    const cageChoices = { ...this.state.cageChoices, [id]: !this.state.cageChoices[id] }
    this.setState({ cageChoices })
  }

  render() {
    const { cageChoices } = this.state
    return PickableCages.cages.map((cage) => (
      <div className="cage-display" key={cage.id}>
        <div className="cage-img" onClick={() => { this.toggleCage(cage.id) }}>
          <img src={cage.url} alt="A beautiful cage" />
          {cageChoices[cage.id] && (
            <div className="overlay overlay-yes" />
          )}
        </div>
      </div>
    ))
  }
}

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PickableCages />
      </div>
    )
  }
}

//
// import React from 'react'
// import './App.scss'
//
// export class PickableCages extends React.Component {
//   state = {
//     cageChoices: {},
//   }
//
//   static cages = [
//     { id: 1, url: 'https://www.placecage.com/200/301' },
//     { id: 2, url: 'https://www.placecage.com/200/302' },
//     { id: 3, url: 'https://www.placecage.com/200/303' },
//     { id: 4, url: 'https://www.placecage.com/200/304' },
//   ]
//
//   toggleCage = (id) => {
//     const cageChoices = { ...this.state.cageChoices, [id]: !this.state.cageChoices[id] }
//     this.setState({ cageChoices })
//   }
//
//   render() {
//     const { cageChoices } = this.state
//     return (
//       <div className="pickable">
//         {PickableCages.cages.map((cage) => (
//           <div className="cage-display" key={cage.id}>
//             <div className="cage-img" onClick={() => { this.toggleCage(cage.id) }} data-test-id="dt-cage">
//               <img src={cage.url} alt="A beautiful cage" />
//               {cageChoices[cage.id] && (
//                 <div className="overlay overlay-yes" data-test-id="dt-overlay" />
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }
//
// export class PickableSegals extends React.Component {
//   state = {
//     segalChoices: {},
//   }
//
//   static segals = [
//     { id: 1, url: 'https://www.stevensegallery.com/200/301' },
//     { id: 2, url: 'https://www.stevensegallery.com/200/302' },
//     { id: 3, url: 'https://www.stevensegallery.com/200/303' },
//     { id: 4, url: 'https://www.stevensegallery.com/200/304' },
//   ]
//
//   toggleCage = (id) => {
//     const segalChoices = { ...this.state.segalChoices, [id]: !this.state.segalChoices[id] }
//     this.setState({ segalChoices })
//   }
//
//   render() {
//     const { segalChoices } = this.state
//     return (
//       <div className="pickable">
//         {PickableSegals.segals.map((segal) => (
//           <div className="cage-display" key={segal.id} data-test-id="dt-segal">
//             <div className="cage-img">
//               <img src={segal.url} alt="A beautiful segal" />
//               {segalChoices[segal.id] && (
//                 <div className="overlay overlay-yes" data-test-id="dt-overlay" />
//               )}
//             </div>
//             <button onClick={() => { this.toggleCage(segal.id) }}>OH YEAH</button>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }
//
// export class App extends React.Component {
//
//   render() {
//     return (
//       <div className="App">
//         <PickableCages />
//         <PickableSegals />
//       </div>
//     )
//   }
// }
