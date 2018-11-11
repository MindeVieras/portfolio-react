
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Piece extends Component {

  render() {

    const {
      centerPiece,
      svgWidth, svgHeight,
      strokeWidth, strokeColor, fill,
      portrait
    } = this.props
    
    return (
      <g>
        <path
          fill={ fill }
          stroke={ strokeColor }
          strokeWidth={ strokeWidth }
          // d={`
          //   M ${startPoint.x} ${startPoint.y}
          //   L ${line1.x} ${line1.y}
          //   L ${line2.x} ${line2.y} Z
          // `}
        />
      </g>
    )
  }
}

Piece.propTypes = {
  centerPiece: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  strokeColor: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  portrait: PropTypes.bool.isRequired
}

// Piece.defaultProps = {
//   centerPiece: null
// }

export default Piece
