import * as React from "react"
const DesignIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h30v30H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABGUlEQVR4nO3SwW0EQAgEQfJPGkfg47FCg89VCYBoqgAAAADgF81H64/zeTwlQJYAYQKECRAmQJgAYQKECRAmQJgAYQKECRAmQJgAYQKECRAmQJgA3x4AAAD4f/q4Cu8vwECA8Ad2eP6zPq4EEGBVH1fh/XevL8BIgEGH5z/r40oAAVb1cRXef/f6AowEGHR4/rM+rgQQYFUfV+H9d68vwEiAQYfnP+vjSgABVvVxFd5/9/oCjAQYdHj+sz6uBBBgVR9X4f13ry/ASIBBh+c/6+NKAAFW9XEV3n/3+gKMBBh0eP6zPq4EEGBVH1fh/XevL8BIgEGH5z/r40oAAVb1cRXef/f6AowEGHR4/rM+rr49AAAAAAD1V/0AlxRBX9xCUyUAAAAASUVORK5CYII="
        id="b"
        width={96}
        height={96}
      />
    </defs>
  </svg>
)
export default DesignIcon