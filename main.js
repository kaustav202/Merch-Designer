import "./style.css";
import {
  updateLabelColorEvent,
  updateShirtColorEvent,
  changeLabelFontEvent,
  changeLabelTextEvent,
  changeRightOffsetEvent,
  changeTopOffsetEvent,
  ShowCSSBoxEvent,
  customCSSEvent,
  renderEvent,
  downloadEvent,
} from "./src/events";
import { getImage, downloadImageToStorage } from "./src/download";
const select = (e) => {
  return document.querySelector(e);
};

const startupEvents = () => {
  let shirt = select("#shirt");
  let label = select("#label");
  let labelInput = select("#label-text-input");
  let labelContainer = select("#label-container");
  let labelColorInp = select("#label-color");
  let shirtColorInp = select("#shirt-color");
  let fontSlider = select("#font-slider");
  let topSlider = select("#top-slider");
  let rightSlider = select("#right-slider");

  let cssCheckBox = select("#css-checkbox");
  let textArea = select("#css");
  let customUserStyle = select("#u-style");

  // startup event listeners
  changeLabelTextEvent(labelInput, label);
  updateLabelColorEvent(labelColorInp, label);
  updateShirtColorEvent(shirtColorInp, shirt);
  changeLabelFontEvent(fontSlider, label);
  changeTopOffsetEvent(topSlider, labelContainer);
  changeRightOffsetEvent(rightSlider, labelContainer);
  ShowCSSBoxEvent(cssCheckBox, textArea);
  customCSSEvent(textArea, customUserStyle);

  renderEvent(select("#download"), () =>
    getImage(
      select("#playground"),
      select("#download-area"),
      select("#download-image-box"),
      select("#download-link")
    )
  );

  downloadEvent(select("#download-btn"), () =>
    downloadImageToStorage(select("#download-link"))
  );
};

window.addEventListener("load", startupEvents, false);
