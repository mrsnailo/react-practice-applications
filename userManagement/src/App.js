import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/header/Header";
import UserList from "./components/UserList/UserList";
const App = () => {
  const uList = [
    {
      id: "u1",
      name: "Shahid Parvez",
      age: 23,
      bg: "A+",
      role: "admin",
    },
    {
      id: "u2",
      name: "Nusrat Jahan",
      age: 12,
      bg: "A+",
      role: "moderator",
    },
    {
      id: "u3",
      name: "Nahid Uz Zaman",
      age: 16,
      bg: "A+",
      role: "member",
    },
    {
      id: "u4",
      name: "Naznin Hasan",
      age: 45,
      bg: "B+",
      role: "wife",
    },
  ];

  const [donorList, updateDonorList] = useState(uList);
  const handleDonor = (newDonor) => {
    updateDonorList((prevList) => {
      const updateList = [...prevList];
      updateList.push(newDonor);

      return updateList;
    });
  };
  const donorDeleteHandler = (uuid) => {
    updateDonorList((prevlist) =>{
      return prevlist.filter((donor) => donor.id !== uuid);
    });
  };
  return (
    <div>
      <Header />

      <AddUser donorList={donorList} onSaveDonor={handleDonor} />
      <div className="container">
        <table className="user_table center">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>BLOOD GROUP</th>
              <th>ROLE</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <UserList list={donorList} onDeleteDonor={donorDeleteHandler} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
