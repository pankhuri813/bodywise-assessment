(function(root){
const model=root.Bodywise||(typeof require==='function'?require('./model.js'):null);
const matcher=root.BodywiseProducts||(typeof require==='function'?require('./products.js'):null);
const shopUrl='https://bebodywise.com/catalog/build-your-own-kit';
function step(p){
 const f=p.family;
 if(['hydrating-wash','body-acne'].includes(f))return {when:'Bath / shower',instruction:'Cleanse wet skin and rinse, following the full product directions.'};
 if(f==='urea10')return {when:'After bathing',instruction:'Apply to body skin and massage in, following the product label.'};
 if(f==='conditioner')return {when:'Wash days',instruction:'Apply to hair lengths after shampooing, then rinse as directed.'};
 if(f==='shampoo')return {when:'Wash days',instruction:'Apply to wet hair and rinse according to the pack directions.'};
 if(['face-wash1','face-wash2'].includes(f))return {when:'Cleansing step',instruction:'Use as a rinse-off cleanser at the frequency specified on the label.'};
 if(f==='face-moisturiser')return {when:'Moisturising step',instruction:'Apply and gently massage into skin according to the label.'};
 if(['face-spf','body-spf','mineral-spf'].includes(f))return {when:'Daytime / sun exposure',instruction:'Apply as directed and follow label guidance for reapplication.'};
 return {when:'Your care step',instruction:'Follow the complete product label for application, frequency and precautions.'};
}
function createOptions(a){
 if(!model.questions(a).every(q=>model.validAnswer(q,a[q.id])))return [];
 const match=matcher.shortlist(a);
 if(model.route(a).type!=='routine'||match.status!=='recommended')return [];
 const safe=p=>p.eligible&&!p.discussionOnly&&!p.kit&&p.role!=='Discuss first'&&Number.isFinite(p.price)&&p.price>0;
 const core=match.products.filter(p=>p.role==='Start here'&&safe(p));
 const optional=match.products.filter(p=>p.role==='Optional'&&safe(p));
 if(!core.length)return [];
 const concerns=model.selected(a.concern),priority=concerns[0];
 const names={'Dry or rough skin':'Your dry-skin care kit','Dry or frizzy hair':'Your dry & frizzy hair kit','Occasional breakouts':'Your breakout-care kit','Underarm odour':'Your underarm-care kit','Cracked heels':'Your heel-care kit','Rough / bumpy skin':'Your smoothing body-care kit','Uneven body tone':'Your body-tone care kit','Fine lines':'Your moisture & protection kit','Uneven tone / marks':'Your daily face-care kit'};
 const title=names[priority]||'Your '+model.categories[a.category].short.toLowerCase()+' care kit';
 function option(id,label,description,items){
  const seen=new Set();items=items.filter(p=>{if(seen.has(p.family))return false;seen.add(p.family);return true;});
  return {id,title,label,description,concerns,items:items.map(p=>({...p,quantity:1,careStep:step(p)})),total:items.reduce((n,p)=>n+p.price,0),checked:matcher.checked,shopUrl};
 }
 const options=[option('starter','Essential starter','A small starting routine. Keep products you already use if they suit you.',core)];
 if(optional.length)options.push(option('care-pair','With optional care','The same starting product with a relevant companion. The extra step is optional.',[...core,...optional]));
 return options;
}
const api={createOptions,shopUrl};if(typeof module!=='undefined')module.exports=api;root.BodywiseKits=api;
})(typeof window!=='undefined'?window:globalThis);
