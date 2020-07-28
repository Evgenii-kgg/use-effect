import React, { useState, useEffect } from 'react';import "./App.css";

//import Form from "./Form";
import List from "./List";
import { netWorkService } from "./api";
import Details from './Details';
import useCustomHook from './Hook';


function App() {

  const [count, setter] = useCustomHook(0);

  const[isLoaded,setIsLoaded]=useState(false);
  const [itemList, setItemList] = useState([]);
  const [selectItem, setSelectItem] = useState(undefined);

  const [itemInfo, setItemInfo] = useState({});
  const[isLoadedInfo,setIsLoadedInfo]=useState(false);



  // const handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const getTasks = () => {
   return netWorkService({ url: "users.json", method: "GET" })
    .then((response) => {
      console.log("ответ", response);
      setIsLoaded(true);
      setItemList(response);// проверить 
    });
  };

  useEffect(() => {    
    if(!isLoaded) {
      getTasks()
    } 
    if(selectItem && !isLoadedInfo) {
      getId(selectItem)
    }
  });

  const getId = (id) => {
    return netWorkService({ url: `${id}.json`, method: "GET" })
     .then((response) => {
       console.log("ответ", response);
       setIsLoadedInfo(true);
       setItemInfo(response)
     });
   };
  
    return (
      <div className="App">
        <div>
          
          <List
          onSelectItem={(item)=> {
            setSelectItem(item);
            setIsLoadedInfo(false)
            setter( 1)
          }
          }
            items={itemList}
            isLoaded={isLoaded}
            // action={handelAction}
          />
          <Details 
          info={itemInfo}
          loader={isLoadedInfo} />
        </div>
      </div>
    );
}

export default App;