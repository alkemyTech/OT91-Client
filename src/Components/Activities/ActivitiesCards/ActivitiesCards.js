import ActivityCard from '../ActivityCard/ActivityCard';
const ActivitiesCards = ({activities}) => {

    return (
        <div>
            {activities ? activities.map(e=><ActivityCard props={e} key={e.id}/>) : <p>No hay Actividades</p>}
        </div>
    )
}

export default ActivitiesCards;
