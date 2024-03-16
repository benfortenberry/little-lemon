const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 5; i <= 11; i++) {
    if (random() < 0.5) result.push(i + ':00 p.m.');
    if (random() < 0.5) result.push(i + ':30 p.m.');
  }

  return result;
};

const submitAPI = (formData) => {
  console.log(formData);
  return true;
};

export { fetchAPI, submitAPI };
