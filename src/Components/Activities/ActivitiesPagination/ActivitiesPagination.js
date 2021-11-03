import {useState, useEffect} from "react"
import {getAllActivities} from '../../../Services/activityService';
import ActivitiesCards from '../ActivitiesCards/ActivitiesCards';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

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

    function setItemsPage(items,index,page){
        setItems([...items].splice(index,cards))
        setCurrentPag(page)
    }

    const next=()=>{
        const totalElementos= activities.length
        const next= currentPag +1
        const index= next * cards
        if(index>totalElementos) return;
        setItemsPage(activities,index,next)
    };

    const prev=()=>{
        const prev= currentPag-1
        if(prev < 0) return;
        const index= prev * cards
        setItemsPage(activities,index,prev)
    };

    return (
        <div className='paginacion'>
            <div className='paginacion_activities'>
                <ActivitiesCards activities={items} />
            </div>
          <div className='paginacion_buttons'>
                <button className='paginacion_btn' onClick={()=>prev()}><ArrowLeft/></button>
                <button className='paginacion_btn' onClick={()=>next()}><ArrowRight/></button>
          </div>
        </div>
    )
};

export default ActivitiesPagination;
