import * as React from "react"
const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M.243 0h32v32h-32z"
      transform="rotate(.44 .243 0)"
    />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.03125)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR4nO3Wz4tNYRgH8HMnNawos7BHmoxSlCiZGVGTjbGYrYUFskKKKcVGYUWUscTKf4DVlJKdlYWkZkX5kRjy+6PXvIvHde90zrl37jTluz7fH89z3vd53qJYisDKXpotwzhuYQbfzOELnuMG9qCxEOb78FQ5PML2bhn34QJ+BYOvuI8rOI9reIgf4ZvvONaNANeD6CzOtfvvWIOr4dcknOrE/HAQeoGhkrxhvMm8nxirYz6A91nkLdZV5G/B5xC+v2qAi6H6iaoFZI3TQeNoFWIjX7OEJ3WvFVbgVdaZrkLcFJKfqWMetKayTrohq8qS9ocAuzoMcDBobS5LOhJIGzoMsDdojS1c6nLdHK2TerwUqb3W8aA1WJa0Oo/ShJsdBngQZklfFeJ0JqZhNFDTfDAUcrsqeSK0bqrmErsXNLZWFWjgcRCotNlwOXDvVC3gD7Ae74LQJSwv5kHalKnd/saBoi4wgg9BbCaf7LVN3RrCWbz2L2Y7GmjYiGcthNNT7GXT/m+HFGK4kxD9ufJkOB9S0EP5bfipqyHC6d6ByfwUu5sfoyexLW7ONPnahBgpegXsxMemECnU7v8hLEInRluciRM9C9DiTEwWiwFzneht5cVSwG/aWwetbUQShwAAAABJRU5ErkJggg=="
        id="b"
        width={32}
        height={32}
      />
    </defs>
  </svg>
)
export default SearchIcon