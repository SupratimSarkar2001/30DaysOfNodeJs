const express = require('express')
const cluster = require('cluster')
const os = require('os')

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {// Check if the current process is the primary process
 for (let i = 0; i < numCPUs; i++) {
  cluster.fork(); // Create a new worker
 }

 cluster.on('exit', (worker, code, signal) => {
  console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
  cluster.fork(); // Replace the dead worker
 });
}
else {
 const app = express();
 app.get('/', (req, res) => {
  res.send("Hello World from worker " + process.pid);
 })
 app.listen(3000, () => {
  console.log(`Worker ${process.pid} started`);
 });
}