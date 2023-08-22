import { FilterItem, Sort } from "./types";

export const filtersToAPIFormat = (filters: FilterItem[]) => {
    const processedFilters = filters.filter(
        (filter) => filter.value !== undefined && filter.value !== null
    );
    return JSON.stringify(processedFilters);
};

export const currentPageToAPIRange = (currentPage: number, perPage: number) => {
    const start = currentPage * perPage;
    const end = start + perPage - 1;
    return {
        "range.Start": start,
        "range.End": end,
    };
};

export const sortToAPISort = (sort: Sort) => {
    return {
        "sort.Field": sort.field,
        "sort.IsAscending": sort.isAscending,
    };
};

export const getOptionsFromEnum = (enumObject: any) => {
    const keyValues = Object.entries(enumObject).filter((x: any) => !isNaN(x[1]));
    return keyValues.map((option) => ({
      label: option[0],
      value: Number(option[1]),
    }));
};