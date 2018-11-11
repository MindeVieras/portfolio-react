
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CenterPiece extends Component {

  render() {

    const { items, svgWidth, svgHeight, strokeWidth, strokeColor, fill } = this.props
    let radius = 100
    let fillColor = fill

    if(items.centerPiece) {
      let { centerSize, centerFill } = items.centerPiece
      if(centerSize)
        radius = centerSize / 2
      if(centerFill)
        fillColor = centerFill
    }

    return (
      <g>
        <circle 
          cx={ svgWidth / 2 } 
		    	cy={ svgHeight / 2 }
          r={ radius }
          stroke={ strokeColor }
          strokeWidth={ strokeWidth }
		    	fill={ fillColor }
        />
      </g>
    )
  }
}

CenterPiece.propTypes = {
  items: PropTypes.object.isRequired,
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  strokeColor: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired
}

export default CenterPiece
