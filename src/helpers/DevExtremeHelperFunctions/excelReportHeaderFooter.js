//Header of our report, the function returns a Promise. The Promise is resolved with the customized worksheet object when the header is added successfully.

/* ................................................ Start of the function to add header and footer in excel ............................................................. */
export function addHeaderToWorksheet(
  worksheet,
  workbook,
  companyTitle,
  email,
  telephone,
  website,
  reportHeaderTitle
) {
  //get last column in the header row to use to determine the lenght of the heading row

  const lastHeaderColumn = worksheet.getRow(7).actualCellCount;

  // excel header
  // Add company logo to top of header
  const companyLogo = worksheet.getRow(2);

  companyLogo.height = 60;
  // Merge the cells in the logo row to span the full width of the worksheet
  worksheet.mergeCells(2, 1, 2, lastHeaderColumn);
  // Define the base64 image string

  const logoImg = workbook.addImage({
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    extension: "png",
  });

  const logoImage = worksheet.addImage(logoImg, {
    tl: { col: lastHeaderColumn / 2, row: 1 },
    ext: { width: 80, height: 80 },
    editAs: "absolute",
  });
  companyLogo.getCell(1).value = { image: logoImage };
  companyLogo.getCell(1).alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  // Add company title to top of header
  const companyHeader = worksheet.getRow(3);
  worksheet.mergeCells(3, 1, 3, lastHeaderColumn);
  companyHeader.getCell(1).value = companyTitle;
  companyHeader.getCell(1).font = {
    size: 12,

    bold: true, // set the font weight to bold
    weight: 500,
  };
  companyHeader.getCell(1).alignment = {
    horizontal: "center",
    wrapText: true,
    marginTop: 5,
  };

  // Add company email, telephone and website to top of header
  const headerRow = worksheet.getRow(4);
  headerRow.height = 50;
  worksheet.mergeCells(4, 1, 4, lastHeaderColumn);
  headerRow.getCell(1).value = email + "\n" + telephone + "\n" + website;
  headerRow.getCell(1).font = {
    size: 12,
    color: { argb: "4B5563" },
  };
  headerRow.getCell(1).alignment = {
    horizontal: "center",
    wrapText: true,
  };

  // Add company report title/type to bottom of header
  const reportHeader = worksheet.getRow(5);
  worksheet.mergeCells(5, 1, 5, lastHeaderColumn);
  reportHeader.getCell(1).value = reportHeaderTitle;
  reportHeader.getCell(1).font = {
    size: 12,
    color: { argb: "FFFFFFFF" }, // set the font color to white
  };
  reportHeader.getCell(1).alignment = {
    horizontal: "center",
    marginTop: 5,
    wrapText: true,
  };

  // Set the  color of the column headers
  const columnHeader = worksheet.getRow(7);

  columnHeader.eachCell((cell, index) => {
    cell.font = {
      color: { argb: "489AEE" }, // set the font color to white
      size: 12, // set the font size to 14
    };
  });
  // Set the background color and borders for company report title/type
  reportHeader.getCell(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "489AEE" },
  };

  // Set the borders for the header cells
  const companyRow1 = worksheet.getRow(1);
  worksheet.mergeCells(1, 1, 1, lastHeaderColumn);
  companyRow1.getCell(1).border = {
    top: { style: "thin", color: { argb: "FFFFFFFF" } },

    bottom: { style: "thin", color: { argb: "FFFFFFFF" } },
  };

  companyLogo.getCell(1).border = {
    bottom: { style: "thin", color: { argb: "FFFFFFFF" } },
  };
  reportHeader.getCell(1).border = {
    top: { style: "thin", color: { argb: "FFFFFFFF" } },

    bottom: { style: "thin", color: { argb: "FFFFFFFF" } },
  };
  headerRow.getCell(1).border = {
    top: { style: "thin", color: { argb: "FFFFFFFF" } },

    bottom: { style: "thin", color: { argb: "FFFFFFFF" } },
  };
  companyHeader.getCell(1).border = {
    top: { style: "thin", color: { argb: "FFFFFFFF" } },

    bottom: { style: "thin", color: { argb: "FFFFFFFF" } },
  };

  const gapRow = worksheet.getRow(6);
  gapRow.height = 20;
  worksheet.mergeCells(6, 1, 6, lastHeaderColumn);
  gapRow.border = {
    top: { style: "thin", color: { argb: "FFFFFFFF" } },
  };

  return Promise.resolve();
}

// Footer of our report,the function returns a Promise. The Promise is resolved with the customized worksheet object when the footer is added successfully.
export function addFooter(worksheet, cellRange, authorName) {
  const footerRowIndex = cellRange.to.row + 2;
  const footerRow = worksheet.getRow(footerRowIndex);
  worksheet.mergeCells(footerRowIndex, 1, footerRowIndex, 8);
  footerRow.getCell(1).value = `Report by: ${authorName}`;
  footerRow.getCell(1).font = { color: { argb: "BFBFBF" }, italic: true };
  footerRow.getCell(1).alignment = { horizontal: "left" };

  return Promise.resolve();
}
