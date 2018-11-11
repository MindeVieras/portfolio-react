
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CenterPiece } from './Pieces'

class Pica extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ...props
    }
  }

  componentWillReceiveProps(nextProps) {
    
    this.setState({
      ...nextProps
    })
  }

  render() {

    const { svgWidth, svgHeight, centerPiece } = this.state

    // console.log(svgWidth)

    // const { centerPiece, pieces } = items
    // const piecesProps = makePiecesPropsArray(pieces, width, height)

    // let svgConfig = {
    //   centerPieceEnabled,
    //   centerPiece,
    //   totalPieces: pieces.length,
    //   svgWidth: width,
    //   svgHeight: height,
    //   svgCenter: {
    //     x: width / 2,
    //     y: height / 2
    //   },
    //   svgPerimeter: (width + height) * 2
    // }
    // console.log(piecesProps)
    // let picaPieces = piecesProps.map((props, i) => {

    //   let line1 = makeLine1()

    //   return (
    //     <Piece
    //       key={ i }
    //       { ...props }
    //       { ...svgConfig }
    //     />
    //   )
    // })

    return (
      <svg
        width={ svgWidth }
        height={ svgHeight }
      >
        {centerPiece &&
          <CenterPiece { ...this.state } />
        }

        {/* Test circle */}
        <circle 
          cx={ 100 } 
		    	cy={ 500 }
          r={ 50 }
          stroke={ this.state.strokeColor }
          strokeWidth={ this.state.strokeWidth }
		    	fill={ this.state.fill }
        />

        {/* { picaPieces } */}

      </svg>
    )
  }
}

// function makePiecesPropsArray(pieces, svgWidth, svgHeight) {

//   const perimeter = (svgWidth + svgHeight) * 2
//   const startPoint = 0


//   const top = svgWidth
//   const right = svgWidth + svgHeight
//   const bottom = (svgWidth * 2) + svgHeight
//   const left = perimeter

//   let piecesProps = []

//   // min 3 pieces required
//   if (pieces.length > 2) {

//     const perimeterPart = perimeter / pieces.length
//     console.log(perimeterPart)

//     piecesProps = pieces.map((piece, i) => {

//       let part = perimeterPart * i

//       let point = {
//         line1: {
//           x: 0,
//           y: 0
//         },
//         line2: {
//           x: 0,
//           y: 0
//         },
//         line3: {
//           x: 0,
//           y: 0
//         }
//       }

//       // // make first svg piece
//       // if (i === 0) {

//       // }
//       // make top svg edge
//       if (part <= svgWidth) {
//         point = {
//           line1: {
//             x: part,
//             y: 0
//           },
//           line2: {
//             x: perimeterPart,
//             y: 0
//           }
//         }
//       }
//       // make right svg edge
//       else if (part >= svgWidth && part <= svgWidth + svgHeight) {
//         point = {
//           line1: {
//             x: 0,
//             y: part - svgWidth
//           },
//           line2: {
//             x: part,
//             y: 0
//           }
//         }
//       }
//       // make bottom svg edge
//       else if (part >= svgWidth + svgHeight && part <= (svgWidth * 2) + svgHeight) {
//         point = {
//           line1: {
//             x: part - (svgWidth + svgHeight),
//             y: svgHeight
//           },
//           line2: {
//             x: part,
//             y: 0
//           }
//         }
//       }
//       // make left svg edge
//       else if (part >= (svgWidth * 2) + svgHeight && part < perimeter) {
//         point = {
//           line1: {
//             x: 0,
//             y: part - ((svgWidth * 2) + svgHeight)
//           },
//           line2: {
//             x: part,
//             y: 0
//           }
//         }
//       }

//       return point
//     })
//   }

//   return parts
// }

// function makeLine1() {

//   let points = {
//     x: 0,
//     y: 0
//   }

//   return points
// }

Pica.propTypes = {
  items: PropTypes.object.isRequired,
  svgWidth: PropTypes.number,
  svgHeight: PropTypes.number,
  centerPiece: PropTypes.bool,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  fill: PropTypes.string
}

Pica.defaultProps = {
  svgWidth: 320,
  svgHeight: 320,
  centerPiece: false,
  strokeWidth: 2,
  strokeColor: 'black',
  fill: 'none'
}

export default Pica
