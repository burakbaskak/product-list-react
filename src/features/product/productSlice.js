import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/services/api";
import { SORT_LIST } from "../../const/sortTypes";

const ascSort = (colmName) => (a, b) => a[colmName] - b[colmName];
const descSort = (colmName) => (a, b) => b[colmName] - a[colmName];

const ROWS_PER_PAGE = 16;

const filterProducts = ({
  items,
  sortType,
  filter: { itemType, brands, tags },
}) => {
  let list = items
    .filter((item) => item.itemType === itemType)
    .sort(
      sortType.value === "1" || sortType.value === "3"
        ? ascSort(sortType.column)
        : descSort(sortType.column)
    );

  if (brands.indexOf(-1) < 0) {
    list = list.filter(
      (item) => brands.filter((brand) => brand === item.manufacturer).length > 0
    );
  }

  if (tags.indexOf(-1) < 0) {
    console.log("tags", tags);
    list = list.filter(
      (item) => item.tags.filter((tag) => tags.includes(tag)).length > 0
    );
  }
  return list;
};

const calculatePageCount = (count) => Math.ceil(count / ROWS_PER_PAGE);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    sortType: SORT_LIST[0],
    filter: {
      itemType: "mug",
      brands: [-1],
      tags: [-1],
    },
    pagination: {
      page: 1,
      rowsPerPage: ROWS_PER_PAGE,
    },
    pageCount: 0,
  },
  reducers: {
    changePage: (state, { payload }) => {
      state.pagination.page = payload;
      state.pageCount = calculatePageCount(filterProducts(state).length);
    },
    changeSorting: (state, { payload }) => {
      state.sortType = payload;
      state.pagination.page = 1;
      state.pageCount = calculatePageCount(filterProducts(state).length);
    },
    changeFilterItemType: (state, { payload }) => {
      state.filter.itemType = payload;
      state.pagination.page = 1;
      state.pageCount = calculatePageCount(filterProducts(state).length);
    },
    changeFilterTags: (state, { payload }) => {
      state.filter.tags = payload;
      state.pagination.page = 1;
      state.pageCount = calculatePageCount(filterProducts(state).length);
    },
    changeFilterBrands: (state, { payload }) => {
      state.filter.brands = payload;
      state.pagination.page = 1;
      state.pageCount = calculatePageCount(filterProducts(state).length);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.items.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
        state.pagination.page = 1;
        state.pageCount = calculatePageCount(filterProducts(state).length);
      }
    );
  },
});

export const {
  changePage,
  changeFilterBrands,
  changeFilterItemType,
  changeFilterTags,
  changeSorting,
} = productSlice.actions;

export default productSlice.reducer;

export const selecFilteredProducts = (state) => {
  const {
    product: {
      items,
      pagination: { page, rowsPerPage },
    },
  } = state;

  const list = filterProducts(state.product);
  const trimStart = (page - 1) * rowsPerPage;
  const trimEnd = trimStart + rowsPerPage;
  return list.slice(trimStart, trimEnd > items.length ? items.length : trimEnd);
};

export const selectPageCount = (state) => state.product.pageCount;
