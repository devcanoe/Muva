import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ISearch } from "@/services/trip.service";

export interface ICheckout {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  gender: string,
  next_of_kin_name: string,
  next_of_kin_phone: any
}

const initialCheckout: ICheckout = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  gender: "",
  next_of_kin_name: "",
  next_of_kin_phone: undefined
}

const slice = createSlice({
  name: "trip",
  initialState: {
    departure_location: "",
    arrival_location: "",
    trip_date: "",
    id: "",
    checkout: initialCheckout
  },
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<ISearch>) => {
      state.arrival_location = action.payload.arrival_location;
      state.departure_location = action.payload.departure_location;
      state.trip_date = action.payload.trip_date
    },
    setBooking: (state, action) => {
      state.id = action.payload.id
    },
    setCheckout: (state, action: PayloadAction<ICheckout>) => {
      state.checkout = action.payload
    }
  },
});

export const { setSearchKeyword, setCheckout, setBooking } = slice.actions;
export default slice.reducer;
export const selectCurrentFrom: any = (state: RootState) => state.trip;
export const selectCurrentBooking = (state: RootState) => state.trip.id;
export const selectCurrentCheckout = (state: RootState) => state.trip.checkout;
