import React from 'react';
import { IconT } from '../../types/General'

type IconProps = {
  name: IconT,
  color?: string,
  size?: number,
  classProp?: string
}

const Icon = ({
  name,
  color = '#000000',
  size = 20,
  classProp = ''
}: IconProps) => {

  return (
    <svg
      className={classProp}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use href={`../.../assets/feather-sprite.svg#${name}`} />
    </svg>
  )
}

export default Icon