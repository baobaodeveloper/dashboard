import {
  ChartComponent,
  SeriesCollectionDirective,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
  Inject,
  SeriesDirective,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { Header } from '../../components';
import { useSateContext } from '../../context/ContextProvider';
import {
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  lineCustomSeries,
} from '../../data/dummy';

const Line = () => {
  const { theme } = useSateContext();
  return (
    <div className=' bg-white md:p-10 md:mt-10 p-4 mt-5  rounded-lg dark:bg-secondary-dark-bg'>
      <Header
        content='Line'
        title='Chart'
        className='dark:text-slate-200'
      />
      <div className='text-center text-xl mb-6 dark:text-slate-200'>
        Inflation Rate
      </div>
      <div>
        <ChartComponent
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ background: 'white' }}
          id='line-chart'
          width='100%'
          style={{ textAlign: 'center' }}
          background={theme === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject
            services={[LineSeries, DateTime, Legend, Tooltip]}
          />
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item, i) => (
              <SeriesDirective key={i} {...item}></SeriesDirective>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Line;
