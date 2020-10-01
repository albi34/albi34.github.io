
export type PickerEvent = {
  hex: string;
}

export type HeaderColors = {
  buttonStatus: string;
  buttonStatusHover: string;
  buttonStatusPressed: string;
  buttonStatusText: string;
  searchBar: string;
  searchBarHover: string;
  searchBarPressed: string;
  searchBarIcon: string;
  searchBarText: string;
  buttonDevice: string;
  buttonDeviceHover: string;
  buttonDevicePressed: string;
  buttonDeviceText: string;
  buttonPlus: string;
  buttonPlusHover: string;
  buttonPlusPressed: string;
  buttonPlusIcon: string;
}
export type ColorsVariation = {
  high: number;
  medium: number;
  low: number;
  bypass: boolean;
}

/* --- STATE --- */
export interface PickerState {
  headerColor: string;
  headerComputedColors: HeaderColors | {}; 
  headerRatio: string; 
  textColor: string;
  colorsVariation: ColorsVariation;
}
/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = PickerState;
