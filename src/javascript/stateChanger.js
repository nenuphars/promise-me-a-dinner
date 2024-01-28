export const setter = (setState) => {
  return function addItem(item) {
    setState((prev) => [...prev, item]);
  }  
};

export const reset = (setState) => {
  return setState(() => []);
}