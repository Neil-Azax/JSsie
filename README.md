# JSsie
Client-Side Security Visualizer (codename: Jssie) is a lightweight Chrome Extension that scans web pages in real-time to detect risky JavaScript patterns that may introduce security vulnerabilities like XSS, code injection, or data leaks.

The extension is designed for security researchers, penetration testers, and developers to visually assess potential client-side risks by analyzing inline and external JavaScript code on any loaded page.

⚡ Features
✅ Pattern-based scanning of dangerous JavaScript usage

✅ Risk classification into four severity levels:

  🔴 Threat – High risk (e.g., eval, Function, document.write)

  🟠 Risk – Medium risk (e.g., innerHTML, insertAdjacentHTML)

  🟡 Warn – Low risk (e.g., location.href, contentWindow)

  🔵 Info – Informational use (e.g., localStorage, fetch, WebSocket)

✅ Regex-based pattern matching for more accurate detection

✅ Scans both inline and external scripts

✅ Stores and displays findings via Chrome storage

✅ Optional debug/verbose mode to track internal behavior and matching logic

🛠 Use Case
Use this tool to:

Quickly identify client-side code that may be exploitable

Train and test detection logic on intentionally vulnerable sites

Integrate into a penetration testing workflow for surface-level JavaScript assessments
