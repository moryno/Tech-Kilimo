/* ................................................ Start of the function to add header and footer in pdf ............................................................. */
export function generatePdfDocumentWithHeader(
  doc,
  companyTitle,
  email,
  telephone,
  website,
  reportHeaderTitle
) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const lastPoint = { x: 0, y: 0 };

  const imgData =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
  const imageWidth = 20;
  const centerX = pageWidth / 2; // set the x-coordinate of the page
  const imageHeight = 20;
  const imageY = 10; // set the Y-coordinate of the image
  const headerY = imageY + imageHeight + 7; // adjust the Y-coordinate as necessary
  const reportHeaderY = headerY + 20;
  const headerFontSize = 10;
  const reportHeaderHeight = 5;
  const reportHeaderColor = "#489AEE";

  // Add company logo
  const imageX = (pageWidth - imageWidth) / 2; // center the image horizontally
  doc.addImage(imgData, "PNG", imageX, imageY, imageWidth, imageHeight);

  // Add company title
  doc.setFontSize(headerFontSize);
  // doc.setFont("helvetica", "semibold");
  doc.text(companyTitle, centerX, headerY, {
    align: "center",
  });

  // Add email
  doc.setFontSize(headerFontSize);
  doc.text(email, centerX, headerY + 5, {
    align: "center",
  });

  // Add telephone
  doc.setFontSize(headerFontSize);
  doc.text(telephone, centerX, headerY + 10, {
    align: "center",
  });

  doc.text(website, centerX, headerY + 15, {
    align: "center",
  });

  doc.setFontSize(headerFontSize);
  doc.setFillColor(reportHeaderColor);
  doc.setTextColor("#ffffff");
  doc.rect(0, reportHeaderY, pageWidth, reportHeaderHeight, "F");
  const reportHeaderTextY = reportHeaderY + 1.5 + reportHeaderHeight / 2;
  doc.text(reportHeaderTitle, centerX, reportHeaderTextY, {
    align: "center",
  });

  lastPoint.x = 0;
  lastPoint.y = headerY + 20;

  return lastPoint;
}

export function addPdfFooter(doc, authorName, lastPoint) {
  doc.setFontSize(9);
  doc.setTextColor("#cccccc");
  const footerWidth = doc.getTextDimensions(authorName).w;
  doc.text(authorName, lastPoint.x - footerWidth, lastPoint.y);
}
