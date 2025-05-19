window.threatPatterns = [
    { pattern: /\beval\s*\(/g, label: "eval()" },
    { pattern: /\bFunction\s*\(/g, label: "Function constructor" },
    { pattern: /\bdocument\.write\s*\(/g, label: "document.write()" },
    { pattern: /\bexecScript\s*\(/g, label: "execScript()" },
    { pattern: /\bsetTimeout\s*\(\s*["'`]/g, label: "setTimeout with string" },
    { pattern: /\bsetInterval\s*\(\s*["'`]/g, label: "setInterval with string" },
    { pattern: /\bwith\s*\(/g, label: "with statement" }
  ];
  