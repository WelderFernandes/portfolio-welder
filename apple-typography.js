const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  // Typography
  { search: /font-bold/g, replace: 'font-semibold tracking-tight font-display' },
  { search: /text-5xl md:text-7xl/g, replace: 'text-6xl md:text-7xl lg:text-[80px] leading-[1.05]' },
  { search: /text-4xl/g, replace: 'text-5xl leading-[1.07]' },
  { search: /text-3xl/g, replace: 'text-4xl leading-[1.10]' },
  { search: /text-2xl/g, replace: 'text-3xl leading-[1.14]' },
  { search: /text-xl/g, replace: 'text-2xl leading-[1.17]' },
];

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'ui') processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') && file !== 'Button.tsx' && file !== 'Card.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content;
      for (const rule of replacements) {
        newContent = newContent.replace(rule.search, rule.replace);
      }
      
      // Clean up potential duplicate classes
      newContent = newContent.replace(/tracking-tight tracking-tight/g, 'tracking-tight');
      newContent = newContent.replace(/font-display font-display/g, 'font-display');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated Apple Typography in ${file}`);
      }
    }
  }
}

processDir(dir);
