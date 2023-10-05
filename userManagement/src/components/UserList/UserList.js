import React from "react";
import Users from "../Users/Users";
const UserList = props => {
  
  return(props.list.map((item) => {
    return <Users key={item.id} userName={item.name} bloodGroup={item.bg} userRole={item.role} age={item.age} uuid={item.id} onDelete={props.onDeleteDonor} />
  }));
} 

export default UserList;
