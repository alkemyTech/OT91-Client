import {useState, useEffect} from "react"
import {getAllActivities} from '../../../Services/activityService';
import ActivitiesCards from '../ActivitiesCards/ActivitiesCards';

const cards = 9;

const ActivitiesPagination = () => {

    const [items, setItems]=useState(null);
    const [currentPag, setCurrentPag]= useState(0);
    const [activities, setActivities] = useState([]);

    useEffect(async() => {
        let {data} = await getAllActivities()
       setActivities(data)
    }, []);

    useEffect(()=>{
        if(activities.length>1)setItems([...activities].splice(0,cards))
    },[activities])

    const next=()=>{
        const totalElementos= activities.length
        const next= currentPag +1
        const index= next * cards
        if(index>totalElementos) return;
        setItems([...activities].splice(index,cards))
        setCurrentPag(next)
    };

    const prev=()=>{
        const prev= currentPag-1
        if(prev < 0) return;
        const index= prev * cards
        setItems([...activities].splice(index,cards))
        setCurrentPag(prev)
    };

    return (
        <div className='paginacion'>
            <div className='paginacion_activities'>
                <ActivitiesCards activities={items} />
            </div>
          <div className='paginacion_buttons'>
                <button className='paginacion_btn' onClick={()=>prev()}>{"<--"}</button>
                <button className='paginacion_btn' onClick={()=>next()}>{"-->"}</button>
          </div>
        </div>
    )
};

export default ActivitiesPagination;
