export const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_HUD_SELECTED_PLANT":
      return { ...state, hudSelectedPlant: action.payload };
    case "SET_PLANTS":
      return { ...state, plants: [state.plants, action.payload] };
    case "SET_PIECES":
      return { ...state, pieces: [state.pieces, action.payload] };
    case "SET_GARDEN_ITEM_POSITION":
      return { ...state, gardenItemPosition: action.payload };
    case "SET_HUD_SELECTED_PIECE":
      return { ...state, hudSelectedPiece: action.payload };
    case "SHOW_GARDEN_ITEM":
      return { ...state, showGardenItem: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload }
  }
};