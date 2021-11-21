import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as newsServices from "../../Services/newsServices";

const newsInitialState = {
  loading: false,
  data: [],
  error: "",
  currentNews: "",
};

export const getAll = createAsyncThunk("news/getAll", newsServices.getNews);

export const getById = createAsyncThunk("news/getById",newsServices.getNewById);

export const create = createAsyncThunk("news/create", newsServices.createNew);

export const update = createAsyncThunk("news/update", ({ id, data }) =>
  newsServices.updateNewById(data, id)
);

export const createOrUpdate = createAsyncThunk("news/createOrUpdate", (news) =>
  newsServices.createOrUpdateNews(news, news.id)
);

export const deletebyId = createAsyncThunk("news/delete",newsServices.deleteNewByid);


const newsSlice = createSlice({
  name: "news",
  initialState: newsInitialState,
  reducers: {},
  extraReducers: {
    [getAll.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getAll.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    },
    [getAll.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [getById.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getById.fulfilled]: (state, action) => {
      return {
        ...state,
        currentNews: action.payload,
        loading: false,
      };
    },
    [getById.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [create.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [create.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    },
    [create.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [update.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [update.fulfilled]: (state, action) => {
      const newsForUpdate = state.data.findIndex(
        (element) => element.id == action.payload.id
      );
      state.data[newsForUpdate] = action.payload;
    },
    [update.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [createOrUpdate.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [createOrUpdate.fulfilled]: (state, action) => {
      console.group("CREATE OR UPDATE");
      console.log(state);
      console.log(action);
      console.groupEnd("CREATE OR UPDATE");
      const payloadNews = state.data.findIndex(
        (element) => element.id == action.payload.id
      );
      if (payloadNews >= 0) state.data[payloadNews] = action.payload;
      else state.data = [...state.data, action.payload];
    },
    [createOrUpdate.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [deletebyId.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [deletebyId.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [...state.data.filter((id) => id !== action.payload)],
        loading: false,
      };
    },
    [deletebyId.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
  },
});
export default newsSlice.reducer;
