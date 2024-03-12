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
      {/* input-The name of the work or project */}
      <div>
        <input
          type="text"
          id="nameOfWork"
          name="nameOfWork"
          placeholder="What are you working on?"
          className="placeholder-opacity-50 placeholder:text-gray-300 placeholder:text-xl font-semibold text-gray-500 outline-none "
        />
      </div>

      {/* Three main Radio options */}
      <div>
        {/* 1 */}
        <label htmlFor="withoutTargetedHours" className="flex gap-2">
          <input
            name="TypeOfWork"
            type="radio"
            id="withoutTargetedHours"
            value={"withoutTargetedHours"}
            onChange={(e) => setTargetedHourToggle(false)}
          />
          Task with no targeted time?
        </label>
        {/* 2 */}
        <div>
          <label htmlFor="withTargetedHours" className="flex gap-2">
            <input
              type="radio"
              name="TypeOfWork"
              id="withTargetedHours"
              value={"withTargetedHour"}
              onChange={(e) => setTargetedHourToggle(true)}
            />
            Task with targeted time?
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
        {/* 3 */}
        <div>
          <label htmlFor="withFixedWork" className="flex gap-2">
            <input
              type="radio"
              name="TypeOfWork"
              id="withFixedWork"
              value={"withFixedWork"}
              onChange={(e) => setTargetedHourToggle(false)}
            />
            Task with fixed project,book,youtube,lecture?
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
