import "./profile.css";
import React, { useState } from "react";

function DogEdit({ dog }) {
  const { name, gender, dateOfBirth, breed, temper, isNeutered } = dog;

  const [isChanged, setIsChanged] = useState(false);

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
      <form onInput={activateSave}>
        <div className={"dog-data"}>
          <div className={"dog-description"}>
            <div className={"description-title"}> name:</div>
            <input
              type={"text"}
              className={"description-content-edit"}
              defaultValue={name}
              placeholder={name}
            />
          </div>
          <div className={"dog-description"}>
            <div className={"description-title"}> gender:</div>
            <select
              className={"description-content-edit"}
              defaultValue={gender ? "male" : "female"}
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
              defaultValue={isNeutered}
            >
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>
          </div>
        </div>
        <button
          className={"button"}
          type={"submit"}
          disabled={!isChanged}
          onClick={() => console.log("save")}
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
