import React from 'react';
import { Header } from '../../components';
import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationTooltip,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
} from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useSateContext } from '../../context/ContextProvider';

const Pie = () => {
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
        <AccumulationChartComponent
          id='piechart_01'
          legendSettings={{
            visible: true,
            background: 'white',
          }}
          enableSmartLabels={true}
          enableAnimation={false}
          enableBorderOnMouseMove={false}
          tooltip={{ enable: true }}
          background={theme === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              xName='x'
              yName='y'
              center={{ x: '50%', y: '50%' }}
              explode={true}
              explodeOffset='10%'
              explodeIndex={2}
              startAngle={0}
              endAngle={360}
              radius='70%'
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: '#fff',
                },
              }}
              innerRadius='40%'
              dataSource={pieChartData}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pie;
