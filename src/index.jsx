import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'

import { GlobalState } from './context/GlobalState'

ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById('app')
)
