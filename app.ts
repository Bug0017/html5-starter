import addIcon from "@carbon/icons/es/add/16";
import { getAttributes, toSVG } from "@carbon/icon-helpers";
function addIconToTheDOM(icon , node:HTMLElement){
    const iconNode = toSVG({
      ...icon,
      attrs: getAttributes(icon.attrs),
    });
    if(!node.hasChildNodes()){
      node.appendChild(iconNode)
    }
}


const getNode = (nodeId) => document.getElementById(nodeId);
// addIcon
addIconToTheDOM(addIcon, getNode('addIcon'));