import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import NewsTitle from './NewsTittle';
import { getNewById } from '../../../Services/newsServices';
import { Box } from '@mui/material';

const NewsDetailLayout = ({prop}) => {

    const [newData,setNewData] = useState({})

    const {id} = useParams()

    const loadNewData = async () => {
        const {data} = await getNewById()
        setNewData(data)
    }

    useEffect(()=>{
        loadNewData()
    },[id])

    return (
        <div>
            <NewsTitle
                title={prop.title}
            />
            <img alt="newImg" src={newData.img}></img>
            <Box>
                {newData.body}
            </Box>
        </div>
    );
}

export default NewsDetailLayout;
