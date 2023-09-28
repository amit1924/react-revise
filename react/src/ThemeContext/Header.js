import React, { useContext } from 'react'
import { ThemeContext } from './Context'
// import { ThemeContext } from './Context'
// import './style.css'

const Header = () => {
  const {toggleTheme}=useContext(ThemeContext)
  return (
    <div>
      Header
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Header
