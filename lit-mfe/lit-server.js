/** @format */
import { render } from 'lit';
import { hydrate } from '@lit-labs/ssr-client';
import { SimpleGreeter } from './src/page/simple-greeter.js/simple-greeter';

hydrate(new SimpleGreeter(), document.body);
