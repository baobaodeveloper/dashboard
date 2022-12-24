import React from 'react';
import { Header } from '../components';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';

const Kanban = () => {
  return (
    <div className=' bg-white p-4 mt-5 md:p-10 md:mt-10 rounded-lg'>
      <Header content='kanban' title='Apps' />
      <div>
        <KanbanComponent
          id='kanban'
          keyField='Status'
          dataSource={kanbanData}
          cardSettings={{
            contentField: 'Summary',
            headerField: 'Id',
          }}
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, i) => (
              <ColumnDirective key={i} {...item}></ColumnDirective>
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
};

export default Kanban;
