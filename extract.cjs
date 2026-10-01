const fs = require('fs');
const s=fs.readFileSync('source.html','utf8');
console.log([...s.matchAll(/<(?:img|iframe|audio|source)[^>]+>/g)].map(m=>m[0]).join('\n'));
console.log([...s.matchAll(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(m=>[m[1],m[2].replace(/<[^>]+>/g,'')]).filter(x=>!x[0].includes('wp-admin')));
console.log([...s.matchAll(/url\(([^)]+)\)/g)].map(m=>m[1]));
