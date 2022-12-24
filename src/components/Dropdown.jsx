import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useSateContext } from '../context/ContextProvider';

const Dropdown = ({ data, color }) => {
  const { theme } = useSateContext();
  return (
    <DropDownListComponent
      id='ddlelement'
      dataSource={data}
      fields={{ text: 'Time', value: 'Id' }}
      style={{
        border: 'none',
        color: theme === 'Dark' && 'white',
      }}
      popupHeight='220px'
      popupWidth='120px'
      value='1'
    />
  );
};

export default Dropdown;
