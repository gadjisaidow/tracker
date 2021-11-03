import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Left(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.284 12.824A.827.827 0 0021 12a.825.825 0 00-.818-.83H5.799l5.196-5.251.074-.085a.84.84 0 00-.072-1.09.81.81 0 00-1.156-.002l-6.6 6.67-.073.084a.836.836 0 00-.106.82.817.817 0 00.756.514h16.364l.102-.006zm-9.286 6.432a.84.84 0 00-.003-1.175l-3.64-3.679-.084-.074a.807.807 0 00-1.072.077.835.835 0 00.002 1.174l3.64 3.68.083.073a.81.81 0 001.074-.076z"
        fill="#000"
      />
    </Svg>
  )
}

export default Left
