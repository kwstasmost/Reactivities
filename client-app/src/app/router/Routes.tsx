import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../feautures/home/HomePage";
import ActivityDashboard from "../../feautures/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../feautures/activities/form/ActivityForm";
import ActivityDetails from "../../feautures/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />}
        ]
    }
]

export const router = createBrowserRouter(routes);