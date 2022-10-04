export const convertQueryToSingeLine = (query: object) => {
  const string = JSON.stringify(query);
  return string.replace(/\s+/g, " ").replaceAll(" ", "").trim();
};
