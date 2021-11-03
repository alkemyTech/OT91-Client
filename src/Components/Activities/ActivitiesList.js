import React from 'react';
import Title from '../Title/Title'
import PaginationActivities from './ActivitiesPagination/ActivitiesPagination';
import '../CardListStyles.css';
const ActivitiesList = () => {

    return (
        <div>
            <Title title={'Listado Actividades'} id={'activitiesList'}/>
            <PaginationActivities/>
        </div>
    );
}
 
export default ActivitiesList;