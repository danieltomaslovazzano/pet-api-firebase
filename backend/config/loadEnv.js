// Carga automática de variables de entorno según NODE_ENV
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPriority = [
  { env: 'test', file: '.env.test' },
  { env: 'staging', file: '.env.staging' },
  { env: 'production', file: '.env.prod' },
  { env: 'development', file: '.env.dev' },
];

function loadEnv() {
  const nodeEnv = process.env.NODE_ENV || 'development';
  let loaded = false;

  // Busca el archivo correspondiente al entorno
  for (const { env, file } of envPriority) {
    if (nodeEnv === env && fs.existsSync(path.resolve(process.cwd(), file))) {
      dotenv.config({ path: file });
      loaded = true;
      console.log(`[config] Variables de entorno cargadas desde ${file}`);
      break;
    }
  }

  // Si no se cargó nada, intenta cargar .env por defecto
  if (!loaded && fs.existsSync(path.resolve(process.cwd(), '.env'))) {
    dotenv.config({ path: '.env' });
    console.log('[config] Variables de entorno cargadas desde .env');
  }
}

loadEnv(); 