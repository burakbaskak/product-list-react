import React from "react";
import { useCompaniesQuery, useGetTagListQuery } from "../../app/services/api";
import { FilterList } from "../../components/filter-list";
import { Sorting } from "../../components/sorting";
import { useDispatch } from "react-redux";
import {
  changeFilterBrands,
  changeFilterTags,
  changeSorting,
} from "./productSlice";

export const FilterPane = () => {
  const { data, isLoading: companyLoading } = useCompaniesQuery();
  const { data: tags, isLoading: tagIsLoading } = useGetTagListQuery();

  const dispatch = useDispatch();
  const onSortChange = (sortType) => {
    dispatch(changeSorting(sortType));
  };

  const onBrandSelectionChange = (selectedBrands) => {
    dispatch(changeFilterBrands(selectedBrands));
  };
  const onTagSelectionChange = (selectedTags) => {
    dispatch(changeFilterTags(selectedTags));
  };

  return (
    <>
      <Sorting onChange={onSortChange} />
      <FilterList
        title="Brands"
        dataSource={companyLoading ? [] : data}
        onChange={onBrandSelectionChange}
      />
      <FilterList
        title="Tags"
        dataSource={tagIsLoading ? [] : tags}
        onChange={onTagSelectionChange}
      />
    </>
  );
};
