document.getElementById("activate").addEventListener("click", () => {
    // Get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        // Inject the content script into the active tab
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["content.js"],
        });
      } else {
        console.error("No active tab found!");
      }
    });
  });
  

  function downloadData() {
    const blob = new Blob([JSON.stringify(selectedData)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = "scraped_data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  

  