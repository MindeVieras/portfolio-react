
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Pizza from './Components/Pizza'

import { clientActions } from 'Actions'

class App extends Component {

  constructor(props) {
    super(props)

    this.centerPiece = {
      id: 'center_piece_id',
      centerSize: '25%', // number or percent
      centerFill: 'PeachPuff',
      centerTitle: 'Skillset',
      onClick: this.onCenterClick
    }

    this.pizzaPieces = [
      {
        name: 'Skills'
      },
      {
        name: 'Projects'
      },
      {
        name: 'Experience'
      },
      {
        name: 'Interests'
      },
      {
        name: 'Summary'
      },
      {
        name: 'Expertise'
      },
      {
        name: 'Testing'
      }
    ]

  }

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

  onCenterClick(centerPieceProps) {
    console.log(centerPieceProps)
  }

  render() {

    const { screen } = this.props
    
    return (
      <Pizza
        pieces={ this.pizzaPieces }
        svgWidth={ screen.width }
        svgHeight={ screen.height }
        centerPiece={ this.centerPiece }
        strokeWidth={ 1 }
        strokeColor="black"
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
