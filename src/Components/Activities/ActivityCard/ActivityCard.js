
const ActivityCard = ({props}) => {
    const {name,id,description,image}=props
    return (
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ActivityCard
