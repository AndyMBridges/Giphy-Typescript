// Import Reducer type
import { Reducer } from 'redux';
import {
  ImageActions,
  ImageActionTypes,
} from '../actions/ImageActions';

// Define the Image type
export interface IImage {
  title: string;
  images: {
      original: {
          url: string;
      }
  }
}

// Define the Image State
export interface IImageState {
  readonly images: IImage[];
}

// Define the initial state
const initialImageState: IImageState = {
  images: [],
};

export const imageReducer: Reducer<IImageState, ImageActions> = (
  state = initialImageState,
  action
) => {
  switch (action.type) {
    case ImageActionTypes.GET_ALL: {
      return {
        ...state,
        images: action.images,
      };
    }
    default:
      return state;
  }
};
