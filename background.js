
function handleUpdated(tabId, changeInfo, tabInfo) {
  function logTabsForWindows(windowInfoArray) {
    browser.tabs.query({currentWindow: true, active: true})
    .then(activeTab => {
      if(activeTab[0].url === "about:newtab"){
        var updating = browser.windows.update(
          activeTab[0].windowId, { titlePreface: "about:newtab" }
        )
      } else {
        var updating = browser.windows.update(
          activeTab[0].windowId, { titlePreface: " " }
        )
      }
    });
  }
  
  var getting = browser.windows.getAll({
    populate: true,
    windowTypes: ["normal"]
  });
  getting.then(logTabsForWindows);
}

browser.tabs.onUpdated.addListener(handleUpdated);
browser.tabs.onActivated.addListener(handleUpdated)