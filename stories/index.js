import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/App';
import HugeDocumentExample from '../src/components/huge-document'

storiesOf('App', module)
  .add('Home', () => (
    <HugeDocumentExample />
  ))
 