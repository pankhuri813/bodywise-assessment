(function(root){
const categories={
 hair:{label:'Hair & scalp',short:'Hair',glyph:'〰',color:'#e8dfef',desc:'Shedding, thinning, flakes & dry hair',concerns:['Hair shedding','Visible thinning','Dandruff / flaky scalp','Dry or frizzy hair'],explain:'Your answers describe a hair or scalp concern. They cannot establish a hormone, nutrient or genetic cause.',habit:'Keep a simple, gentle hair-care routine and avoid adding several new treatments at once.',review:'Discuss persistent shedding or visible thinning with a dermatologist. A clinician can decide whether examination or tests are needed.',link:'https://bebodywise.com/shop/hair'},
 body:{label:'Body care',short:'Body',glyph:'◒',color:'#e0e9df',desc:'Bumps, dryness, odour & uneven tone',concerns:['Body acne / bumps','Dry or rough skin','Cracked heels','Rough / bumpy skin','Underarm odour','Uneven body tone','Stretch marks'],explain:'Your answers identify a body-care priority, not a confirmed skin diagnosis. Bumps, irritation and changes in tone can have different causes.',habit:'Start with gentle cleansing and moisturising. Introduce any new product one at a time.',review:'Painful, spreading, infected-looking or persistent changes need a clinician assessment.',link:'https://bebodywise.com/shop/body-care'},
 face:{label:'Face care',short:'Face',glyph:'◡',color:'#f1e2db',desc:'Breakouts, dryness, marks & fine lines',concerns:['Occasional breakouts','Dry or sensitive skin','Uneven tone / marks','Fine lines','Brow / lash appearance','Facial hair removal','Facial puffiness'],explain:'This summary reflects what you noticed. A questionnaire cannot distinguish all skin conditions or confirm their cause.',habit:'Keep the foundation simple: gentle cleanse, moisturise and suitable daily sun protection.',review:'Seek a dermatologist review for painful or scarring breakouts, severe irritation or persistent skin changes.',link:'https://bebodywise.com/shop/skin'},
 sun:{label:'Sun protection',short:'Sun',glyph:'☼',color:'#f6edcf',desc:'Everyday protection for face & body',concerns:['Face protection','Body protection','Outdoor / active days','Sensitive-skin protection'],explain:'Your answers help choose the format and routine you may find easier to use. They do not measure UV damage.',habit:'Combine shade and protective clothing with an appropriate broad-spectrum sunscreen; follow its label for use and reapplication.',review:'A changing mole, persistent lesion or severe sun reaction needs medical assessment.',link:'https://bebodywise.com/shop/sun-protection'},
 wellness:{label:'Health & fitness',short:'Wellness',glyph:'✳',color:'#e3e2f1',desc:'Sleep, energy, nutrition & recovery',concerns:['Sleep routine','Low energy','Nutrition support','Muscle recovery','Bone / joint nutrition'],explain:'Sleep, tiredness and recovery have many possible influences. These answers do not diagnose a deficiency or establish that supplements are needed.',habit:'Choose one manageable habit around sleep, balanced meals or activity. A product is optional.',review:'Persistent tiredness, disrupted sleep or unexplained symptoms should be discussed with a qualified clinician.',link:'https://bebodywise.com/shop/nutrition'},
 cycle:{label:'Periods & hormonal concerns',short:'Periods',glyph:'◔',color:'#eedfed',desc:'A private starting point for care',concerns:['Irregular periods','Period discomfort','Previously diagnosed PCOS','Symptoms I want to discuss'],explain:'Period patterns and related symptoms need context. This assessment cannot diagnose PCOS or another hormonal condition.',habit:'Keep a record of cycle dates and symptoms if comfortable, to help a clinician understand the pattern.',review:'A qualified clinician should review your symptoms before any condition-specific plan or supplement is suggested.',link:null},
 intimate:{label:'Intimate comfort',short:'Intimate care',glyph:'❋',color:'#eadfe5',desc:'Discomfort, chafing or questions',concerns:['Chafing / external discomfort','Urinary symptoms','Itching / irritation','I want private advice'],explain:'Intimate symptoms can have several causes. A quiz cannot identify an infection or select its treatment.',habit:'Avoid introducing new fragranced products while seeking advice. Do not use a routine-care product to treat suspected infection.',review:'Arrange appropriate medical advice for urinary symptoms, itching or persistent discomfort.',link:null}
};
const consultationUrl='https://bebodywise.com/schedule-appointment';
const selected=v=>Array.isArray(v)?v:typeof v==='string'&&v?[v]:[];
const has=(a,key,value)=>selected(a[key]).includes(value);
const productRestrictions=['Known ingredient allergy / active irritation','Using exfoliating acids, retinoids or prescribed treatments','Something caused irritation','Not sure / prefer not to say'];
const healthContexts=['Pregnant / trying to conceive','Breastfeeding / postpartum','Taking regular medicines / managing a condition','Prefer not to say'];
function normalise(a){
 const contexts=selected(a.context),details=selected(a.detail);
 const restriction=contexts.find(v=>productRestrictions.includes(v));
 let suitability=restriction||a.suitability||(Array.isArray(a.context)&&contexts.length?'No known allergies, irritation or active treatments':undefined);
 if(details.some(v=>['Active itching / irritation','Fragrance sensitivity','Scalp discomfort'].includes(v)))suitability='Known ingredient allergy / active irritation';
 return {...a,concern:selected(a.concern)[0],context:healthContexts.find(v=>contexts.includes(v))||(contexts.length?'None of these':undefined),flags:has(a,'flags','Urgent symptoms')?'Urgent symptoms':has(a,'flags','Not sure')?'Not sure':has(a,'flags','None of these')?'None of these':undefined,suitability,routine:a.routine||'No routine yet',preference:has(a,'preference','Speak to an expert')?'Speak to an expert':has(a,'preference','Keep it affordable')?'Keep it affordable':selected(a.preference)[0]};
}
function route(a){
 const n=normalise(a),concerns=selected(a.concern);
 if(a.age==='Under 18')return {type:'age',title:'A supported next step',reason:'This adult assessment is not designed for people under 18.'};
 if(n.flags==='Urgent symptoms')return {type:'urgent',title:'Get medical help promptly',reason:'You selected symptoms that should be assessed promptly. Do not delay medical help to complete this quiz or shop.'};
 if(healthContexts.includes(n.context)||n.flags==='Not sure'||a.impact==='Severe / disruptive'||['cycle','intimate'].includes(a.category)||n.suitability&&n.suitability!=='No known allergies, irritation or active treatments'||selected(a.detail).includes('Painful / deep spots'))return {type:'review',title:'Start with a clinician conversation',reason:'Your symptoms, health context or product suitability needs an individual review before a product-led routine.'};
 if(a.category==='face'&&['Sensitive / easily irritated','Not sure'].includes(a.skinType))return {type:'review',title:'Check what suits your skin first',reason:'Your skin sensitivity or uncertain skin type needs individual advice before choosing products.'};
 if(a.category==='hair'&&concerns.some(v=>v!=='Dry or frizzy hair'))return {type:'review',title:'Understand your hair concern first',reason:'Shedding, thinning and scalp symptoms need individual context before a treatment plan.'};
 if(a.category==='wellness'&&concerns.some(v=>v!=='Muscle recovery')||has(a,'preference','Speak to an expert')||n.routine==='Something caused irritation')return {type:'review',title:'A conversation before a plan',reason:'You asked for advice or described a concern that needs review before adding products or supplements.'};
 return {type:'routine',title:'A simpler routine starts here',reason:'Explore everyday care for the concerns you selected. This is a starting point, not a diagnosis or medical clearance.'};
}
function safetyHint(c){return c==='intimate'?'Any fever with urinary symptoms, blood in urine, back pain, severe pain, or symptoms worsening quickly?':c==='cycle'?'Any very heavy bleeding, fainting, severe pelvic pain, or possible pregnancy with pain or bleeding?':'Any rapidly worsening symptoms, severe pain, trouble breathing, facial swelling, or signs that you may need urgent medical help?';}
function questions(a){
 const multi=(id,group,title,hint,options,exclusive=[])=>({id,group,title,hint,options,multiple:true,exclusive});
 const q=[{id:'age',group:'About you',title:'Which age group are you in?',hint:'Choose one age group.',options:['Under 18','18–24','25–34','35–44','45+']}];
 if(a.age==='Under 18')return q;
 q.push({id:'category',group:'Your focus',title:'Which area would you like to focus on?',hint:'Choose one area. You can select several concerns within it.',options:Object.keys(categories)});
 q.push(multi('concern','Your concerns','What would you like help with?','Select all that apply. Your first selection sets the starting routine; other concerns inform the comparison options.',categories[a.category]?.concerns||[]));
 q.push(multi('flags','Your safety','Before we go further…',safetyHint(a.category),['None of these','Urgent symptoms','Not sure'],['None of these']));
 if(has(a,'flags','Urgent symptoms'))return q;
 q.push(multi('context','Your context','What should your care take into account?','Select all that apply. This combines life-stage and product-suitability checks in one question.',['None of these',...healthContexts.slice(0,3),'Known ingredient allergy / active irritation','Using exfoliating acids, retinoids or prescribed treatments','Something caused irritation','Prefer not to say'],['None of these','Prefer not to say']));
 const concerns=selected(a.concern);
 if(a.category==='face')q.push({id:'skinType',group:'Your skin',title:'How would you describe your facial skin?',hint:'Choose the closest match. This helps us avoid the wrong cleanser or active.',options:['Oily','Combination','Normal','Dry','Sensitive / easily irritated','Not sure']});
 const hairClinical=a.category==='hair'&&concerns.some(v=>v!=='Dry or frizzy hair');
 const symptoms=['wellness','cycle','intimate'].includes(a.category)||hairClinical;
 if(symptoms)q.push({id:'duration',group:'Your symptoms',title:'How long have you noticed this?',hint:'Choose one rough estimate for your main concern.',options:['Less than a month','1–3 months','More than 3 months','Not sure']});
 if(hairClinical||a.category==='wellness'||a.category==='face'&&concerns.some(v=>['Occasional breakouts','Dry or sensitive skin'].includes(v)))q.push({id:'impact',group:'Your symptoms',title:'How much is your main concern affecting you?',hint:'Choose one. This reflects your experience, not a clinical severity score.',options:['Mild / occasional','Moderate / recurring','Severe / disruptive']});
 if(a.category==='hair')q.push(multi('detail','Your hair & scalp',hairClinical?'What changes have you noticed?':'What is your hair struggling with?', 'Select all that apply.',hairClinical?['Diffuse shedding','Visible part / scalp changes','Patchy loss','Scalp discomfort','Not sure']:['Dry lengths','Frizz / tangles','Scalp discomfort','Not sure'],['Not sure']));
 if(a.category==='body')q.push(multi('detail','Your body care','What have you noticed in the affected area?','Select all that apply.',concerns.includes('Body acne / bumps')?['Small bumps','Red or inflamed spots','Painful / deep spots','Marks after spots','Active itching / irritation','Not sure']:concerns.includes('Underarm odour')?['Odour','Uneven underarm tone','Fragrance sensitivity','Not sure']:['Dryness / tightness','Rough texture / bumps','Cracks on heels','Active itching / irritation','Not sure'],['Not sure']));
 if(!['cycle','intimate'].includes(a.category))q.push(multi('preference','Your preferences','What matters in your next step?','Select all that apply.',['Keep it simple','Keep it affordable','Understand my options','Speak to an expert']));
 return q;
}
function validAnswer(q,value){const values=selected(value);return values.length>0&&values.every(v=>q.options.includes(v))&&(q.multiple||values.length===1)&&(!(q.exclusive||[]).some(v=>values.includes(v))||values.length===1);}
function selectAnswer(a,q,value){
 if(!q.options.includes(value))return a;
 const next={...a};
 if(q.id==='category'&&a.category!==value){for(const k of ['concern','skinType','duration','impact','detail'])delete next[k];}
 if(q.id==='age'&&value==='Under 18')return {age:value};
 if(!q.multiple){next[q.id]=value;return next;}
 const old=selected(a[q.id]);let values;
 if(old.includes(value))values=old.filter(v=>v!==value);
 else if((q.exclusive||[]).includes(value))values=[value];
 else values=[...old.filter(v=>!(q.exclusive||[]).includes(v)),value];
 next[q.id]=values;
 if(q.id==='concern'){for(const k of ['detail','duration','impact'])delete next[k];}
 return next;
}
const api={categories,questions,route,selected,has,normalise,validAnswer,selectAnswer,consultationUrl};if(typeof module!=='undefined')module.exports=api;root.Bodywise=api;
})(typeof window!=='undefined'?window:globalThis);
