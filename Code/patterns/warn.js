window.warnPatterns = [
    { pattern: /\.contentWindow\.document/g, label: "Accessing iframe's contentWindow.document" },
    { pattern: /location\.href\s*=/g, label: "location.href assignment" },
    { pattern: /location\.assign\s*\(/g, label: "location.assign()" },
    { pattern: /document\.location/g, label: "document.location access" }
  ];
  