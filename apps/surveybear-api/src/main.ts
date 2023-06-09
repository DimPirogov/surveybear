import {connect} from "@surveybear/surveybear-lib"
import app from "./app";

const port = process.env.port || 3333;

try {
  connect().then(() => {
    const server = app.listen(port, () => {
      console.log('running in test branch');
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', () => console.log('error'));
  })
} catch (e) {
  console.log('error');
  throw e;
}