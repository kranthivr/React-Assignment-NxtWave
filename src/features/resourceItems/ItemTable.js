import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { Checkbox } from "./Checkbox";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";
import "./table.css";

export const ItemTable = ({ title, itemArray }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => itemArray, [itemArray]);
  let navigate = useNavigate();

  const handleAdd = () => {
    let path = `/add-item`;
    navigate(path);
  };

  const handleDelete = () => {
    alert(`Success`);
  };

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <Checkbox {...getToggleAllPageRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <Checkbox
              {...row.getToggleRowSelectedProps()}
              onClick={(e) => e.stopPropagation()}
            />
          ),
        },
        ...columns,
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    canNextPage,
    canPreviousPage,
    prepareRow,
    state,
    setGlobalFilter,
    setPageSize,
    selectedFlatRows,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  useEffect(() => {
    setPageSize(6);
  }, [setPageSize]);

  return (
    <>
      <span>Resources</span>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps();
                  return (
                    <th key={key} {...restColumn}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells?.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="tButtons">
        <div>
          <button
            className="addItemButton"
            onClick={handleAdd}
            disabled={!(selectedFlatRows.length === 0)}
          >
            ADD ITEM
          </button>
          <button
            className="deleteButton"
            onClick={handleDelete}
            disabled={!selectedFlatRows.length > 0}
          >
            DELETE
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            &lt;
          </button>
          <span>
            {" "}
            Page:{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}{" "}
            </strong>
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};
