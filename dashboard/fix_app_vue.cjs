const fs = require('fs');
const path = '/Users/yazidhilmi/Documents/cloud/Kalananti-cloud/Academic_Content/B2B/UOB/Async/Middleschool/grupA/dashboard/src/App.vue';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /const checkVideoQuizzes = \(stepId\) => \{\n  return; \/\/ DISABLE QUIZZES/,
  'const checkVideoQuizzes = (stepId) => {'
);

content = content.replace(
  /const updateVideoControls = \(stepId\) => \{\n  const player = players\[stepId\];/,
  `const updateVideoControls = (stepId) => {
  enforceVideoStartBoundary(stepId);
  const player = players[stepId];`
);

fs.writeFileSync(path, content);
console.log("Fixed App.vue");
