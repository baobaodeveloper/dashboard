import React from 'react';
import { Header } from '../../components';
import { useSateContext } from '../../context/ContextProvider';
import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  Tooltip,
  SeriesCollectionDirective,
  SeriesDirective,
  DataLabel,
} from '@syncfusion/ej2-react-charts';
import {
  barChartData,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from '../../data/dummy';

const Bar = () => {
  const { theme } = useSateContext();
  return (
    <div className=' bg-white md:p-10 md:mt-10 p-4 mt-5  rounded-lg dark:bg-secondary-dark-bg'>
      <Header
        content='Bar'
        title='Chart'
        className='dark:text-slate-200'
      />
      <div className='text-center text-xl mb-6 dark:text-slate-200'>
        Olympic Medal Counts - RIO
      </div>

      <div>
        <ChartComponent
          id='charts'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          dataSource={barChartData}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={theme === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject
            services={[
              ColumnSeries,
              Legend,
              Tooltip,
              Category,
              DataLabel,
            ]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, i) => (
              <SeriesDirective key={i} {...item}></SeriesDirective>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
        ;
      </div>
    </div>
  );
};

export default Bar;
