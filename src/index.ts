import "dotenv/config";

import { initializeApp } from "firebase-admin/app";
import { getAppCheck } from "firebase-admin/app-check";

async function main() {
  const app = initializeApp();
  const appCheck = getAppCheck(app);
  const token = await appCheck.createToken(process.env.FIREBASE_APP_ID);
  console.log(token);
}

main();
