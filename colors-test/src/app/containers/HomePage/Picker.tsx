import React from 'react';
import styled from 'styled-components/macro';
import { Title } from 'app/containers/HomePage/components/Title';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { SketchPicker } from 'react-color';
import { ContrastRatio } from './components/ContrastRatio';
import { sliceKey, reducer, actions } from './slice';
import { PickerEvent } from './types';
import {
  selectHeaderColor,
  selectHeaderRatio,
  selectHeaderComputedColors,
  selectTextColor,
  selectColorsVariation,
} from './selectors';

export function Picker() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const dispatch = useDispatch();
  const headerColor =  useSelector(selectHeaderColor);
  const headerRatio = useSelector(selectHeaderRatio);
  const headerComputedColors = useSelector(selectHeaderComputedColors);
  const colorsVariation = useSelector(selectColorsVariation);
  const textColor = useSelector(selectTextColor);
  const onChangeColor = (evt: PickerEvent) => {
    dispatch(actions.changeColor(evt.hex));
  }; 
  const onChangeColorVariation = (
    evt: React.ChangeEvent<HTMLInputElement>,
    variation: string ) => {
    dispatch(actions.changeColorVariation({ value: evt.currentTarget.value, key: variation}));
    dispatch(actions.changeColor(headerColor));
  };
  const onClickUseDefaultColorVariation = () => {
    dispatch(actions.useDefaultColorVariation());
    dispatch(actions.changeColor(headerColor));
  };

  const chroma: any = require('chroma-js');

  return (
    <>
      <Title as="h2">Select a color</Title>
      low: <input type="text" onChange={ e => onChangeColorVariation(e, "low") } value={colorsVariation.low}></input>
      medium: <input type="text" onChange={ e => onChangeColorVariation(e, "medium") } value={colorsVariation.medium}></input>
      high: <input type="text" onChange={ e => onChangeColorVariation(e, "high") } value={colorsVariation.high}></input>
      <button
        onClick={() => {
          onClickUseDefaultColorVariation();
        }}
      >
        Use Defaults
      </button>
      <SketchPicker 
        color={ headerColor }
        onChangeComplete={ onChangeColor }
        />
        <ContrastRatio ratio={headerRatio}/>
        <List>
          {Object.keys(headerComputedColors).map( item => (
            <ColorizedDiv key={item} txtcolor={textColor} bgcolor={headerComputedColors[item]}>{item}</ColorizedDiv>
          ))}
          </List>
    </>
  );
}
const ColorizedDiv = styled.div<{bgcolor: string, txtcolor: string}>`
  display: block;
  float:left;
  position:relative;
  width:200px;
  height:50px;
  margin-right: 5px;
  margin-top: 5px;
  color: ${props => props.txtcolor};
  text-align: center;
  background: ${props => props.bgcolor}
`;
const Feature = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
