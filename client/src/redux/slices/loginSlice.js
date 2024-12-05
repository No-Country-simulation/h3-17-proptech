import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// maneja el login
export const login = createAsyncThunk(
  "login/logInUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch("https://www.financiaback.somee.com/api/Security/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.log("Error del servidor:", errorDetails); // Log del error del servidor
        throw new Error(errorDetails.message || "Login fallido");
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data); // Log de la respuesta exitosa
      return data; // Devuelve la respuesta para el reducer
    } catch (error) {
      console.error("Error de login:", error.message); // Log del error capturado
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