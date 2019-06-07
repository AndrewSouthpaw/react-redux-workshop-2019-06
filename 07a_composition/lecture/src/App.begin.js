import React from 'react'
import './App.scss'

const Counter = () => (
  <div id="counter">There are<br /><span>2,389,987</span><br />hits this month</div>
)

export const WelcomeSection = () => (
  <div className="FancyBorder FancyBorder-blue">
    <img src="https://media.giphy.com/media/anjRJ4nv9WJzO/giphy.gif" alt="netscape" />
    <div>
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting us on the interwebs!

        Favorite links:
      </p>

      <ul>
        <li><a href="https://digitalsynopsis.com/design/34-css-puns-web-design-funny-jokes/">CSS Puns</a></li>
      </ul>
    </div>
    <img src="https://media.giphy.com/media/anjRJ4nv9WJzO/giphy.gif" alt="netscape" />
  </div>
)

export const Guestbook = () => (
  <div className="FancyBorder FancyBorder-green">
    <img src="https://www.fg-a.com/guestbook/checking-the-guestbook.gif" alt="guestbook" />
    <div>
      <h1 className="Dialog-title">
        Guestbook
      </h1>
      <p className="Dialog-message">
        <marquee>Please sign my guestbook!</marquee>
      </p>
    </div>
    <img src="https://www.fg-a.com/guestbook/checking-the-guestbook.gif" alt="guestbook" />
  </div>
)

export const App = () => (
  <div className="App">
    <WelcomeSection />
    <Guestbook />
    <Counter />
  </div>
)
