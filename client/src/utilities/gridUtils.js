export const filterHandler = filter => filters => {
    const newFilters = { ...filters };
    if (filter.filterTerm) {
        newFilters[filter.column.key] = filter;
    } else {
        delete newFilters[filter.column.key];
    }
    return newFilters;
};

export const sortRows = (unfilteredRows, initialRows, sortColumn, sortDirection, onGridRowSorted) => rows => {
    const comparer = (a, b) => {
        if (sortDirection === "ASC") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        }
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
    };

    const sortedRows = sortDirection === "NONE" ? unfilteredRows : [...unfilteredRows].sort(comparer);
    onGridRowSorted(sortedRows);
    return sortedRows;
};

export const gridRowUpdateHandler = (filteredRows, onRowUpdateCallback) => ({ fromRow, toRow, updated }) => {
    const updatedRows = [];
    const rows = filteredRows.slice();
    for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
        updatedRows.push(rows[i]);
    }

    onRowUpdateCallback(updatedRows);
};