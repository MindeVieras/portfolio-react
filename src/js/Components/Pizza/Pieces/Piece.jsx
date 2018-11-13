
import React, { Component } from 'react'
import PropTypes, { func } from 'prop-types'

class Piece extends Component {

  render() {

    const {
      index, total, centerPiece,
      svgWidth, svgHeight, center,
      strokeWidth, strokeColor, fill,
      portrait, spreadBy, offset,
      name
    } = this.props

    let firstPoint, lastPoint
    // let dfirstPoint, dlastPoint

    // if(spreadBy === 'degrees') {
    // dfirstPoint = makeDegreesPoint(svgWidth, svgHeight, total, index, 0)
    // dlastPoint = makeDegreesPoint(svgWidth, svgHeight, total, index, 0)
    // }
    // else {
    firstPoint = makePerimeterPoint(svgWidth, svgHeight, total, index, offset)
    lastPoint = makePerimeterPoint(svgWidth, svgHeight, total, index, offset + 1) // can be 0.5 for gaps!
    // }

    let middlePoint = makeMiddlePoint(firstPoint, lastPoint)
    // let dmiddlePoint = makeMiddlePoint(dfirstPoint, dlastPoint)

    return (
      <g>
        <path
          fill={ fill }
          stroke={ strokeColor }
          strokeWidth={ strokeWidth }
          d={`
            M ${center.x} ${center.y}
            L ${firstPoint.x} ${firstPoint.y}
            L ${middlePoint.x} ${middlePoint.y}
            L ${lastPoint.x} ${lastPoint.y} Z
          `}
        />
        {/* <path
          fill={ fill }
          stroke={ strokeColor }
          strokeWidth={ strokeWidth }
          d={`
            M ${center.x} ${center.y}
            L ${dfirstPoint.x} ${dfirstPoint.y}
            L ${dmiddlePoint.x} ${dmiddlePoint.y}
            L ${dlastPoint.x} ${dlastPoint.y} Z
          `}
        /> */}
      </g>
    )
  }
}

function makePerimeterPoint(svgWidth, svgHeight, total, index, point) {

  const edge1 = svgWidth
  const edge2 = svgWidth + svgHeight
  const edge3 = svgWidth + svgHeight + svgWidth
  const edge4 = svgWidth + svgHeight + svgWidth + svgHeight

  const step = edge4 / total
  const stepIndex = step * (index + point)

  let x = 0
  let y = 0
  
  if(stepIndex <= edge1) {
    x = stepIndex
    y = 0
  }

  else if(stepIndex > edge1 && stepIndex <= edge2) {
    x = svgWidth
    y = stepIndex - edge1
  }

  else if(stepIndex > edge2 && stepIndex <= edge3) {
    x = svgWidth - (stepIndex - edge2)
    y = svgHeight
  }

  else if(stepIndex > edge3 && stepIndex <= edge4) {
    x = 0
    y = svgHeight - (stepIndex - edge3)
  }

  else if(point >= 1) {
    x = (point - 1) * step
    y = 0
  }

  return {x, y}
}

// function makeDegreesPoint(svgWidth, svgHeight, total, index, point) {

//   const edge1 = svgWidth
//   const edge2 = svgWidth + svgHeight
//   const edge3 = svgWidth + svgHeight + svgWidth
//   const edge4 = svgWidth + svgHeight + svgWidth + svgHeight

//   const step = 360 / total
//   const stepIndex = step * (index + point)

//   console.log(stepIndex)
  
//   let x = 0
//   let y = 0
  
//   // if(stepIndex <= edge1) {
//   //   x = stepIndex
//   //   y = 0
//   // }

//   // else if(stepIndex > edge1 && stepIndex <= edge2) {
//   //   x = svgWidth
//   //   y = stepIndex - edge1
//   // }

//   // else if(stepIndex > edge2 && stepIndex <= edge3) {
//   //   x = svgWidth - (stepIndex - edge2)
//   //   y = svgHeight
//   // }

//   // else if(stepIndex > edge3 && stepIndex <= edge4) {
//   //   x = 0
//   //   y = svgHeight - (stepIndex - edge3)
//   // }

//   // else if(point >= 1) {
//   //   x = (point - 1) * step
//   //   y = 0
//   // }

//   return {x, y}
// }

function makeMiddlePoint(firstPoint, lastPoint) {

  let x = 0
  let y = 0

  if(firstPoint.x === lastPoint.x || firstPoint.y === lastPoint.y) {
    x = firstPoint.x
    y = firstPoint.y
  }
  else {
    x = firstPoint.x
    y = lastPoint.y

    if(firstPoint.y === 0 || lastPoint.x === 0) {
      x = lastPoint.x
      y = firstPoint.y
    }
  }

  return {x, y}
}

Piece.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
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
  portrait: PropTypes.bool.isRequired,
  spreadBy: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  name: PropTypes.string
}

Piece.defaultProps = {
  name: null
}

export default Piece
