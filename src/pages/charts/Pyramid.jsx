import React from 'react';
import { Header } from '../../components';
import { useSateContext } from '../../context/ContextProvider';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
  AccumulationLegend,
} from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';

const Pyramid = () => {
  const { theme } = useSateContext();
  return (
    <div className=' bg-white md:p-10 md:mt-10 p-4 mt-5  rounded-lg dark:bg-secondary-dark-bg'>
      <Header
        content='Pyramid'
        title='Chart'
        className='dark:text-slate-200'
      />
      <div className='text-center text-xl mb-6 dark:text-slate-200'>
        Food Comparison Chart
      </div>
      <div>
        <AccumulationChartComponent
          id='pyramid-chart'
          tooltip={{ enable: true }}
          background={theme === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationSelection,
              AccumulationLegend,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              name='Food'
              xName='x'
              yName='y'
              type='Pyramid'
              width='45%'
              neckWidth='10%'
              neckHeight='15%'
              gapRatio={0.03}
              explode={true}
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                },
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
