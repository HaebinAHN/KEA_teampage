import React from 'react';
import './css/NavigationBar.css'

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="team">Team</a></li>
          <li><a href="vision">Vision</a></li>
          <li><a href="/knp">About KEA</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
