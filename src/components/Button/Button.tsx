import React from "react"

export type ButtonPropsT = {
  label: string
}

const Button = ({ label }: ButtonPropsT) => {
  return  (<button style={{backgroundColor:'green', color: 'white', padding: '20'}}>{label}</button>)
}


export default Button
