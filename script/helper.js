export function toggleClass(type, elem, className) {
  switch (type) {
    case 'toggle':
      elem.classList.toggle(`${className}`);
      break;
    case 'add':
      elem.classList.add(`${className}`);
      break;
    case 'remove':
      elem.classList.remove(`${className}`);
      break;
    default:
      return;
  }
}

export function createDeleteBtn(parentElem, className) {
  let child = document.createElement("DIV");
  let txt = document.createTextNode("\u00D7");
  child.className = `${className}`;
  child.appendChild(txt);
  parentElem.appendChild(child);
}

export function deleteItem(e) {
  const parent = e.target.parentElement;
  parent.style.display = 'none';
}