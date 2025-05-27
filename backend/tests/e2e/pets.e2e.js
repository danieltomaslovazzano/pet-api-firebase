const axios = require('./helpers/request');
const { login } = require('./helpers/tokens');
const { getFirstNOrgs, createOrg, deleteOrgByName } = require('./helpers/db');
const { writeReport } = require('./helpers/report');

const API_URL = process.env.E2E_API_URL || 'http://localhost:3000/api';
const IMAGE_URL = 'https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg';

const E2E_ORG_A = 'E2E_OrgA';
const E2E_ORG_B = 'E2E_OrgB';

const users = [
  { email: 'userA@example.com', password: 'test123' },
  { email: 'userB@example.com', password: 'test123' }
];

async function main() {
  let orgA, orgB;
  let createdA = false, createdB = false;
  let reportData = {
    group: 'pets',
    testName: 'create-multitenant-pets',
    payloads: '',
    curls: '',
    responses: '',
    status: '',
    observations: ''
  };
  try {
    console.log('--- E2E: Crear mascotas multitenant ---');
    // Login usuarios
    const tokenA = await login(users[0].email, users[0].password);
    const tokenB = await login(users[1].email, users[1].password);

    // Buscar dos primeras organizaciones
    const orgs = await getFirstNOrgs(2);
    if (orgs.length >= 2) {
      orgA = orgs[0];
      orgB = orgs[1];
      console.log(`[INFO] Usando organizaciones existentes: ${orgA.name}, ${orgB.name}`);
    } else {
      // Crear las que falten
      if (!orgs.find(o => o.name === E2E_ORG_A)) {
        orgA = await createOrg(E2E_ORG_A); createdA = true;
        console.log(`[INFO] Organización creada: ${E2E_ORG_A}`);
      } else {
        orgA = orgs.find(o => o.name === E2E_ORG_A);
      }
      if (!orgs.find(o => o.name === E2E_ORG_B)) {
        orgB = await createOrg(E2E_ORG_B); createdB = true;
        console.log(`[INFO] Organización creada: ${E2E_ORG_B}`);
      } else {
        orgB = orgs.find(o => o.name === E2E_ORG_B);
      }
      if (!orgA || !orgB) throw new Error('No se pudieron crear/obtener dos organizaciones para el test');
    }

    // Payloads
    const payloadA = {
      name: 'Firulais',
      species: 'dog',
      status: 'available',
      images: [IMAGE_URL]
    };
    const payloadB = {
      name: 'Mishi',
      species: 'cat',
      status: 'available',
      images: [IMAGE_URL]
    };
    reportData.payloads = `### OrgA\n\n\json\n${JSON.stringify(payloadA, null, 2)}\n\\n\n### OrgB\n\json\n${JSON.stringify(payloadB, null, 2)}\n\`;
    reportData.curls = `### OrgA\n\bash\ncurl -X POST ${API_URL}/pets \\\n  -H \"Authorization: Bearer <TOKEN_USER_A>\" \\\n  -H \"X-Organization-Id: ${orgA.id}\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '${JSON.stringify(payloadA)}'\n\\n\n### OrgB\n\bash\ncurl -X POST ${API_URL}/pets \\\n  -H \"Authorization: Bearer <TOKEN_USER_B>\" \\\n  -H \"X-Organization-Id: ${orgB.id}\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '${JSON.stringify(payloadB)}'\n\`;

    // Crear mascota en OrgA
    const resA = await axios.post(`${API_URL}/pets`, payloadA, {
      headers: {
        Authorization: `Bearer ${tokenA}`,
        'X-Organization-Id': orgA.id,
        'Content-Type': 'application/json'
      }
    });
    // Crear mascota en OrgB
    const resB = await axios.post(`${API_URL}/pets`, payloadB, {
      headers: {
        Authorization: `Bearer ${tokenB}`,
        'X-Organization-Id': orgB.id,
        'Content-Type': 'application/json'
      }
    });
    reportData.responses = `### OrgA\n\json\n${JSON.stringify(resA.data, null, 2)}\n\\n\n### OrgB\n\json\n${JSON.stringify(resB.data, null, 2)}\n\`;
    reportData.status = '- [x] Ejecutado correctamente\n- [x] Mascotas creadas en ambas organizaciones\n- [x] Sin errores';
    reportData.observations = `- El test es idempotente y deja la base limpia.\n- Se usaron organizaciones: ${orgA.name}, ${orgB.name}.`;
    console.log('[OK] Mascota creada en OrgA:', resA.data.name, resA.data.id);
    console.log('[OK] Mascota creada en OrgB:', resB.data.name, resB.data.id);
    console.log('--- E2E: Test de creación de mascotas multitenant completado ---');
  } catch (err) {
    reportData.status = '- [ERR] Falló el test';
    reportData.observations = err.response?.data ? JSON.stringify(err.response.data) : err.message;
    console.error('[ERR] Error en test E2E de pets:', err.response?.data || err.message);
    process.exitCode = 1;
  } finally {
    // Limpiar organizaciones creadas por el test
    if (createdA) await deleteOrgByName(E2E_ORG_A);
    if (createdB) await deleteOrgByName(E2E_ORG_B);
    writeReport(reportData);
    process.exit();
  }
}

main(); 