import React, { memo } from 'react';
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
interface Props extends InputProps {
  ratio: string;
}
export const ContrastRatio = memo(({ ratio, ...restOf }: Props) => {
  
  return (
    <h4>Contrast Ratio is: {ratio}</h4>
  );
});
