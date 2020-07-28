import React from "react";
import "./App.css";
//import Clock from './Clock';
import { Button } from "@material-ui/core";

function List(props) {
  console.log(props);

  const itemList = props.items;

    
    return itemList?.map((item)=> {
        return (
            <div onClick={()=> props.onSelectItem(item.id) } >{item.name} </div>

        )
    })
  
}
export default List;
