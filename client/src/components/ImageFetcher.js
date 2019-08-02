import React from 'react'

const ImageFetcher = (props) => {
  const handleClick = (event) => {
    let value = event.target.value
    console.log('click', value)
  }
  return (
    <div className="container">
      {props.options.map((option, i) => {
        return <button key={i} onClick={handleClick(option)} value={option}> {option} </button>
      })}
    </div>
  )
}

export default ImageFetcher;

// const ImageFetcher = (props) => {
//   const handleClick = (value) => {
//     // let value = event.target.value
//     console.log('click', value)
//   }
//   return (
//     <div className="container">
//       {props.options.map((option, i) => {
//         return <button key={i} onClick={() => handleClick(option)} value={option}> {option} </button>
//         //anon func so it goes straight to the value and evaluates
//       })}
//     </div>
//   )
// }