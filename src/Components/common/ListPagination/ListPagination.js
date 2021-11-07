import {useState, useEffect} from "react";
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
const cards = 9;

const ListPagination = ({items, showItemsListComponent}) => {
    const [currentItems, setCurrentItems]=useState(null);
    const [currentPag, setCurrentPag]= useState(0);

   useEffect(()=>{
        if(items.length>1)setCurrentItems([...items].splice(0,cards))
    },[items])

    function setItemsPage(items,index,page){
        setCurrentItems([...items].splice(index,cards))
        setCurrentPag(page);
    };

    const next=()=>{
        const totalOfItems= items.length;
        const next= currentPag + 1;
        const index= next * cards;
        if(index> totalOfItems) return;
        setItemsPage(items,index,next);
    };

    const prev=()=>{
        const prev= currentPag - 1;
        if(prev < 0) return;
        const index= prev * cards;
        setItemsPage(items,index,prev);
    };

return (
        <div className='paginacion'>
            <div className='paginacion_activities'>
                {showItemsListComponent(currentItems)}
            </div>
          <div className='paginacion_buttons'>
                <button className='paginacion_btn' onClick={()=>prev()}><ArrowLeft/></button>
                <button className='paginacion_btn' onClick={()=>next()}><ArrowRight/></button>
          </div>
        </div>
    )
};

export default ListPagination;
