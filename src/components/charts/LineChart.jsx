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
import { useSateContext } from '../../context/ContextProvider';
import { LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

const LineChart = ({ data }) => {
  const { theme } = useSateContext();
  return (
    <ChartComponent
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
      id='line-chart'
      height='420px'
      width='100%'
      style={{ textAlign: 'center' }}
      background={theme === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {data.map((item, i) => (
          <SeriesDirective key={i} {...item}></SeriesDirective>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
