export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "COUNTDOWN":
      return { ...state, countDown: payload };
    case "FINISH":
      return { ...state, countDown: false };
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
      };
    default:
      return state;
  }
};
