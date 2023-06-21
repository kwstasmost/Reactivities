import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid, List } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";

// interface Props {
//     activities: Activity[];
//     deleteActivity: (id: string) => void;
//     submitting: boolean;
// }

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect( () => {
        if(activityRegistry.size <=1) loadActivities();
    }, [activityRegistry.size, loadActivities]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

    return (
        <Grid>
            <Grid.Column width='10'>
            {/* <List>
                {activities.map(activity => (
                    <List.Item key={activity.id}>
                        {activity.title}
                    </List.Item>
                ))}
            </List> */}
            <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
                {/* {selectedActivity && !editMode &&
                <ActivityDetails />}
                {editMode && 
                <ActivityForm 
                />} */}
            </Grid.Column>
        </Grid>
    )
})