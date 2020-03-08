const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  const tabcontentitem = document.querySelector(`#${this.id}-content`);
  tabcontentitem.classList.add("show");
}
function removeShow() {
  tabContent.forEach(item => item.classList.remove("show"));
}
function removeBorder() {
  tabItem.forEach(item => item.classList.remove("tab-border"));
}
tabItem.forEach(item => item.addEventListener("click", selectItem.bind(item)));
