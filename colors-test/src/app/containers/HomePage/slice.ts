/*
 * GithubRepoForm Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 * Note that, while we are using dot notation in our reducer, we are not actually mutating the state
 * manually. Under the hood, we use immer to apply these updates to a new copy of the state.
 * Please see https://immerjs.github.io/immer/docs/introduction for more information.
 *
 */

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Picker container
export const initialState: ContainerState = {
  headerColor: "#000000",
  headerComputedColors: {},
  headerRatio: "1",
  textColor: "#000000",
  colorsVariation: {
    high: 1.5,
    medium: 1,
    low: 0.5
  }
};

const chroma: any = require('chroma-js');
const pickerSlice = createSlice({
  name: 'Picker',
  initialState,
  reducers: {
    changeColorVariation(state, action: PayloadAction<any>) {      
      state.colorsVariation[action.payload.key] = action.payload.value;      
    },
    changeColor(state, action: PayloadAction<string>) {
      state.headerColor = action.payload;
      state.headerRatio = chroma.contrast(action.payload, "#ffffff");
      let nbRatio = Number(state.headerRatio);
      let colorHigher = state.colorsVariation.high;
      let colorMed = state.colorsVariation.medium;
      let colorLow = state.colorsVariation.low;
      if(nbRatio <= 1.2 ) {        
        state.textColor = chroma('gray').luminance(0).hex();
        state.headerComputedColors = {
          buttonStatus: state.headerColor ,
          buttonStatusHover: chroma(state.headerColor).darken(colorLow).hex(),
          buttonStatusPressed:  chroma(state.headerColor).darken(colorMed).hex(),
          searchBar: chroma(state.headerColor).darken(colorLow).hex(),
          searchBarHover: chroma(state.headerColor).darken(colorMed).hex(),
          searchBarPressed: chroma(state.headerColor).darken(colorHigher).hex(),
          buttonDevice: state.headerColor ,
          buttonDeviceHover: chroma(state.headerColor).darken(colorLow).hex(),
          buttonDevicePressed: chroma(state.headerColor).darken(colorMed).hex(),
          buttonPlus: state.headerColor ,
          buttonPlusHover: chroma(state.headerColor).darken(colorLow).hex(),
          buttonPlusPressed: chroma(state.headerColor).darken(colorMed).hex()
        };  
      }
      if(nbRatio > 1.2 && nbRatio <= 4.75) {
        state.textColor = chroma('gray').luminance(0).hex();
        state.headerComputedColors = {
          buttonStatus: state.headerColor ,
          buttonStatusHover: chroma(state.headerColor).brighten(colorLow).hex(),
          buttonStatusPressed:  chroma(state.headerColor).brighten(colorMed).hex(),
          searchBar: chroma(state.headerColor).brighten(colorLow).hex(),
          searchBarHover: chroma(state.headerColor).brighten(colorLow).hex(),
          searchBarPressed: chroma(state.headerColor).brighten(colorMed).hex(),
          buttonDevice: state.headerColor ,
          buttonDeviceHover: chroma(state.headerColor).brighten(colorLow).hex(),
          buttonDevicePressed: chroma(state.headerColor).brighten(colorMed).hex(),
          buttonPlus: state.headerColor ,
          buttonPlusHover: chroma(state.headerColor).brighten(colorLow).hex(),
          buttonPlusPressed: chroma(state.headerColor).brighten(colorMed).hex(),
        };  
      }
      if(nbRatio > 4.75 && nbRatio < 14) {
        state.textColor = chroma('gray').luminance(0.95).hex();
        state.headerComputedColors = {
          buttonStatus: state.headerColor ,
          buttonStatusHover: chroma(state.headerColor).darken(colorLow).hex(),
          buttonStatusPressed:  chroma(state.headerColor).darken(colorMed).hex(),
          searchBar: chroma(state.headerColor).brighten(colorLow).hex(),
          searchBarHover: chroma(state.headerColor).darken(colorLow).hex(),
          searchBarPressed: chroma(state.headerColor).darken(colorMed).hex(),
          buttonDevice: state.headerColor ,
          buttonDeviceHover: chroma(state.headerColor).darken(colorLow).hex(),
          buttonDevicePressed: chroma(state.headerColor).darken(colorMed).hex(),
          buttonPlus: state.headerColor ,
          buttonPlusHover: chroma(state.headerColor).darken(colorLow).hex(),
          buttonPlusPressed: chroma(state.headerColor).darken(colorMed).hex(),
        };  
      }
      if(nbRatio >= 14) {
        state.textColor = chroma('gray').luminance(0.95).hex();
        state.headerComputedColors = {
          buttonStatus: state.headerColor ,
          buttonStatusHover: chroma(state.headerColor).brighten(colorLow).hex(),
          buttonStatusPressed:  chroma(state.headerColor).brighten(colorMed).hex(),
          searchBar: chroma(state.headerColor).brighten(colorLow).hex(),
          searchBarHover: chroma(state.headerColor).brighten(colorMed).hex(),
          searchBarPressed: chroma(state.headerColor).brighten(colorHigher).hex(),
          buttonDevice: state.headerColor ,
          buttonDeviceHover: chroma(state.headerColor).brighten(colorLow).hex(),
          buttonDevicePressed: chroma(state.headerColor).brighten(colorMed).hex(),
          buttonPlus: state.headerColor ,
          buttonPlusHover: chroma(state.headerColor).brighten(colorLow).hex(),
          buttonPlusPressed: chroma(state.headerColor).brighten(colorMed).hex(),
      };  
      }
      console.log(state.headerComputedColors);    
    }
  },
});

export const { actions, reducer, name: sliceKey } = pickerSlice;
