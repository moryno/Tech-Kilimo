import { useEffect, useRef } from "react";
import { DxReportViewer } from "devexpress-reporting/dx-webdocumentviewer";
import * as ko from "knockout";

const ReportViewer = () => {
  const reportUrl = ko.observable("DevextremeReport");
  const viewerRef = useRef();
  const requestOptions = {
    host: "http://192.168.1.5:5290/",
    invokeAction: "DXXRDV",
  };
  useEffect(() => {
    const viewer = new DxReportViewer(viewerRef.current, {
      reportUrl,
      requestOptions,
    });
    viewer.render();
    return () => viewer.dispose();
  });
  return <div ref={viewerRef}></div>;
};

const CustomizeHeader = () => {
  return (
    <div style={{ width: "100%", height: "1000px" }}>
      <ReportViewer />
    </div>
  );
};

export default CustomizeHeader;
