import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../feautures/home/HomePage";
import ActivityDashboard from "../../feautures/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../feautures/activities/form/ActivityForm";
import ActivityDetails from "../../feautures/activities/details/ActivityDetails";
import TestErrors from "../../feautures/errors/TestError";
import NotFound from "../../feautures/errors/NotFound";
import ServerError from "../../feautures/errors/ServerError";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />},
            {path: 'errors', element: <TestErrors />},
            {path: 'not-found', element: <NotFound />},
            {path: 'server-errpr', element: <ServerError />},
            {path: '*', element: <Navigate replace to='/not-found' />}
        ]
    }
]

export const router = createBrowserRouter(routes);