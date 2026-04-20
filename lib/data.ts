export const clinic = {
  name: "AVK Ayurvedic Clinic & Pharmacy",
  phone: "+91 98449 79745",
  phoneHref: "tel:+919844979745",
  address1: "#2B/1, Akshayanagar Main Road",
  address2: "Opp. Fullinfaws College, Yellanahalli",
  address3: "Begur Post, Bangalore — 560068",
  email: "care@avkayurveda.in",
  hours: [
    { d: "Monday – Friday", t: "8:00 AM — 8:00 PM" },
    { d: "Saturday", t: "8:00 AM — 5:00 PM" },
    { d: "Sunday", t: "By appointment" },
  ],
};

export type Speciality = {
  slug: string;
  name: string;
  icon: "spine" | "skin" | "wellness" | "family";
  route: string;
  tagline: string;
  short: string;
  long: string;
  conds: string[];
  approach: [string, string][];
};

export const specialities: Speciality[] = [
  {
    slug: "spine-joint", name: "Spine & Joint", icon: "spine", route: "spine",
    tagline: "For backs, knees, necks and the everyday stiffness that slows you down.",
    short: "A dedicated programme for spinal, joint and musculoskeletal conditions — combining oleation, fomentation and classical Basti therapy.",
    long: "Our Spine & Joint programme addresses the full range of musculoskeletal complaints — from everyday stiffness and sports injuries through to chronic spinal disorders. Treatment is rooted in vata pacification: warm medicated oils, therapeutic steam, and the classical Basti procedure, supplemented where appropriate with targeted physiotherapy and lifestyle counselling.",
    conds: ["Lumbar spondylosis", "Cervical spondylosis", "Sciatica", "Disc herniation", "Frozen shoulder", "Knee osteoarthritis", "Rheumatoid arthritis", "Sports injuries", "Postural back pain"],
    approach: [
      ["Assessment", "A 45-minute consultation with pulse and postural examination. X-rays/MRIs reviewed where relevant."],
      ["Preparation", "7–14 days of internal and external snehana (oleation) to mobilise deep-seated vata."],
      ["Main therapy", "Daily Abhyanga, Patra Pinda Sweda, and a course of medicated Basti customised to the condition."],
      ["Aftercare", "Diet, asana and daily routine guidance. Six-week follow-up."],
    ],
  },
  {
    slug: "skin", name: "Skin Ailments", icon: "skin", route: "skin",
    tagline: "Chronic, recurring and stress-linked skin conditions — treated from the root.",
    short: "An internal-first approach to psoriasis, eczema, acne and pigmentation — because lasting skin health rarely starts on the surface.",
    long: "AVK treats skin not as the problem, but as a window into digestion, stress and liver function. Our protocols combine blood-purifying internal preparations (raktashodhana), gentle external applications and patient-specific diet — typically over 3–6 month courses — rather than the short-lived relief of suppressive treatments.",
    conds: ["Psoriasis", "Eczema / atopic dermatitis", "Chronic acne", "Melasma & pigmentation", "Vitiligo", "Fungal infections", "Lichen planus", "Urticaria", "Seborrheic dermatitis"],
    approach: [
      ["Root-cause analysis", "Detailed history of digestion, sleep, stress and menstrual cycle. Skin is rarely only about skin."],
      ["Dietary reset", "A 21-day customised diet — the most influential lever in almost every skin case we see."],
      ["Internal therapy", "Classical formulations to purify rakta and pitta. Dispensed in-house against prescription."],
      ["External therapy", "Mild oil applications, face packs and Takra Dhara where indicated. No harsh exfoliation."],
    ],
  },
  {
    slug: "wellness", name: "Women & Men Wellness", icon: "wellness", route: "wellness",
    tagline: "Hormonal balance, stress and vitality — for adults 25 to 60.",
    short: "PCOS, menstrual health, stress, sleep and male vitality — addressed through constitutional, slow-medicine Ayurveda.",
    long: "Wellness at AVK is not a membership. It is a structured diagnostic and treatment programme for the conditions modern adults live with — PCOS, perimenopause, stress-linked fatigue, poor sleep, and declining male vitality. Every protocol is built for the individual; nothing is standardised.",
    conds: ["PCOS / PCOD", "Irregular menstruation", "Perimenopause & menopause", "Infertility support", "Chronic fatigue", "Anxiety & insomnia", "Male vitality & vigour", "Weight management", "Thyroid support"],
    approach: [
      ["Constitutional mapping", "Prakriti and vikriti assessment, with attention to menstrual and sleep cycles."],
      ["Panchakarma (if indicated)", "A targeted 7–21 day cleanse — usually Virechana or Basti — to reset imbalances."],
      ["Rasayana therapy", "Specific rejuvenatives — for fertility, for stress, for stamina — taken over 3–6 months."],
      ["Lifestyle protocol", "Diet, pranayama, sleep and exercise guidance. Six-week reviews."],
    ],
  },
  {
    slug: "geriatric", name: "Geriatric Care & Family Medicine", icon: "family", route: "family",
    tagline: "Age-friendly care, and a family doctor for the rest of the household.",
    short: "Preventive, gentle Ayurveda for seniors — alongside general family medicine for the everyday ailments that don't need a specialist.",
    long: "We care for three generations of some Bangalore families, and we take that seriously. Our geriatric programme focuses on mobility, cognition and comfort; our family medicine practice covers the fevers, coughs, digestive upsets and seasonal complaints that bring people back to a trusted doctor year after year.",
    conds: ["Joint stiffness & arthritis", "Memory & cognitive support", "Sleep & anxiety in seniors", "Blood pressure support", "Diabetes support", "Digestive upsets", "Seasonal coughs & colds", "General immunity", "Post-illness recovery"],
    approach: [
      ["Family consultation", "Up to three family members in one extended visit — useful for shared history and inherited tendencies."],
      ["Preventive protocol", "Seasonal rituals, daily routines and diet for long-term maintenance."],
      ["Gentle therapy", "Age-appropriate Abhyanga, Nasya and Shirodhara — slower, shorter, and gentler than the standard protocols."],
      ["Home visit (on request)", "For mobility-restricted seniors within a 5km radius. Call the clinic to arrange."],
    ],
  },
];

export const specialists = [
  { name: "Dr. Vinay M", role: "BAMS · Founder & Chief Physician", focus: "Spine & Joint · Family Medicine", bio: "Seventeen years of clinical Ayurveda, with a focus on musculoskeletal conditions and general practice. Trained at Rajiv Gandhi University of Health Sciences; mentored by Vaidya K. R. Sharma of Mysuru.", years: "17 yrs" },
  { name: "Dr. Anitha R", role: "BAMS, MD (Kayachikitsa)", focus: "Skin Ailments · Women's Wellness", bio: "Specialist in chronic skin conditions and women's health. Particular interest in the diet–skin–stress axis. Nine years of independent practice.", years: "9 yrs" },
  { name: "Dr. Kiran N", role: "BAMS · Visiting Consultant", focus: "Pulse Diagnosis · Geriatrics", bio: "A traditional nadi pariksha specialist. Clinic every second Saturday. Particularly sought after by our older patients.", years: "22 yrs" },
  { name: "Dr. Priya S", role: "BAMS · Associate Physician", focus: "Men's Wellness · General Ayurveda", bio: "Full-time associate physician with a focus on stress, sleep and vitality in working adults. Trained at Government Ayurvedic Medical College, Bengaluru.", years: "6 yrs" },
];

export const testimonials = [
  { name: "Sathish Murthy", role: "Software architect · HSR Layout", stars: 5, quote: "After two years of chronic back pain and endless painkillers, a 21-day spine programme here finally gave me relief. It's not a quick fix — it's a proper, classical process. Worth every rupee." },
  { name: "Kavya R.", role: "Teacher · Jayanagar", stars: 5, quote: "I had psoriasis flaring every winter for a decade. AVK's approach is slower — three months of diet, internal medicines, weekly reviews — but it's the first winter in ten years I haven't had a flare." },
  { name: "Ananya P.", role: "Architect · Bommanahalli", stars: 5, quote: "What I appreciate most is that Dr. Vinay doesn't over-prescribe. He listens, adjusts, and often tells me to fix my sleep before anything else. That kind of integrity is rare." },
  { name: "Ravi Kumar", role: "Retired · Electronic City", stars: 5, quote: "At 72, I was convinced my knees were done. Six weeks of Janu Basti and a walking routine later, I'm on morning walks again. The therapists are patient and very skilled." },
  { name: "Meera Iyer", role: "Yoga teacher · Sarjapur", stars: 5, quote: "I send my students here because I know they'll be assessed properly, not pushed into packages they don't need. The pulse reading alone is worth the visit." },
  { name: "Pradeep S.", role: "Father · Begur", stars: 5, quote: "My whole family sees Dr. Vinay — my parents for their BP and joints, my wife for her migraines, me for stress. It's rare to find a doctor who knows three generations." },
  { name: "Lakshmi Narayan", role: "Homemaker · BTM", stars: 5, quote: "I walked in with migraines and walked out, three weeks later, with a diet, a routine and no migraines. The detail in the treatment plan surprised me." },
  { name: "Rohan & Divya", role: "Couple · Koramangala", stars: 5, quote: "We came in for fertility support after a difficult year. The doctor took time to understand both of us, not just the 'issue'. Treatment was honest, unrushed, and — happily — successful." },
  { name: "Suresh B.", role: "Entrepreneur · JP Nagar", stars: 5, quote: "I travelled three hours for my first consultation. I'd do it again. The depth of questioning and the honesty of the prognosis is something I haven't seen at other clinics." },
];

export const gallery = [
  { cat: "clinic", cap: "Reception & waiting area" },
  { cat: "clinic", cap: "Consultation room" },
  { cat: "therapy", cap: "Therapy room — oil treatment" },
  { cat: "therapy", cap: "Shirodhara in progress" },
  { cat: "pharmacy", cap: "In-house dispensary" },
  { cat: "pharmacy", cap: "Classical formulations" },
  { cat: "clinic", cap: "Physician's consultation" },
  { cat: "therapy", cap: "Steam therapy room" },
  { cat: "clinic", cap: "The medicinal garden" },
  { cat: "therapy", cap: "Herbal oil preparation" },
  { cat: "pharmacy", cap: "Dispensing counter" },
  { cat: "clinic", cap: "Clinic exterior" },
];

export const navPrimary: [string, string][] = [
  ["/about", "About"],
  ["/specialists", "Specialists"],
  ["/spine", "Spine & Joint"],
  ["/skin", "Skin"],
  ["/wellness", "Wellness"],
  ["/family", "Family Care"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"],
];

export const navAll: [string, string][] = [
  ["/", "Home"],
  ["/about", "About"],
  ["/specialists", "Our Specialists"],
  ["/spine", "Spine & Joint"],
  ["/skin", "Skin Ailments"],
  ["/wellness", "Wellness"],
  ["/family", "Geriatric & Family"],
  ["/gallery", "Gallery"],
  ["/testimonials", "Reviews"],
  ["/contact", "Contact"],
];
