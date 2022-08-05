export const COLUMNS = [
  { Header: "TITLE", accessor: "title" },
  { Header: "DESCRIPTION", accessor: "description", disableGlobalFilter: true },
  {
    Header: "LINK",
    accessor: "link",
    Cell: (e) => (
      <a
        href={e.value}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        {e.value}{" "}
      </a>
    ),
    disableGlobalFilter: true,
  },
];
