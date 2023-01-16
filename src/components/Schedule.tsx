import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "../css/calendar.css";

export default function Schedule() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      height="85vh"
      headerToolbar={{ left: "prev", center: "title", right: "next" }}
      events={[
        { title: "MemorialDay", date: "2023-01-07", classNames: "heart" },
        { title: "MyMelody BirthDay", date: "2023-01-18" },
        { title: "MyMom BirthDay", date: "2023-01-20" },
        { title: "Holiday", start: "2023-02-23", end: "2023-02-26" }
      ]}
    />
  );
}
