import React from 'react'

// @ts-ignore
const files = require.context('../assets', true, /.*\.svg$/);
files.keys().forEach(files);

interface SvgProps {
  name: string
  className?: string
}

const Svg = React.forwardRef<SVGSVGElement, SvgProps>(({
                                                         name,
                                                         className
                                                       }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
});

export default Svg;