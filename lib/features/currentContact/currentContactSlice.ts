import { UserTypeProps } from "@/app/types/userTyps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentContactState {
  currentContact: UserTypeProps | null;
}

const initialState: CurrentContactState = {
  currentContact: null,
};

const currentContact = createSlice({
  name: "currentContact",
  initialState,
  reducers: {
    setCurrentContact(state, action: PayloadAction<UserTypeProps | null>) {
      state.currentContact = action.payload;
    },
  },
});

export const { setCurrentContact } = currentContact.actions;
export const selectCurrentContact = (state: {
  currentContact: { currentContact: UserTypeProps | null };
}) => state.currentContact.currentContact;
export default currentContact.reducer;
