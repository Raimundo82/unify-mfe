/** @format */

import urlSchema from './url.schema';

let notification;
const notificationContainer = document.getElementById('notification-container');

eventBus.register('unify:url', urlSchema);
eventBus.register('unify:loading', { type: 'boolean' });
eventBus.register('unify:error', { type: 'string', required: true });
eventBus.register('unify:message', { type: 'string', required: true });

async function notifications(content, theme) {
	await loadNotification();
	notificationContainer.appendChild(notification(content, theme));
}

const handlers = {
	error: ({ payload }) => notifications(payload || 'Something went wrong', 'danger'),
	message: ({ payload }) => notifications(payload || '', 'success'),
};

eventBus.subscribe('unify:message', handlers.message);
eventBus.subscribe('unify:error', handlers.error);

async function loadNotification() {
	if (!notification) notification = (await import('../components/notification.js')).default;
}

export default eventBus;
