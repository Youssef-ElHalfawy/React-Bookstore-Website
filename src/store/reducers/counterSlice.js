import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: parseInt(localStorage.getItem("cart")) || 0,
	items: JSON.parse(localStorage.getItem("items")) || [],
};
const counterSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action) => {
			let noRepeatIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (noRepeatIndex === -1) {
        state.cart += 1;
        state.items.push(action.payload);
      }

      // state.cart += 1;
      // if (noRepeatIndex !== -1) {
      //   state.items.map(item => {
      //     if (item.id===action.payload.id) {
      //       item.count +=1
      //     }
      //   });
      // } else {
      //   state.items.push(action.payload);
      //   state.items.map(item => {
      //     if (item.id===action.payload.id) {
      //       item.count =1
      //     }
      //   });
      // }

			localStorage.setItem("cart", state.cart);
			localStorage.setItem("items", JSON.stringify(state.items));
		},
		remove: (state, action) => {
			let removeIndex = state.items.findIndex((item) => item.id === action.payload.id);
			if (state.cart !== 0) {
        if (removeIndex !== -1) {
          state.cart -= 1;
					state.items.splice(removeIndex, 1);
				}

				localStorage.setItem("cart", state.cart);
				localStorage.setItem("items", JSON.stringify(state.items));
			}
		},
		reset: (state, action) => {
      state.cart = 0;
			state.items = [];
      
			localStorage.clear();
		},
	},
});

export const cartReducer = counterSlice.reducer;
export const cartActions = counterSlice.actions;