
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Piece extends Component {

  render() {

    const {
      line1, line2,
      svgWidth, svgHeight,
    } = this.props

    // let perimeterPart = svgPerimeter / totalPieces
    // // console.log(perimeterPart)
    let startPoint = {
      x: svgWidth / 2,
      y: svgHeight / 2
    }

    // let line1 = {
    //   x: 0,
    //   y: 0
    // }

    return (
      <g>
        <path
          fill="rgba(0,0,0,0.5)"
          stroke="red"
          d={`
            M ${startPoint.x} ${startPoint.y}
            L ${line1.x} ${line1.y}
            L ${line2.x} ${line2.y} Z
          `}
        />
      </g>
    )
  }
}

Piece.propTypes = {
  line1: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  line2: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  // svgCenter: PropTypes.shape({
  //   x: PropTypes.number,
  //   y: PropTypes.number
  // }).isRequired,
  // svgPerimeter: PropTypes.number.isRequired,
  // index: PropTypes.number.isRequired,
  // totalPieces: PropTypes.number.isRequired,
  // centerPieceEnabled: PropTypes.bool.isRequired,
  // centerPiece: PropTypes.object
}

// Piece.defaultProps = {
//   centerPiece: null
// }

export default Piece
