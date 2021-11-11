import {NO_ACTIVITIES} from '../../common/text/textActivity';
import{setCKEditorText} from '../../common/ckEditor/setCKEditorText';
import { isValidList } from '../../../Services/activityService';
const ActivitiesCards = ({activities}) => {

    return (
        <div>
            {isValidList(activities) ? activities.map(e=> <div>
                <img src={e.image} alt={e.name}/>
                <h3>{e.name}</h3>
                <p>{setCKEditorText(e,'description').description}</p>
            </div>
            ) : <p>{NO_ACTIVITIES}</p>
            }
        </div>
    )
};

export default ActivitiesCards;
