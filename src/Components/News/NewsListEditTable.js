import React, { useEffect, useState, useMemo } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { NewsTableRows } from "./NewsTableRows";
import { createNewsObject } from "../../Services/newsServices";
import { getSearch} from '../../app/NewsReducer/newsReducer'
import { useSelector, useDispatch} from 'react-redux';
import { debounceHook } from "../../Utils/debounce";

const newState = ({news})=> news.newsSearch;

const NewsListEditTable = () => {
  const dispatch = useDispatch();
  const news = useSelector(newState);
  const [search, setSearch] = useState('');
  const [newsList, setNewsList] = useState([])

  const handleInput = ({target}) => setSearch(target.value);

  const debounceFecthData = useMemo( () => {
    dispatch(getSearch(search))
    return debounceHook(dispatch,getSearch,300);
  },[]);

  useEffect(() => {
    search !== '' && debounceFecthData(search);
  },[search, debounceFecthData]);

  useEffect(() => {
    search !== ''? setNewsList(news) : setNewsList([])
  }, [news])

  return (
    <>
    <div>
      <div>
        <input type='text' value={search} onChange={handleInput} />
        <div>
          <ul>
            {newsList.map(e=><li key={e.id} onClick={()=>setSearch(e.name)}>{e.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
      <TableContainer>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Created At</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  size="small"
                  component={Link}
                  to="/create-news"
                  color="primary"
                >
                  Create News
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <NewsTableRows />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NewsListEditTable;
