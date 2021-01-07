import "./profile.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function DogEdit({ dog }) {
  const token = Cookies.get("user");
  const config = {
    headers: { Authorization: `${token}`, withCredentials: true },
  };
  const { id, name, male, dateOfBirth, breed, temper, neutered } = dog;

  const [isChanged, setIsChanged] = useState(false);
  const maleString = male ? "male" : "female";
  const neuteredString = neutered ? "yes" : "no";

  const [breeds, setBreeds] = useState([]);

  function handleReceivedBreeds(data) {
    data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setBreeds(data);
  }

  function loadBreeds() {
    axios
      .get("http://localhost:8080/api/v1/breeds?type=allData", config)
      .then((data) => {
        handleReceivedBreeds(data.data);
      });
  }
  const [tempers, setTempers] = useState([]);
  function loadTempers() {
    axios
      .get("http://localhost:8080/api/v1/tempers?type=allData", config)
      .then((data) => setTempers(data.data));
  }

  useEffect(() => {
    loadBreeds();
    loadTempers();
  }, []);

  const [form, setForm] = useState({
    name: name,
    male: maleString,
    dateOfBirth: dateOfBirth,
    breed: breed,
    temper: temper,
    neutered: neuteredString,
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e, id) {
    console.log(breed);
    console.log(temper);
    const data = {
      name: form.name,
      male: form.male === "yes",
      dateOfBirth: form.dateOfBirth,
      breed: form.breed !== breed ? JSON.parse(form.breed) : null,
      temper: form.temper !== temper ? JSON.parse(form.temper) : null,
      neutered: form.neutered === "yes",
    };

    console.log(data);

    axios
      .patch("http://localhost:8080/api/v1/dogs/" + id, data, config)
      .then((value) => {
        console.log(value);
      })
      .catch((error) => console.log(error));
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  function setMaxDate() {
    document.getElementById("date-picker").max = new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
  }

  function activateSave() {
    setIsChanged(true);
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
            <select className={"description-content-edit"} name={"male"}>
              <option value={null} disabled selected hidden>
                {maleString}
              </option>
              <option value="yes">male</option>
              <option value="no">female</option>
            </select>
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> date of birth:</div>
            <input
              className={"description-content-edit"}
              id={"date-picker"}
              type="date"
              name={"dateOfBirth"}
              defaultValue={dateOfBirth}
              min="2000-01-01"
              onInput={() => setMaxDate()}
            />
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> breed:</div>
            <select className={"description-content-edit"} name={"breed"}>
              <option value={null} disabled selected hidden>
                {breed.name}
              </option>
              {breeds.map((breed) => {
                return (
                  <option key={breed.id} value={JSON.stringify(breed)}>
                    {breed.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> temper:</div>
            <select className={"description-content-edit"} name={"temper"}>
              <option value={null} disabled selected hidden>
                {temper.name}
              </option>
              {tempers.map((temper) => {
                return (
                  <option key={temper.id} value={JSON.stringify(temper)}>
                    {temper.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> neutered:</div>
            <select className={"description-content-edit"} name={"neutered"}>
              <option value={null} disabled selected hidden>
                {neuteredString}
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
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
