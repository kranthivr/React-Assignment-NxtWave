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
    alert(`Clicked`);
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
    canNextPage,
    canPreviousPage,
    prepareRow,
    state,
    setGlobalFilter,
    setPageSize,
    selectedFlatRows,
  } = tableInstance;

  const { globalFilter } = { state };

  useEffect(() => {
    setPageSize(6);
  }, [setPageSize]);

  return (
    <>
      <span>Resources</span>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers?.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells?.map((cell) => {
                  return (
                    <td
                      onClick={() =>
                        navigate("/add-item", {
                          state: {
                            it: cell.row.original.title,
                            li: cell.row.original.link,
                            res: title,
                            des: cell.row.original.description,
                          },
                        })
                      }
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
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
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};
