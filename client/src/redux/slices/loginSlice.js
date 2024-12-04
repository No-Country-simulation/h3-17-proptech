import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// maneja el login
export const login = createAsyncThunk(
  "login/logInUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch("https://tuapi.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login fallido");
      }

      const data = await response.json(); // Asume que el token viene en data.token
      return data; // Esto será la carga útil (payload) para el reducer extra
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const loginSlice = createSlice({
  name: "logIn",
  initialState: { user: null, isLoading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload; 
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload; // Mensaje de error devuelto por `rejectWithValue`
        state.isLoading = false;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;