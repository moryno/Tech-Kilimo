import React, { useEffect, useRef, useState } from "react";
import "devextreme/data/odata/store";
import DataGrid, {
  GroupItem,
  SortByGroupSummaryInfo,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";

// Our demo infrastructure requires us to use 'file-saver-es'.
// We recommend that you use the official 'file-saver' package in your applications.

import { orderColumns, dailyReportSummary } from "../../data/PurchaseOrderData";
import { getReportGridRef } from "../../helpers/DevExtremeHelperFunctions/exportReportFunction";
import request from "../../helpers/tempRequest";
import { reportDemoData } from "../../helpers/datatableSource";

const DailyReport = ({}) => {
  const [collapsed, setCollapsed] = useState(false);
  const loadingRef = useRef(true);
  // Define a dataGridRef variable to hold the reference to the datagrid
  const dataGridRef = useRef(null);
  const [data, setData] = useState([]);
  const year = new Date().getFullYear();

  // Get the datagrid instance once the datagrid is loaded
  function onContentReady(e) {
    getReportGridRef(dataGridRef.current);
    if (!collapsed) {
      e.component.expandRow(["EnviroCare"]);
      setCollapsed({
        collapsed: true,
      });
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await request.get("PurchaseOrder/orders");
        setData(response.data);
        loadingRef.current = false;
      } catch (error) {
        console.log(error);
        getData();
      }
    };

    getData();
  }, []);

  return (
    <main className="mt-5 md:w-[80%] p-2 border border-gray-500 mx-auto">
      <section className="flex flex-col items-center justify-center">
        <article className="flex w-full items-center justify-between">
          <h1 className="text-sm  text-gray-600">iBusiness</h1>
          <p className="text-sm  text-gray-600">2023-10-23</p>
        </article>
        <article className="rounded-full overflow-hidden  w-20 h-20 flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/premium-vector/bhi-letter-logo-design_688606-29.jpg"
            alt="logo"
          />
        </article>

        <article className="my-1 text-center">
          <h1 className="text-sm font-medium text-gray-600">
            Nespoly Pack Limited
          </h1>
          <p className="text-xs font-medium text-gray-600">
            info@nespolypack.com
          </p>
          <p className="text-xs font-medium text-gray-600">57517</p>
          <p className="text-xs font-medium text-gray-600">25470985456</p>
          <p className="text-xs font-medium text-gray-600">
            www.nespolypack.com
          </p>
        </article>
        <article className="w-full p-0.5 flex items-center justify-center bg-reportHeading text-reportColor">
          <h1 className="text-sm font-semibold">Daily Production Analysis</h1>
        </article>
      </section>
      <section className="my-2">
        <DataGrid
          id="dailyReportGrid"
          //   className={"dx-card wide-card"}
          dataSource={reportDemoData}
          columns={orderColumns}
          //   showBorders={true}
          showColumnLines={false}
          hoverStateEnabled={true}
          keyExpr={"orderNumber"}
          rowAlternationEnabled={true}
          //   summary={dailyReportSummary}
          allowColumnReordering={true}
          allowColumnResizing={true}
          columnMinWidth={100}
          columnAutoWidth={true}
          ref={dataGridRef}
          onContentReady={onContentReady}
        >
          <Summary>
            <GroupItem
              column="orderNumber"
              summaryType="count"
              displayFormat="{0} orders"
            />

            <GroupItem
              column="orderAmount"
              summaryType="sum"
              valueFormat="currency"
              displayFormat="Total: {0}"
              showInGroupFooter={true}
            />
          </Summary>
          <SortByGroupSummaryInfo summaryItem="count" />
        </DataGrid>
      </section>
      <section>
        <article className="flex items-center justify-between">
          <p className=" text-xs text-gray-500 font-medium">
            Report by: James Karanja
          </p>
          <p className=" text-xs text-gray-500 font-medium">©&nbsp;{year}</p>
        </article>
      </section>
    </main>
  );
};

export default DailyReport;
