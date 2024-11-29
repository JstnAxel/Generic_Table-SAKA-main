"use client";
import React from "react";

type Column<T> = {
    header: string;
    accessor: (row: T) => React.ReactNode;
};

type TableProps<T> = {
    columns: Column<T>[];
    data: T[];
};


const Table = <T,>({ columns, data }: TableProps<T>) => {
    return (
        <table className="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={index}
                            className="border border-gray-300 px-4 py-2 bg-gray-100"
                        >
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                        {columns.map((column, colIndex) => (
                            <td
                                key={colIndex}
                                className="border border-gray-300 px-4 py-2"
                            >
                                {column.accessor(row)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
