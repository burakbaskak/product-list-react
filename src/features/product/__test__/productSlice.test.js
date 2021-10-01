import { SORT_LIST } from "../../../const/sortTypes";
import productReducer, {
  changePage,
  changeFilterBrands,
  changeFilterItemType,
  changeFilterTags,
  changeSorting,
  selectPageCount,
} from "../productSlice";

describe("product reducer", () => {
  const initialState = {
    items: [],
    sortType: SORT_LIST[0],
    filter: {
      itemType: "mug",
      brands: [-1],
      tags: [-1],
    },
    pagination: {
      page: 1,
      rowsPerPage: 16,
    },
    pageCount: 0,
  };

  it("should handle change page", () => {
    const actual = productReducer(initialState, changePage(3));
    expect(actual.pagination.page).toEqual(3);
  });

  it("should handle change item type", () => {
    const actual = productReducer(
      initialState,
      changeFilterItemType("item-type")
    );
    expect(actual.filter.itemType).toEqual("item-type");
  });

  it("should handle change filter brands", () => {
    const actual = productReducer(
      initialState,
      changeFilterBrands(["x", "y", "z"])
    );
    expect(actual.filter.brands).toEqual(["x", "y", "z"]);
  });

  it("should handle change filter tags", () => {
    const actual = productReducer(
      initialState,
      changeFilterTags(["x", "y", "z"])
    );
    expect(actual.filter.tags).toEqual(["x", "y", "z"]);
  });

  it("should handle change sort type", () => {
    const actual = productReducer(initialState, changeSorting(SORT_LIST[2]));
    expect(actual.sortType).toEqual(SORT_LIST[2]);
  });

  it("should handle select page count", () => {
    const actual = selectPageCount({ product: initialState });
    expect(actual).toEqual(0);
  });
});
