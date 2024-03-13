import React, { useState } from "react";

const AddTaskModelForm = () => {
  const [targetedHourtoggle, setTargetedHourToggle] = useState(false);

  return (
    <>
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
    </>
  );
};

export default AddTaskModelForm;
