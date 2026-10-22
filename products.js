(function(root){
const catalogue=root.BodywiseCatalogue||(typeof require==='function'?require('./catalogue-data.js'):null);
const checked=catalogue.checked;
const products=Object.fromEntries(catalogue.products.map(p=>[p.id,p]));
const concernTags={
 'Dry or rough skin':'dry','Cracked heels':'heels','Rough / bumpy skin':'rough','Body acne / bumps':'body-acne','Underarm odour':'underarm','Uneven body tone':'body-tone','Stretch marks':'stretch',
 'Occasional breakouts':'face-acne','Dry or sensitive skin':'face-dry','Uneven tone / marks':'face-tone','Fine lines':'fine-lines','Brow / lash appearance':'brows','Facial hair removal':'facial-hair','Facial puffiness':'puffiness',
 'Hair shedding':'shedding','Visible thinning':'thinning','Dandruff / flaky scalp':'dandruff','Dry or frizzy hair':'frizz',
 'Face protection':'face-sun','Body protection':'body-sun','Outdoor / active days':'face-sun','Sensitive-skin protection':'sensitive-sun',
 'Sleep routine':'sleep','Low energy':'energy','Nutrition support':'nutrition','Muscle recovery':'recovery','Bone / joint nutrition':'bones'
};
const plan={
 dry:['urea10','hydrating-wash'],heels:['heel20'],rough:['lactic-lotion'],'body-acne':['body-acne'],underarm:['underarm4'],'body-tone':['body-spf','niacinamide-lotion'],stretch:['stretch'],
 'face-dry':['face-moisturiser','face-spf'],'face-tone':['face-spf'],'fine-lines':['face-moisturiser','face-spf'],brows:['brow-lash'],'facial-hair':['razor'],puffiness:['ice'],
 frizz:['conditioner','shampoo'],shedding:['growth'],thinning:['growth'],dandruff:['zpto'],
 'face-sun':['face-spf'],'body-sun':['body-spf'],'sensitive-sun':['mineral-spf'],sleep:['magnesium'],energy:['multivitamin'],nutrition:['multivitamin'],recovery:['magnesium-lotion'],bones:['calcium']
};
function shortlist(a){
 const model=root.Bodywise||(typeof require==='function'?require('./model.js'):null);const r=model.route(a);
 const held=message=>({status:'held',message,products:[],alternatives:[],baseTotal:0});
 if(r.type==='age'||r.type==='urgent')return held('Care comes before shopping on this route.');
 if(a.context!=='None of these'||a.flags!=='None of these'||a.impact==='Severe / disruptive'||a.routine==='Something caused irritation'||a.suitability!=='No known allergies, irritation or active treatments')return held('Your health context or product suitability needs individual review before adding products.');
 if(['cycle','intimate'].includes(a.category))return held(a.category==='cycle'?'Start with a gynaecologist or appropriate clinician. These answers cannot confirm a hormonal cause. No verified current hormone-specific product has been matched.':'A clinician should assess these symptoms before a condition-specific product is chosen.');
 if(a.category==='face'&&(!a.skinType||['Sensitive / easily irritated','Not sure'].includes(a.skinType)))return held('Your skin type or sensitivity needs an individual check before we select products.');
 const tag=concernTags[a.concern];
 if(!tag||!model.categories[a.category]?.concerns.includes(a.concern))return held('No verified product match is available for these answers.');
 let families=[...(plan[tag]||[])];
 if(tag==='face-acne')families=[a.skinType==='Oily'?'face-wash2':a.skinType==='Combination'?'face-wash1':'face-moisturiser','face-spf'];
 if(a.concern==='Outdoor / active days')families.push('body-spf');
 const related=catalogue.products.filter(p=>p.tags.includes(tag)&&p.eligible);
 const allowed=p=>!(tag==='face-acne'&&((p.family==='face-wash1'&&a.skinType!=='Combination')||(p.family==='face-wash2'&&a.skinType!=='Oily')||p.kit))&&!(p.family==='growth-postpartum'||p.family==='biotin-postpartum');
 function choose(family,role){
  const options=catalogue.products.filter(p=>p.family===family&&p.eligible&&allowed(p));if(!options.length)return null;
  if(a.preference==='Keep it affordable')options.sort((x,y)=>x.price-y.price||x.id.localeCompare(y.id));
  const p=options[0];const needsReview=p.discussionOnly||r.type==='review'||(tag==='face-acne'&&a.impact!=='Mild / occasional');
  const variants=catalogue.products.filter(v=>v.family===family&&v.id!==p.id).map(v=>({...v}));
  return {...p,role:needsReview?'Discuss first':role,reason:role==='Optional'?'An optional companion for the concern you selected. Keep your existing product if it already suits you.':`You selected ${a.concern.toLowerCase()}. Bodywise lists this option for ${p.description.toLowerCase()}.`,variants};
 }
 let entries=families.map((f,i)=>choose(f,i?'Optional':'Start here')).filter(Boolean);
 if(!entries.length)return held('The matching products are unavailable or still need verification. Your care summary remains useful without a shopping list.');
 const discussion=entries[0].role==='Discuss first';if(discussion)entries=entries.map(p=>({...p,role:'Discuss first'}));
 const chosen=new Set(entries.map(p=>p.family));const otherFamilies=[...new Set(related.filter(allowed).map(p=>p.family))];
 const alternatives=otherFamilies.filter(f=>!chosen.has(f)).map(f=>choose(f,'Alternative')).filter(Boolean).map(p=>({...p,role:discussion||p.discussionOnly?'Discuss first':p.kit?'Alternative kit':'Alternative',reason:p.kit?'A kit that overlaps this concern. It replaces individual choices; do not add it on top of the same products.':`Another option listed for ${p.description.toLowerCase()}. Choose one approach rather than combining similar treatments.`}));
 return {status:discussion?'discussion':'recommended',message:discussion?'These catalogue options need a suitability discussion before use. They are not a prescription.':'Matched to your selected concern and suitability answers. Start small; alternatives replace similar products rather than adding more steps.',products:entries,alternatives,baseTotal:discussion?0:entries.filter(p=>p.role==='Start here').reduce((sum,p)=>sum+p.price,0),matchedListings:related.length};
}
const api={products,checked,shortlist};if(typeof module!=='undefined')module.exports=api;root.BodywiseProducts=api;
})(typeof window!=='undefined'?window:globalThis);
