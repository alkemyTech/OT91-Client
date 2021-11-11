import '../CardListStyles.css';
import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import {ACTIVITIES} from '../common/text/textActivity';
import {getAllActivities} from '../../Services/activityService';
import ActivitiesCards from './ActivitiesCards/ActivitiesCards';
import ListPagination from '../common/ListPagination/ListPagination';
const ActivitiesList = () => {

    const [items, setItems] = useState([]);

    useEffect(async() => {
        getAllActivities()
            .then(allActivities => setItems(allActivities));
    }, []);

    const showItemsListComponent = (items) => (<ActivitiesCards activities={items} />);

    return (
        <div>
            <Title title={ACTIVITIES} id={'activitiesList'}/>
            <ListPagination items={items} showItemsListComponent={showItemsListComponent } />
        </div>
    );
};

export default ActivitiesList;
