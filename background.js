
async function handleUpdated(tabId, changeInfo, tabInfo) {
  const activeTabs = await browser.tabs.query({ currentWindow: true, active: true })
  const activeTab = activeTabs[0];
  var newTitlePreface = " ";
  if (activeTab.url === "about:newtab") {
    newTitlePreface = "about:newtab ";
  }
  browser.windows.update(activeTab.windowId, { titlePreface: newTitlePreface });
}

browser.tabs.onUpdated.addListener(handleUpdated);
browser.tabs.onActivated.addListener(handleUpdated)