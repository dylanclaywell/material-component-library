import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './index'

const onClick = () => {
  console.log('Hello world')
}

const App = () => {
  return (
    <div>
      <Button onClick={onClick}>Click</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
