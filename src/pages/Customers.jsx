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
import { customersGrid, customersData } from '../data/dummy';

const Customers = () => {
  return (
    <div className='min-h-screen bg-white md:p-10 md:mt-10 p-4 mt-5 rounded-lg '>
      <Header content='Customers' title='Page' />
      <div>
        <GridComponent
          allowSorting={true}
          dataSource={customersData}
          allowPaging={true}
          pageSettings={{ pageCount: 5 }}
        >
          <ColumnsDirective>
            {customersGrid.map((item, i) => (
              <ColumnDirective key={i} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Customers;
