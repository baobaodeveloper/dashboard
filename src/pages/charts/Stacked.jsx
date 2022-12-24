import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { Header } from '../../components';
import { useSateContext } from '../../context/ContextProvider';
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../data/dummy';

const StackedChart = () => {
  const { theme } = useSateContext();
  return (
    <div className=' bg-white md:p-10 md:mt-10 p-4 mt-5  rounded-lg dark:bg-secondary-dark-bg'>
      <Header
        content='Stacked'
        title='Chart'
        className='dark:text-slate-200'
      />
      <div className='text-center text-xl mb-6 dark:text-slate-200'>
        Revenue Breakdown
      </div>
      <div className='w-full'>
        <ChartComponent
          primaryXAxis={stackedPrimaryXAxis}
          primaryYAxis={stackedPrimaryYAxis}
          id='charts'
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          background={theme === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject
            services={[
              StackingColumnSeries,
              Category,
              Legend,
              Tooltip,
            ]}
          />
          <SeriesCollectionDirective>
            {stackedCustomSeries.map((item, i) => (
              <SeriesDirective key={i} {...item}></SeriesDirective>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default StackedChart;
