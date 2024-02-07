import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WeatherResInterface } from './WeatherDisplay';
import { RootState } from '@/app/store';

interface WeatherState {
  weather: WeatherResInterface | null;
  status: 'fulfilled' | 'pending' | 'rejected';
  error: string;
}

const initialState: WeatherState = {
  weather: null,
  status: 'pending',
  error: '',
};

export const fetchWeather = createAsyncThunk(
  'weatherSlice',
  async (_id, { rejectWithValue }) => {
    try {
      const data = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=27&longitude=84&current=temperature_2m,relative_humidity_2m,rain,wind_direction_10m&format=json&timeformat=unixtime`,
      );

      const res = await data.json();

      return res.current;
    } catch (error) {
      rejectWithValue('No data found');
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.weather = null;
      state.status = 'pending';
      state.error = '';
    });

    builder.addCase(
      fetchWeather.fulfilled,
      (state, action: PayloadAction<WeatherResInterface>) => {
        state.weather = action.payload;
        state.status = 'fulfilled';
        state.error = '';
      },
    );

    builder.addCase(
      fetchWeather.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.weather = null;
        state.status = 'rejected';
        state.error = action.payload as string;
      },
    );
  },
});

export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
