export const UPDATE_TITLE = "UPDATE_TITLE"; 
export const ADD_TODO = "ADD_TODO"; 
export const TOGGLE_TODO = "TOGGLE_TODO"; 

export function updateTitle(newTitle){ 
  return { 
      type: UPDATE_TITLE, 
      payload: newTitle
  };  
} 