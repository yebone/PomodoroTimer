export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "COUNTDOWN":
      return { ...state, countDown: payload };
    case "FINISH":
      return { ...state, countDown: false, currentMode: payload };
    case "MODE":
      return { ...state, currentMode: payload, countDown: false };
    case "RESET":
      return { ...state, useEffectLoader: payload, countDown: false };

    //setting
    case "SETTINGTOGGLE":
      return { ...state, settingToggle: payload };
    case "UPDATEBYSETTING":
      const { pomodoro, shortBreak, longBreak } = payload;
      return {
        ...state,
        modes: { pomodoro, shortBreak, longBreak },
        useEffectLoader: !state.useEffectLoader,
        currentAlarm: payload.alarmSound,
        alarmVolume: payload.alarmVolume / 100,
      };

    case "LOGINPAGETOGGLE":
      return { ...state, logInPageToggle: payload };
    case "SIGNUPFORMTOGGLE":
      return { ...state, signUpFormToggle: payload };

    //userProfile
    case "PROFILEPOPUPMENUTOGGLE":
      return { ...state, profilePopUpMenuToggle: payload };

    case "UPDATEUSERPREFERENCES":
      return {
        ...state,
        modes: payload.modes,
        currentAlarm: payload.alarmSound,
        alarmVolume: payload.alarmVolume,
      };

    //tasks
    case "ADDTASKMODELTOGGLE":
      return { ...state, addTaskModelToggle: payload };
    default:
      return state;
  }
};
