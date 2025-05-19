const scripts = Array.from(document.scripts);
const findings = [];

function checkPatterns(patternList, level) {
  patternList.forEach(entry => {
    const regex = entry.pattern;
    scripts.forEach(script => {
      const code = script.textContent || "";
      if (regex.test(code)) {
        findings.push({
          pattern: entry.label,
          level,
          type: script.src ? "external" : "inline",
          src: script.src || "inline script"
        });
      }
    });
  });
}

checkPatterns(window.threatPatterns, "Threat");
checkPatterns(window.riskPatterns, "Risk");
checkPatterns(window.warnPatterns, "Warn");
checkPatterns(window.infoPatterns, "Info");

chrome.storage.local.set({ findings });
