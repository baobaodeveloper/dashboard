import React from 'react';
import { Header } from '../components';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

const ColorPicker = () => {
  const change = (args) => {
    console.log(args);
    document.getElementById('preview').style.backgroundColor =
      args.currentValue.hex;
  };
  const CustomColorPicker = ({ id, mode }) => (
    <ColorPickerComponent
      id={id}
      mode={mode}
      modeSwitcher={false}
      inline
      showButtons={false}
      change={change}
    />
  );
  return (
    <div className=' bg-white md:p-10 md:mt-10 p-4 mt-5 rounded-lg '>
      <Header content='Color Picker' title='Apps' />

      <div className='text-center'>
        <div id='preview'></div>

        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>
              Inline Pallete
            </p>
            <CustomColorPicker id='inline-palette' mode='Palette' />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>
              Inline Picker
            </p>
            <CustomColorPicker id='inline-picker' mode='Picker' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
