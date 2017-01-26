chrome.tabs.getSelected(null, function(tab) {
  tabID = tab.id;
  tabUrl = tab.url;
  alert(tabID);
});
