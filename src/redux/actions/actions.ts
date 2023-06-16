import { UPDATE_SELECTED_OPTION } from './company.action'



export const updateSelectedOption = (option: any ) => {
    return {
      type: UPDATE_SELECTED_OPTION,
      payload: option,
    };
  };