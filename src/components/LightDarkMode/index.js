// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  isChangeColor = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const changeContainer = isDarkMode ? 'dark-container' : 'light-container'
    const changeHeading = isDarkMode ? 'dark-heading' : 'light-heading'
    const changeButton = isDarkMode ? 'dark-button' : 'light-button'
    const changeText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`card-container ${changeContainer}`}>
          <h1 className={changeHeading}> Click to Change Mode</h1>
          <button
            type="button"
            className={changeButton}
            onClick={this.isChangeColor}
          >
            {changeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
