import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.Picker || initialState;

export const selectHeaderColor = createSelector(
  [selectDomain],
  pickerState => pickerState.headerColor,
);


export const selectHeaderRatio = createSelector(
  [selectDomain],
  pickerState => pickerState.headerRatio,
);
export const selectHeaderComputedColors = createSelector(
  [selectDomain],
  pickerState => pickerState.headerComputedColors,
);
export const selectTextColor = createSelector(
  [selectDomain],
  pickerState => pickerState.textColor,
);
export const selectColorsVariation = createSelector(
  [selectDomain],
  pickerState => pickerState.colorsVariation,
);