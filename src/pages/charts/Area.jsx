import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { Header } from '../../components';
import { useSateContext } from '../../context/ContextProvider';
import {
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  areaCustomSeries,
} from '../../data/dummy';

const Area = () => {
  const { theme } = useSateContext();
  return (
    <div className=' bg-white md:p-10 md:mt-10 p-4 mt-5  rounded-lg dark:bg-secondary-dark-bg'>
      <Header
        content='Area'
        title='Chart'
        className='dark:text-slate-200'
      />
      <div className='text-center text-xl mb-6 dark:text-slate-200'>
        Inflation Rate in Percentage
      </div>
      <div>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={theme === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, i) => (
              <SeriesDirective key={i} {...item}></SeriesDirective>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
