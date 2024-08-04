// FORMAT YYYY-MM-DD

export function calcXp(initialDate) {
  const currentDate = new Date();
  const start = new Date(initialDate);

  let xpYears = currentDate.getFullYear() - start.getFullYear();
  const currentMonth = currentDate.getMonth();
  const initialMonth = start.getMonth();

  if (
    currentMonth < initialMonth ||
    (currentMonth === initialMonth && currentDate.getDate() < start.getDate())
  ) {
    xpYears--;
  }

  return xpYears;
}
