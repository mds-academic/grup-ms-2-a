const fs = require('fs');
const path = '/Users/yazidhilmi/Documents/cloud/Kalananti-cloud/Academic_Content/B2B/UOB/Async/Middleschool/grupA/dashboard/src/App.vue';
let content = fs.readFileSync(path, 'utf8');

// Add getVideoEndBoundary right after getVideoStartBoundary
content = content.replace(
  /const getVideoStartBoundary = \(stepId\) => \{\n  return courseData\[stepId\]\?.startSeconds \|\| 0;\n\};/,
  `const getVideoStartBoundary = (stepId) => {
  return courseData[stepId]?.startSeconds || 0;
};

const getVideoEndBoundary = (stepId) => {
  const rawDuration = playerStates.value[stepId]?.rawDuration || 0;
  return courseData[stepId]?.endSeconds || rawDuration;
};`
);

// Update enforceVideoStartBoundary
content = content.replace(
  /const enforceVideoStartBoundary = \(stepId\) => \{\n  const player = players\[stepId\];\n  if \(\!player \|\| typeof player\.getCurrentTime \!\=\= "function" \|\| typeof player\.seekTo \!\=\= "function"\) return;\n  const startBoundary = getVideoStartBoundary\(stepId\);\n  if \(startBoundary > 0 && player\.getCurrentTime\(\) < startBoundary - 0\.5\) \{\n    player\.seekTo\(startBoundary, true\);\n  \}\n\};/,
  `const enforceVideoStartBoundary = (stepId) => {
  const player = players[stepId];
  if (!player || typeof player.getCurrentTime !== "function" || typeof player.seekTo !== "function") return;
  const startBoundary = getVideoStartBoundary(stepId);
  const endBoundary = courseData[stepId]?.endSeconds || 0; // Only enforce if endSeconds explicitly provided
  const currentTime = player.getCurrentTime();

  if (startBoundary > 0 && currentTime < startBoundary - 0.5) {
    player.seekTo(startBoundary, true);
  } else if (endBoundary > 0 && currentTime >= endBoundary) {
    player.pauseVideo();
    // Keep it at endBoundary
    if (currentTime > endBoundary + 0.5) {
      player.seekTo(endBoundary, true);
    }
  }
};`
);

// Update updateVideoControls
content = content.replace(
  /const updateVideoControls = \(stepId\) => \{\n  const player = players\[stepId\];\n  if \(\!player \|\| typeof player\.getCurrentTime \!\=\= "function"\) return;\n\n  const duration = player\.getDuration\(\) \|\| 0;\n  const currentTime = player\.getCurrentTime\(\) \|\| 0;\n  const startBoundary = getVideoStartBoundary\(stepId\);\n\n  playerStates\.value\[stepId\]\.duration = duration;\n  playerStates\.value\[stepId\]\.currentTime = Math\.max\(currentTime, startBoundary\);\n  playerStates\.value\[stepId\]\.progress = getSeekValue\(stepId\);\n  playerStates\.value\[stepId\]\.durationFormatted = formatVideoTime\(duration\);\n  playerStates\.value\[stepId\]\.currentTimeFormatted = formatVideoTime\(playerStates\.value\[stepId\]\.currentTime\);\n\};/,
  `const updateVideoControls = (stepId) => {
  const player = players[stepId];
  if (!player || typeof player.getCurrentTime !== "function") return;

  const rawDuration = player.getDuration() || 0;
  playerStates.value[stepId].rawDuration = rawDuration;

  const startBoundary = getVideoStartBoundary(stepId);
  const endBoundary = getVideoEndBoundary(stepId) || rawDuration;

  const currentTime = player.getCurrentTime() || 0;
  
  const effectiveDuration = Math.max(0, endBoundary - startBoundary);
  const effectiveCurrentTime = Math.max(0, Math.min(currentTime, endBoundary) - startBoundary);

  playerStates.value[stepId].duration = effectiveDuration;
  playerStates.value[stepId].currentTime = effectiveCurrentTime;
  playerStates.value[stepId].progress = getSeekValue(stepId);
  playerStates.value[stepId].durationFormatted = formatVideoTime(effectiveDuration);
  playerStates.value[stepId].currentTimeFormatted = formatVideoTime(effectiveCurrentTime);
};`
);

// Update onSeekInput
content = content.replace(
  /const onSeekInput = \(stepId, event\) => \{\n  const seekVal = parseFloat\(event\.target\.value\);\n  const player = players\[stepId\];\n  if \(\!player \|\| typeof player\.seekTo \!\=\= "function"\) return;\n  const seekTime = \(seekVal \/ 100\) \* \(playerStates\.value\[stepId\]\.duration \|\| 0\);\n  player\.seekTo\(seekTime, true\);\n  playerStates\.value\[stepId\]\.progress = seekVal;\n\};/,
  `const onSeekInput = (stepId, event) => {
  const seekVal = parseFloat(event.target.value);
  const player = players[stepId];
  if (!player || typeof player.seekTo !== "function") return;
  const effectiveDuration = playerStates.value[stepId].duration || 0;
  const startBoundary = getVideoStartBoundary(stepId);
  const seekTimeAbsolute = startBoundary + ((seekVal / 100) * effectiveDuration);
  player.seekTo(seekTimeAbsolute, true);
  playerStates.value[stepId].progress = seekVal;
};`
);

fs.writeFileSync(path, content);
console.log("Updated App.vue");
