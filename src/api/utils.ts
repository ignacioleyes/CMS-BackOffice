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