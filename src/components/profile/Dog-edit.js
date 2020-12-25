import "./profile.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function DogEdit({ dog }) {
  const { id, name, sex, dateOfBirth, breed, temper, isNeutered } = dog;

  const [isChanged, setIsChanged] = useState(false);
  const sexString = sex ? "male" : "female";
  const isNeuteredString = isNeutered ? "yes" : "no";

  const [form, setForm] = useState({
    name: { name },
    sex: { sexString },
    dateOfBirth: { dateOfBirth },
    breed: { breed },
    temper: [temper],
    isNeutered: { isNeuteredString },
  });

  // let token =
  //   "eyJhbGciOiJIUzUxMiJ9." +
  //   "eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5" +
  //   "IjoiUk9MRV9VU0VSIn1dLCJpYXQiOjE2MDU2OTg3NDMsImV4cCI6MTYwNjUxODAwMH0." +
  //   "S9VRI3jYLt5U4W8Nq2laNDe5uo1q0t01tk5mihmfO-61E6SxNZ4-T8hbzc6MMV5mlZ_X7R5-xt3e3CU_pu-nzw";
  //
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  }

  // function handleSubmit(e, id) {
  //   console.log("save");
  //   axios.put("http://localhost:8080/api/v1/dogs/" + { id }, {
  //     name: form.name,
  //     sex: form.sex,
  //     dateOfBirth: form.dateOfBirth,
  //     breed: form.breed,
  //     temper: form.temper,
  //     isNeutered: form.isNeutered,
  //   });
  // }

  function handleSubmit(e, id) {
    const token = Cookies.get("user");
    const config = {
      headers: { Authorization: `${token}`, withCredentials: true },
    };
    console.log(config);
    console.log("save");
    axios
      .put(
        "http://localhost:8080/api/v1/dogs/" + id,
        {
          name: form.name,
          sex: form.sex,
          dateOfBirth: form.dateOfBirth,
          breed: form.breed,
          temper: form.temper,
          isNeutered: form.isNeutered,
        },
        config
      )
      .then((value) => {
        console.log(value);
      })
      .catch((error) => console.log(error));
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // function handleSubmit(e, id) {
  //   console.log("save");
  //   console.log("id:" + id);
  //   axios
  //     .get("http://api.github.com/users/sforaaleksander")
  //     .then((data) => setData(data))
  //     .catch((error) => console.log(error));
  // }

  function setMaxDate() {
    document.getElementById("date-picker").max = new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
  }

  function activateSave() {
    setIsChanged(true);
    console.log(form);
  }

  return (
    <div className={"dog-info"}>
      <form
        onInput={(e) => {
          activateSave();
          handleChange(e);
        }}
      >
        <div className={"dog-data"}>
          <div className={"dog-description"}>
            <div className={"description-title"}> name:</div>
            <input
              type={"text"}
              className={"description-content-edit"}
              defaultValue={name}
              placeholder={name}
              name={"name"}
            />
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> sex:</div>
            <select
              className={"description-content-edit"}
              defaultValue={sexString}
              name={"sex"}
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> date of birth:</div>
            <input
              className={"description-content-edit"}
              id={"date-picker"}
              type="date"
              name={"date-of-birth"}
              defaultValue={dateOfBirth}
              min="2000-01-01"
              onInput={() => setMaxDate()}
            />
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> breed:</div>
            <select
              className={"description-content-edit"}
              defaultValue={breed.name}
              name={"breed"}
            >
              <option value="german shepherd">german shepherd</option>
              <option value="bloodhound">bloodhound</option>
              <option value="greyhound">greyhound</option>
              <option value="doggo argentino">doggo argentino</option>
            </select>
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> temper:</div>
            <select
              className={"description-content-edit"}
              defaultValue={temper.name}
              name={"temper"}
            >
              <option value="german shepherd">happy</option>
              <option value="bloodhound">unhappy</option>
              <option value="greyhound">friendly</option>
              <option value="doggo argentino">other</option>
            </select>
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> neutered:</div>
            <select
              className={"description-content-edit"}
              defaultValue={isNeuteredString}
            >
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>
          </div>
        </div>
        <button
          className={"button"}
          type={"button"}
          disabled={!isChanged}
          onClick={() => handleSubmit(this, id)}
        >
          Save
        </button>
        <button className={"button"} onClick={() => console.log("cancel")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default DogEdit;
