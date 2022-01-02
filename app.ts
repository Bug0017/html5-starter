import logoIcon from "@carbon/icons/es/bat/32";
import cartIcon from "@carbon/icons/es/shopping--cart/32"
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
addIconToTheDOM(logoIcon, getNode('logoIcon'));
addIconToTheDOM(cartIcon, getNode("cartIcon"));