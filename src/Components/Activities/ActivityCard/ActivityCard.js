import {replaceCKEditorText} from '../../common/ckEditor/setCKEditorText'
const ActivityCard = ({props}) => {
    const {name,id,description,image}=props
    return (
        <div>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{replaceCKEditorText(description)}</p>
        </div>
    )
}

export default ActivityCard
