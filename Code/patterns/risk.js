window.riskPatterns = [
    { pattern: /\.innerHTML\s*=/g, label: "innerHTML assignment" },
    { pattern: /\.outerHTML\s*=/g, label: "outerHTML assignment" },
    { pattern: /\bsrcdoc\s*=/g, label: "srcdoc attribute" },
    { pattern: /createElement\s*\(\s*['"]script['"]\s*\)/g, label: "dynamic <script> tag" },
    { pattern: /\.insertAdjacentHTML\s*\(/g, label: "insertAdjacentHTML" }
  ];
  