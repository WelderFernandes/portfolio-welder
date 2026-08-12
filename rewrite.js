const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  // Backgrounds
  { search: /bg-white\/90 dark:bg-gray-900\/90/g, replace: 'bg-background/80' },
  { search: /bg-white dark:bg-gray-900/g, replace: 'bg-background' },
  { search: /bg-gray-50 dark:bg-gray-800/g, replace: 'bg-muted/30' },
  { search: /bg-gray-100 dark:bg-gray-800/g, replace: 'bg-muted/30' },
  { search: /bg-gradient-to-br from-blue-[0-9]+ to-(indigo|purple)-[0-9]+/g, replace: 'bg-muted' },
  
  // Borders
  { search: /border-gray-200 dark:border-gray-700/g, replace: 'border-border' },
  { search: /border-gray-300 dark:border-gray-600/g, replace: 'border-border' },
  
  // Text Colors
  { search: /text-gray-900 dark:text-white/g, replace: 'text-foreground' },
  { search: /text-gray-[678]00 dark:text-gray-[34]00/g, replace: 'text-muted-foreground' },
  { search: /text-gray-700/g, replace: 'text-muted-foreground' },
  { search: /text-gray-600/g, replace: 'text-muted-foreground' },
  { search: /text-blue-600 dark:text-blue-400/g, replace: 'text-foreground' },
  { search: /text-blue-[56]00/g, replace: 'text-foreground' },
  
  // Hovers
  { search: /hover:text-blue-600 dark:hover:text-blue-400/g, replace: 'hover:text-foreground' },
  
  // Badges / Tags
  { search: /bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200/g, replace: 'bg-background border border-border text-foreground' },
  { search: /bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200/g, replace: 'bg-background border border-border text-foreground' },
  
  // Rings
  { search: /focus:ring-blue-500/g, replace: 'focus:ring-foreground' }
];

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content;
      for (const rule of replacements) {
        newContent = newContent.replace(rule.search, rule.replace);
      }
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDir(dir);
