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

export interface IBooking {
  id: string,
  cost: string,
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

const initialBooking: IBooking = {
  id: "",
  cost: ""
}

const slice = createSlice({
  name: "trip",
  initialState: {
    departure_location: "",
    arrival_location: "",
    trip_date: "",
    booking: initialBooking,
    checkout: initialCheckout
  },
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<ISearch>) => {
      state.arrival_location = action.payload.arrival_location;
      state.departure_location = action.payload.departure_location;
      state.trip_date = action.payload.trip_date
    },
    setBooking: (state, action: PayloadAction<IBooking>) => {
      state.booking = action.payload
    },
    setCheckout: (state, action: PayloadAction<ICheckout>) => {
      state.checkout = action.payload
    }
  },
});

export const { setSearchKeyword, setCheckout, setBooking } = slice.actions;
export default slice.reducer;
export const selectCurrentFrom: any = (state: RootState) => state.trip;
export const selectCurrentBooking: any = (state: RootState) => state.trip.booking;
export const selectCurrentCheckout: any = (state: RootState) => state.trip.checkout;
