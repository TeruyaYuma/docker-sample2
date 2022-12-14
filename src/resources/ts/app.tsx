/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';


if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}