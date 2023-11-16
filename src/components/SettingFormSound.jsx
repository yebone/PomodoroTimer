import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSound } from "react-icons/ai";
import { useGlobalState } from "../globalState/StateContext";

const SettingFormSound = () => {
  const { alarmNames, alarmVolume, currentAlarm } = useGlobalState();
  const [volume, setVolume] = useState(alarmVolume * 100);
  const [alarmPlaying, setAlarmPlaying] = useState(false);
  const [selectedAlarm, setSelectedAlarm] = useState(currentAlarm);
  const alarmRef = useRef(null);

  useEffect(() => {
    if (alarmRef.current === null && alarmPlaying) {
      const alarm = new Audio(`/src/assets/sounds/${selectedAlarm}.mp3`);
      alarmRef.current = alarm;
      alarm.play();
    }
    if (alarmRef.current) {
      alarmRef.current.volume = volume / 100;
    }
    if (alarmRef.current && alarmRef.current.ended) {
      alarmRef.current.play();
    }
  }, [volume]);

  const playingFromSelectAlarm = (e) => {
    setSelectedAlarm(e.target.value);
    //stoping the previous alarm
    if (alarmRef.current) {
      alarmRef.current.pause();
    }
    const alarm = new Audio(`/src/assets/sounds/${e.target.value}.mp3`);
    alarmRef.current = alarm;
    alarm.volume = alarmVolume;
    alarm.play();
  };
  return (
    <section className=" p-4 gap-2 border-b-2  ">
      <div className=" flex gap-1 items-center">
        <h1 className="text-2xl font-semibold text-gray-400">SOUND</h1>{" "}
        <AiOutlineSound className=" text-2xl" />
      </div>
      {/* alarm sound dropdown */}
      <div className=" flex justify-between items-center">
        <label
          htmlFor="alarmSound"
          className=" text-xl font-bold text-[rgb(85,85,85)]"
        >
          Alarm Sound
        </label>
        <select
          name="alarmSound"
          id="alarmSound"
          className=" p-3 border-r-8"
          defaultValue={currentAlarm}
          onChange={(e) => playingFromSelectAlarm(e)}
        >
          {alarmNames.map((sound) => {
            return (
              <option key={sound.value} value={sound.value}>
                {sound.name}
              </option>
            );
          })}
        </select>
      </div>
      {/* alarm volume */}
      <div className=" flex justify-between items-center">
        <label
          htmlFor="alarmVolume"
          className=" text-xl font-bold text-[rgb(85,85,85)]"
        >
          Alarm Volume
        </label>
        <div>
          <label htmlFor="alarmVolume">{volume}</label>
          <input
            name="alarmVolume"
            type="range"
            id="alarmVolume"
            min={0}
            max={100}
            defaultValue={alarmVolume * 100}
            onMouseDown={() => setAlarmPlaying(true)}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default SettingFormSound;
