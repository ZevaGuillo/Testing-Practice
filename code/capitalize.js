function capitalize(string) {
  if (!string) return "";
  let aux = string.substring(0, 1).toUpperCase();
  let aux2 = string.slice(1);
  return aux + aux2;
}

module.exports = { capitalize };
