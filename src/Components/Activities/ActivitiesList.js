import '../CardListStyles.css';
import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import {ACTIVITIES} from '../common/text/textActivity';
import {getAllActivities} from '../../Services/activityService';
import ActivitiesCards from './ActivitiesCards/ActivitiesCards';
import ListPagination from '../common/ListPagination/ListPagination';
import LoadingSpinner from "../../Utils/loadingSpinner";
const ActivitiesList = () => {

    const [items, setItems] = useState([]);
    const [loading, setIsLoading] = useState(true);

    useEffect(async() => {
         const allActivities = await getAllActivities()
            setItems(allActivities);
            setIsLoading(false);
    }, []);
    const showItemsListComponent = (items) => (<ActivitiesCards activities={items} />);
    return (
        <div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Title title={ACTIVITIES} id={"activitiesList"} />
            <ListPagination
              items={items}
              showItemsListComponent={showItemsListComponent}
            />
          </>
        )}
      </div>
    );
};

export default ActivitiesList;
