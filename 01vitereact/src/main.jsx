import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotheruser = "chai aur code...."

 const reactElement = React.createElement(
     'a',
     {href: 'https.//google.com', target: '_blank'},
     'clicked on me to visit googlePage....',
     anotheruser
 )


ReactDOM.createRoot(document.getElementById('root')).render(
 
    // reactElement
    <App/>
 
)
