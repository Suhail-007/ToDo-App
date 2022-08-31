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
