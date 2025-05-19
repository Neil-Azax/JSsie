window.infoPatterns = [
    { pattern: /\blocalStorage\b/g, label: "localStorage usage" },
    { pattern: /\bsessionStorage\b/g, label: "sessionStorage usage" },
    { pattern: /\bpostMessage\s*\(/g, label: "postMessage()" },
    { pattern: /\bWebSocket\s*\(/g, label: "WebSocket constructor" },
    { pattern: /\bfetch\s*\(/g, label: "fetch()" },
    { pattern: /\bXMLHttpRequest\b/g, label: "XMLHttpRequest" },
    { pattern: /\bsendBeacon\s*\(/g, label: "sendBeacon()" },
    { pattern: /\bwindow\.open\s*\(/g, label: "window.open()" }
  ];
  