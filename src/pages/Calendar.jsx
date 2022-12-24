import React from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewDirective,
  ViewsDirective,
  Resize,
} from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';
import { scheduleData } from '../data/dummy';

const Calendar = () => {
  return (
    <div className=' bg-white p-4 mt-5 md:p-10 md:mt-10 rounded-lg '>
      <Header content='Calendar' title='Apps' />
      <div>
        <ScheduleComponent
          height='650px'
          selectedDate={new Date(2021, 0, 10)}
          eventSettings={{ dataSource: scheduleData }}
        >
          <ViewsDirective>
            {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map(
              (item) => (
                <ViewDirective key={item} option={item} />
              )
            )}
          </ViewsDirective>
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
