import React from 'react';
import { Header } from '../components';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';

const Editor = () => {
  return (
    <div className=' bg-white md:p-10 md:mt-10 mt-5 p-4 rounded-lg '>
      <Header content='Editor' title='Apps' />
      <div>
        <RichTextEditorComponent>
          <EditorData />
          <Inject
            services={[
              HtmlEditor,
              Toolbar,
              Image,
              Link,
              QuickToolbar,
            ]}
          />
        </RichTextEditorComponent>
      </div>
    </div>
  );
};

export default Editor;
