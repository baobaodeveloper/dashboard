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
import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  return (
    <div className='min-h-screen bg-white mt-5 p-4 md:p-10 md:mt-10 rounded-lg '>
      <Header content='Employees' title='Page' />
      <div>
        <GridComponent
          allowSorting={true}
          dataSource={employeesData}
          allowPaging={true}
          pageSettings={{ pageCount: 5 }}
        >
          <ColumnsDirective>
            {employeesGrid.map((item, i) => (
              <ColumnDirective key={i} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Employees;
