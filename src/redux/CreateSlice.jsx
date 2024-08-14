// import { createSlice } from '@reduxjs/toolkit';

// const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState: [],
//   reducers: {
//     setCategories: (state, action) => {
//       return action.payload;
//     },
//     addCategory: (state, action) => {
//       state.push(action.payload);
//     },
//     updateCategory: (state, action) => {
//         const { id, newCatName } = action.payload;
//         return state.map(cat =>
//           cat.main_cat_id === id
//             ? { ...cat, cat_name: newCatName }
//             : cat
//         );
//     },
//   },
// });

// export const { setCategories, addCategory, updateCategory } = categoriesSlice.actions;
// export default categoriesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    updateCategory: (state, action) => {
      const index = state.findIndex(cat => cat.main_cat_id === action.payload.id);
      if (index !== -1) {
        state[index].main_cat_id = action.payload.newCatId || state[index].main_cat_id;
        state[index].cat_name = action.payload.newCatName;
      }
    },
  },
});

export const { setCategories, addCategory, updateCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;