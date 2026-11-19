/* Funzioni comuni ai grafici del pezzo "Ritardi dei treni" (sopra radar.js) */
(function(){
  var it=d3.formatLocale({decimal:",",thousands:".",grouping:[3],currency:["€",""]});
  var tip=document.createElement('div');tip.className='ttip';tip.hidden=true;
  document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(tip)});
  document.addEventListener('pointerdown',function(e){if(!e.target.closest('svg'))tip.hidden=true});
  window.T={
    f1:it.format(",.1f"), f0:it.format(",.0f"),
    RM:Radar.reduced, AN:{},
    W:function(el){return Math.max(240,el.getBoundingClientRect().width||300)},
    showTip:function(ev,html){tip.innerHTML=html;tip.hidden=false;tip.style.left=Math.min(ev.clientX+12,innerWidth-250)+'px';tip.style.top=(ev.clientY+12)+'px'},
    hideTip:function(){tip.hidden=true},
    /* CSV largo (prima colonna = nome, poi anni) -> {nome:{anno:valore}} */
    wide:function(rows){var o={};rows.forEach(function(r){var k=Object.keys(r),nk=k.filter(function(x){return isNaN(+x)})[0];var n=r[nk];o[n]={};k.filter(function(x){return x!==nk}).forEach(function(y){var v=Radar.num(r[y]);if(v!=null&&!isNaN(v))o[n][+y]=v})});return o},
    /* ridisegno: statico subito, animato al primo ingresso, statico al cambio di larghezza */
    run:function(node,key,draw){draw();Radar.onFirstView(node,function(){T.AN[key]=!T.RM;draw()});
      var lw=innerWidth;addEventListener('resize',function(){if(innerWidth!==lw){lw=innerWidth;draw();Radar.scheduleHeight()}});
      Radar.scheduleHeight()}
  };
})();
