import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';

import Users from './pages/Users';
import { Provider } from 'react-redux';
import store from './Redux/store';
import UserDetails from './pages/UserDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/users',
		element: <Users />,
	},
	{
		path: '/users/:id',
		element: <UserDetails />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ToastContainer />
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
