const fs = require('fs');
const path = '/Users/yazidhilmi/Documents/cloud/Kalananti-cloud/Academic_Content/B2B/UOB/Async/Middleschool/grupA/dashboard/src/courseData.js';
let content = fs.readFileSync(path, 'utf8');

// Find the start of 3: { and the start of 4: {
const start3 = content.indexOf('\n  3: {');
const start4 = content.indexOf('\n  4: {');
if (start3 !== -1 && start4 !== -1) {
  // Delete everything from start3 up to start4
  content = content.substring(0, start3) + content.substring(start4);
} else {
  console.log("Could not find start3 or start4");
  process.exit(1);
}

// Now we have 4: {, 5: {, 6: { remaining.
// We need to shift them to 3: {, 4: {, 5: {
content = content.replace(/\n  4: \{/g, '\n  3: {');
content = content.replace(/\n  5: \{/g, '\n  4: {');
content = content.replace(/\n  6: \{/g, '\n  5: {');

// Add startSeconds and endSeconds to the new 3: {
// Right after videoId: "UhutS4BVKhk",
// Let's find the 3: { block. It should be the one with kicker: "Checkpoint 03 \u00b7 Flowchart"
// Wait, after shifting, 4 became 3. Let's find kicker: "Checkpoint 03 \u00b7 Flowchart"
const kickerIndex = content.indexOf('kicker: "Checkpoint 03');
if (kickerIndex !== -1) {
  // Find videoId inside that block
  const videoIdIndex = content.indexOf('videoId: "UhutS4BVKhk",', kickerIndex);
  if (videoIdIndex !== -1) {
    const insertStr = '\n    startSeconds: 1394,\n    endSeconds: 2079,';
    // If it already has startSeconds, replace it
    if (content.indexOf('startSeconds:', videoIdIndex) < videoIdIndex + 50) {
       // it doesn't have it yet since it's the original
    }
    content = content.substring(0, videoIdIndex + 23) + insertStr + content.substring(videoIdIndex + 23);
  } else {
    console.log("Could not find videoId inside Tab 3");
  }
} else {
  console.log("Could not find Checkpoint 03");
}

fs.writeFileSync(path, content);
console.log("Updated courseData.js to remove old Tab 3 and update Flowchart");
