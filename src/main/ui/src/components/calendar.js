import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
export default function Calendar(props) {

const renameKey = (obj, oldKey, newKey) => {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
}

const arr = props.workouts;
arr.forEach( obj => renameKey( obj, 'name', 'title' ) );
const calendarEvents = arr

  return (
    <div className="calendar">
        <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridWeek"
                    height="auto"
                    headerToolbar={
                        {
                         start: '',
                         end: ''
                        }
                      }
                    events={calendarEvents}
                />
      </div>
  );
}