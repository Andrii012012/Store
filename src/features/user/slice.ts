import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";
import { clientAPI } from "../../api/client";
import { changeColor } from "../../utils/helps/validation";

interface IInitialStateUser {
  user: IUser | null;
  status: "idel" | "success" | "reject" | "pending";
  error: string | null;
  token: null | string;
}

const initialState: IInitialStateUser = {
  user: null,
  status: "idel",
  error: null,
  token: null,
};

type signObject = {
  dateServer: IUser | string;
  ref: HTMLInputElement[];
};

export const registerThunk = createAsyncThunk(
  "register/user",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const date = await clientAPI("post", url, form, rejectWithValue);
    return date;
  }
);

export const signThunk = createAsyncThunk(
  "sign/user",
  async (
    {
      url,
      form,
      ref,
    }: {
      url: string;
      form: object;
      ref?: HTMLInputElement[];
    },
    { rejectWithValue }
  ) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
    if (data && data.data) {
      console.log(data);
      const object: signObject = { dateServer: data.data, ref: ref || [] };
      return object;
    } else {
      return null;
    }
  }
);

export const setAddressThunk = createAsyncThunk(
  "setAddress/user",
  async (
    {
      url,
      form,
      hangleReset,
    }: {
      url: string;
      form: object;
      hangleReset: () => void;
    },
    { rejectWithValue }
  ) => {
    const date = await clientAPI("post", url, form, rejectWithValue);
    return { hangleReset: hangleReset };
  }
);

export const changePasswordThunk = createAsyncThunk(
  "changePassword/user",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
     return data;
  }
);

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    leaveAccount: (state: IInitialStateUser) => {
       state.token = '';
       state.user = null;
    }
  },
  extraReducers: (build) => {
    build.addCase(registerThunk.pending, (state: IInitialStateUser) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(registerThunk.fulfilled, (state: IInitialStateUser) => {
      state.status = "success";
    });
    build.addCase(
      registerThunk.rejected,
      (state: IInitialStateUser, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );
    build.addCase(signThunk.pending, (state: IInitialStateUser) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(
      signThunk.fulfilled,
      (state: IInitialStateUser, action: PayloadAction<signObject | null>) => {
        if (action.payload) {
          let { dateServer, ref } = action.payload;
          if (typeof dateServer === "object") {
            state.status = "success";
            state.user = dateServer;
            state.token = String(dateServer.password);
          } else {
            state.status = "reject";
            state.error = dateServer;
            ref.forEach((item) => {
              changeColor(item);
            });
          }
        }
      }
    );
    build.addCase(setAddressThunk.pending, (state: IInitialStateUser) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(
      setAddressThunk.fulfilled,
      (
        state: IInitialStateUser,
        action: PayloadAction<{ hangleReset: () => void }>
      ) => {
        state.status = "success";
        action.payload.hangleReset();
      }
    );
    build.addCase(setAddressThunk.rejected, (state: IInitialStateUser) => {
      state.status = "reject";
    });
    build.addCase(changePasswordThunk.pending, (state: IInitialStateUser) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(changePasswordThunk.fulfilled, (state: IInitialStateUser) => {
      state.status = "success";
    });
    build.addCase(changePasswordThunk.rejected, (state: IInitialStateUser) => {
      state.status = "reject";
    });
  },
});

export const user = slice.reducer;
export const {leaveAccount} = slice.actions;
export type { IInitialStateUser };
