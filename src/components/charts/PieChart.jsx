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
import React from 'react';
import { useSateContext } from '../../context/ContextProvider';

const PieChart = ({ data, visible, height, width, currentColor }) => {
  const { theme } = useSateContext();
  return (
    <AccumulationChartComponent
      id='piechart_01'
      legendSettings={{
        visible: visible,
        background: 'white',
      }}
      enableSmartLabels={true}
      enableAnimation={false}
      enableBorderOnMouseMove={false}
      tooltip={{ enable: true }}
      height={height}
      width={width}
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
          dataSource={data}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
