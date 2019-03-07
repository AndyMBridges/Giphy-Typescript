// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Image Typing
import { IImage, IImageState } from '../reducers/imageReducer';

// Create Action Constants
export enum ImageActionTypes {
  GET_ALL = 'GET_ALL',
}

// Interface for Get All Action Type
export interface IImageGetAllAction {
  type: ImageActionTypes.GET_ALL;
  images: IImage[];
}

/* 
Combine the action types with a union (we assume there are more)
example: export type ImageActions = IGetAllAction | IGetOneAction ... 
*/
export type ImageActions = IImageGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllImages: ActionCreator<
  ThunkAction<Promise<any>, IImageState, null, IImageGetAllAction>
> = query => {
  return async (dispatch: Dispatch) => {
    try {

      const searchTerm = query ? query : 'burgers';

      const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=97shnO9k9oi39WpUuMw19lvbt1zXKcih&limit=5`);
      dispatch({
        images: response.data.data,
        type: ImageActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};