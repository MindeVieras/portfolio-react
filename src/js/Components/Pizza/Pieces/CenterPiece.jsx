
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CenterPiece extends Component {

  render() {

    const {
      centerPiece,
      svgWidth, svgHeight, center,
      strokeWidth, strokeColor, fill,
      portrait
    } = this.props
    
    let radius = 75
    let fillColor = fill
    let title, onCenterClick
    
    if(centerPiece) {
      
      let { centerSize, centerFill, centerTitle, onClick } = centerPiece
      
      if(centerSize) {
        if(typeof centerSize === 'string' && centerSize.endsWith('%')) {
          
          let percent = parseFloat(centerSize.substring(0, centerSize.length - 1))
          
          radius = ((percent / 100) * (portrait ? svgWidth : svgHeight)) / 2
        }
        else {
          radius = parseFloat(centerSize) / 2
        }
      }
      
      if(centerFill)
        fillColor = centerFill
      
      if(centerTitle) {
        title = centerTitle
      }

      if(onClick)
        onCenterClick = () => onClick(this.props)
    }

    return (
      <g onClick={ onCenterClick }>

        {title &&
          <title>{ title }</title>        
        }

        <circle 
          cx={ center.x } 
		    	cy={ center.y }
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
  centerPiece: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  center: PropTypes.object.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  strokeColor: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  portrait: PropTypes.bool.isRequired
}

export default CenterPiece
