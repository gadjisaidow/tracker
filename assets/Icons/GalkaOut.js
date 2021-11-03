import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GalkaOut(props) {
  return (
    <Svg
      width={28}
      height={24}
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 14l7.5 5.5 9-16.5" stroke="#f0f0f0" strokeWidth={3} />
    </Svg>
  )
}

export default GalkaOut
