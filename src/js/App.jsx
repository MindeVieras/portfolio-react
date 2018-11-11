
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Pica from './Components/Pica'

import { clientActions } from 'Actions'

const picaItems = {
  centerPiece: {
    centerSize: '25%', // number or percent
    centerFill: 'PeachPuff'
  },
  pieces: [
    {
      name: 'Skills'
    },
    {
      name: 'Projects'
    },
    {
      name: 'Experience'
    },
    // {
    //   name: 'Interests'
    // },
    // {
    //   name: 'Summary'
    // },
    // {
    //   name: 'Expertise'
    // }
  ]
}

class App extends Component {

  componentDidMount() {
    // Add resize event listener
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    // Remove resize event listener
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  // Calculate & Update state of new dimensions
  updateDimensions() {
    const { dispatch } = this.props
    let width = window.innerWidth
    let height = window.innerHeight
    let orientation = (width < height) ? 'portrait' : 'landscape'
    dispatch(clientActions.setScreen({ width, height, orientation }))
  }

  render() {

    const { screen } = this.props
    
    return (
      <Pica
        items={ picaItems }
        svgWidth={ screen.width }
        svgHeight={ screen.height }
        centerPiece={ true }
        strokeWidth={ 4 }
        strokeColor="red"
        fill="grey"
      />
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  screen: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { client } = state

  return {
    screen: client.screen
  }
}

export default connect(mapStateToProps)(App)
