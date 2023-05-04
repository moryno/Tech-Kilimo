import { exportDataGrid as exportDataGridToExcel } from "devextreme/excel_exporter";
import { jsPDF } from "jspdf";
import { exportDataGrid as exportDataGridToPdf } from "devextreme/pdf_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver";
import {
  customizePdfCell,
  onCustomizeCell,
  resolveCustomizeCell,
} from "./customizeExportedCell";
import { addFooter, addHeaderToWorksheet } from "./excelReportHeaderFooter";
import {
  addPdfFooter,
  generatePdfDocumentWithHeader,
} from "./pdfReportHeaderFooter";

let dataGridInstance;
// Function to get the instance of the datagrid onLoad
export const getReportGridRef = (dataGrid) => {
  return (dataGridInstance = dataGrid.instance);
};

// Set up company information
const companyTitle = "My Company";
const email = "info@mycompany.com";
const imageUrl = "https://example.com/image.png";
const telephone = "+1 (123) 456-7890";
const website = "www.nespolypack.com";
const reportHeaderTitle = "Daily Production Analysis";
const author = "Juyne James";

// Function to export row as excel or pdf
export const onExporting = (exportValue) => {
  if (exportValue.format === "xlsx") {
    /* ................................................ Start of the function to export to excel ............................................................. */
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("DailyProductionAnalysis", {
      views: [{ showGridLines: false, activeCell: "A8" }],
      properties: { tabColor: { argb: "FF00FF00" } },
      pageSetup: { paperSize: 9, orientation: "landscape" },
    });

    exportDataGridToExcel({
      component: dataGridInstance,
      worksheet,
      topLeftCell: { row: 7, column: 1 },
      customizeCell: (options) => onCustomizeCell(options),
    })
      .then((cellRange) => {
        // Header of the report in Excel
        addHeaderToWorksheet(
          worksheet,
          workbook,
          companyTitle,
          email,
          telephone,
          website,
          reportHeaderTitle
        );

        // Footer of the report in Excel
        // pass worksheet, cellRange and author of report as artgument
        addFooter(worksheet, cellRange, author);
        // resolve method passed in the cell range to resolve the onCustomeCell method
        resolveCustomizeCell(cellRange, worksheet);
      })
      .then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            "DailyProductionAnalysis.xlsx"
          );
        });
      });
    dataGridInstance.cancel = true;

    /* ................................................ End of the function to export to excel ............................................................. */
  } else {
    /* ................................................ Start of the function to export to pdf ............................................................. */
    const doc = new jsPDF("landscape");

    // Generate the header and get the last point
    const lastPoint = generatePdfDocumentWithHeader(
      doc,
      companyTitle,
      email,
      telephone,
      website,
      reportHeaderTitle
    );

    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: dataGridInstance,

      customizeCell: (options) => customizePdfCell(options, dataGridInstance),
      // adjust the Y-coordinate of the content to make room for the header
      topLeft: { x: 1, y: lastPoint.y },

      customDrawCell({ rect }) {
        if (lastPoint.x < rect.x + rect.w) {
          lastPoint.x = rect.x + rect.w;
        }
        if (lastPoint.y < rect.y + rect.h) {
          lastPoint.y = rect.y + rect.h;
        }
      },
    }).then(() => {
      // Footer
      addPdfFooter(doc, author, lastPoint);
      doc.save("DailyProductionAnalysis.pdf");
    });
  }
  /* ................................................ End of the function to export to pdf ............................................................. */
};

// Define function to switch between different export format in Excel or Pdf
export const handleExportFormat = (title) => {
  let format;
  let selectedRowsOnly;

  switch (title) {
    case "Export selected rows to Excel":
      format = "xlsx";
      selectedRowsOnly = true;
      break;
    case "Export all data to Excel":
      format = "xlsx";
      selectedRowsOnly = false;
      break;
    case "Export selected rows to PDF":
      format = "pdf";
      selectedRowsOnly = true;
      break;
    case "Export all data to PDF":
      format = "pdf";
      selectedRowsOnly = false;
      break;

    default:
      break;
  }

  return { format, selectedRowsOnly };
};

// Define a function that calls on OnExporting function and pass the format to export
export const handleReportExporting = (exportFormat) => {
  const exportValue = handleExportFormat(exportFormat);
  onExporting(exportValue);
};
