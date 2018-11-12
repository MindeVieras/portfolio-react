
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CenterPiece, Piece } from './Pieces'

class Pizza extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ...props,
      center: {
        x: props.svgWidth / 2,
        y: props.svgHeight / 2
      },
      portrait: props.svgWidth < props.svgHeight
    }
  }

  componentWillReceiveProps(nextProps) {
    
    this.setState({
      ...nextProps,
      center: {
        x: nextProps.svgWidth / 2,
        y: nextProps.svgHeight / 2
      },
      portrait: nextProps.svgWidth < nextProps.svgHeight
    })
  }

  render() {

    const {
      pieces, centerPiece,
      svgWidth, svgHeight, center,
      strokeWidth, strokeColor, fill,
      portrait
    } = this.state

    const totalPieces = pieces.length

    let pizzaPieces = pieces.map((piece, i) => {
      return (
        <Piece
          key={ i }
          { ...piece }
          index={ i }
          total={ totalPieces }
          centerPiece={ centerPiece }
          svgWidth={ svgWidth }
          svgHeight={ svgHeight }
          center={ center }
          strokeWidth={ strokeWidth }
          strokeColor={ strokeColor }
          fill={ fill }
          portrait={ portrait }
        />
      )
    })

    return (
      <svg
        width={ svgWidth }
        height={ svgHeight }
        style={{
          display: `block`
        }}
      >
        {centerPiece &&
          <CenterPiece
            centerPiece={ centerPiece }
            svgWidth={ svgWidth }
            svgHeight={ svgHeight }
            center={ center }
            strokeWidth={ strokeWidth }
            strokeColor={ strokeColor }
            fill={ fill }
            portrait={ portrait }
          />
        }

        { pizzaPieces }

      </svg>
    )
  }
}

Pizza.propTypes = {
  pieces: PropTypes.array.isRequired,
  centerPiece: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  svgWidth: PropTypes.number,
  svgHeight: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  fill: PropTypes.string
}

Pizza.defaultProps = {
  centerPiece: false,
  svgWidth: 320,
  svgHeight: 320,
  strokeWidth: 2,
  strokeColor: 'black',
  fill: 'none'
}

export default Pizza
