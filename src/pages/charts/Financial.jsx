import React from 'react';
import { Header } from '../../components';
import { useSateContext } from '../../context/ContextProvider';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from '@syncfusion/ej2-react-charts';
import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from '../../data/dummy';

const date1 = new Date('2017, 1, 1');
function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);
const Financial = () => {
  const { theme } = useSateContext();
  return (
    <div className=' bg-white md:p-10 md:mt-10 p-4 mt-5  rounded-lg dark:bg-secondary-dark-bg'>
      <Header
        content='Pie'
        title='Chart'
        className='dark:text-slate-200'
      />
      <div className='text-center text-xl mb-6 dark:text-slate-200'>
        Project Cost Breakdown
      </div>

      <div>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          legendSettings={{ visible: false }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          background={theme === 'Dark' ? '#33373E' : '#fff'}
          crosshair={{
            enable: true,
            lineType: 'Vertical',
            line: { width: 0 },
          }}
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName='x'
              yName='low'
              name='Apple Inc'
              type='Hilo'
              low='low'
              high='high'
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
