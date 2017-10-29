
function handleUpdated(tabId, changeInfo, tabInfo) {
  function logTabsForWindows(windowInfoArray) {
    for (windowInfo of windowInfoArray) {
      var updating = browser.windows.update(
        windowInfo.id, { titlePreface: "newtab:" }
      )
    }
  }
  
  var getting = browser.windows.getAll({
    populate: true,
    windowTypes: ["normal"]
  });
  getting.then(logTabsForWindows);
}

browser.tabs.onUpdated.addListener(handleUpdated);
browser.tabs.onActivated.addListener(handleUpdated)