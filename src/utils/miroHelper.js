export const sparkFieldsColWidth = 400;
export const sparkFieldsRowHeight = 100;
export const gap = 10;
export const viewPortXMargin = 1500;
export const viewPortYMargin = 300;
export const headerColWidth = 900;
export const headerRowHeight = 100;
export const AttachmentColWidth = 900;
export const AttachmentRowHeight = 600;
export const fillColor = "#edf2f2";

export const drawTemplate = async (fields) => {
  //const { board } = window.miro;
  //const viewport = await board.viewport.get();
  const viewport = { x: -3500, y: -500 };
  await drawHeaderData(viewport);
  await drawBoxesForSparkFields(viewport, fields);
  await drawEmptyBoxesForAttachments(viewport, fields);
};

export const drawHeaderData = async (viewport) => {
  console.log("drawHeaderData");
  await createShape(
    viewport.x + viewPortXMargin,
    viewport.y + viewPortYMargin,
    headerColWidth,
    headerRowHeight,
    fillColor
  );
};

export const drawBoxesForSparkFields = async (viewport, fields) => {
  let colIdx = 0;
  let rowIdx = 0;
  console.log(fields.length);
  for (let fieldIdx = 1; fieldIdx <= fields.length; fieldIdx++) {
    colIdx = fieldIdx % 2 === 0 ? 1 : 0;
    rowIdx = fieldIdx % 2 === 0 ? fieldIdx / 2 : (fieldIdx + 1) / 2;
    const colX =
      viewport.x +
      viewPortXMargin +
      colIdx * gap +
      (colIdx * sparkFieldsColWidth + gap * colIdx);
    const rowY =
      viewport.y +
      viewPortYMargin +
      rowIdx * gap +
      (rowIdx * sparkFieldsRowHeight + gap * rowIdx);
    console.log("drawHeaderData colIdx", colIdx);
    console.log("drawHeaderData rowIdx", rowIdx);
    await createShape(
      colX,
      rowY,
      sparkFieldsColWidth,
      sparkFieldsRowHeight,
      fillColor
    );
  }
};

export const drawEmptyBoxesForAttachments = async (viewport, fields) => {
  let length = fields.length;
  let rowIdx = fields.length / 2;

  rowIdx = (length % 2 === 0 ? length / 2 : (length + 1) / 2) + 1;
  const colX = viewport.x + viewPortXMargin;
  const rowY =
    viewport.y +
    viewPortYMargin +
    rowIdx * gap +
    (rowIdx * sparkFieldsRowHeight + gap * rowIdx);
  return await createShape(
    colX,
    rowY,
    AttachmentColWidth,
    AttachmentRowHeight,
    fillColor
  );
};

async function createShape(x, y, colWidth, rowHeight, color) {
  console.log(
    JSON.stringify({ x: x, y: y, colWidth: colWidth, rowHeight: rowHeight })
  );
  return true;
}

export const miroBoardInit = async () => {
  console.log("miroBoardInit");
  const { board } = window.miro;
  await board.ui.on("icon:click", async () => {
    await board.ui.openPanel({ url: "index.html", height: 708 });
  });
};

// async function createShape222(x, y, colWidth, rowHeight, color) {
//   //   return board.createShape({
//   //     x: x,
//   //     y: y,
//   //     width: colWidth,
//   //     height: rowHeight,
//   //     style: {
//   //       fillColor: color,
//   //     },
//   //   });
// }
