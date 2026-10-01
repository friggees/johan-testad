const films=[
 {slug:'swedish-connection',title:'The Swedish Connection',type:'film',year:2026,id:'tt28793125',sub:'Feature film'},
 {slug:'synden',title:'Synden',type:'tv',year:2026,id:'tt33501959',sub:'Land of Sin · TV series'},
 {slug:'beartown',title:'Björnstad',type:'tv',year:2020,id:'tt9677638',sub:'Beartown · TV series'},
 {slug:'goliat',title:'Goliat',type:'film',year:2018,id:'tt6844052',sub:'Feature film',award:'GULDBAGGE WINNER'},
 {slug:'forsvunna',title:'Försvunna människor',type:'tv',year:2022,id:'tt15768302',sub:'TV series',award:'RIA AWARD WINNER'},
 {slug:'tjuvheder',title:'Tjuvheder',type:'film',year:2015,id:'tt4153324',sub:'Drifters · Feature film'},
 {slug:'bonusfamiljen',title:'Länge leve bonusfamiljen',type:'film',year:2022,id:'tt15742294',sub:'Feature film'},
 {slug:'inkognito',title:'Inkognito',type:'tv',year:2013,id:'tt2602066',sub:'TV miniseries'}
];
const grid=document.getElementById('film-grid');
function renderFilms(filter='all'){
 const visible=films.filter(f=>filter==='all'||f.type===filter);
 grid.innerHTML=visible.map((f,i)=>`<a class="film-card" data-slug="${f.slug}" href="https://www.imdb.com/title/${f.id}/" target="_blank" rel="noopener noreferrer" aria-label="${f.title}, ${f.year} — view on IMDb (opens in a new tab)" style="animation-delay:${i*40}ms"><div class="poster"><img src="/assets/${f.slug}.webp" alt="${f.title} official poster" width="400" height="600" loading="lazy"><div class="poster-top"><span class="poster-index">${String(films.indexOf(f)+1).padStart(2,'0')}</span><span class="poster-arrow" aria-hidden="true">↗</span></div><div class="poster-bottom"><span>${f.award||'ORIGINAL SCORE'}</span><span class="imdb">IMDb</span></div></div><div class="film-caption"><h3>${f.title}</h3><span>${f.year}</span></div><p class="film-subtitle">${f.sub}</p></a>`).join('');
 document.getElementById('filter-status').textContent=`Showing ${visible.length} ${filter==='all'?'works':filter==='film'?'films':'television series'}.`;
}
renderFilms();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',b===button?'true':'false')});renderFilms(button.dataset.filter)}));
const archive=[['De Fria','Audio drama · 2021','https://open.spotify.com/episode/5lSPeynzixmYfCPSgjcbGd'],['It’s all in the sauce','Short · 2021','tt14780472'],['Gläntan','Short · 2011','tt2485456'],['Morden i Sandhamn','TV series · 2010','tt1846197'],['Meteoren','Short · 2010','tt1600750'],['Janna & Liv','Short · 2009','tt1509634'],['Ett enklare liv','TV movie · 2008','tt1118669'],['Ett öga rött','Feature film · 2007','tt0876159'],['En liten tiger','Short · 2006','tt0956177'],['Meningen med alltihopa','Short · 2006','tt0874302'],['Mebana','Short · 2005','tt0487927'],['Kung Konrad','Short · 2004','tt0419897'],['Kom tillbaka','Short · 2004','tt0399252']];
document.getElementById('archive-list').innerHTML=archive.map(([title,meta,id])=>`<a href="${id.startsWith('http')?id:`https://www.imdb.com/title/${id}/`}" target="_blank" rel="noopener noreferrer">${title}<span>${meta} ↗</span></a>`).join('');
document.querySelectorAll('.track-wave').forEach((wave,index)=>{wave.innerHTML=Array.from({length:17},(_,i)=>`<i style="height:${5+((i*7+index*11)%21)}px"></i>`).join('')});
const player=document.getElementById('player'),embed=document.getElementById('embed-container');
document.querySelectorAll('[data-track]').forEach(button=>button.addEventListener('click',()=>{document.getElementById('player-title').textContent=button.dataset.title;document.getElementById('spotify-fallback').href=`https://open.spotify.com/track/${button.dataset.track}`;const frame=document.createElement('iframe');frame.title=`Spotify player: ${button.dataset.title}`;frame.src=`https://open.spotify.com/embed/track/${button.dataset.track}?utm_source=generator&theme=0`;frame.allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';embed.replaceChildren(frame);player.showModal()}));
document.getElementById('close-player').addEventListener('click',()=>player.close());
player.addEventListener('click',event=>{if(event.target===player){const r=player.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)player.close()}});
player.addEventListener('close',()=>embed.replaceChildren());
document.getElementById('year').textContent=new Date().getFullYear();
