import React, { Component } from 'react'

import Congrats from './Components/Congrats'
import GuessedWords from './Components/GuessedWords'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: 'train' },
          { letterMatchCount: 3 }
        ]} />
      </div>
    )
  }
}
