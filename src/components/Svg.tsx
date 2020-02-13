import React, { FunctionComponent } from 'react'

const files = require.context('../assets', true, /.*\.svg$/)
files.keys().forEach(files)

type SvgProps = {
  name: string
  className?: string
}

const Svg: FunctionComponent<SvgProps> = React.forwardRef(({ name, className }: SvgProps, ref?: React.Ref<SVGSVGElement>) => (
  <svg ref={ref} className={className}>
    <use xlinkHref={`#${name}`}></use>
  </svg>
))

export default Svg
