function secToTimeFormatter(given_seconds) {
  const hours = Math.floor(given_seconds / 3600);
  const minutes = Math.floor((given_seconds - hours * 3600) / 60);
  const seconds = given_seconds - hours * 3600 - minutes * 60;

  const arr = hours === 0 ? [minutes, seconds] : [hours, minutes, seconds];

  return arr.map((item) => item.toString().padStart(2, "0")).join(":");
}

export { secToTimeFormatter };
