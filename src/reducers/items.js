import { createSelector } from "reselect";

export default function items(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export const itemsSelector = state => state.items;

export const allItemsSelector = createSelector(
  itemsSelector,
  itemsHash => Object.values(itemsHash)
);
