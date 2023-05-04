//a function that customize cell that are exported to excel || pdf , the function returns a Promise. The Promise is resolved with the customized worksheet object when the worksheet is added successfully.
/* ................................................ Start of the function to export to excel ............................................................. */
let groupRowIndexes = [];
let rowIndexes = [];

export const onCustomizeCell = (options) => {
  const { excelCell, gridCell } = options;
  if (
    gridCell.rowType !== "data" &&
    gridCell.column.dataField === "orderNumber" &&
    rowIndexes.length
  ) {
    groupRowIndexes.push(rowIndexes);
    rowIndexes = [];
  }
  if (
    gridCell.rowType === "data" &&
    gridCell.column.dataField === "orderNumber"
  ) {
    rowIndexes.push(excelCell.fullAddress.row);
  }
  if (gridCell.rowType === "group") {
    excelCell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "BEDFE6" },
    };
  }
};

export const resolveCustomizeCell = (cellRange, worksheet) => {
  if (rowIndexes.length) {
    groupRowIndexes.push(rowIndexes);
  }
  groupRowIndexes.forEach((indexes) => {
    indexes.forEach((rowIndex, index) => {
      if ((index + 1) % 2 === 0) {
        for (
          let columnIndex = cellRange.from.column;
          columnIndex <= cellRange.to.column;
          columnIndex++
        ) {
          worksheet.getCell(rowIndex, columnIndex).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "F5F5F5" },
          };
        }
      }
    });
  });
  return Promise.resolve();
};

/* ................................................ Start of the function to export to excel ............................................................. */

export const customizePdfCell = ({ gridCell, pdfCell }, dataGrid) => {
  gridCell.border = {};
  // console.log(gridCell);
  // console.log(pdfCell);
  // console.log(dataGrid);

  if (gridCell.rowType === "group") {
    pdfCell.backgroundColor = "#BEDFE6";
  }
  if (gridCell.rowType === "header") {
    pdfCell.backgroundColor = "#ffffff";
    pdfCell.textColor = "#489AEE";
    pdfCell.font = 11;
    // pdfCell.borderWidth = 0;
    // pdfCell.borderColor = "#ffffff";
  }
  if (gridCell.rowType === "data") {
    pdfCell.textColor = "#282828";
    const rowIndex = dataGrid.getRowIndexByKey(gridCell.data.orderNumber);
    if (rowIndex % 2 === 0) {
      pdfCell.backgroundColor = "#F5F5F5";
    }
  }
};
