import React, { useState } from "react";

const AddTaskModel = () => {
  const [targetedHourtoggle, setTargetedHourToggle] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log(formData);
  };

  return (
    <form
      method="post"
      onSubmit={(e) => onSubmitHandler(e)}
      className="block w-full absolute bg-white p-5 rounded-lg"
    >
      <input
        type="text"
        id="nameOfWork"
        name="nameOfWork"
        placeholder="What are you working on?"
        className="placeholder-opacity-50 placeholder:text-gray-300 placeholder:text-xl font-semibold text-gray-500 outline-none "
      />
      <div>
        <label htmlFor="withoutTargetedHours" className="flex gap-2">
          <input
            name="TypeOfWork"
            type="radio"
            id="withoutTargetedHours"
            value={"withoutTargetedHours"}
            onChange={(e) => setTargetedHourToggle(false)}
          />
          Without targeted hours?
        </label>
        <div>
          <label htmlFor="withTargetedHours" className="flex gap-2">
            <input
              type="radio"
              name="TypeOfWork"
              id="withTargetedHours"
              value={"withTargetedHour"}
              onChange={(e) => setTargetedHourToggle(true)}
            />
            With targeted hours?
          </label>
          <label
            htmlFor="hours"
            className={` ${
              targetedHourtoggle ? "block" : "hidden"
            } ps-10 flex items-center gap-2`}
          >
            <h2>how many hours? - </h2>
            <input
              type="number"
              name="hours"
              id="hours"
              min={1}
              className=" outline-none w-16 p-1 rounded-md "
            />
            hours
          </label>
        </div>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddTaskModel;
