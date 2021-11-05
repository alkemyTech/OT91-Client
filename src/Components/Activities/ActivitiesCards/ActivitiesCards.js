import{setCKEditorText} from '../../common/ckEditor/setCKEditorText';
const ActivitiesCards = ({activities}) => {

    return (
        <div>
            {activities ? activities.map(e=> <div>
                <img src={e.image} alt={e.name}/>
                <h3>{e.name}</h3>
                <p>{setCKEditorText(e,'description').description}</p>
            </div>
            ) : <p>No hay Actividades</p>
            }
        </div>
    )
};

export default ActivitiesCards;
