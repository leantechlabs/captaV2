import React from 'react';

const TableRow = ({ data, paddingLeft }) => {
  return (
    <>
      {data.map((item, index) => (
        <tr key={index}>
          {item.map((cell, cellIndex) => (
            <td key={cellIndex} style={{ paddingLeft }}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
