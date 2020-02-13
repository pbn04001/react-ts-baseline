import React, { FunctionComponent } from 'react'

const files = require.context('../assets', true, /.*\.svg$/);
files.keys().forEach(files);

interface Props {
  name: string
  className?: string
}

const Svg: FunctionComponent<Props> = React.forwardRef(({ name, className }: Props, ref?: React.Ref<SVGSVGElement>) => (
  <svg ref={ref} className={className}>
    <use xlinkHref={`#${name}`}></use>
  </svg>
))

export default Svg;