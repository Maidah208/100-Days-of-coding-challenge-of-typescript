// Function that simulates a task that takes time
function doTask() {
    // Simulating a task that takes 2 seconds
    const endTime = Date.now() + 2000;
    while (Date.now() < endTime) {}
    console.log('Task completed!');
  }
  
  // Async function that uses await to wait for the task to complete
  async function runTask() {
    console.log('Starting task...');
    await doTask(); // Pauses here until the task completes
    console.log('Task finished!');
  }
  
  // Calling the async function
  runTask();
  
  