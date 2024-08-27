export const getActiveStyle = (isActive: boolean) => ({
    fill: isActive ? "black" : "grey",
    color: isActive ? "black" : "grey",
    stroke: isActive ? "black" : "grey"
  });