import React from "react";

export type ColumnDefs<T> = {
    title: string;
} & (
    | {
          field: keyof T;
      }
    | {
          render: (rowData: T) => React.ReactNode;
      }
);

type TableProps<T> = {
    columnDefs: ColumnDefs<T>[];
    data: T[];
};

const Table = <T,>({ columnDefs, data }: TableProps<T>) => {
    return (
        <table className="min-w-full divide-y overflow-hidden rounded-lg divide-gray-800 shadow-lg">
            <thead className="bg-green-200">
                <tr>
                    {columnDefs.map((column, index) => (
                        <th
                            key={index}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((rowData, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className="cursor-pointer hover:bg-gray-100"
                    >
                        {columnDefs.map((column, colIndex) => (
                            <td
                                key={colIndex}
                                className="px-6 py-4 whitespace-nowrap"
                            >
                                {"field" in column
                                    ? (rowData[column.field] as React.ReactNode)
                                    : column.render
                                    ? column.render(rowData)
                                    : null}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
