import React from 'react';
import { Header } from '../components';
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  Sort,
} from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
  return (
    <div className='min-h-screen bg-white md:p-10 md:mt-10 p-4 mt-5 rounded-lg '>
      <Header content='Orders' title='Page' />
      <div>
        <GridComponent
          allowSorting={true}
          dataSource={ordersData}
          allowPaging={true}
          pageSettings={{ pageCount: 5 }}
        >
          <ColumnsDirective>
            {ordersGrid.map((item, i) => (
              <ColumnDirective key={i} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Orders;
