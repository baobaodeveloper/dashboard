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
import { useSateContext } from '../../context/ContextProvider';
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../data/dummy';

const StackedChart = () => {
  const { theme } = useSateContext();
  return (
    <ChartComponent
      style={{ textAlign: 'center' }}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      id='charts'
      height='320px'
      width='100%'
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      background={theme === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject
        services={[StackingColumnSeries, Category, Legend, Tooltip]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, i) => (
          <SeriesDirective key={i} {...item}></SeriesDirective>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedChart;
