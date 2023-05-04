import { useEffect, useState } from "react";
import DateBox from "devextreme-react/date-box";
import { toast } from "react-toastify";
import { SelectBox } from "devextreme-react";

import Statusbar from "../../components/dashboard/Statusbar";
import MenuButtonsGroup from "../../components/dashboard/MenuButtonsGroup";
import { reportMenuSource } from "../../data/menu";
import MobileMenus from "../../components/dashboard/MobileMenus";
import webService from "../../utils/webService";
import DailyReport from "../../components/dashboard/DailyReport";
import { handleReportExporting } from "../../helpers/DevExtremeHelperFunctions/exportReportFunction";

// Get todays day to use in the filter date fields of the datagrid
const today = new Date().toISOString().slice(0, 10);

const ReportPage = () => {
  const [bookings, setBookings] = useState([]);
  const [singleBooking, setSingleBooking] = useState({});
  const [onRowDblClickBookingId, setRowDblClickBookingId] = useState(null);
  const [onRowClickItem, setRowClickItem] = useState(null);
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today);
  const [date, setDate] = useState("");
  const [statusMode, setStatusMode] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fuction to close the Create || update form
  const handleClose = () => {
    setRowDblClickBookingId(null);
    setSingleBooking({});
    setStatusMode("");
    setOpen(false);
  };

  // Define a function to get the instance of selected row
  const startEdit = ({ data }) => {
    if (data) {
      setRowDblClickBookingId(data.bookingId);
    } else {
      setRowDblClickBookingId(null);
    }
  };

  // This Hook is to fetch all bookings when a page renders or when date is passed as parameter in the datagrid
  useEffect(() => {
    try {
      const getData = async () => {
        setLoading(true);
        const response = date
          ? await webService.Request.getByDate(date.startdate, date.enddate)
          : await webService.Request.get();

        setLoading(false);
        setBookings(response);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [date]);

  // This Hook is to fetch single booking when a row in the datagrid is double clicked
  useEffect(() => {
    const getSingleBooking = async () => {
      const response = await webService.Request.getById(onRowDblClickBookingId);
      setSingleBooking(response);
      setStatusMode("EditMode");
      setOpen((isOpen) => !isOpen);
    };
    if (onRowDblClickBookingId) getSingleBooking();
  }, [onRowDblClickBookingId]);

  // Function to open ConfirmationPopupComponent
  const openConfirmationPopup = async (rowItem) => {
    if (rowItem === null) {
      toast.warning("Please select a booking to delete");
    } else {
      setStatusMode("DeleteMode");
      setOpen((isOpen) => !isOpen);
    }
  };

  // This function is used to toggle between each menu botton clicks
  const handleClick = (menu) => {
    switch (menu) {
      case "Find":
        fromDate === null && toDate && date === ""
          ? setDate({ startdate: fromDate, enddate: toDate })
          : setDate({ startdate: fromDate, enddate: toDate });
        break;
      case "New":
        setStatusMode("CreateMode");
        setOpen((isOpen) => !isOpen);
        break;
      case "Delete":
        openConfirmationPopup(onRowClickItem);
        break;
      case "Close":
        console.log("Close was clicked");
        break;
      case "Help":
        console.log("Help was clicked");
        break;

      default:
        break;
    }
  };

  return (
    <main className="w-full h-screen relative  px-3 md:px-5 py-1.5">
      <section className="h-full">
        <section className="border-b border-gray-300">
          <MenuButtonsGroup
            heading="Daily Production Analysis"
            menus={reportMenuSource}
            onMenuClick={handleClick}
            onExporting={handleReportExporting}
          />

          <article className="relative">
            <MobileMenus menus={reportMenuSource} onMenuClick={handleClick} />

            <article className=" md:pr-5 flex flex-col justify-center">
              <div className="md:py-1 md:w-4/12">
                <div className="flex w-full justify-between items-center ">
                  <label
                    className="font-semibold text-xs  text-gray-600"
                    htmlFor="costCenter"
                  >
                    CostCenter:
                  </label>
                  <SelectBox
                    id="costCenter"
                    //   dataSource={bookingTypeOptions}
                    searchEnabled={true}
                    placeholder="Select a cost center"
                    height={26}
                    style={{ fontSize: "12px" }}
                    //   onValueChanged={(e) => setBookingType(e.value)}
                    //   value={bookingType}
                    className="border pl-1 w-full md:w-1/2  outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row w-full md:py-1">
                <div className="flex w-full justify-between  md:w-4/12 items-center ">
                  <label
                    className="font-semibold text-xs  text-gray-600"
                    htmlFor="fromDate"
                  >
                    FromDate:
                  </label>

                  <DateBox
                    id="fromDate"
                    onValueChanged={(e) => setFromDate(e.value)}
                    value={fromDate}
                    height={26}
                    style={{ fontSize: "12px" }}
                    className="border pl-1 w-full md:w-1/2  outline-none"
                  />
                </div>
                <div className="flex w-full justify-between  md:w-4/12 items-center ">
                  <label
                    className="font-semibold text-xs  text-gray-600"
                    htmlFor="toDate"
                  >
                    ToDate:
                  </label>
                  <DateBox
                    id="toDate"
                    onValueChanged={(e) => setToDate(e.value)}
                    value={toDate}
                    height={26}
                    style={{ fontSize: "12px" }}
                    className=" border pl-1 w-full md:w-1/2  outline-none"
                  />
                </div>
              </div>
            </article>
          </article>
        </section>
        <section>
          <DailyReport />
        </section>
      </section>

      <Statusbar heading="Generate report" company="ARBS Customer Portal" />
    </main>
  );
};

export default ReportPage;
