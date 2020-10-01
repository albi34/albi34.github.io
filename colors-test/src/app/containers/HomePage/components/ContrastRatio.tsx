import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
interface Props extends InputProps {
  ratio: string;
}
export const ContrastRatio = memo(({ ratio, ...restOf }: Props) => {
  
  return (
    <h2>Contrast Ratio is: {ratio}</h2>
  );
});
