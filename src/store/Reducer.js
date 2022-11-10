import { VIEW_ITEM } from "./constants";
const initState = {
  item: [],
};
function reducer(state, action) {
  switch (action.type) {
    case VIEW_ITEM:
      return { ...state, item: [action.payload] };
    default:
      return state;
  }
}
export default reducer;
export { initState };
