
import addIcon from "@carbon/icons/es/add/16";
import { getAttributes, toSVG } from "@carbon/icon-helpers";
function addIconToTheDOM(icon , node:HTMLElement){
    const iconNode = toSVG({
      ...icon,
      attrs: getAttributes(addIcon.attrs),
    });
    if(!node.hasChildNodes()){
      node.appendChild(iconNode)
    }
}

// addIcon
addIconToTheDOM(addIcon, document.getElementById('addIcon'));