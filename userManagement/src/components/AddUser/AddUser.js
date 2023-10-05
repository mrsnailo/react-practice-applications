import React, { useState } from "react";
import "./adduser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const AddUser = (props) => {
  const [nameErr, setNameErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [roleErr, setRoleErr] = useState(false);
  const [bgErr, setBgErr] = useState(false);
  const roles = [
    {
      value: "none",
      text: "Yore role",
    },
    {
      value: "Admin",
      text: "Admin",
    },
    {
      value: "Moderator",
      text: "moderator",
    },
    {
      value: "member",
      text: "memeber",
    },
  ];
  const bgs = [
    {
      value: "none",
      text: "Your Blood group",
    },
    {
      value: "A+",
      text: "A+",
    },
    {
      value: "A-",
      text: "A-",
    },
    {
      value: "B+",
      text: "B+",
    },
    {
      value: "B-",
      text: "B-",
    },
    {
      value: "AB+",
      text: "AB+",
    },
    {
      value: "AB-",
      text: "AB-",
    },

    {
      value: "O+",
      text: "O+",
    },
    {
      value: "O-",
      text: "O-",
    },
  ];
  const [selectedBg, setSelectedBg] = useState(bgs[0].value);
  const [currentName, setName] = useState("");
  const [currentAge, setAge] = useState(0);
  const [currentRole, setRole] = useState(roles[0].value);
  const [isOpen, setIsOpen] = useState(false);
  const idGenerator = (props) => {
    if (props.donorList.length === 0) {
      return "0";
    } else {
      const donorNumber = props.donorList.length;
      const id = "U" + (donorNumber + 1);
      return id;
    }
  };
  const displayForm = () => {
    setIsOpen(true);
  };
  const closeForm = () => {
    setIsOpen(false);
  };
  const nameChangeHandler = (e) => {
    setNameErr(false);
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    if (e.target.value > 0 && e.target.value < 50 ) {
      setAgeErr(false);
    }
    setAge(e.target.value);
  };
  const bgChangeHandler = (e) => {
    if (e.target.value !== "none") {
     setBgErr(false); 
    }
    setSelectedBg(e.target.value);
  };
  const roleChangeHandler = (e) => {
    if (e.target.value !== "none") {
     setRoleErr(false); 
    }
    setRole(e.target.value);
  };

  const inputSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !currentName ||
      currentAge < 1 ||
      currentAge > 50 ||
      currentRole === "none" ||
      selectedBg === "none"
    ) {
      if (!currentName) {
      setNameErr(true);
      }
      if(currentAge < 1){
        setAgeErr(true);
      }
      if (currentAge > 50) {
        setAgeErr(true);
      }
      if(currentRole === "none"){
        setRoleErr(true);
      }
      if(selectedBg === "none"){
        setBgErr(true);
      }
    } else {
      const donor = {
        id: idGenerator(props),
        name: currentName,
        age: currentAge,
        bg: selectedBg,
        role: currentRole,
      };

      props.onSaveDonor(donor);
      setName("");
      setAge(0);
      setRole(roles[0].value);
      setSelectedBg(bgs[0].value);
      setIsOpen(false);
    }
  };
  return (
    <section className="add_user">
      <div className="conatiner btn_container">
        <button onClick={displayForm} className="adduser_btn">
          Add New Donor
        </button>
        <div className={`floating_form${isOpen ? " display" : ""}`}>
          <div className="close_btn_container">
            <button onClick={closeForm} className="close_btn">
              <FontAwesomeIcon className="close_icon" icon={faXmark} />
            </button>
          </div>
          <div className="form_container">
            <form onSubmit={inputSubmitHandler} className="input_form">
              <div className="form_group">
                <input
                  className={`${nameErr ? "input_err" : ""}`}
                  type="text"
                  value={currentName}
                  onChange={nameChangeHandler}
                  placeholder="Full Name"
                />
              </div>
              <div className="form_group">
                <input
                  className={`${ageErr ? "input_err" : ""}`}
                  type="number"
                  value={currentAge}
                  onChange={ageChangeHandler}
                  placeholder="Age"
                />
              </div>
              <div className="form_group">
                <select
                  className={`${bgErr ? "input_err" : ""}`}
                  value={selectedBg}
                  onChange={bgChangeHandler}
                >
                  {bgs.map((bg) => (
                    <option value={bg.value} key={bg.value}>
                      {bg.text}
                    </option>
                  ))}
                </select>
                <select
                  className={`${roleErr ? "input_err" : ""}`}
                  onChange={roleChangeHandler}
                  value={currentRole}
                  key={currentRole}
                >
                  {roles.map((role) => (
                    <option value={role.value} key={role.value}>
                      {role.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form_group">
                <button className="submit_btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddUser;
