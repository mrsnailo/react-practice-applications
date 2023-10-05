import React from "react";
import "./users.css";
const Users = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.uuid);
  }
  return (
    <tr>
      <td>{props.uuid}</td>
      <td>{props.userName}</td>
      <td>{props.age}</td>
      <td>{props.bloodGroup}</td>
      <td>{props.userRole}</td>
      <td>
        <button onClick={deleteHandler} className="delete_button" type="submit">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Users;
