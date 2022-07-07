const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItems = document.querySelectorAll(".trends__list");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function (item) {
      item.classList.remove("btn-active");
    });

    tabsItems.forEach(function (item) {
      item.classList.remove("item-active");
    });

    currentBtn.classList.add("btn-active");
    currentTab.classList.add("item-active");
  });
});
