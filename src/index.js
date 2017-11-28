import React, { Component } from "react"
import { render } from "react-dom"

const App = ({message}) => {  return(<h1 className="text-center">Hello {message}</h1>) };

render(<App message="Sal"/>, document.getElementById('root'));