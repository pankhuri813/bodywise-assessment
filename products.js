(function(root){
const checked='22 October 2026';
const imageBase='https://i.mscwlns.co/media/misc/pdp_rcl/';
function product(id,name,pack,price,slug,image,ingredients,description,caution,category){return {id,name,pack,price,url:'https://bebodywise.com/product/'+slug,image:imageBase+slug+'/'+image+'?tr=w-480%2Cc-at_max',ingredients,description,caution,category,checked,availability:'Listed for sale when checked; confirm stock on Bodywise'};}
const products={
 urea:product('urea','10% Urea Body Lotion','300 ml',549,'10-urea-lotion-300ml','1%20%282%29_35woe0.jpg','Urea · moisturising butters','Body moisturiser listed for mild to moderate dry skin.','Check the full ingredient list, including fragrance. Avoid irritated or broken skin; patch test first.','body'),
 bodyWash:product('bodyWash','1% Salicylic Acid Body Wash','250 ml',329,'1-salicylic-acid-body-wash','250ml%20-%20Hero_iihi7g.jpg','1% salicylic acid','Exfoliating body cleanser listed for body acne and bumps.','Avoid if you have a salicylate allergy or irritated skin. Check compatibility with other exfoliants.','body'),
 underarm:product('underarm','6% AHA BHA Underarm Roll On — Flora','75 ml',499,'6-aha-bha-underarm-roll-on-flora-75ml','IntroPage%20copy%202-1%20%281%29_cr8dco.jpg','AHA/BHA · fragranced formula','Underarm product listed for odour and pigmentation concerns.','Contains fragrance and exfoliating acids. Do not use on broken or irritated skin; check label guidance around hair removal.','body'),
 stretch:product('stretch','Anti-Stretch Mark Serum Roll On','50 ml',599,'anti-stretch-mark-roll-on','Image%201%20%281%29_8jarqn.png','Regeneryl · Striover','Cosmetic roll-on marketed for the appearance of stretch marks.','Results vary; it cannot guarantee removal. Pregnancy or postpartum use needs individual suitability review.','body'),
 moisturiser:product('moisturiser','1% Peptide & Ceramide Moisturizer','50 g',374,'1-peptide-ceramide-moisturizer','Product_Hero_4dxycu.jpg','Peptide · ceramide','Face moisturiser listed for barrier care and hydration.','Review the full ingredients and patch test. Active irritation or diagnosed skin conditions need individual advice.','face'),
 faceWash2:product('faceWash2','2% Salicylic Acid Face Wash','100 ml',232,'2-salicylic-acid-face-wash','Artboard%201_ihynt3.jpg','2% salicylic acid','Cleanser listed for mild occasional breakouts and oily skin.','Do not combine blindly with other active treatments. Check salicylate allergy and the full label.','face'),
 faceWash1:product('faceWash1','1% Salicylic Acid Face Wash (Foam-Based)','120 ml',239,'acne-control-wash','1_Product_Hero-1_5zd4hj.jpg','1% salicylic acid · 1% glycolic acid','Brand-listed cleanser option for occasional breakouts and combination skin.','The brand warns of dryness and advises against use with retinol products. Dry or sensitive skin needs a different starting point.','face'),
 faceSPF:product('faceSPF','Ultra Light Sunscreen SPF50+','50 ml',499,'ultra-light-sunscreen-spf50','Ultra%20Light%20Sunscreen%20SPF%2050%2B%20PDP_h5pyrr.jpg','SPF 50+ · PA++++','Face sunscreen listed for broad-spectrum sun protection.','Use and reapply according to its label. Protection also includes shade and clothing; no sunscreen gives complete protection.','sun'),
 bodySPF:product('bodySPF','De-Tan SPF 50+ Body Sunscreen Lotion','175 ml',549,'body-sunscreen-lotion-with-spf-50','Artboard%201%20%2822%29_jwaey6.jpg','SPF 50+ · niacinamide','Body sunscreen lotion for exposed body areas.','Follow label application/reapplication guidance. Do not treat changing pigmentation as a cosmetic concern without review.','sun'),
 mineralSPF:product('mineralSPF','Lightest Mineral Sunscreen SPF 50+','50 ml',449,'lightest-mineral-sunscreen-spf50','Ultra%20Light%20Sunscreen%20SPF%2050%2B%20PDPb_k5ycyw.jpg','Zinc oxide · titanium dioxide','Mineral face sunscreen; the brand lists it as fragrance-free.','Fragrance-free does not guarantee individual tolerance. Patch test; check full ingredients and reapplication directions.','sun'),
 shampoo:product('shampoo','Keratin Shampoo for Hair Fall','200 ml',449,'hair-fall-control-shampoo','IntroPage_lh0mnp.png','Keratin · biotin · caffeine','Shampoo listed for cleansing and dry/frizzy hair care.','The product name is not evidence that it treats the cause of hair loss. Persistent shedding needs review.','hair'),
 conditioner:product('conditioner','Keratin Conditioner','200 ml',399,'deep-moisturizing-conditioner','IntroPage%20copy%20%282%29_iehyls.jpg','Conditioning formula · argan oil · biotin','Conditioner listed for dry and frizzy hair lengths.','Follow the label for application and rinsing. Do not use a conditioner as treatment for scalp disease.','hair'),
 growthSerum:product('growthSerum','Advanced Hair Growth Serum','25 ml',569,'hair-growth-serum-roll-on','hf_20260918_061755_bc5dc8e4-1231-4d67-bd10-64f1f576f850%20%283%29%20%281%29_evasok.png','Rosemary · Redensyl · Anagain · Aminexil','Topical serum marketed by Bodywise for hair thinning.','Discuss suitability first. This quiz cannot determine the cause of thinning or establish that this serum will help.','hair'),
 dandruff:product('dandruff','Anti-Dandruff Serum','50 ml',349,'anti-dandruff-serum','IntroPage_3meqvq.jpg','Zinc pyrithione · tea tree oil','Scalp serum marketed for dandruff concerns.','Scalp symptoms need review; this is not an automatic treatment recommendation. Check fragrance and other ingredients.','hair'),
 magnesiumGummies:product('magnesiumGummies','5-in-1 Magnesium Gummies with Glycinate & Vitamin D3','60 gummies',999,'magnesium-glycinate-gummies-60n','Artboard%209%20%286%29_1gsrwk.jpg','Magnesium complex · vitamins B6, D3, B9','Supplement listed in Bodywise’s sleep and stress range.','Discussion only: medicines, kidney health, other supplements and dose need review. Sleep symptoms do not establish magnesium deficiency.','wellness'),
 multivitamin:product('multivitamin','Multivitamin Gummies','60 gummies',699,'multivitamin-gummies','Artboard%207%20%287%29_h77m78.jpg','Vitamins · minerals including iron','Multivitamin supplement listed in the nutrition range.','Discussion only: this quiz cannot diagnose deficiency. Check existing supplements, medicines and whether supplementation is needed.','wellness'),
 recoveryLotion:product('recoveryLotion','10% Magnesium Body Lotion','300 ml',499,'10-magnesium-lotion-300ml','Hero_emplwu.jpg','Magnesium chloride · lavender oil · butters','Body lotion marketed for massage and muscle comfort.','Not a treatment for unexplained pain or magnesium deficiency. Avoid irritation; persistent pain needs assessment.','wellness')
};
function shortlist(a){
 const r=root.Bodywise?root.Bodywise.route(a):(typeof require==='function'?require('./model.js').route(a):{type:'review'});
 const held=message=>({status:'held',message,products:[],baseTotal:0});
 if(r.type==='urgent'||r.type==='age')return held(r.type==='urgent'?'Medical help comes before shopping. No product recommendations are shown on this route.':'Adult product recommendations are not shown for this age group.');
 if(a.context!=='None of these'||a.flags!=='None of these'||a.impact==='Severe / disruptive'||a.routine==='Something caused irritation'||a.suitability!=='No known allergies, irritation or active treatments')return held('Your health context, product sensitivities or missing suitability information needs individual review. We have held product suggestions rather than assuming a match.');
 if(['cycle','intimate'].includes(a.category))return held('A product shortlist is not appropriate for these symptoms without a clinician assessment. No verified current product has been automatically matched.');
 if(a.category==='face'&&['Sensitive / easily irritated','Not sure'].includes(a.skinType))return held('Your skin type or sensitivity needs a more individual check before choosing active products.');
 let entries=[],discussion=r.type==='review';
 const add=(id,role,reason)=>entries.push({...products[id],role,reason});
 if(a.category==='body'){
  if(a.concern==='Dry or rough skin'){add('urea','Start here','You selected dry or rough body skin. This is the brand’s lower-strength urea body-lotion option for mild to moderate dryness.');add('bodySPF','Optional','For exposed body areas, sun protection can complement moisturising. Skip this if you already have a suitable body sunscreen.');}
  if(a.concern==='Body acne / bumps')add('bodyWash','Start here','You selected body acne or bumps. This is a rinse-off body cleanser, rather than an extra leave-on acid treatment.');
  if(a.concern==='Underarm odour')add('underarm','Start here','You selected underarm odour. This product is specifically listed for underarm odour care; it is not an antiperspirant.');
  if(a.concern==='Uneven body tone')add('bodySPF','Start here','You selected uneven body tone. Sun protection is a foundational step for exposed areas; it does not diagnose or remove pigmentation.');
  if(a.concern==='Stretch marks')add('stretch','Start here','You selected stretch marks. This is a cosmetic option marketed for their appearance, with no promise of removal.');
 }
 if(a.category==='face'){
  if(!a.skinType)return held('Please answer the skin-type question before we match face-care products.');
  if(a.concern==='Occasional breakouts'&&a.impact!=='Mild / occasional')discussion=true;
  if(a.concern==='Occasional breakouts'&&a.skinType==='Oily')add('faceWash2','Start here','You selected occasional breakouts and oily skin. Bodywise lists the 2% cleanser for this combination.');
  if(a.concern==='Occasional breakouts'&&a.skinType==='Combination')add('faceWash1','Start here','You selected occasional breakouts and combination/normal skin. The lower-strength cleanser is the closer catalogue match; confirm suitability on the product page.');
  if(a.concern==='Occasional breakouts'&&['Dry','Normal'].includes(a.skinType))add('moisturiser','Start here','You selected dry or normal skin with breakouts. We have prioritised moisture support over automatically adding an exfoliating cleanser.');
  if(a.concern==='Dry or sensitive skin'||a.concern==='Fine lines')add('moisturiser','Start here','Your concern includes dryness or fine lines. Start with a moisturising foundation rather than stacking several active serums.');
  if(a.concern==='Uneven tone / marks')add('faceSPF','Start here','You selected facial marks or uneven tone. Sun protection is a foundation for exposed facial skin, without promising to erase marks.');
  if(a.concern!=='Uneven tone / marks')add('faceSPF','Optional','A face sunscreen can complement this routine if you do not already use a suitable one.');
 }
 if(a.category==='sun'){
  if(a.concern==='Body protection')add('bodySPF','Start here','You asked for body protection, so the match is a body-lotion format rather than a face-only product.');
  else if(a.concern==='Sensitive-skin protection')add('mineralSPF','Start here','You asked for a sensitive-skin format. The brand lists this mineral sunscreen as fragrance-free; individual tolerance still needs checking.');
  else{add('faceSPF','Start here','You asked for face or outdoor protection. This face sunscreen is listed with SPF 50+ and PA++++.');if(a.concern==='Outdoor / active days')add('bodySPF','Optional','Consider body protection for exposed areas too. This is not a claim of sweat or water resistance.');}
 }
 if(a.category==='hair'){
  if(a.concern==='Dry or frizzy hair'){add('conditioner','Start here','You selected dry/frizzy hair. Conditioner focuses on the hair lengths rather than suggesting a growth treatment.');add('shampoo','Optional','A cleansing companion if your current shampoo does not suit you. Keep your existing shampoo if it already works.');}
  else if(a.concern==='Dandruff / flaky scalp'){discussion=true;add('dandruff','Discuss first','This is a relevant catalogue option for a clinician conversation about flakes. Your answers do not identify the cause of the scalp symptoms.');}
  else{discussion=true;add('growthSerum','Discuss first','This is a Bodywise catalogue option to discuss for thinning concerns. The assessment has not established the cause of your hair changes.');}
 }
 if(a.category==='wellness'){
  if(a.concern==='Muscle recovery')add('recoveryLotion','Start here','You selected muscle recovery. This topical massage-lotion option avoids assuming you need an oral supplement.');
  else{discussion=true;if(a.concern==='Sleep routine')add('magnesiumGummies','Discuss first','This is the brand’s sleep-range supplement. A clinician or dietitian should check whether it is needed and suitable.');else add('multivitamin','Discuss first','This is a nutrition-range option to discuss. Low energy or diet concerns alone do not show that you need vitamins or iron.');}
 }
 if(!entries.length)return held('No verified product match is available for these answers. Your care summary is still useful without a product.');
 if(discussion)entries=entries.map(p=>({...p,role:'Discuss first'}));
 return {status:discussion?'discussion':'recommended',message:discussion?'These are relevant catalogue options to discuss before use, not a prescription or a cleared treatment plan.':'A small product shortlist matched to your concern, context and preferences. Check the complete label before use.',products:entries,baseTotal:discussion?0:entries.filter(p=>p.role!=='Optional').reduce((s,p)=>s+p.price,0)};
}
const api={products,checked,shortlist};if(typeof module!=='undefined')module.exports=api;root.BodywiseProducts=api;
})(typeof window!=='undefined'?window:globalThis);
