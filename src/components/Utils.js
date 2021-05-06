export const onDragStart = (event, title) => {
  console.log("dragstart on div: ", title);
  event.dataTransfer.setData("title", title);
};

export const onDragOver = (event) => {
  event.preventDefault();
};
