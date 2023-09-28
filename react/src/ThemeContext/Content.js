import React,{useContext} from 'react'
import { ThemeContext } from './Context'
// import Context from './Context'
// import './style.css'

const Content = () => {
  const {theme} =useContext(ThemeContext)
  console.log(theme)
  return (
    <div >
      <p>This is the Content</p>
    </div>
  )
}

export default Content
