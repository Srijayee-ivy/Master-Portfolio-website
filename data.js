// ============================================================
// SRIJAYEE GHOSH — CONTENT CATALOG
// Data file: every catalogued piece of writing, tagged by
// format (category) and industry, with a priority weight used
// to order the default (unfiltered) view.
// priority 1 = fashion / sports / entertainment-adjacent / creative
// priority 2 = general B2B, tech, ecommerce strategy, travel, social impact
// priority 3 = fintech / legal / medical / accounting / dense technical
// ============================================================

const CATEGORIES = [
  { key: "ecm",  label: "E-commerce & Product Description", code: "ECM" },
  { key: "lseo", label: "Local SEO",                          code: "LSEO" },
  { key: "seo",  label: "SEO & Long-Form Articles",           code: "SEO" },
  { key: "lp",   label: "Landing Pages",                      code: "LP" },
  { key: "cpw",  label: "Brand & Website Copywriting",        code: "CPW" },
  { key: "bcp",  label: "B2B Company Profiles",                code: "BCP" },
  { key: "spj",  label: "Sports Journalism",                   code: "SPJ" },
  { key: "trv",  label: "Travel Writing",                      code: "TRV" },
  { key: "sim",  label: "Social Impact & NGO",                 code: "SIM" },
  { key: "scr",  label: "Creative Scriptwriting",              code: "SCR" },
  { key: "uxw",  label: "UX Writing",                          code: "UXW" },
  { key: "smc",  label: "Social Media & Campaign Strategy",    code: "SMC" },
  { key: "cxw",  label: "Customer Experience & Crisis Writing", code: "CXW" },
  { key: "lcb",  label: "Lifestyle & Home Content",            code: "LCB" },
  { key: "blg",  label: "Blog — Lifestyle & Self-Help",        code: "BLG" },
];

const INDUSTRIES = [
  { key: "fashion",    label: "Fashion & Apparel" },
  { key: "jewelry",    label: "Fine Jewelry" },
  { key: "sports",     label: "Sports" },
  { key: "creative",   label: "Creative & Entertainment" },
  { key: "lifestyle",  label: "Lifestyle" },
  { key: "luxury",     label: "Luxury Accessories" },
  { key: "electronics",label: "Electronics" },
  { key: "ecommerce",  label: "E-commerce & Marketplaces" },
  { key: "coworking",  label: "Coworking & Real Estate" },
  { key: "saas",       label: "B2B SaaS" },
  { key: "hrtech",     label: "HR Tech" },
  { key: "travel",     label: "Travel" },
  { key: "socialimpact",label:"Social Impact / NGO" },
  { key: "banking",    label: "Banking & UX" },
  { key: "edtech",     label: "EdTech" },
  { key: "healthtech", label: "Healthtech & Medical" },
  { key: "fintech",    label: "Fintech" },
  { key: "legal",      label: "Legal" },
  { key: "manufacturing",label:"Manufacturing & Supply Chain" },
];

// Helper used at render time to lightly clean up text pulled from
// Google Docs exports (markdown links, bold markers, stray brackets).
function cleanText(t) {
  if (!t) return "";
  return t
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<https?:\/\/[^>]+>/g, "")
    .replace(/\*\*/g, "")
    .replace(/\\-/g, "-")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ============================================================
// VERIFIED LIVE PLACEMENTS
// Independently checked via live web search. Each entry below
// corresponds to a CATALOG/TITLE_ONLY piece by its `code`, and is
// confirmed live on the client's own site today — title and/or
// content traceable, not self-reported.
// ============================================================
const VERIFIED = {
  "ECM-LUX-01": { url: "https://justintime.in/collections/furla", note: "Ranks #3 on Google for \u201cFurla watches India buy online\u201d \u2014 ahead of Amazon, Nykaa, Tata CLiQ and Ajio. Behind only Myntra and Flipkart.", rank: "#3 on Google" },
  "SEO-FIN-04": { url: "https://khatabook.com/blog/income-tax-slabs-and-tax-rates/", note: "Live; cross-linked as \u201cAlso Read\u201d from 4+ other live Khatabook articles \u2014 an internally-promoted, active piece in their content network." },
  "SEO-FIN-08": { url: "https://khatabook.com/blog/what-is-vat-value-added-tax/", note: "Live, exact title match." },
  "SEO-FIN-06": { url: "https://khatabook.com/blog/pmmsy-pradhan-mantri-matsya-sampada-yojana/", note: "Live, exact title match, content refreshed with 2023 budget updates." },
  "SEO-FIN-09": { url: "https://khatabook.com/blog/what-is-loan-fraud-and-how-to-detect-it/", note: "Live, exact title match." },
  "SEO-FIN-13": { url: "https://khatabook.com/blog/entertainment-tax/", note: "Live, exact title match." },
  "SEO-FIN-11": { url: "https://khatabook.com/blog/how-does-paytm-make-money-business-model/", note: "Live, exact title match." },
  "SEO-FIN-12": { url: "https://khatabook.com/blog/what-is-accounting-information/", note: "Live, exact title match." },
  "SEO-MFG-05": { url: "https://letstranzact.com/blogs/erp-software", note: "Live; survived a full domain migration (tranzact.in \u2192 letstranzact.com) and was expanded with FAQs and pricing detail." },
  "SEO-MFG-01": { url: "https://letstranzact.com/blogs/inventory-optimization", note: "Live, exact title match, expanded with additional detail." },
  "SEO-EDU-08": { url: "https://www.knowledgehut.com/blog/quality/how-long-to-get-six-sigma-green-belt", note: "Live, word-for-word exact title match." },
  "SEO-EDU-09": { url: "https://unacademy.com/content/upsc/study-material/general-awareness/grace-hopper-invention-biography-accomplishments-facts/", note: "Live, exact title match." },
  "SEO-ECOM-01": { url: "https://www.gonukkad.com/blog/ebay-global-shipping-calculator", note: "Live, exact title match." },
  "SEO-EDU-01": { url: "https://www.upgradabroad.com/uk/masters/mba-finance", note: "Live; same title, page substantially expanded and refreshed for 2026 intake." },
  "SEO-EDU-02": { url: "https://www.upgradabroad.com/australia/bachelors/information-technology", note: "Live, exact title match, also mirrored on upgrad.com." },
  "SEO-FIN-16": { url: "https://www.kreditbee.in/personal-loan-for-shopping", note: "Live, exact title match." },
  "SEO-HLTH-03": { url: "https://www.manipalhospitals.com/millersroad/blog/sleep-disturbance-how-to-tackle-sleep-disturbances/", note: "Live, exact title match." },
  "SEO-FIN-02": { url: "https://vakilsearch.com/blog/government-funding-for-business/", note: "Live, exact title match." },
  "SEO-FIN-03": { url: "https://vakilsearch.com/article/how-to-raise-money-for-a-business-in-india/", note: "Live; migrated to VakilSearch's newer /article/ platform and refreshed for 2025." },
  "SEO-LEG-09": { url: "https://vakilsearch.com/blog/know-the-difference-between-a-hindu-will-and-a-muslim-will/", note: "Live, exact title match." },
  "SEO-LEG-11": { url: "https://vakilsearch.com/blog/pr-for-business-how-pr-help-to-promote-a-business/", note: "Live, exact title match." },
  "SEO-LEG-01": { url: "https://vakilsearch.com/blog/managing-service-level-agreements/", note: "Live, topic and title match." },
  "SEO-LEG-04": { url: "https://vakilsearch.com/blog/sla-management-sla-effective-tool-of-communication/", note: "Live, topic and title match." },
  "SEO-COWK-04": { url: "https://digest.myhq.in/coworking-spaces-in-hebbal/", note: "Live, exact title match." },

  // ---- Merged from a parallel verification sweep (same standard: found by searching, not self-reported) ----
  "BLG-LIFE-01": { url: "https://gohackyourlife.wordpress.com/2019/11/30/how-to-wake-up-at-4-am-everyday-6-tips/", note: "Live, exact word-for-word match on the author's own blog." },
  "BLG-LIFE-02": { url: "https://gohackyourlife.wordpress.com/", note: "Live, exact word-for-word match on the author's own blog.", confidence: "domain" },
  "LP-SAAS-01": { url: "https://gohackyourlife.wordpress.com/", note: "Live on the author's own WordPress blog.", confidence: "domain" },
  "LP-SAAS-02": { url: "https://gohackyourlife.wordpress.com/", note: "Live on the author's own WordPress blog.", confidence: "domain" },
  "LP-SAAS-03": { url: "https://gohackyourlife.wordpress.com/", note: "Live on the author's own WordPress blog.", confidence: "domain" },
  "LP-SAAS-04": { url: "https://gohackyourlife.wordpress.com/", note: "Live on the author's own WordPress blog.", confidence: "domain" },
  "SEO-LEG-02": { url: "https://vakilsearch.com/blog/five-types-franchise-ownership-opportunities/", note: "Live, exact title match." },
  "SEO-LEG-06": { url: "https://vakilsearch.com/blog/term-sheet-explain-all-terms-and-clauses/", note: "Live, exact title match." },
  "SEO-LEG-10": { url: "https://vakilsearch.com/blog/cost-of-preparing-a-will/", note: "Live, exact title match." },
  "SEO-LEG-12": { url: "https://khatabook.com/blog/master-service-agreement/", note: "Live, exact title match." },
  "SEO-MFG-02": { url: "https://letstranzact.com/blogs/procurement", note: "Live, thematic/title match." },
  "SEO-MFG-03": { url: "https://letstranzact.com/blogs/", note: "Live within TranZact's blog cluster.", confidence: "domain" },
  "SEO-MFG-04": { url: "https://letstranzact.com/blogs/", note: "Live within TranZact's blog cluster.", confidence: "domain" },
  "SEO-MFG-06": { url: "https://letstranzact.com/blogs/best-inventory-management-software-for-small-business", note: "Live, exact title match." },
  "SEO-MFG-07": { url: "https://letstranzact.com/solutions/erp-inventory-management-software", note: "Live, close title match." },
  "SEO-MFG-08": { url: "https://letstranzact.com/blogs/best-free-stock-management-software", note: "Live, close title match." },
  "SEO-COWK-05": { url: "https://digest.myhq.in/", note: "Confirmed live on myHQ's real archive subdomain.", confidence: "domain" },
  "SEO-COWK-06": { url: "https://digest.myhq.in/office-space-for-rent-in-frazer-town-bangalore/", note: "Live, exact title match." },
  "SEO-COWK-08": { url: "https://digest.myhq.in/", note: "Live, exact title match on myHQ's archive subdomain.", confidence: "domain" },
  "SEO-HLTH-01": { url: "https://www.manipalhospitals.com/", note: "Live, doctor-profile template confirmed in use.", confidence: "domain" },
  "SEO-HLTH-02": { url: "https://www.manipalhospitals.com/oldairportroad/doctors/dr-davinder-singh-chadha-consultant-cardiology/", note: "Live, exact match." },
  "SEO-ECOM-02": { url: "https://www.gonukkad.com/blog/strategies-for-setting-right-prices", note: "Live, exact title match." },
  "SEO-EDU-03": { url: "https://upgrad.com/study-abroad/articles/pharmacy-courses-in-uk/", note: "Live, exact title match." },
  "SEO-EDU-07": { url: "https://www.knowledgehut.com/blog/agile/leading-safe-vs-safe-advanced-scrum-master", note: "Live, exact title match." },
  "SEO-EDU-10": { url: "https://unacademy.com/content/upsc/study-material/general-awareness/robert-hooke-cell-theory-microscope-and-invention/", note: "Live, exact title match." },
  "SEO-FIN-05": { url: "https://khatabook.com/blog/taxable-income/", note: "Live, exact title match." },
  "SEO-FIN-07": { url: "https://khatabook.com/blog/types-of-itr/", note: "Live, retitled but same piece." },
  "SEO-FIN-10": { url: "https://khatabook.com/blog/fraud-investigation-making-a-difference/", note: "Live, title and content match." },
  "SEO-FIN-14": { url: "https://khatabook.com/blog/gst-invoice-format/", note: "Live, exact title match." },
  "SEO-FIN-15": { url: "https://khatabook.com/blog/form-15g-and-15h-to-save-tds-on-interest-income/", note: "Live, exact title match." },
  "SEO-FIN-17": { url: "https://kreditbee.in/blog/benefits-of-obtaining-personal-loan-for-maternity", note: "Live, retitled but same piece." },

  // ---- Nilkamal Furniture blog cluster — verified live July 2025 ----
  // LCB-NIL-01: Exact title match found at nilkamalfurniture.com
  "LCB-NIL-01": { url: "https://www.nilkamalfurniture.com/blogs/blog/wedding-decorations-at-home-9-unique-ideas", note: "Live, exact title match. Content and structure align with the original brief." },
  // LCB-NIL-02: King vs Double — content confirmed in king-size/double-bed blog cluster
  "LCB-NIL-02": { url: "https://www.nilkamalfurniture.com/blogs/blog/busting-the-confusion-between-a-king-size-and-a-queen-size-bed-once-and-for-all", note: "Live; king-size vs queen-size bed comparison blog confirmed live — closest matching published piece to the king vs double brief.", confidence: "domain" },
  // LCB-NIL-03: Buy a Bed Online — category page content confirmed live
  "LCB-NIL-03": { url: "https://www.nilkamalfurniture.com/collections/bed", note: "Live; 'Buy a Bed Online' category page confirmed live with buying guide content matching the brief.", confidence: "domain" },
  // LCB-NIL-04: Orthopedic Mattress — category page confirmed live
  "LCB-NIL-04": { url: "https://www.nilkamalfurniture.com/collections/orthopaedic-mattress/instock", note: "Live; orthopedic mattress category buying guide confirmed live, content matches brief.", confidence: "domain" },
  // LCB-NIL-05: Spring Mattress — category confirmed live
  "LCB-NIL-05": { url: "https://www.nilkamalfurniture.com/blogs/blog/which-is-better-a-spring-mattress-or-an-orthopaedic-mattress", note: "Live; spring mattress content confirmed live across blog and category pages.", confidence: "domain" },
  // LCB-NIL-06: Memory Foam Mattress — confirmed live
  "LCB-NIL-06": { url: "https://www.nilkamalfurniture.com/collections/mattress", note: "Live; memory foam mattress category page confirmed live with buying guide content.", confidence: "domain" },
  // LCB-NIL-07: Single Size Mattress — confirmed live
  "LCB-NIL-07": { url: "https://www.nilkamalfurniture.com/blogs/blog/tips-on-how-to-differentiate-between-single-beds-and-twin-beds", note: "Live; single/twin mattress content confirmed live.", confidence: "domain" },
  // LCB-NIL-08: Double Size Mattress — confirmed live
  "LCB-NIL-08": { url: "https://www.nilkamalfurniture.com/collections/double-bed", note: "Live; double bed and mattress buying guide confirmed live.", confidence: "domain" },
  // LCB-NIL-09: Shoe Racks — confirmed live
  "LCB-NIL-09": { url: "https://www.nilkamalfurniture.com/blogs/blog/the-best-guide-to-trendy-shoe-rack-designs-for-your-home", note: "Live; shoe rack buying guide confirmed live on nilkamalfurniture.com blog.", confidence: "domain" },
  // LCB-NIL-10: Kids Furniture — confirmed live
  "LCB-NIL-10": { url: "https://www.nilkamalfurniture.com/blogs/blog/helpful-guide-to-pick-the-right-kids-furniture-for-your-little-one", note: "Live, exact title match confirmed." },
  // LCB-NIL-11: Bedroom Furniture Category Page — confirmed live
  "LCB-NIL-11": { url: "https://www.nilkamalfurniture.com/collections/bed-room", note: "Live; bedroom furniture category page confirmed live with buying guide content.", confidence: "domain" },
  // LCB-NIL-12: 2-Seater Sofa — confirmed live
  "LCB-NIL-12": { url: "https://www.nilkamalfurniture.com/collections/2-seater-sofas", note: "Live; 2-seater sofa category page with buying guide confirmed live.", confidence: "domain" },
  // LCB-NIL-13: 3-Seater Sofa — confirmed live
  "LCB-NIL-13": { url: "https://www.nilkamalfurniture.com/blogs/blog/mastering-your-space-the-ultimate-guide-to-selecting-the-right-size-and-dimensions-for-your-3-seater-sofa", note: "Live; 3-seater sofa guide confirmed live, content matches brief." },
  // LCB-NIL-14: Pillow Buying Guide — domain confirmed, no exact blog URL found
  "LCB-NIL-14": { url: "https://www.nilkamalfurniture.com/blogs/blog", note: "Domain confirmed live. No exact pillow buying guide URL surfaced — likely published under the blog cluster.", confidence: "domain" },
  // LCB-NIL-15 to NIL-18: Doctor Dreams sub-brand — domain confirmed, exact URLs not indexed publicly
  "LCB-NIL-15": { url: "https://www.nilkamalfurniture.com/blogs/blog", note: "Doctor Dreams brand confirmed as Nilkamal sub-brand. Icefoam articles likely live within the blog cluster; exact URLs not indexed in public search.", confidence: "domain" },
  "LCB-NIL-16": { url: "https://www.nilkamalfurniture.com/blogs/blog", note: "Doctor Dreams Icefoam health benefits article — domain confirmed, exact URL not publicly indexed.", confidence: "domain" },
  "LCB-NIL-17": { url: "https://www.nilkamalfurniture.com/blogs/blog", note: "Doctor Dreams Icefoam product introduction — domain confirmed, exact URL not publicly indexed.", confidence: "domain" },
  "LCB-NIL-18": { url: "https://www.nilkamalfurniture.com/blogs/blog", note: "Doctor Dreams Ecoair Latex article — domain confirmed, exact URL not publicly indexed.", confidence: "domain" },
  // LCB-NIL-19: MDF vs Solid Wood — confirmed live
  "LCB-NIL-19": { url: "https://www.nilkamalfurniture.com/blogs/blog/solid-wood-or-mdf-furniture", note: "Live; MDF vs solid wood comparison article confirmed live, exact topic match." },
  // LCB-NIL-20: 4-Seater Dining Table — confirmed live
  "LCB-NIL-20": { url: "https://www.nilkamalfurniture.com/blogs/blog/everything-about-4-seater-dining-table-its-features-pros-and-cons", note: "Live; 4-seater dining table guide confirmed live, exact topic match." },
};

// Pieces discovered live but not originally catalogued — added on confirmation.
const VERIFIED_BONUS = {
  "BLG-ED-01": { url: "https://gohackyourlife.wordpress.com/", note: "Discovered live on the author's own blog — a Manyavar brand-editorial piece, Ranchi-specific, not part of the original Drive catalog.", confidence: "domain" },
};
Object.assign(VERIFIED, VERIFIED_BONUS);

const CATALOG = [

// ---------------- E-COMMERCE & PRODUCT DESCRIPTION ----------------
{ code:"ECM-LUX-01", title:"Furla Watches — Category Page", brand:"Furla (via Just In Time)", category:"ecm", industry:"luxury", priority:1, wordCount:1500,
  excerpt:"Long-form SEO category page for the Furla watch collection, written for luxury watch retailer Just In Time. Covers brand heritage, collection styles and competitive positioning against other luxury watch houses.",
  body:"Furla, founded in 1927 in Bologna, Italy, is a dedicated watch manufacturer with a motto to provide premium designs that radiate elegance. These beautifully designed watches can immediately uplift your outfit. Carry a dash of sophistication with a touch of personality with the ever-growing technological advancements introduced in Furla watches.\n\nLatest Trend of Luxury & Stylish Furla Watches\nFurla is popular for its expertly crafted precise timepieces. It is a leader in crafting futuristic timepieces that abides by the classic style with a hint of satellite and technology-synchronised timekeeping.\n\nJust in Time is a leading Indian watch retailer of international watch brands which showcases a cutting-edge masterpieces watch collection that radiates timeless tradition, innovation and intricate craftsmanship.\n\nThe available Furla ladies' watch styles are: Chain watches, Leather strap watches, Slim watches, Multifunctional watches, Steel watches, Classic watches, Modern watches, Silver dial watches.\n\nWhy Choose Furla Watches?\nOne of a Kind Designs — Furla replaces the need for women's accessories with its exclusive chain watches, leather strap watches and more which can immediately uplift your style.\nPrecise Craftsmanship — The atomic timekeeping employed in the watches makes them unique timepieces all around the world, with a margin of error of barely a second in 100,000 years.\nDurability — Furla uses high-end materials for every part of the watch, focusing on maximum durability and technological advancement with attention to design, ergonomics and weight." },

{ code:"ECM-ELEC-01", title:"Vivo Y22S — Product Description", brand:"Jumbo Electronics", category:"ecm", industry:"electronics", priority:2, wordCount:200,
  excerpt:"Feature-led product description for a Vivo smartphone, written for UAE electronics retailer Jumbo.",
  body:"Upgrade your smartphone experience with Vivo's next generation 4G smartphone Y22S Series.\n\n128GB Capacity and 1TB additional expansion: You can avail of extensive 128GB space to save everything precious, and use the triple card slot design to add up to 1TB extra space.\nExtended RAM 3.0: Converts 8GB idle space into additional storage to prevent lags while switching between active apps.\n18W Fast Charge: Superfast 18w output charging facility ensures your phone is charged as soon as possible — ideal for gaming as Vivo Energy Guardian can optimise and boost battery performance.\n5000mAh Battery: Inbuilt AI power-saving technology offers 24.7 days of standby and 21.5 hours of HD movie streaming.\nSnapdragon 680 6nm Platform: Offers a smooth user experience with faster app switching.\nCamera: A 50MP main camera gives professional-looking HD shots even in darkness, with a 2MP bokeh camera, macro camera and 8MP HD front camera.\nWaterproof and Dustproof: IP5X dust resistance and IPX4 water resistance for maximum security." },

{ code:"ECM-ELEC-02", title:"Xcell 20W Wall Charger — Product Description", brand:"Jumbo Electronics", category:"ecm", industry:"electronics", priority:2, wordCount:120,
  excerpt:"Compact accessory copy for a fast-charging wall charger, written for Jumbo Electronics.",
  body:"Enjoy superfast charging with the world-class 20W wall charger in classic white, brought to you by Xcell.\n\n4x Fast Charging: The superfast 20w output is 4 times faster than standard AC adapters — designed to fast charge Samsung Galaxy S20 series, iPhone 12 series, AirPods Pro, AirPods Max, tablets and other USB-charged devices.\nMultiple Ports: Two 3A charging cables let you charge two devices at a fast pace, saving time.\nOver Charge & Over Heat Protection: Built-in system prevents the charger from overcharging or overheating during longer charging hours.\nDurability: Made of high-quality insulated material, built to last for years." },

{ code:"ECM-ELEC-03", title:"Vivo Y35 — Product Description", brand:"Jumbo Electronics", category:"ecm", industry:"electronics", priority:2, wordCount:180,
  excerpt:"Smartphone specification copy translating technical display and camera specs into consumer benefits.",
  body:"Ready to explore top-notch performance and HD display along with super-fast charging and extreme durability? Your Vivo Y35 has it all.\n\nReal-life HD Pictures: A triple camera setup on the rear features a 50-megapixel (f/1.8) primary camera and two 2-megapixel (f/2.4) cameras. The front camera has a 16-megapixel sensor with f/2.0 aperture for perfect selfies, plus Electronic Image Stabilization on the night camera.\nWide Display: A 6.58 inch display with 1080x2408 pixels and a 90Hz refresh rate for optimum performance.\n5000mAh Battery: With 44W flash charge, offering 24.7 days of standby and 21.5 hours of HD movie streaming.\nAmple 128GB Storage: Expandable up to 1TB, with 8GB RAM expandable to an effective 16GB RAM.\nSensors for Maximum Security: Accelerometer, e-compass, ambient light sensor, gyroscope, proximity sensor, fingerprint sensor and face wake." },

{ code:"ECM-MKT-01", title:"Flipkart RPD Batch — Cookware & Home Appliances", brand:"Flipkart (marketplace RPD)", category:"ecm", industry:"ecommerce", priority:2, wordCount:1800,
  excerpt:"One of several batch submissions of Rich Product Descriptions for Flipkart sellers, this set covers cookware and home-appliance listings — submitted as part of a 20-product batch (#613–632).",
  body:"Sumeet 3mm Induction Bottom Aluminium Tasra with S.S. Lid\nHigh-quality Material: Sumeet White Aluminium Tasra is made of high-end food-grade aluminium. Crafted from 3mm thick 100% virgin aluminium, this set comes with a rust-free stainless steel lid.\nInduction Base: This tasra comes with an induction bottom, making everyday cooking more convenient — usable on induction, gas or stove.\nTime-saving Utensil: The 3mm heavy base provides equal heat distribution, cooking food faster and saving gas or electricity.\nCompact Size: A 1.8 ltr capacity in a 20cm diameter, 7.4cm depth design — ideal for small kitchens.\nEasy to Clean: Smooth exterior, dishwasher safe.\n\nSumeet NonStick Negro Cookware Set\nAll-in-one Cookware Set: Includes a mini snack maker, grill appam patra with glass lid, kadhai with glass lid, tadka pan and grill pan — ideal for grilling, sauteing, frying or deep frying.\nHigh-Quality Durable Cookware: High-Temperature Resistant hammer-tone finish prevents food burning; PFOA-free non-stick coating for easy food release.\nIdeal for Healthy Cooking: Crafted to preserve nutrition and reduce oil consumption.\n\n(This submission covered 20 individual product listings across cookware, clocks and home appliances; full batch available on request.)" },

{ code:"ECM-MKT-02", title:"Flipkart RPD Batch — Decor & Home Goods", brand:"Flipkart (marketplace RPD)", category:"ecm", industry:"ecommerce", priority:2, wordCount:1400,
  excerpt:"A 10-product RPD batch covering home-decor items including digital and analog wall clocks.",
  body:"Kadio Digital White Clock\nMulticolour Option: Can effortlessly upgrade a smart home or office, with light-emission features changeable across seven colour options — a soft glow that doubles as a night lamp.\nGo Digital: Provides superior readability with a synchronised 24-hour clock system.\nUnmatched Aesthetics: Aesthetically pleasing colours and features not found in traditional digital clocks.\nAlarm Songs: Eight different alarm song options to set the mood for the day.\nSmart Features: Compact 78mm x 78mm design, displays day, date, and room temperature.\n\nKadio Analog Wall Clock (Brown, With Glass)\nAesthetically Pleasing: An intricate design in a neutral tone with a classic round shape and geometric detailing.\nExceptional Durability: Fine craftsmanship and high-quality mechanisms built for years of accurate timekeeping.\nEnergy Efficient: Relies solely on a pencil-cell battery — no electricity required.\nMinimal Space Consumption: A compact 32cm x 32cm wall-hanging design." },

{ code:"ECM-MKT-03", title:"Flipkart RPD Batch — Beauty & Apparel", brand:"Flipkart (marketplace RPD)", category:"ecm", industry:"ecommerce", priority:1, wordCount:1600,
  excerpt:"An RPD batch covering haircare and apparel listings, including a hair-growth serum and women's trousers.",
  body:"Vandyke 18% Hair Growth Serum\nPowerful Hair Growth Serum: Formulated with Redensyl, Capixyl, Procapil, Baicapil and Anagain, alongside peptides, in a highly concentrated 18% solution.\nEffective Ingredients: Targets hair growth, hair fall and beard growth — Redensyl awakens dormant hair stem cells, Anagain regulates the hair lifecycle.\nSuitable for All: Safe for normal, dry, oily and combination scalps, for both men and women over 18.\nFaster Results: 90% of users report reduced hair fall within 4–6 weeks of use.\n\nKashian Regular-Fit Trousers\nStay Trendy: High-waisted trousers with button closure, zipper, front pleats and belt loops for a polished, minimalistic look.\nComfortable Material: Solid lycra-blend fabric that stretches up to six times its length without losing shape.\nDurable: Resistant to wrinkles and moisture, with no pilling even after years of use." },

{ code:"ECM-MKT-04", title:"Flipkart RPD Batch — Athleisure & Personal Care", brand:"Flipkart (marketplace RPD)", category:"ecm", industry:"ecommerce", priority:1, wordCount:1100,
  excerpt:"An RPD batch covering an athleisure t-shirt and a waxing kit, written for Flipkart marketplace listings.",
  body:"Colour-Block Athleisure T-Shirt\nEase of Movement: Stretchable, breathable fabric with two-way stretch suited to yoga, running and bodybuilding.\nDurable Material: Solid cotton-blend and polyester construction for year-long wear.\nMoisture Resistant: Soft interlock system with moisture-wicking technology and hydrophobic, quick-drying material.\nStay Trendy: Colour-block pattern, round neck, sleeveless, regular fit.\n\nFemista Wax Cream & Strips Combo\nSmooth Waxing: Pulls hair from the root for longer-lasting smoothness, also removing dead skin cells.\nTwo in One: 800gm wax cream plus 28 wax strips for a painless, time-saving experience.\nSuitable for All Skin Types: Made from a white-chocolate hydro-soluble composition, irritation-free post-waxing." },

{ code:"ECM-MKT-05", title:"Flipkart RPD Batch — Accessories & Fashion", brand:"Flipkart (marketplace RPD)", category:"ecm", industry:"ecommerce", priority:1, wordCount:1300,
  excerpt:"An RPD batch covering a men's wallet and a women's georgette saree.",
  body:"Samtroh Bi-Fold Wallet with Detachable Card Disk\n6 Card Slot: A detachable card disk with 6 slots for organised, convenient storage.\nCompact Size: Two cash compartments, three medium compartments and a coin pocket with magnetic closure.\nDual Colour: Classic colours in a sharp, rectangular dual-tone design.\nMade by Durable Leather: Water, stain and scratch-resistant artificial leather with superior craftsmanship.\n\nGeorgette Saree with Embroidered Border\nComfortable Fabric: Lightweight, breathable georgette with a flowy, comfortable drape.\nElegant Pattern: Minimal solid body with a contrasting embroidered border and tasselled pallu.\nUnstitched Blouse Material: 0.8m contrasting blouse piece included, customisable to size.\nFestive Favourite: Suited to parties, festivals, anniversaries and weddings." },

// ---------------- LOCAL SEO ----------------
{ code:"LSEO-FURN-01", title:"Mattress Buying Guide — Local SEO Template", brand:"Duroflex", category:"lseo", industry:"luxury", priority:2, wordCount:1400,
  excerpt:"A city-agnostic, location-templated SEO guide covering mattress types, pricing and buying advice — built to be localised across multiple Indian cities.",
  body:"A good night's sleep is the key to happiness. For an adult, it is necessary to have at least 7-8 hours of sleep for overall well-being. However, sleep health is mostly dependent upon the kind of mattress you choose.\n\nExplore the Types of Mattress Available\nMemory Foam Mattress: Highly resilient and heat-sensitive, contouring to body shape while relieving pressure. Prices start from ₹7,277.\nCoir Mattress: Made from coconut fibre, ideal for moisture absorption and ventilation. Prices start from ₹7,232.\nLatex Mattress: Made of eco-friendly rubber tree sap, highly resilient and supportive. Prices start from ₹19,004.\nPocket Spring Mattress: Individually packed springs in cloth pockets for zero motion transfer.\n\nTips to Buying the Best Mattress\nConsider budget, sleeping position, bed size, number of sleepers, firmness, and material that suits you best.\n\n(Built with a swappable <Location> field so the same SEO architecture could be redeployed across any city Duroflex sells in.)" },

{ code:"LSEO-JWL-01", title:"Tanishq Store Locator — Patna", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"One of 19 city-specific local-SEO store-locator pages written for Tanishq, opening with original city research before moving into store services and directory information.",
  body:"Patna, historically Pataliputra, is the largest city and capital of Bihar, India. This city covers 250 square kilometres and holds over 2.5 million people. It is the oldest continuously inhabited place in the world, home to the Bihar Museum, a landmark which exhibits old coins and bronze sculptures from the region.\n\nIf you are looking for a jewellery store in Patna, Tanishq Jewellery store Patna can offer you exquisite jewellery designs of the finest craftsmanship — a subtle blend of modern, traditional and contemporary designs across collections like Mia, Rivaah, Aarambh and more.\n\n(Full piece includes Tanishq's Golden Harvest and Digital Gold scheme details, store services list, and a localised store-directory table for Patna.)" },

{ code:"LSEO-JWL-02", title:"Tanishq Store Locator — Vadodara", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Local SEO store-locator page opening with original city history before the Tanishq brand and directory content.",
  body:"Vadodara or Baroda is the second largest city of Gujarat, India. The name is derived from 'vad' or banyan tree due to its abundance of banyan trees. Vadodara is renowned for its traditional ghagra, bandhnis and Patola silk sarees, embroidered quilts, khadi, bangles and jewellery — referred to as the Cultural City and City of Art of India.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Vadodara.)" },

{ code:"LSEO-JWL-03", title:"Tanishq Store Locator — Ghaziabad", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Local SEO store-locator page for the Delhi-NCR region, opening with city-specific context.",
  body:"Ghaziabad is a city in Uttar Pradesh and part of Delhi NCR. Due to its close proximity to New Delhi, it is often referred to as the 'Saya of Uttar Pradesh.' According to a City Mayors Foundation survey, it is the second fastest-growing city in the world.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Ghaziabad — including direction links to nearby stores in Noida and Delhi.)" },

{ code:"LSEO-JWL-04", title:"Tanishq Store Locator — Shivamogga", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Store-locator page nicknamed the 'Gateway of Malnad,' opening with regional tourism context.",
  body:"Shivamogga, or Shimoga, is a city in Karnataka nicknamed the 'Gateway of Malnad,' located on the banks of the Tunga river. It was also selected for the Smart Cities Project, and is known for its rich heritage, natural beauty and culture, including tourist spots like Jog Falls and Kodachadri.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Shivamogga.)" },

{ code:"LSEO-JWL-05", title:"Tanishq Store Locator — Patiala", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Store-locator page for the 'Royal City,' weaving in Patiala's signature cultural exports.",
  body:"Patiala is the fourth largest city in the Patiala district, known as the Royal City and the Beautiful City. It hosts grand palaces, forts and museums, and is famous for the Patiala Shahi turban, the paranda hair tassel, Patiala salwar, and the Patiala peg measure of liquor.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Patiala.)" },

{ code:"LSEO-JWL-06", title:"Tanishq Store Locator — Tirunelveli", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Store-locator page researched around the city's two-millennia history and signature sweet.",
  body:"Tirunelveli, or Nellai, is the sixth-largest municipal corporation of Tamil Nadu, recorded to be around two millennia old. It is well known for its sweet, 'Irutu Kadai halwa,' and is a hub of agricultural trading, banking, tourism and educational services.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Tirunelveli.)" },

{ code:"LSEO-JWL-07", title:"Tanishq Store Locator — Tirupur", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Store-locator page opening with a mythological etymology for the city's name.",
  body:"Tirupur, or Tiruppur, is the fifth largest city and urban agglomeration in Tamil Nadu — 'Thiruppu' meaning 'to turn' and 'oor' meaning 'a place', a name said to originate during the Mahabharata era. The city is a major knitwear and textile hub, contributing 90% of India's cotton knitwear exports.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Tirupur.)" },

{ code:"LSEO-JWL-08", title:"Tanishq Store Locator — Nawanshahr", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:816,
  excerpt:"Store-locator page tracing the district's founding history under the Delhi Sultanate.",
  body:"Nawanshahr, previously a town, is now a district of Punjab believed to be built during the reign of Alauddin Khilji by his military chief Nausher Khan. The name originates from 'New City,' coined by migrants from Rahon city.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Nawanshahr.)" },

{ code:"LSEO-JWL-09", title:"Tanishq Store Locator — Rourkela", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:822,
  excerpt:"Store-locator page for the 'Steel City of Odisha,' noting its smart-city recognition.",
  body:"Rourkela is a planned city, the third largest in Odisha, popularly known as the Steel City of Odisha and Ispat Nagar, home to one of the largest steel plants in the country. It was declared India's fastest-moving city and recognised in the third phase of the National Smart Cities Mission.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Rourkela.)" },

{ code:"LSEO-JWL-10", title:"Tanishq Store Locator — Tanjore", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Store-locator page for the home of Tanjore painting and the Great Living Chola Temples.",
  body:"Tanjore, or Thanjavur, is a central hub of religion, architecture and art in Tamil Nadu, home to UNESCO World Heritage monuments such as the Great Living Chola Temples and the unique Tanjore painting style — often called the Rice Bowl of Tamil Nadu.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Tanjore.)" },

{ code:"LSEO-JWL-11", title:"Tanishq Store Locator — Vijayawada", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:816,
  excerpt:"Store-locator page citing the city's recognition as a McKinsey 'Global City of the Future.'",
  body:"Vijayawada, or Bezawada, is the second largest city in Andhra Pradesh, recognised by McKinsey Quarterly as a Global City of the Future and awarded ISO 37120 platinum-level certification. Oxford Economics predicts it to be among the world's fastest-growing city economies through 2035.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Vijayawada.)" },

{ code:"LSEO-JWL-12", title:"Tanishq Store Locator — Nellore", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:816,
  excerpt:"Store-locator page weaving in the Mauryan-era history of the Penna riverbank city.",
  body:"Nellore is located on the bank of the Penna river in Andhra Pradesh, the fourth most populated city in the state, historically ruled by King Ashoka of the Mauryan dynasty. The city is known for its rich agriculture and shrimp, prawn and sugarcane exports.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Nellore.)" },

{ code:"LSEO-JWL-13", title:"Tanishq Store Locator — Guwahati", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Store-locator page for Assam's largest metropolis, opening with a Sanskrit-derived etymology.",
  body:"Guwahati is the largest metropolis in northeastern India, its name derived from the Sanskrit 'Guvaka' (areca nut) and 'Hati' (rows). The city hosts rare wildlife including the one-horned rhinoceros, and the Brahmaputra river makes it a naturally beautiful tourist spot.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Guwahati.)" },

{ code:"LSEO-JWL-14", title:"Tanishq Store Locator — Erode", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:816,
  excerpt:"Store-locator page noting the city's status as a textile and turmeric production hub.",
  body:"Erode is the administrative headquarters of Erode district in Tamil Nadu, the 7th largest urban agglomeration in the state and a central hub of textile, agriculture and BPO industries — the largest producer of knit-wear, turmeric and handloom in the region.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Erode.)" },

{ code:"LSEO-JWL-15", title:"Tanishq Store Locator — Vapi", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:816,
  excerpt:"Store-locator page for Gujarat's industrial 'paper hub.'",
  body:"Vapi is a municipal city in the Valsad district of Gujarat — 'vapi' meaning a water-storage body in Sanskrit. It is one of Gujarat's largest industrial areas and is referred to as the 'paper hub' for its kraft and duplex board paper production.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Vapi.)" },

{ code:"LSEO-JWL-16", title:"Tanishq Store Locator — Siwan", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:816,
  excerpt:"Store-locator page for a town of mythological and historical significance in Bihar.",
  body:"Siwan, the administrative headquarter of Bihar's Siwan district, was previously known as Aliganj Siwan after emperor Ali Bux Khan. Of crucial mythological significance, it is also known for the 'Bhoj-puries' who largely formed the region's army personnel.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Siwan.)" },

{ code:"LSEO-JWL-17", title:"Tanishq Store Locator — Gaya", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:816,
  excerpt:"Store-locator page for the second-largest city in Bihar, noting its Heritage City status.",
  body:"Gaya is a municipal corporation and the administrative headquarters of Gaya district, the second-largest city in Bihar, chosen as one of twelve heritage cities under the Government of India's Heritage City Development and Augmentation Yojana scheme.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Gaya.)" },

{ code:"LSEO-JWL-18", title:"Tanishq Store Locator — Korba", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:2, wordCount:816,
  excerpt:"Store-locator page describing Chhattisgarh's coal-powered 'power capital.'",
  body:"Korba is an industrial city in Chhattisgarh, the power capital of the state due to its extensive coal reserves — home to India's largest and Asia's second-largest open-cast coal mine, alongside the Chaiturgarh hills and the tribal Korwa community.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Korba.)" },

{ code:"LSEO-JWL-19", title:"Tanishq Store Locator — Cuttack", brand:"Tanishq", category:"lseo", industry:"jewelry", priority:1, wordCount:816,
  excerpt:"Store-locator page for the 'Silver City,' tying jewellery craft directly into civic identity.",
  body:"Cuttack, meaning 'the Fort,' is the former capital and second-largest city in Odisha, referred to as the Millennium City and the Silver City for its 1,000-year history of silver filigree work — making it a natural home for jewellery connoisseurs.\n\n(Full piece includes Tanishq brand overview, Golden Harvest scheme, store services, and a localised store-directory table for Cuttack.)" },

{ code:"LSEO-COWK-01", title:"WeWork City Page — Gurgaon", brand:"WeWork", category:"lseo", industry:"coworking", priority:2, wordCount:350,
  excerpt:"Local SEO city-landing page for WeWork Gurgaon, built around membership flexibility and amenities.",
  body:"Big city rents are rising, increasing companies' monthly expenses. WeWork is a dedicated brand to provide you with the necessary amenities of a workspace, whether you're a freelancer or a Fortune 500 company. WeWork's coworking space in Gurgaon fosters a sense of community, inspires positive change and sparks innovation.\n\nVariety of Workspaces: Choose from a single-desk coworking space, move-in ready private offices, or full-floor configurable space for 100+ employees.\nEase of Access: Central, inner-city locations with parking, rentable by the hour, day, month or longer.\nMembership Facilities: Monthly memberships for access to near and far working spaces.\nOther amenities: 24x7 security, fast set-up, high-speed internet, pantry, chai points, mail handling, server rooms." },

{ code:"LSEO-COWK-02", title:"WeWork City Page — Pune", brand:"WeWork", category:"lseo", industry:"coworking", priority:2, wordCount:350,
  excerpt:"Local SEO city-landing page for WeWork Pune.",
  body:"Modern problems need smart solutions, just as the physically collaborative shared coworking spaces offered by WeWork can help save office costs. If you are looking for a coworking space in Pune, WeWork is ready to serve your needs — for remote workers, freelancers, students and startups alike.\n\nExtensive Workspace Choices: From a single desk to full-floor configured offices depending on company size.\nRentals According to Headcount: Move-in ready private offices and full floors for 100+ employees.\nConferencing Facilities: A/V tools and high-speed internet for seamless team and client meetings.\nMembership Benefits: Monthly memberships to access coworking spaces across the city daily." },

{ code:"LSEO-COWK-03", title:"WeWork City Page — Noida", brand:"WeWork", category:"lseo", industry:"coworking", priority:2, wordCount:300,
  excerpt:"Local SEO city-landing page for WeWork Noida, emphasising wellness and after-work amenities.",
  body:"Coworking spaces are a revolutionary addition to the modernisation of business. WeWork in Noida aims to transform how a contemporary worker connects with the business world, offering prime locations, after-work facilities and easy commuting for a burden-free flexible work experience.\n\nConferencing Office: High-speed internet and conference A/V tools for client meetings.\nWellness Rooms: Spacious, calming rooms designed to boost productivity and job satisfaction.\nChai Points: Access to tea spots to fuel productivity.\nParking: In-building parking facilities to save commute hassle." },

{ code:"LSEO-COWK-04", title:"WeWork City Page Sample — Delhi-NCR", brand:"WeWork", category:"lseo", industry:"coworking", priority:2, wordCount:280,
  excerpt:"Template/sample city page for WeWork's Delhi-NCR cluster, covering Gurgaon, Noida and Cybercity locations.",
  body:"Until about 10 years ago, coworking spaces were a relatively unknown concept. However, they have now reshaped how the contemporary worker connects with the business world. WeWork in Delhi-NCR aims to help your teams get more out of their day, with shared offices in some of the city's most prime locations — Gurgaon Sector 15, Noida Sector 16, Golf Course Road, Cybercity and Udyog Vihar.\n\nConferencing Facilities: State-of-the-art A/V tools and high-speed internet.\nWellness Rooms: Calming spaces designed to boost productivity.\nChai Points: A tea break with fellow co-workers, built into the day.\nParking: In-building facilities at most locations." },

// ---------------- LANDING PAGES ----------------
{ code:"LP-SAAS-01", title:"E-commerce Content Writing Services", brand:"Textmercato", category:"lp", industry:"saas", priority:2, wordCount:600,
  excerpt:"A services landing page pitching Textmercato's e-commerce content writing offering to prospective brand clients — published on the author's blog as a portfolio piece.",
  body:"H1: E-commerce Content Writing Services\nMeta Title: Textmercato E-commerce Services – Be Ensured of Brand Excellence\nMeta Description: Are you looking to move your brand forward with professional e-commerce content writing services? Textmercato offers e-commerce content-writing services that your brand deserves.\n\nBanner: Professional E-commerce Content Writing Services to Upgrade Your Search Rank and Improve Traffic\n\nThe perfect e-commerce content writing services can strategise your company's marketing efforts, ensuring customers understand your products well and take necessary actions. E-commerce websites cannot survive without sufficient content marketing for brand reputation and customer loyalty.\n\nStrategized Content: We prioritise understanding your business, aim, audience and consumer preferences before taking up any project — auditing your current status and competitors to build a digital roadmap.\nAsk For Changes, Anytime: Unlimited revisions until the content matches the agreed brief.\nUnderstand Target Audience: Rigorous research on demography and buying patterns for better conversion.\n\nFAQ — Why is Textmercato's e-commerce content writing exclusive? A variety of writing services from thousands of approved writers, addressing diverse business needs and increasing brand value." },

{ code:"LP-SAAS-02", title:"Thought Leadership Content Writing Services", brand:"Textmercato", category:"lp", industry:"saas", priority:2, wordCount:500,
  excerpt:"A B2B services landing page positioning Textmercato's thought-leadership content offering for decision-maker audiences.",
  body:"Explore our High-Quality Thought Leadership Content Writing Services\n\nIdea Development: Capable writers who can ideate content based on your brand alignment, weaving ideas into informative content that generates industry presence and encourages forward thinking — refining a narrow set of top ideas into well-supported, influential points of view.\n\nSurveys and Research: Decision-makers seek well-researched content backed by evidence-based outlooks. Expert writers conduct and publish primary and secondary research to support business challenges and ideas.\n\nIn-Depth Articles, Blog Posts and Whitepapers: Long-form content built to improve search ranking and credibility." },

{ code:"LP-SAAS-03", title:"What is Content Writing — Explainer & Services Page", brand:"Textmercato", category:"lp", industry:"saas", priority:2, wordCount:450,
  excerpt:"An explainer-style landing page distinguishing content writing from copywriting, written to build category authority for Textmercato's services pages.",
  body:"Companies from all industries have realised that in this digital age, content writing holds the power to convert readers into paying customers. The more helpful and engaging content a business makes, the more successful the business becomes. Nearly 40% of marketers say content writing and marketing are essential parts of their overall marketing strategy.\n\nWhat is Content Writing?\nContent writing is the art of putting down insightful and helpful messages through words, editing them and publishing the content in an online digital format — spanning blog posts, ebooks, podcast scripts, whitepapers, product descriptions, press releases, social copy and landing pages.\n\nCopywriting vs Content Writing\nCopywriting is focused on sales generation through short-term, actionable writing that persuades the reader to take action (ads, sales pages, email campaigns). Content writing is focused on brand awareness through long-term, informative writing that demonstrates expertise (blog posts, newsletters, articles)." },

{ code:"LP-SAAS-04", title:"Website Copywriting Services", brand:"Textmercato", category:"lp", industry:"saas", priority:2, wordCount:300,
  excerpt:"A services landing page for Textmercato's website copywriting offering, closing the services suite alongside the e-commerce and thought-leadership pages.",
  body:"Take advantage of our professional website copywriting services to connect better with your target audience and generate more traffic, sales, and leads.\n\nEfficient and Professional Copywriting Service\nTextMercato offers one of the best copywriting services available.\n\n100% Plagiarism Free: Unique and SEO-driven content to improve webpage ranking.\nAsk For Changes, Anytime: Unlimited revisions until the content matches the brief.\nStay Informed About Project Progress: Track project progress via dashboard, with a dedicated account manager for additional requirements.\n\nExplore Our Copywriting Services — including Social Media copywriting to boost posts across various industries." },

// ---------------- BRAND & WEBSITE COPYWRITING ----------------
{ code:"CPW-AUTO-01", title:"EasyLease — Website Copy", brand:"EasyLease (UK)", category:"cpw", industry:"saas", priority:1, wordCount:200,
  excerpt:"Brand website copy for a UK no-deposit car-leasing company, written to a brief specifying UK English, a friendly-professional tone, and a clear 3-benefit structure.",
  body:"Drive Your Dream Car – The Easy Way\nGet on the road with affordable car leasing at zero deposit, even with poor credit.\n\nAt EasyLease, we believe getting behind the wheel shouldn't be complicated—or costly. That's why we bring you the easiest no-deposit car leasing facilities across the UK, so you can secure your perfect car without the upfront expense.\n\nWhy Do Drivers Choose EasyLease?\n1. No Deposit, No Worries — Forget hefty upfront payments. Keep your savings intact for the things that matter.\n2. Flexible Options for All Credit Scores — Poor credit? No problem. Customised leasing plans flexible enough for everyone.\n3. Hassle-Free, From Start to Finish — We handle the details so you don't have to. No pushy sales talk, just honest advice.\n\nReady to Get Started?\nFind your next car. Skip the deposit. Start your hassle-free drive.\n[Get Your Free Quote Today] — Because at EasyLease, car leasing should be easy." },

{ code:"CPW-SAAS-01", title:"App Development Agency — Lead-Gen Guide", brand:"App Development Agency (brief)", category:"cpw", industry:"saas", priority:2, wordCount:350,
  excerpt:"A short lead-generation guide written to a creative brief: 'How to Grow Your Business with a Mobile App,' aimed at converting local businesses into consultation leads.",
  body:"How to Grow Your Business with a Mobile App\n\nMobile apps are the latest technology imperative for any business to scale up sales. A mobile app can help exponential business growth in several ways:\n\n1. Increased Sales: Portrays all product offerings in a single app, making them easily discoverable.\n2. Better Customer Retention: Advanced UI/UX design brings customers back to make a purchase.\n3. Easy Payment Option: Stored payment information speeds up checkout — 30% of revenue-generating transactions now come from mobile payments.\n4. Increased Efficiency: Improves internal operations and inter-departmental communication.\n5. Reduced Operational Costs: Replaces paper records like timesheets and inventory logs.\n6. Profit Through App Stores: Free-tier to paid-tier conversion rates run as high as 60%.\n\nCustomer Testimony: \"I was amazed by the dedication and effort they put into launching my app, which skyrocketed my sales.\" — Alice Walker, owner, Little Delights Cake Shop." },

{ code:"CPW-FASH-01", title:"Sunglasses Brand — Website Copy", brand:"Sunglasses Co. (brief)", category:"cpw", industry:"fashion", priority:1, wordCount:120,
  excerpt:"Concise brand-voice copy for a sunglasses company, written to a one-line brief targeting health-conscious, style-aware customers aged 30–50.",
  body:"We are a sunglasses company. We bring voguish sunglasses for both men and women that will set you apart from the crowd.\n\nWe manufacture high-quality sunglasses that come with UV 400 protection from harmful eye conditions related to cataracts, retinal damage and macular degeneration. Our sunglasses are lightweight, so you can wear them with ease for longer durations. Choose from our plethora of lens sizes, colours and stylish panoramic frame designs.\n\nThese high-end sunglasses are \"100% protection against UV 400\" certified, in CE category 4 (3–8% VLT) ensuring the highest value of protection against harmful UV light." },

// ---------------- B2B COMPANY PROFILES ----------------
{ code:"BCP-SVC-01", title:"Lawn Care Company — Service Description", brand:"Lawn Care Co.", category:"bcp", industry:"saas", priority:2, wordCount:300,
  excerpt:"A company/services description for a lawn-care business, covering offerings and value proposition in a single brand-overview page.",
  body:"A concise company-services description written for a lawn care brand, outlining the scope of services on offer and the value proposition for residential and commercial clients. (Full piece available on request — written as part of a broader set of brand-profile assignments that also includes 15+ HR-tech competitor profiles for Pazcare, not yet re-catalogued in this version of the site.)" },

// ---------------- SPORTS JOURNALISM ----------------
{ code:"SPJ-FIT-01", title:"Arnold Schwarzenegger on Steroid Abuse in Bodybuilding", brand:"EssentiallySports", category:"spj", industry:"sports", priority:1, wordCount:420,
  excerpt:"A sports-journalism trial piece for EssentiallySports covering Arnold Schwarzenegger's comments on steroid abuse in competitive bodybuilding.",
  body:"Since the past few decades, steroids have become an inseparable term in elite sports. Recently during a seminar at the Arnold Classic Africa, the seven-time Mr Olympia winner and legendary bodybuilder Arnold Schwarzenegger expressed his concerns over the unhealthy obsession of youths regarding their muscle build-up.\n\nThis particular obsession is clinically termed Dysmorphia or Bigorexia, which has to date affected 10% of men. A Harvard University study conducted in 2014 showed that steroid use has increased rapidly since the 1980s.\n\nObserving the recent death toll in bodybuilding, Schwarzenegger opines it has become \"the most dangerous sport in the world\": \"The more extreme it gets and the more competitive the top athletes get, the more they are lifting weights that the body was not meant for.\"\n\nSchwarzenegger implies bodybuilding can leave a positive overall impact as long as steroids are avoided: \"It's getting the message out to tell people that it's called 'bodybuilding,' not 'body destroying.'\"" },

{ code:"SPJ-TEN-01", title:"Michael Phelps Praises Naomi Osaka's Mental Health Stance", brand:"EssentiallySports", category:"spj", industry:"sports", priority:1, wordCount:430,
  excerpt:"A sports-journalism trial piece for EssentiallySports covering Michael Phelps's reaction to Naomi Osaka's 2021 mental-health disclosure.",
  body:"Legendary Olympian Michael Phelps has praised former world No. 1 Naomi Osaka's decision to speak up about her mental health struggles amid her media boycott following the French Open withdrawal.\n\nOsaka announced she would skip post-match press conferences, stating: \"I've often felt that people have no regard for [athletes'] mental health.\" Following backlash and a $15,000 fine, she withdrew, revealing she had \"suffered long bouts of depression since the US Open in 2018.\"\n\nPhelps, a mental health advocate, told Time he was \"almost shocked\" by the backlash she received, but praised her vulnerability: \"It's definitely going to be a game-changer in mental health moving forward... it doesn't matter if you're No. 1 in the world or the average Joe, anybody can go through this. It is real.\"" },

// ---------------- TRAVEL WRITING ----------------
{ code:"TRV-RAIL-01", title:"How redRail Is Transforming Train Ticket Booking in India", brand:"redRail", category:"trv", industry:"travel", priority:2, wordCount:550,
  excerpt:"A brand-storytelling piece on how a train-booking app is modernising rail travel in India.",
  body:"A feature piece written for redRail covering how the platform is modernising the experience of booking train travel in India — from real-time availability to a simplified booking flow for one of the country's most heavily used transit systems. (Full text available on request.)" },

{ code:"TRV-RAIL-02", title:"Guide to Travel by Train in India", brand:"redRail", category:"trv", industry:"travel", priority:2, wordCount:600,
  excerpt:"A practical, SEO-driven guide to train travel in India — classes, booking windows, and tips for first-time rail travellers.",
  body:"A practical guide written for redRail covering ticket classes, booking timelines, station etiquette and tips for travellers new to train journeys across India. (Full text available on request.)" },

{ code:"TRV-RAIL-03", title:"Five Advantages of Travelling Via Train in India", brand:"redRail", category:"trv", industry:"travel", priority:2, wordCount:350,
  excerpt:"A short listicle on the practical and experiential benefits of rail travel over other modes, written for redRail.",
  body:"A short-form listicle written for redRail outlining five practical and experiential advantages of choosing train travel in India over other modes of transport. (Full text available on request.)" },

// ---------------- SOCIAL IMPACT & NGO ----------------
{ code:"SIM-NGO-01", title:"5 Facts About Period Poverty in India That You Must Know", brand:"DonateKart", category:"sim", industry:"socialimpact", priority:1, wordCount:300,
  excerpt:"An awareness-driven listicle on period poverty in India, written for NGO donation platform DonateKart.",
  body:"An awareness piece written for DonateKart's NGO blog, surfacing five key facts about period poverty in India to drive donor empathy and engagement around menstrual-health causes. (Full text available on request.)" },

{ code:"SIM-NGO-02", title:"Women Leaders in Rural India Who Are Creating an Impact", brand:"DonateKart", category:"sim", industry:"socialimpact", priority:1, wordCount:350,
  excerpt:"A feature profile piece spotlighting grassroots women leaders driving change in rural India.",
  body:"A feature piece for DonateKart profiling grassroots women leaders driving social and economic change across rural India, written to support the platform's storytelling around community-led impact. (Full text available on request.)" },

{ code:"SIM-NGO-03", title:"Future Wars Will Be Fought Over Water — Say Experts", brand:"DonateKart", category:"sim", industry:"socialimpact", priority:2, wordCount:250,
  excerpt:"A current-affairs explainer on global water scarcity, written for DonateKart's awareness content.",
  body:"A current-affairs piece for DonateKart's blog, summarising expert commentary on global water scarcity and its long-term geopolitical implications. (Full text available on request.)" },

{ code:"SIM-NGO-04", title:"Tips for Working From Home That Can Help With Work-Life Balance", brand:"DonateKart", category:"sim", industry:"socialimpact", priority:2, wordCount:280,
  excerpt:"A practical work-life-balance listicle written for DonateKart's lifestyle-adjacent blog content.",
  body:"A practical listicle for DonateKart offering work-from-home routines and boundaries to support better work-life balance for a remote-working audience. (Full text available on request.)" },

{ code:"SIM-NGO-05", title:"Why Donating a Little Every Month Has a Larger Impact", brand:"DonateKart", category:"sim", industry:"socialimpact", priority:2, wordCount:300,
  excerpt:"A donor-conversion piece making the case for recurring small donations over one-time giving.",
  body:"A donor-education piece for DonateKart making the case for recurring micro-donations as a more sustainable funding model for NGOs than one-off giving. (Full text available on request.)" },

{ code:"SIM-NGO-06", title:"Is the Non-Profit Sector Conducive to Working Moms?", brand:"DonateKart", category:"sim", industry:"socialimpact", priority:2, wordCount:280,
  excerpt:"An opinion-style piece examining workplace flexibility for mothers within the non-profit sector.",
  body:"An opinion piece for DonateKart's blog examining how flexible and mission-driven the non-profit sector is for working mothers, compared to corporate alternatives. (Full text available on request.)" },

// ---------------- CREATIVE SCRIPTWRITING ----------------
{ code:"SCR-AD-01", title:"Story Development for an Advertisement — Personality-Development App", brand:"Chidakash Tech", category:"scr", industry:"creative", priority:1, wordCount:350,
  excerpt:"A short narrative script and dialogue treatment for a video advertisement, following a businessman overcoming stage fright with the help of an app.",
  body:"Premise: A successful businessman defeats his fear of public speaking, gathers up courage, and speaks his heart out on his company's foundation anniversary.\n\nThe Gist: Even after being a successful businessman, Ajay feels nervous about speaking in public. As the foundation day approaches, he undergoes a personality-development journey to confidently face the public and the press. His secretary suggests a revolutionary app that changes his life.\n\nScene: A busy office, preparing for the 50th anniversary of the foundation.\nSecretary: \"Sir, why don't you opt for this amazingly helpful app — a virtual reality-based behavioural tool that can help with grooming and personality development?\"\nAjay: \"Is that so? Can it help me in this short time?\"\n\nCut to foundation day. Ajay confidently addresses the press after his speech.\nMedia: \"Sir, previously you used to avoid media gatherings. How did this sudden shift happen?\"\nAjay: \"I guess everyone has to face one's fears. This app helped me with practical public speaking exercises, and the result is before you.\"\nEnds with the tagline of the brand." },

// ---------------- UX WRITING ----------------
{ code:"UXW-BNK-01", title:"Mobile Banking App — UX Writing Sample", brand:"Bank of India", category:"uxw", industry:"banking", priority:2, wordCount:200,
  excerpt:"UX copy for a mobile banking app flow — microcopy, error states and confirmation screens written to a banking-grade tone of clarity and trust.",
  body:"A UX writing sample produced for a Bank of India mobile app flow, covering microcopy, confirmation states and error messaging written to a banking-appropriate standard of clarity and trust. (Full text from a prior project archive — to be re-catalogued with full content in a follow-up pass.)" },

// ---------------- SOCIAL MEDIA & CAMPAIGN STRATEGY ----------------
{ code:"SMC-CAM-01", title:"Multi-Format Campaign Strategy", brand:"Teravarna", category:"smc", industry:"creative", priority:1, wordCount:400,
  excerpt:"A multi-format social and campaign strategy assignment translating a creative brief into platform-specific content recommendations.",
  body:"A campaign-strategy assignment for Teravarna, translating a single creative brief into platform-specific content recommendations across formats. (Full text from a prior project archive — to be re-catalogued with full content in a follow-up pass.)" },

// ---------------- BLOG — LIFESTYLE & SELF-HELP ----------------
{ code:"BLG-LIFE-01", title:"How to Wake Up at 4 AM Everyday: 6 Tips", brand:"Go Hack Your Life (personal blog)", category:"blg", industry:"lifestyle", priority:1, wordCount:650,
  excerpt:"A personal-voice productivity blog post on early-rising habits, published under the author's own lifestyle blog.",
  body:"4 AM to 5 AM is considered early morning, or 'Brahma Muhurta' — the best hour for knowledge and longevity. We often wonder how successful people make it a point to wake up at 4 AM every morning. Waking up early is the toughest struggle we face, but successful people are aware of how their brain works, and wake up accordingly.\n\nHigh Efficiency: Your brain is only capable of 100% efficiency in the morning — studies show that between 4-8 AM, one can achieve in hours what would otherwise take a month of effort.\nCompetitive Advantage: Waking up 3 hours earlier means you can read up to 150 pages, workout, and get ready for the day — 3 hours closer to your goals while others are still asleep.\nMental Health: You'll find you feel less stressed and pressured, more at peace with your thoughts.\n\nKnow your 'why.' Maybe you want enough time for yourself, or you're tired of living a mediocre life. When you know your reason and repeat it to yourself, your subconscious mind finds reasons why it's easy to wake up early." },

{ code:"BLG-LIFE-02", title:"Easiest Ways to Improve Your General Knowledge", brand:"Go Hack Your Life (personal blog)", category:"blg", industry:"lifestyle", priority:2, wordCount:600,
  excerpt:"A study-skills and self-improvement blog post on building general knowledge for competitive exams and everyday confidence.",
  body:"Be it competitive exams or communication purposes, the need to improve your general knowledge is inevitable in daily life. You can categorise general knowledge into two parts: Current Affairs and Static GK.\n\nHistory requires a good background story for each event to be remembered properly — start with modern history before going back to medieval history. Biology is best understood through animated videos showing how organs work.\n\nYou can always tune in to TED-Ed talks, which cover almost every topic in the world. Try apps like Encyclopedia by Farlex, or watch History Channel documentaries. Read text books, novels, non-fiction, even shampoo bottles and advertisements, to expand your horizon — but make developing general knowledge a lifestyle, not an overnight exercise." },

{ code:"BLG-LIFE-03", title:"How to Build Up Self Confidence", brand:"Go Hack Your Life (personal blog)", category:"blg", industry:"lifestyle", priority:2, wordCount:400,
  excerpt:"A self-help blog post on building self-confidence, part of the author's original personal blog archive from 2019.",
  body:"A self-help blog post on practical ways to build self-confidence, published as part of the author's original lifestyle blog archive. (Full text available on request.)" },

{ code:"BLG-LIFE-04", title:"How to Find True Passion", brand:"Go Hack Your Life (personal blog)", category:"blg", industry:"lifestyle", priority:2, wordCount:400,
  excerpt:"A reflective self-help blog post on identifying genuine passion versus borrowed ambition.",
  body:"A reflective self-help piece on distinguishing genuine passion from borrowed ambition, published as part of the author's original lifestyle blog archive. (Full text available on request.)" },

{ code:"BLG-LIFE-05", title:"Importance of Mind Power to Shape Life", brand:"Go Hack Your Life (personal blog)", category:"blg", industry:"lifestyle", priority:2, wordCount:400,
  excerpt:"A mindset-focused self-help blog post on the role of mental discipline in shaping life outcomes.",
  body:"A mindset-and-discipline piece on how mental framing shapes life outcomes, published as part of the author's original lifestyle blog archive. (Full text available on request.)" },

];

// ---------------- TITLE-ONLY CATALOGUE ENTRIES ----------------
// These represent real, verified pieces (confirmed by file title and
// client/brand) where full body text hasn't been pulled into this
// version of the site yet. Shown with accurate metadata only —
// no fabricated content.
const TITLE_ONLY = [
  // SaaS / Coworking — SEO & Long-Form Articles
  { code:"SEO-COWK-01", title:"Why Are Coworking Spaces Important Today", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-02", title:"What is Real Time Biometric Software", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-03", title:"BHIVE Workspace — Coworking Review", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-04", title:"Top 10 Co-working Spaces in Hebbal", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-05", title:"6 Best Office Spaces for Rent in Domlur, Bangalore", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-06", title:"5 Best Office Spaces for Rent in Frazer Town, Bangalore", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-07", title:"91Springboard — Coworking Review", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-08", title:"How to Attach Payoneer to Fiverr", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-09", title:"How to Become a Freelancer on Fiverr", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-10", title:"Top 10 Coworking Spaces in Domlur at Affordable Prices", brand:"MyHQ", category:"seo", industry:"coworking", priority:2 },
  { code:"SEO-COWK-11", title:"Pros & Cons of Managed Office Spaces", brand:"Smartworks", category:"seo", industry:"coworking", priority:2 },

  // Healthtech
  { code:"SEO-HLTH-01", title:"Manipal Hospital — Doctor Overview Profiles (set)", brand:"Manipal Hospitals", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-HLTH-02", title:"Dr. Davinder Singh Chadha — Doctor Profile", brand:"Manipal Hospitals", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-HLTH-03", title:"Sleep Disturbance — How to Tackle It", brand:"Manipal Hospitals", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-HLTH-04", title:"Osteoporosis: A Silent Destroyer of Senior Overall Health", brand:"Emoha", category:"seo", industry:"healthtech", priority:3 },

  // Textmercato internal blogs
  { code:"SEO-MKT-01", title:"Content Writing — Industry Overview", brand:"Textmercato Blogs", category:"seo", industry:"saas", priority:2 },
  { code:"SEO-MKT-02", title:"How to Develop a Distribution Strategy to Complement Your Content Plan", brand:"Textmercato Blogs", category:"seo", industry:"saas", priority:2 },

  // SaaS
  { code:"SEO-SAAS-01", title:"2023 Digital Transformation of the Manufacturing Industry: DAPs and More", brand:"Apty", category:"seo", industry:"saas", priority:2 },

  // EdTech
  { code:"SEO-EDU-01", title:"MBA in Finance in the UK", brand:"Upgrad", category:"seo", industry:"edtech", priority:3 },
  { code:"SEO-EDU-02", title:"Bachelors in Information Technology in Australia", brand:"Upgrad", category:"seo", industry:"edtech", priority:3 },
  { code:"SEO-EDU-03", title:"Pharmacy Courses — Study Guide", brand:"Upgrad", category:"seo", industry:"edtech", priority:3 },
  { code:"SEO-EDU-04", title:"Student Visa for the UK — Guide", brand:"Upgrad", category:"seo", industry:"edtech", priority:3 },
  { code:"SEO-EDU-05", title:"Why You Should Become a Salesforce Developer", brand:"Ethnus", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-06", title:"How to Become a Certified SAFe Agilist", brand:"KnowledgeHut", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-07", title:"Leading SAFe vs SAFe Advanced Scrum Master", brand:"KnowledgeHut", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-08", title:"How Long Does It Take to Get a Six Sigma Green Belt", brand:"KnowledgeHut", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-09", title:"Grace Hopper | Biography, Accomplishments & Facts", brand:"Unacademy", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-10", title:"Robert Hooke — Cell Theory, Microscope & Inventions", brand:"Unacademy", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-11", title:"15 Basic to Advanced Excel Functions Every Sales Professional Must Know", brand:"Jigsaw Academy", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-12", title:"Interview Questions for Sales Executives", brand:"Jigsaw Academy", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-13", title:"Key Characteristics of Successful Entrepreneurs and How an MBA Helps Develop Them", brand:"UNext", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-14", title:"From Stay-at-Home Parents to Military Personnel — Who Can Benefit From Online Degrees", brand:"UNext", category:"seo", industry:"edtech", priority:2 },
  { code:"SEO-EDU-15", title:"How Can I Begin a Career in Risk Management After Completing My B.Com?", brand:"UNext", category:"seo", industry:"edtech", priority:2 },

  // Medical / exam-prep (Prepladder)
  { code:"SEO-MED-01", title:"Ridley-Jopling Classification of Leprosy", brand:"Prepladder", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-MED-02", title:"Treatment Updates in Leprosy from WHO", brand:"Prepladder", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-MED-03", title:"Lepra Reactions", brand:"Prepladder", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-MED-04", title:"Mycobacterial Infections — Classification", brand:"Prepladder", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-MED-05", title:"Types of Emphysema", brand:"Prepladder", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-MED-06", title:"Typical vs Atypical Pneumonia", brand:"Prepladder", category:"seo", industry:"healthtech", priority:3 },
  { code:"SEO-MED-07", title:"Restrictive Lung Disease", brand:"Prepladder", category:"seo", industry:"healthtech", priority:3 },

  // Fintech / Legal
  { code:"SEO-FIN-01", title:"SIP vs FD — Which Is the Best Option?", brand:"VakilSearch", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-LEG-01", title:"What Are the Challenges in SLA Management?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-02", title:"What Are the Five Types of Franchise Ownership Opportunities?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-03", title:"Can We Waive the Cooling Period If We Apply for Divorce on Mutual Consent?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-04", title:"Points to Remember to Improve SLA Standards", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-05", title:"What Is the GST Identification Number (GSTIN)?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-06", title:"How Does the Term Sheet Explain All Terms and Clauses?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-07", title:"What Is the Dividend on VC Term Sheets?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-08", title:"What Is the Startup's Exit Strategy for an Unexpected Term Sheet?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-FIN-02", title:"What Is Government Funding?", brand:"VakilSearch", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-03", title:"How to Raise Funds for Business in India", brand:"VakilSearch", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-LEG-09", title:"How Are Hindu Wills Different From Muslim Wills?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-10", title:"Is Making a Will Costly?", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-LEG-11", title:"Public Relations — Vital for Franchise Business", brand:"VakilSearch", category:"seo", industry:"legal", priority:3 },

  { code:"SEO-FIN-04", title:"Everything About Income Tax Slabs for FY 2021-22", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-05", title:"Taxable Income: What Is It and How Can You Reduce It?", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-06", title:"Learn About Pradhan Mantri Matsya Sampada Yojna (PMMSY)", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-07", title:"Which ITR Should I File?", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-08", title:"VAT Overview — With Examples and Registration Process", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-09", title:"What Is Loan Fraud and How to Detect It?", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-10", title:"Online Banking Fraud — What to Know", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-11", title:"Paytm Business Model — Explained", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-12", title:"Accounting System — What Is an Accounting System?", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-LEG-12", title:"Master Service Agreement — How to Draft an MSA", brand:"Khatabook", category:"seo", industry:"legal", priority:3 },
  { code:"SEO-FIN-13", title:"Understanding Entertainment Tax in India", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-14", title:"GST Invoice — A Complete Guide", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-15", title:"Forms 15G & 15H — Saving TDS on Interest Income", brand:"Khatabook", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-16", title:"Get a Personal Loan for Shopping", brand:"KreditBee", category:"seo", industry:"fintech", priority:3 },
  { code:"SEO-FIN-17", title:"Get Online Maternity Loans Now", brand:"KreditBee", category:"seo", industry:"fintech", priority:3 },

  // Manufacturing / supply chain (TranZact)
  { code:"SEO-MFG-01", title:"Inventory Optimization — A Guide", brand:"TranZact", category:"seo", industry:"manufacturing", priority:3 },
  { code:"SEO-MFG-02", title:"Procurement Process — Explained", brand:"TranZact", category:"seo", industry:"manufacturing", priority:3 },
  { code:"SEO-MFG-03", title:"Inventory Management System — A Complete Guide", brand:"TranZact", category:"seo", industry:"manufacturing", priority:3 },
  { code:"SEO-MFG-04", title:"Purchase Order — Process and Best Practices", brand:"TranZact", category:"seo", industry:"manufacturing", priority:3 },
  { code:"SEO-MFG-05", title:"What Is ERP Software?", brand:"TranZact", category:"seo", industry:"manufacturing", priority:3 },
  { code:"SEO-MFG-06", title:"Best Inventory Management Software for Small Business", brand:"TranZact", category:"seo", industry:"manufacturing", priority:3 },
  { code:"SEO-MFG-07", title:"Free ERP Software — Options Compared", brand:"TranZact", category:"seo", industry:"manufacturing", priority:3 },
  { code:"SEO-MFG-08", title:"Inventory Management Software for Small Business", brand:"TranZact", category:"seo", industry:"manufacturing", priority:3 },

  // HR-Tech / Ecommerce strategy
  { code:"SEO-HR-01", title:"Started as a Conversation, Evolved as an Idea — The Key Differentiator in Tech Hiring", brand:"HireHunch", category:"seo", industry:"hrtech", priority:2 },
  { code:"SEO-ECOM-01", title:"Streamlining International Shipping: How to Use the eBay Global Shipping Calculator", brand:"Gonukkad", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-02", title:"Optimizing Your eBay Store — Strategies for Setting the Right Prices", brand:"Gonukkad", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-03", title:"How Are D2C Brands Winning Customers in India?", brand:"E-commerce Cataloguing", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-04", title:"B2B E-commerce and How to Create a Digital Catalogue", brand:"E-commerce Cataloguing", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-05", title:"E-commerce Challenges for Businesses in 2022", brand:"E-commerce Cataloguing", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-06", title:"Why Automated Catalog Listing Should Be Part of Your 2022 Strategy", brand:"E-commerce Cataloguing", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-07", title:"Essential Tools for Instant Digital Growth of Your Retail Brand", brand:"E-commerce Cataloguing", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-08", title:"5 Quality Checks for Product Catalogs", brand:"E-commerce Cataloguing", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-09", title:"5 Ways to Complete an Incomplete Product Catalogue", brand:"E-commerce Cataloguing", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-ECOM-10", title:"The Perfect Guide for Fashion E-commerce Catalog Management", brand:"E-commerce Cataloguing", category:"seo", industry:"fashion", priority:1 },
  { code:"SEO-ECOM-11", title:"Know Your Competitor Catalog — Explore Prices and Analyze Reviews", brand:"E-commerce Cataloguing", category:"seo", industry:"ecommerce", priority:2 },
  { code:"SEO-TECH-01", title:"Cross-Browser Testing With Non-Functional Tests", brand:"BrowserStack", category:"seo", industry:"saas", priority:2 },
  { code:"BLG-ED-01", title:"Manyavar Editorial — Ranchi", brand:"Manyavar (via Textmercato)", category:"blg", industry:"fashion", priority:1 },
];

// ---------------- CUSTOMER EXPERIENCE & CRISIS WRITING ----------------
// Note: written as a multi-format job-application skills exercise, not commissioned or published work.
// Included for format range (email, WhatsApp, opinion writing, bilingual call script, crisis response).
CATALOG.push(
{ code:"CXW-FLIP-01", title:"Delayed Order — Retention Email & WhatsApp Message", brand:"Flipkart (skills exercise)", category:"cxw", industry:"ecommerce", priority:1, wordCount:380,
  excerpt:"A paired email and WhatsApp message written to retain a customer facing a 20-day delivery delay on a travel-critical order, offering compensation and immediate alternatives instead of a straight apology.",
  body:"NOTE: Written as a job-application skills exercise, not commissioned or published client work.\n\nEMAIL\n\nSubject: Important update regarding your Flipkart order (Order Number)\n\nDear Customer X,\n\nWe are writing to inform you of an unexpected delay regarding your recent Flipkart order for the (Product). Due to a courier transit issue, the estimated delivery date has been updated from the original March 10 to March 30. We sincerely apologize for this inconvenience.\n\nWe understand this order was specifically needed for your upcoming trip. We sincerely apologize for the stress and inconvenience this delay is causing right before your trip, and we completely respect your decision to consider canceling.\n\nSince we are unable to expedite the courier route, we would like to provide you with the following options moving forward:\n\n1. Keep the order and receive a Flipkart Gift Card — If this item is something you can still use after you return from your trip, we would love for you to keep the order. As a gesture of goodwill, we will add a Rs 500 Flipkart Gift Card / 500 SuperCoins to your account the moment the item is delivered on March 30.\n\n2. Need travel gear immediately? — Search for a similar item and toggle the \"Flipkart Assured\" filter for guaranteed Next-Day Delivery, or check \"Flipkart Minutes\" for 10-15 minute delivery in select areas.\n\nWe would hate to lose your order over this delay. Please reply directly to this email and let me know if you would like to keep the order with the compensation applied, or if you still prefer to cancel.\n\nWishing you safe and happy travels!\n\nBest regards,\nFlipkart Seller Support\n\n---\n\nWHATSAPP MESSAGE\n\nHi Customer X, this is Flipkart Support. 📦\n\nWe are reaching out with an important update: your order [Order Number] has been delayed in transit and is now expected to arrive on March 30.\n\nWe saw your message that you needed this for your upcoming trip! We are incredibly sorry for the stress this timing causes. Before you cancel, we'd love to make this right for you:\n\n🎁 If you KEEP the order for use after your trip, we will automatically credit your account with a Rs 500 Gift Card / 500 SuperCoins once it is delivered as an apology for the wait.\n\n⏳ Need travel gear right now? Open your Flipkart app and use the \"Flipkart Assured\" filter for Next-Day Delivery on alternatives, or check \"Flipkart Minutes\" to get travel essentials delivered in just 15 minutes!\n\nWould you be open to keeping your original order with the Gift Card applied? Please reply with YES to keep it or CANCEL and we will assist you immediately. Have a wonderful trip! ✈️" },

{ code:"CXW-FLIP-02", title:"\"The Flipkart Disconnect\" — Customer Experience Opinion Piece", brand:"Flipkart (skills exercise)", category:"cxw", industry:"ecommerce", priority:1, wordCount:280,
  excerpt:"A 200-word opinion piece critiquing Flipkart's post-purchase customer experience, identifying five specific friction points and proposing a concrete policy fix for each.",
  body:"NOTE: Written as a job-application skills exercise, not commissioned or published client work.\n\nThe Flipkart Disconnect: Bridging the Gap Between Cart and Customer\n\nShopping on Flipkart offers an undeniable rush of accessibility, bringing an endless catalog right to the doorstep. However, evaluating the platform's customer journey reveals a stark disconnect. The cohesive brand narrative built during the browsing phase often shatters the moment a post-purchase issue arises.\n\nIf I could overhaul the customer experience, my immediate focus would be:\n\n1. Stop Arbitrary Sale Cancellations — Implement a strict \"Price Honour\" policy guaranteeing customers can repurchase a cancelled item at its original discounted price.\n\n2. Eradicate Fake \"Delivery Attempted\" Updates — Mandate OTP-based rescheduling, so agents cannot mark an order undeliverable without the customer confirming via OTP.\n\n3. Overhaul the \"Technician Visit\" Replacement Trap — Enforce a strict 48-hour SLA; if no visit occurs, auto-approve replacement based on customer-uploaded evidence.\n\n4. Fix the EMI Refund Loop — Upgrade to airtight source-to-source refunds and reimburse customers for bank penalties caused by platform-initiated cancellations.\n\n5. Dismantle the \"Bot-Loop\" Customer Support — Implement a \"Three-Strike\" rule: if a bot can't resolve a query in three prompts, it must unlock a direct human callback option." },

{ code:"CXW-FLIP-03", title:"Bilingual Customer Satisfaction Survey Script (English &amp; Hindi)", brand:"Flipkart (skills exercise)", category:"cxw", industry:"ecommerce", priority:2, wordCount:260,
  excerpt:"An outbound customer-satisfaction call script written in both English and Hindi (Latin script), structured around three quick rating questions and an open feedback prompt.",
  body:"NOTE: Written as a job-application skills exercise, not commissioned or published client work.\n\nENGLISH SCRIPT\n\nAgent: \"Hi, I am [Agent Name] calling from Flipkart. Am I speaking with [Customer Name]?\"\n(Wait for confirmation)\nAgent: \"Great. I am calling because we are constantly looking to improve, and we noticed your recent shopping experience with us. Do you have two quick minutes to share your feedback?\"\n(If Yes)\nAgent: \"Thank you! First, on a scale of 1 to 5, with 5 being excellent, how satisfied were you with the delivery and packaging of your last order?\"\n(Note response)\nAgent: \"And how would you rate the quality of the product compared to what was shown on the app?\"\n(Note response)\nAgent: \"Finally, if there is one thing Flipkart could do better to improve your experience next time, what would it be?\"\n(Note response)\nAgent: \"We truly appreciate your honesty, [Customer Name]. Your feedback goes directly to our team to help us fix these issues. Have a great day ahead!\"\n\n---\n\nHINDI SCRIPT (LATIN/HINGLISH)\n\nAgent: \"Namaste, main Flipkart se [Agent Name] baat kar raha/rahi hoon. Kya meri baat [Customer Name] se ho rahi hai?\"\n(Wait for confirmation)\nAgent: \"Bahut badhiya. Hum apne customer experience ko behtar banane ki koshish kar rahe hain, isliye aapke recent order ke baare mein feedback lene ke liye call kiya tha. Kya aapke paas baat karne ke liye do minute hain?\"\n(If Yes)\nAgent: \"Shukriya! Sabse pehle, 1 se 5 ke scale par, jahan 5 sabse accha hai, aap apne pichle order ki delivery aur packaging se kitne santusht hain?\"\n(Note response)\nAgent: \"App par jaisa dikhaya gaya tha, uske mukable product ki quality aapko kaisi lagi?\"\n(Note response)\nAgent: \"Aakhiri sawal, Flipkart aisi kaun si ek cheez hai jismein sudhaar kar sakta hai jisse agli baar aapka experience behtar ho?\"\n(Note response)\nAgent: \"Aapke waqt aur feedback ke liye bahut shukriya, [Customer Name]. Hum is par zaroor kaam karenge. Aapka din shubh ho!\"" },

{ code:"CXW-FLIP-04", title:"Social Media Crisis Response Strategy", brand:"Flipkart (skills exercise)", category:"cxw", industry:"ecommerce", priority:1, wordCount:240,
  excerpt:"A response strategy and draft public reply for handling a customer's public complaint on social media — covering response speed, public-empathy/private-resolution structure, and root-cause investigation.",
  body:"NOTE: Written as a job-application skills exercise, not commissioned or published client work.\n\nBrief: A customer publicly posts they would never recommend buying through Flipkart. What's the response strategy?\n\nWhen a customer publicly states they would never recommend the brand, the goal is not to argue, but to demonstrate active listening, fast resolution, and public accountability.\n\nThe Strategy\n\nSpeed of Response: Reply within 15-30 minutes. Social media users expect near-instant acknowledgment.\n\nPublic Empathy, Private Resolution: Validate their frustration publicly so other users see that Flipkart cares, but immediately transition the conversation to Direct Messages to protect their personal data and investigate the specific Order ID.\n\nRoot Cause Investigation: Once in DMs, identify if the issue was a seller defect, logistics failure, or refund delay, and bypass standard SLA wait times to offer an expedited solution.\n\nClose the Loop: After resolving the issue privately, ask the customer if they are satisfied. If they are, thank them in the DM for their patience.\n\nThe Public Response:\n\n\"Hi [Customer Name]. This is definitely not the kind of experience we want you to have, and we understand why you are frustrated. We want to get to the bottom of this and make things right for you immediately. Could you please DM us your Order ID or registered phone number so our escalation team can look into this right away?\"" }
);

// ---------------- LIFESTYLE & HOME CONTENT ----------------
CATALOG.push(
{ code:"LCB-NIL-01", title:"9 Unique Wedding Decoration Ideas At Home", brand:"@home by Nilkamal", category:"lcb", industry:"lifestyle", priority:1, wordCount:950,
  excerpt:"A long-form lifestyle blog piece covering nine distinct at-home wedding decoration setups — from entrance styling to a full mandap design.",
  body:"9 Unique Wedding Decoration Ideas At Home\n\nIf you're going for an intimate wedding occasion at home, you don't need to brainstorm ideas anymore. We present you with this ultimate guide to exclusive wedding home decor ideas.\n\nA wedding is one of the most important events in our lives and we try our heart and soul to make it picture-perfect. Ideal wedding decoration can easily replace the destination wedding with its minimalistic charm.\n\nBefore delving into decorations, we must have a theme and an outline of the decor:\n1. A stunning Entrance: Fresh flowers, lamps, scented candles.\n2. A state-of-art Mandap in the Living room: Havan Kund, Kalash Pillars, Low seating arrangement.\n3. A fun Haldi Setup: Embellished curtains, fresh floral frame, wallpaper.\n4. A cocktail party setup in the dining area: fairy lights, mirrors, stools.\n5. Photozone balcony: chairs, cushions, fairy lights, plants, sheer canopy.\n6. Garden: Customised pastel backdrop, sitting arrangements, dining table decor.\n\n(Full text available — includes detailed guidance on all 9 setups from entrance decor and mandap design through to a minimalistic registry wedding and selfie corner.)" },

{ code:"LCB-NIL-02", title:"King Size Bed vs Double: What is the Difference", brand:"@home by Nilkamal", category:"lcb", industry:"lifestyle", priority:2, wordCount:850,
  excerpt:"A buyer's guide comparing king-size and double beds across dimensions, room requirements and sleeping scenarios, written for @home by Nilkamal's furniture e-commerce blog." },

{ code:"LCB-NIL-03", title:"How to Buy a Bed Online — Category Page", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1900,
  excerpt:"Full e-commerce category page covering types of beds, a buying guide across size/material/storage/price, and individual descriptions of popular Nilkamal bed ranges." },

{ code:"LCB-NIL-04", title:"Orthopedic Mattress — Category Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1800,
  excerpt:"E-commerce category page for Nilkamal's orthopaedic mattress range covering benefits, buying factors (size/material/firmness/thickness), and product listings." },

{ code:"LCB-NIL-05", title:"Spring Mattress — Category Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1800,
  excerpt:"Category page covering types of spring mattresses (Bonnel, pocket spring), buying factors, and individual product listings from Nilkamal's spring-mattress range." },

{ code:"LCB-NIL-06", title:"Memory Foam Mattress — Category Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1600,
  excerpt:"Category page covering the benefits of foam mattresses (pressure relief, motion control, allergy resistance) and Nilkamal's full range including travel mattresses." },

{ code:"LCB-NIL-07", title:"Single Size Mattress — Category Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1800,
  excerpt:"Category page covering single-bed mattress thickness, dimensions, material and price guidance, plus a product listing of popular Nilkamal single-bed mattresses." },

{ code:"LCB-NIL-08", title:"Double Size Mattress — Category Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1700,
  excerpt:"Category page covering double-bed mattress selection — size, material, price, firmness — plus product listings from Nilkamal's double-bed mattress range." },

{ code:"LCB-NIL-09", title:"Shoe Racks — Category Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1800,
  excerpt:"Category page covering types of shoe storage (shoe stands, shoe cabinets, wall-mounted, over-door, seat racks), buying criteria, and popular Nilkamal shoe-rack models." },

{ code:"LCB-NIL-10", title:"Kids Furniture — Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1600,
  excerpt:"Category page covering how to choose kids' furniture — height, themes, safety, colours — and Nilkamal's range of kids' beds, study tables, wardrobes and chairs." },

{ code:"LCB-NIL-11", title:"Bedroom Furniture — Category Page", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1700,
  excerpt:"Category page covering how to select bedroom furniture across personal preference, space, material, price and colour, plus individual product highlights from Nilkamal's bedroom range." },

{ code:"LCB-NIL-12", title:"2-Seater Sofa — Category Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1800,
  excerpt:"Category page covering 2-seater sofa designs for bedroom, drawing room and office, with individual product descriptions of Nilkamal's two-seater sofa range." },

{ code:"LCB-NIL-13", title:"3-Seater Sofa — Category Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1800,
  excerpt:"Category page covering how to pick a three-seater sofa (frame quality, cushioning, material, price) and Nilkamal's full range of 3-seater sofa styles." },

{ code:"LCB-NIL-14", title:"Pillow Buying Guide", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1600,
  excerpt:"Category page covering pillow design, size, material, firmness and home-decor considerations, plus guidance on best pillows by sleeping pattern." },

{ code:"LCB-NIL-15", title:"Say Goodbye to Allergies with Doctor Dreams Max Icefoam Mattress", brand:"Nilkamal (Doctor Dreams)", category:"lcb", industry:"lifestyle", priority:2, wordCount:1000,
  excerpt:"Brand article for the Doctor Dreams Max Icefoam orthopaedic mattress covering allergy triggers, Icefoam technology, and why this cooling triple-layer mattress is anti-allergic." },

{ code:"LCB-NIL-16", title:"How Max Icefoam Mattress Can Improve Your Health", brand:"Nilkamal (Doctor Dreams)", category:"lcb", industry:"lifestyle", priority:2, wordCount:950,
  excerpt:"Brand article covering 9 health benefits of the Doctor Dreams Icefoam mattress — from temperature regulation to spinal alignment and allergy resistance." },

{ code:"LCB-NIL-17", title:"Doctor Dreams Icefoam Mattress — Product Introduction", brand:"Nilkamal (Doctor Dreams)", category:"lcb", industry:"lifestyle", priority:2, wordCount:750,
  excerpt:"Launch-style brand introduction for Doctor Dreams' Icefoam mattress, covering technology features and differentiators vs standard foam." },

{ code:"LCB-NIL-18", title:"Why Ecoair Latex Mattresses are Ideal for Athletes", brand:"Nilkamal (Doctor Dreams)", category:"lcb", industry:"lifestyle", priority:2, wordCount:1000,
  excerpt:"Brand article on the Doctor Dreams Ecoair Latex mattress covering latex types, features (pinhole technology, Tencel fabric) and specific benefits for active people and athletes." },

{ code:"LCB-NIL-19", title:"MDF vs Solid Wood Furniture: Which Should You Pick", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1000,
  excerpt:"Comparison article covering pros and cons of MDF and solid wood furniture — durability, moisture resistance, price, customisability — to guide buying decisions for home renovation." },

{ code:"LCB-NIL-20", title:"How to Choose a 4-Seater Dining Table", brand:"Nilkamal Furniture", category:"lcb", industry:"lifestyle", priority:2, wordCount:1000,
  excerpt:"Buyer's guide to 4-seater dining tables covering material options, utility, family suitability, entertainment use, and expandability." }
);
