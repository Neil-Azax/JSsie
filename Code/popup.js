document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("results");
  
    chrome.storage.local.get("findings", ({ findings }) => {
      if (!findings || findings.length === 0) {
        const li = document.createElement("li");
        li.className = "safe";
        li.textContent = "No risky patterns found.";
        list.appendChild(li);
      } else {
        findings.forEach(item => {
          const li = document.createElement("li");
          li.className = item.level;
          li.textContent = `${item.pattern} found in ${item.src}`;
          list.appendChild(li);
        });
      }
    });
  });
  