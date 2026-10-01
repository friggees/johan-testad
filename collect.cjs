const fs=require('fs');
const works=[['swedish-connection','tt28793125'],['synden','tt33501959'],['bonusfamiljen','tt15742294'],['forsvunna','tt15768302'],['beartown','tt9677638'],['goliat','tt6844052'],['tjuvheder','tt4153324'],['inkognito','tt2602066']];
(async()=>{
 const portrait='https://usercontent.one/wp/www.johantestad.com/wp-content/uploads/2022/10/johan_testad_toppbild_bw5.jpg';
 fs.writeFileSync('public/assets/johan-testad.jpg',Buffer.from(await (await fetch(portrait)).arrayBuffer()));
 const results=await Promise.all(works.map(async([slug,id])=>{try{const u=`https://v3.sg.media-imdb.com/suggestion/x/${id}.json`;const r=await fetch(u);const data=await r.json();const m=data.d.find(x=>x.id===id);if(m?.i?.imageUrl){const img=await fetch(m.i.imageUrl);fs.writeFileSync(`public/assets/${slug}.jpg`,Buffer.from(await img.arrayBuffer()));}return {slug,id,data:m};}catch(e){return {slug,error:e.message}}}));
 fs.writeFileSync('research.json',JSON.stringify(results,null,2)); console.log(JSON.stringify(results,null,2));
})();
