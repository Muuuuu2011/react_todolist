import './App.css';
import Home_Page from './components/HomePage';
import List_Page from './components/ListPage';
import List_Page_2 from './components/ListPage2';
import React,{useState} from 'react';

const App=()=>{

  const [data,setData]=useState([])

  const [display,setDisplay] =  useState({home_page:"block",list_page:"none",list_page_2:"none"});

  const changePage_home=()=>{
    setDisplay({home_page:"block",list_page:"none",list_page_2:"none"})
  }

  const changePage_list=()=>{
    setDisplay({home_page:"none",list_page:"block",list_page_2:"block"})
  }

  return (
    <div className="App">
      <Home_Page changePage={changePage_list} display={display.home_page} />
      <List_Page changePage={changePage_home} display={display.list_page} add={setData}/>
      <List_Page_2   display={display.list_page} listData={data} deleteData={setData}/>
    </div>
  );
}

export default App;
