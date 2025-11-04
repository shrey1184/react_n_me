import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp() {
  return (
  <div>
    <h1>Custom App</h1>
  </div>
  )
}

const anotherElement = (
  <div>
    <a href="https://google.com" target='_blank'>Visit Google</a>
  </div>
)
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click here'
)

createRoot(document.getElementById('root')).render(
    <App />
)
