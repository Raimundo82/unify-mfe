/** @format */

import './sw/service-worker-reg';
import '@core';
import './event-bus/event-bus';
import './shell-router.js';
import './worker-loader.js';

const loadCoreUi = () => import('@core-ui');
window.addEventListener('pointermove', loadCoreUi, { once: true });
