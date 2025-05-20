const fs = require('fs');
const path = require('path');

function getTimestamp() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}-${hh}${min}`;
}

function writeReport({ group, testName, payloads, curls, responses, status, observations }) {
  const timestamp = getTimestamp();
  const dir = path.join(__dirname, `../reports/${group}.e2e`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${timestamp}-${testName}.md`);
  const content = `# Reporte E2E: ${testName}

**Fecha:** ${timestamp}
**Test:** ${testName}

---

## **Payloads enviados**
${payloads}

---

## **Curl de ejemplo**
${curls}

---

## **Respuestas**
${responses}

---

## **Status del test**

${status}

**Observaciones:**
${observations}
`;
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[REPORTE] Reporte generado: ${file}`);
}

module.exports = { writeReport }; 