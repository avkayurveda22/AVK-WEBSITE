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
    conds: ["Neck Pain", "Sciatica", "Tendinitis", "Low Back Pain", "Numbness", "Osteoarthritis", "Slip Disc", "Fibromyalgia", "Rheumatoid Arthritis", "Ligament Injuries", "Frozen Shoulder", "Calcaneal Spur", "Joint Pain", "Tennis Elbow", "Carpal Tunnel Syndrome"],
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
    conds: ["Eczema", "Allergies", "Psoriasis", "Acne", "Dermatitis", "Scars", "Urticaria", "Vitiligo"],
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
  { name: "Dr. Akshata Shetty", role: "BAMS · Chief Physician", focus: "Spine & Joint · Skin Ailments · Women & Men Wellness · Family Medicine", bio: "Fifteen years of clinical Ayurveda, with expertise across musculoskeletal conditions, chronic skin ailments, hormonal health, and general family practice. Trained at Rajiv Gandhi University of Health Sciences. Dr. Akshata brings a classical, patient-first approach to every consultation — combining pulse diagnosis, personalised diet protocols, and authentic Panchakarma therapies.", years: "15 yrs" },
];

export const testimonials = [
  { name: "Sathish Murthy", role: "Software architect · HSR Layout", stars: 5, quote: "After two years of chronic back pain and endless painkillers, a 21-day spine programme here finally gave me relief. It's not a quick fix — it's a proper, classical process. Worth every rupee." },
  { name: "Kavya R.", role: "Teacher · Jayanagar", stars: 5, quote: "I had psoriasis flaring every winter for a decade. AVK's approach is slower — three months of diet, internal medicines, weekly reviews — but it's the first winter in ten years I haven't had a flare." },
  { name: "Ananya P.", role: "Architect · Bommanahalli", stars: 5, quote: "What I appreciate most is that Dr. Akshata doesn't over-prescribe. He listens, adjusts, and often tells me to fix my sleep before anything else. That kind of integrity is rare." },
  { name: "Ravi Kumar", role: "Retired · Electronic City", stars: 5, quote: "At 72, I was convinced my knees were done. Six weeks of Janu Basti and a walking routine later, I'm on morning walks again. The therapists are patient and very skilled." },
  { name: "Meera Iyer", role: "Yoga teacher · Sarjapur", stars: 5, quote: "I send my students here because I know they'll be assessed properly, not pushed into packages they don't need. The pulse reading alone is worth the visit." },
  { name: "Pradeep S.", role: "Father · Begur", stars: 5, quote: "My whole family sees Dr. Akshata — my parents for their BP and joints, my wife for her migraines, me for stress. It's rare to find a doctor who knows three generations." },
  { name: "Lakshmi Narayan", role: "Homemaker · BTM", stars: 5, quote: "I walked in with migraines and walked out, three weeks later, with a diet, a routine and no migraines. The detail in the treatment plan surprised me." },
  { name: "Rohan & Divya", role: "Couple · Koramangala", stars: 5, quote: "We came in for fertility support after a difficult year. The doctor took time to understand both of us, not just the 'issue'. Treatment was honest, unrushed, and — happily — successful." },
  { name: "Suresh B.", role: "Entrepreneur · JP Nagar", stars: 5, quote: "I travelled three hours for my first consultation. I'd do it again. The depth of questioning and the honesty of the prognosis is something I haven't seen at other clinics." },
];

export type Condition = {
  slug: string;
  name: string;
  speciality: string;
  specialityRoute: string;
  description: string;
  symptoms: string[];
  causes: string[];
  ayurvedicView: string;
  treatments: [string, string][];
};

export const conditions: Condition[] = [
  // Spine & Joint
  {
    slug: "neck-pain", name: "Neck Pain", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Neck pain is one of the most common musculoskeletal complaints, often caused by poor posture, prolonged screen use, or cervical spondylosis. At AVK, we treat neck pain through Marma Bandhana Chikitsa and targeted therapies that address the root cause — not just the symptom.",
    symptoms: ["Stiffness in the neck and shoulders", "Pain radiating to the arms or upper back", "Headaches originating from the neck", "Restricted range of motion", "Numbness or tingling in the hands"],
    causes: ["Cervical spondylosis", "Poor posture and prolonged screen time", "Muscle strain or spasm", "Whiplash injury", "Stress and tension"],
    ayurvedicView: "In Ayurveda, neck pain is primarily a vata disorder — aggravated vata causes dryness, stiffness, and degeneration in the cervical region. Treatment focuses on vata pacification through warm medicated oils, gentle fomentation, and Nasya therapy to nourish the cervical spine.",
    treatments: [["Greeva Basti", "Warm medicated oil pooled over the cervical region to reduce inflammation and nourish the vertebrae."], ["Abhyanga & Swedana", "Full-body oil massage followed by herbal steam therapy to relax muscles and improve circulation."], ["Nasya", "Medicated nasal drops to address vata in the head and neck region."], ["Marma therapy", "Gentle pressure on specific energy points to release tension and restore mobility."]],
  },
  {
    slug: "sciatica", name: "Sciatica", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Sciatica is a condition where pain radiates along the sciatic nerve — from the lower back through the hip and down the leg. At AVK, we use classical Ayurvedic protocols to address the compression and inflammation at the root, providing lasting relief without surgery.",
    symptoms: ["Sharp, shooting pain from lower back to leg", "Numbness or tingling in the leg or foot", "Weakness in the affected leg", "Pain worsening with sitting or standing", "Difficulty walking or bending"],
    causes: ["Herniated or bulging disc", "Spinal stenosis", "Piriformis syndrome", "Degenerative disc disease", "Sedentary lifestyle"],
    ayurvedicView: "Sciatica is known as Gridhrasi in Ayurveda — a vata-dominant condition where aggravated vata compresses and inflames the sciatic nerve pathway. Classical treatment involves oleation, fomentation, and specific Basti therapies to pacify vata and restore nerve function.",
    treatments: [["Kati Basti", "Warm medicated oil retained over the lumbar region to reduce disc inflammation and relieve nerve compression."], ["Patra Pinda Sweda", "Herbal bolus fomentation to reduce pain, stiffness, and inflammation along the nerve pathway."], ["Basti therapy", "Medicated enema therapy — the primary treatment for vata disorders — using specific oils and decoctions."], ["Internal medicines", "Classical formulations to strengthen the spine, reduce inflammation, and nourish nerve tissue."]],
  },
  {
    slug: "tendinitis", name: "Tendinitis", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Tendinitis is the inflammation or irritation of a tendon, commonly affecting the shoulder, elbow, wrist, or heel. At AVK, we treat tendinitis through anti-inflammatory Ayurvedic therapies that promote natural healing of the damaged tendon tissue.",
    symptoms: ["Pain at the site of the tendon, worsening with movement", "Swelling and tenderness", "A grating sensation when moving the joint", "Stiffness, especially in the morning", "Reduced range of motion"],
    causes: ["Repetitive motions or overuse", "Sports injuries", "Age-related degeneration", "Poor ergonomics at work", "Sudden increase in physical activity"],
    ayurvedicView: "Tendinitis involves aggravated vata and pitta — vata causing degeneration and stiffness, pitta causing inflammation and pain. Treatment aims to reduce both doshas through targeted external therapies and internal medicines that strengthen the snayu (tendon tissue).",
    treatments: [["Lepana", "Herbal paste application over the inflamed tendon to reduce swelling and pain."], ["Bandana Chikitsa", "Therapeutic bandaging with medicated oils to support and heal the tendon."], ["Abhyanga", "Localised oil massage with specific vata-pacifying oils to improve blood flow and healing."], ["Internal medicines", "Anti-inflammatory and tissue-strengthening formulations prescribed based on individual constitution."]],
  },
  {
    slug: "low-back-pain", name: "Low Back Pain", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Low back pain is the most frequent reason patients visit AVK. Whether acute or chronic, our approach treats it as a systemic vata imbalance — not just a local problem. Treatment combines Kati Basti, medicated Basti therapy, and lifestyle correction for lasting relief.",
    symptoms: ["Dull aching or sharp pain in the lower back", "Pain radiating to the buttocks or thighs", "Stiffness after prolonged sitting or rest", "Muscle spasms", "Difficulty standing upright or bending"],
    causes: ["Lumbar spondylosis or disc degeneration", "Muscle strain from lifting or posture", "Sedentary work habits", "Obesity", "Stress and lack of exercise"],
    ayurvedicView: "Known as Katigraha or Katishoola in Ayurveda, low back pain is a classic vata disorder. The dryness, roughness, and mobility of aggravated vata lead to degeneration and pain in the lumbar spine. Treatment focuses on deep oleation, warmth, and Basti therapy.",
    treatments: [["Kati Basti", "A warm pool of medicated oil retained over the lumbar region — the cornerstone therapy for low back pain at AVK."], ["Abhyanga & Swedana", "Full-body massage with warm oils followed by herbal steam to relax deep muscles and reduce stiffness."], ["Basti therapy", "A course of medicated enemas — the single most effective Ayurvedic treatment for vata disorders of the spine."], ["Lifestyle protocol", "Posture correction, targeted asanas, diet modification, and daily routine guidance."]],
  },
  {
    slug: "numbness", name: "Numbness", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Numbness or tingling in the extremities often signals nerve compression or impaired circulation. At AVK, we investigate the root cause — whether cervical, lumbar, or systemic — and treat it through nerve-nourishing Ayurvedic therapies.",
    symptoms: ["Loss of sensation in hands, feet, or limbs", "Pins-and-needles tingling", "Weakness in the affected area", "Burning sensation", "Difficulty gripping or walking"],
    causes: ["Cervical or lumbar disc compression", "Carpal tunnel syndrome", "Peripheral neuropathy", "Diabetes-related nerve damage", "Vitamin deficiency"],
    ayurvedicView: "Numbness (Supti) is a vata disorder where the flow of prana (vital energy) through the nerves is obstructed. Treatment focuses on clearing the channels (srotoshodhana), nourishing nerve tissue with medicated oils, and restoring normal vata movement.",
    treatments: [["Abhyanga with nerve-nourishing oils", "Deep massage with Dhanwantaram or Ksheerabala oil to restore nerve function and circulation."], ["Pinda Sweda", "Warm bolus fomentation using medicinal herbs to stimulate nerve endings and reduce numbness."], ["Nasya & Basti", "Combined therapy to address vata at its primary sites — head and colon — for systemic nerve nourishment."], ["Internal medicines", "Rasayana formulations to strengthen and regenerate nerve tissue over 3–6 months."]],
  },
  {
    slug: "osteoarthritis", name: "Osteoarthritis", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Osteoarthritis is the gradual wearing down of joint cartilage, most commonly affecting the knees, hips, and spine. At AVK, we slow degeneration and restore mobility through classical Ayurvedic therapies that nourish and protect joint tissue.",
    symptoms: ["Joint pain that worsens with activity", "Morning stiffness lasting less than 30 minutes", "Swelling around the joint", "Crepitus — cracking or grating sounds", "Reduced range of motion over time"],
    causes: ["Age-related cartilage wear", "Obesity placing excess load on joints", "Previous joint injuries", "Genetic predisposition", "Repetitive joint stress"],
    ayurvedicView: "Osteoarthritis (Sandhigatavata) is a degenerative vata disorder where dryness and roughness erode the cartilage and synovial fluid in joints. Treatment aims to nourish the joints from within, restore lubrication, and halt further degeneration.",
    treatments: [["Janu Basti / Sandhi Basti", "Warm medicated oil pooled over the affected joint to deeply nourish cartilage and reduce inflammation."], ["Abhyanga & Pinda Sweda", "Oil massage followed by warm herbal bolus application to improve circulation and reduce pain."], ["Basti therapy", "Medicated enemas with bone- and joint-nourishing formulations — the primary systemic treatment."], ["Internal medicines", "Classical preparations containing Guggulu, Ashwagandha, and other joint-strengthening herbs."]],
  },
  {
    slug: "slip-disc", name: "Slip Disc", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "A slipped (herniated) disc occurs when the soft centre of a spinal disc pushes through a crack in the outer casing, pressing on nearby nerves. At AVK, we treat disc herniations conservatively with classical Ayurvedic protocols — avoiding surgery in the majority of cases.",
    symptoms: ["Severe back pain, often sudden in onset", "Pain radiating to the arms or legs", "Numbness or tingling", "Muscle weakness in the affected area", "Pain worsening with coughing, sneezing, or bending"],
    causes: ["Heavy lifting with poor technique", "Age-related disc degeneration", "Sudden twisting movements", "Prolonged sitting", "Excess body weight"],
    ayurvedicView: "Disc herniation is understood as a severe vata vitiation affecting the spine (Kati). The displaced disc material creates pressure (vata obstruction) on nerves. Treatment focuses on reducing inflammation, restoring disc hydration through oleation, and gently guiding the disc back through specific therapies.",
    treatments: [["Kati Basti", "Extended warm oil retention over the affected spinal segment to reduce inflammation and nourish the disc."], ["Patra Pinda Sweda", "Herbal bolus fomentation applied along the spine to reduce muscle spasm and nerve irritation."], ["Basti therapy", "A carefully designed course of Anuvasana (oil) and Niruha (decoction) Basti — the most important treatment."], ["Rest & rehabilitation", "Guided rest protocol, gentle physiotherapy, and gradual return to activity over 4–8 weeks."]],
  },
  {
    slug: "fibromyalgia", name: "Fibromyalgia", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Fibromyalgia is a chronic condition characterised by widespread musculoskeletal pain, fatigue, and cognitive difficulties. At AVK, we address fibromyalgia as a systemic vata-pitta imbalance, using gentle, sustained therapies that calm the nervous system and reduce pain sensitivity.",
    symptoms: ["Widespread body pain and tenderness", "Chronic fatigue despite rest", "Sleep disturbances", "Cognitive difficulties (fibro fog)", "Heightened sensitivity to pain, light, or sound"],
    causes: ["Chronic stress and anxiety", "Sleep disorders", "Hormonal imbalances", "Physical or emotional trauma", "Genetic predisposition"],
    ayurvedicView: "Fibromyalgia reflects a deep-seated vata imbalance affecting the entire musculoskeletal and nervous systems. The erratic, hypersensitive nature of the condition is characteristic of disturbed vata. Treatment is gentle, slow, and focused on calming the nervous system through oleation, warmth, and nourishing therapies.",
    treatments: [["Sarvanga Abhyanga", "Full-body warm oil massage performed slowly and gently to calm the nervous system and reduce pain sensitivity."], ["Shirodhara", "A steady stream of warm medicated oil on the forehead — deeply calming for stress, sleep, and pain regulation."], ["Pinda Sweda", "Gentle herbal bolus application to ease widespread muscle pain and stiffness."], ["Rasayana therapy", "Rejuvenative internal medicines to rebuild strength, improve sleep, and restore vitality over 3–6 months."]],
  },
  {
    slug: "rheumatoid-arthritis", name: "Rheumatoid Arthritis", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Rheumatoid arthritis is an autoimmune condition where the body's immune system attacks the joints, causing inflammation, pain, and eventual joint damage. At AVK, we use classical Ayurvedic protocols to modulate the immune response, reduce inflammation, and protect joint integrity.",
    symptoms: ["Symmetrical joint pain and swelling", "Morning stiffness lasting over an hour", "Warm, tender, swollen joints", "Fatigue and low-grade fever", "Joint deformity over time if untreated"],
    causes: ["Autoimmune dysfunction", "Genetic predisposition", "Hormonal factors", "Chronic stress", "Environmental triggers"],
    ayurvedicView: "Rheumatoid arthritis (Amavata) is caused by the combination of ama (metabolic toxins) and aggravated vata lodging in the joints. Treatment addresses both — clearing ama through digestive correction and Panchakarma, while pacifying vata to reduce joint inflammation.",
    treatments: [["Langhana & Deepana", "Therapeutic fasting and digestive-fire strengthening to clear ama — the essential first step."], ["Valuka Sweda", "Dry heat fomentation with heated sand — preferred over oil therapies in the acute, inflammatory phase."], ["Virechana", "Therapeutic purgation to eliminate pitta and ama from the system."], ["Internal medicines", "Classical formulations like Simhanada Guggulu, Amritadi Guggulu, and Rasnasaptakam Kashayam."]],
  },
  {
    slug: "ligament-injuries", name: "Ligament Injuries", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Ligament injuries — sprains, partial tears, and chronic laxity — are common in the knee, ankle, and shoulder. At AVK, we support ligament healing through Ayurvedic therapies that reduce inflammation, strengthen connective tissue, and restore joint stability without surgical intervention.",
    symptoms: ["Pain and swelling at the injured joint", "Instability or giving way of the joint", "Bruising around the area", "Restricted movement", "Popping sound at the time of injury"],
    causes: ["Sports injuries and falls", "Sudden twisting or pivoting", "Direct impact to the joint", "Overuse and repetitive stress", "Weak supporting muscles"],
    ayurvedicView: "Ligament tissue (snayu) is governed by vata dosha. Injuries aggravate vata locally, causing pain, instability, and impaired healing. Treatment focuses on stabilising vata, reducing local inflammation, and nourishing the snayu dhatu to promote natural repair.",
    treatments: [["Bandana Chikitsa", "Therapeutic immobilisation and bandaging with medicated oils to support healing."], ["Lepana", "Anti-inflammatory herbal paste applied to the injury site to reduce swelling and pain."], ["Abhyanga with Murivenna", "Massage with specialised bone and ligament healing oil, traditional to Kerala Ayurveda."], ["Internal medicines", "Formulations to strengthen connective tissue and accelerate ligament repair."]],
  },
  {
    slug: "frozen-shoulder", name: "Frozen Shoulder", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Frozen shoulder (adhesive capsulitis) involves progressive stiffness and pain in the shoulder joint, severely limiting movement. At AVK, we treat it through targeted oleation, fomentation, and gentle mobilisation to restore full range of motion.",
    symptoms: ["Gradual onset of shoulder pain", "Increasing stiffness over weeks or months", "Inability to raise the arm or reach behind the back", "Pain worse at night", "Difficulty with daily activities like dressing"],
    causes: ["Prolonged immobilisation after injury or surgery", "Diabetes", "Thyroid disorders", "Age (40–60 years)", "Idiopathic — no identifiable cause"],
    ayurvedicView: "Frozen shoulder (Apabahuka) is a vata-kapha condition — vata causes pain and restriction, while kapha creates adhesions and stiffness in the joint capsule. Treatment involves breaking adhesions through oleation, restoring mobility through targeted fomentation, and pacifying both doshas.",
    treatments: [["Amsa Basti", "Warm medicated oil pooled over the shoulder joint to deeply penetrate and soften adhesions."], ["Patra Pinda Sweda", "Herbal bolus fomentation applied to the shoulder to reduce stiffness and improve range of motion."], ["Nasya", "Nasal administration of medicated oil to address vata in the upper body."], ["Gentle mobilisation", "Progressive shoulder exercises guided by our therapists alongside Ayurvedic treatment."]],
  },
  {
    slug: "calcaneal-spur", name: "Calcaneal Spur", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "A calcaneal spur is a bony outgrowth on the heel bone, causing sharp pain with every step. At AVK, we treat the underlying inflammation and tissue degeneration through targeted Ayurvedic therapies — providing relief without steroid injections or surgery.",
    symptoms: ["Sharp, stabbing heel pain — worst with first steps in the morning", "Pain after prolonged standing or walking", "Swelling at the bottom of the heel", "Tenderness on pressing the heel", "Difficulty walking barefoot"],
    causes: ["Plantar fasciitis", "Excess body weight", "Prolonged standing on hard surfaces", "Flat feet or high arches", "Improper footwear"],
    ayurvedicView: "Calcaneal spur (Vatakantaka) is a vata disorder affecting the heel. Aggravated vata causes degeneration and abnormal bone growth. Treatment focuses on reducing local vata through oleation, warmth, and internal medicines that address bone tissue metabolism.",
    treatments: [["Pada Abhyanga", "Warm medicated oil massage focused on the foot and heel to reduce inflammation and pain."], ["Agnikarma", "Therapeutic heat application — a classical procedure that provides rapid pain relief for heel spurs."], ["Lepana", "Anti-inflammatory herbal paste applied to the heel overnight to reduce swelling and pain."], ["Internal medicines", "Calcium-regulating and anti-inflammatory formulations to address the root cause of spur formation."]],
  },
  {
    slug: "joint-pain", name: "Joint Pain", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "General joint pain — whether in the knees, hips, wrists, or ankles — is one of the most common reasons patients come to AVK. We assess each case individually, identify the dosha imbalance, and design a treatment protocol that addresses both pain and the underlying cause.",
    symptoms: ["Pain in one or more joints", "Swelling or warmth around the joint", "Stiffness, especially after rest", "Reduced range of motion", "Cracking sounds during movement"],
    causes: ["Age-related wear and tear", "Inflammatory conditions", "Overuse or repetitive strain", "Obesity", "Nutritional deficiencies"],
    ayurvedicView: "Joint pain (Sandhishoola) can arise from vata, pitta, or kapha imbalances — or a combination. Vata causes dry, crackling pain; pitta causes hot, inflamed pain; kapha causes heavy, swollen pain. Accurate assessment of the dominant dosha is essential for effective treatment.",
    treatments: [["Sandhi Basti", "Warm medicated oil pooled over the affected joint for deep nourishment and pain relief."], ["Abhyanga & Swedana", "Oil massage followed by steam therapy to improve circulation and reduce stiffness."], ["Internal medicines", "Dosha-specific formulations — Guggulu preparations, Rasna-based decoctions, or anti-inflammatory compounds as indicated."], ["Diet & lifestyle", "Joint-friendly diet protocol, weight management guidance, and activity modification."]],
  },
  {
    slug: "tennis-elbow", name: "Tennis Elbow", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Tennis elbow (lateral epicondylitis) is a painful condition affecting the outer elbow, caused by overuse of the forearm muscles. At AVK, we treat it through targeted Ayurvedic therapies that reduce tendon inflammation and promote tissue repair.",
    symptoms: ["Pain on the outer side of the elbow", "Weakness in grip strength", "Pain worsening when lifting, gripping, or twisting", "Tenderness on pressing the elbow", "Pain radiating down the forearm"],
    causes: ["Repetitive gripping or twisting motions", "Computer and mouse overuse", "Racquet sports", "Manual labour", "Poor ergonomics"],
    ayurvedicView: "Tennis elbow involves local vata-pitta aggravation at the tendon attachment site. Vata causes degeneration of the tendon, while pitta drives the inflammatory response. Treatment combines anti-inflammatory external therapies with vata-pacifying internal medicines.",
    treatments: [["Lepana", "Cooling, anti-inflammatory herbal paste applied to the elbow to reduce pain and swelling."], ["Bandana with medicated oil", "Therapeutic wrapping with oils like Murivenna or Pinda Taila to heal the damaged tendon."], ["Agnikarma", "Controlled therapeutic heat application for rapid pain relief — highly effective for tennis elbow."], ["Internal medicines", "Anti-inflammatory and tissue-healing formulations to support recovery from within."]],
  },
  {
    slug: "carpal-tunnel-syndrome", name: "Carpal Tunnel Syndrome", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Carpal tunnel syndrome occurs when the median nerve is compressed at the wrist, causing pain, numbness, and weakness in the hand. At AVK, we treat it through nerve-nourishing Ayurvedic therapies that reduce compression and restore hand function.",
    symptoms: ["Numbness and tingling in the thumb, index, and middle fingers", "Pain in the wrist, hand, or forearm", "Weakness in grip — dropping objects", "Symptoms worse at night", "Shaking or flicking hands for relief"],
    causes: ["Repetitive hand and wrist motions", "Prolonged computer use", "Pregnancy-related fluid retention", "Thyroid disorders", "Wrist injuries or arthritis"],
    ayurvedicView: "Carpal tunnel syndrome is a vata disorder (Manyastambha variant affecting the wrist) where vata obstructs the nerve channel at the wrist. Treatment focuses on reducing local inflammation, nourishing the nerve, and clearing the channel obstruction through oleation and targeted therapies.",
    treatments: [["Mani Bandha Basti", "Warm medicated oil pooled over the wrist to reduce nerve compression and inflammation."], ["Abhyanga with Ksheerabala oil", "Nerve-nourishing oil massage of the hand, wrist, and forearm to restore sensation and strength."], ["Nasya", "Nasal therapy to address vata at its systemic origin, supporting overall nerve health."], ["Internal medicines", "Nerve-strengthening formulations and vata-pacifying herbs to prevent recurrence."]],
  },

  // Skin Ailments
  {
    slug: "eczema", name: "Eczema", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Eczema (atopic dermatitis) is a chronic inflammatory skin condition causing itchy, red, dry patches. At AVK, we treat eczema as an internal imbalance — addressing digestion, blood purity, and immune function for lasting relief rather than surface-level suppression.",
    symptoms: ["Intensely itchy, dry skin", "Red or inflamed patches", "Oozing or crusting in acute phases", "Thickened, leathery skin from chronic scratching", "Flare-ups triggered by stress, weather, or diet"],
    causes: ["Genetic predisposition and family history", "Impaired skin barrier function", "Food sensitivities", "Stress and anxiety", "Environmental allergens"],
    ayurvedicView: "Eczema (Vicharchika) is a kapha-pitta disorder where impaired digestion creates ama (toxins) that enter the blood (rakta dhatu) and manifest on the skin. Treatment purifies the blood, strengthens digestion, and restores skin health from within.",
    treatments: [["Dietary reset", "A 21-day customised elimination diet — the most important intervention for eczema at AVK."], ["Blood purification", "Internal medicines using Manjistha, Neem, and Khadira to cleanse rakta dhatu."], ["Takra Dhara", "Medicated buttermilk poured over affected areas — deeply cooling and healing for inflamed skin."], ["External applications", "Gentle, medicated oils and pastes — never harsh chemicals or steroids."]],
  },
  {
    slug: "allergies", name: "Allergies", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Allergic skin reactions — hives, rashes, and contact dermatitis — reflect an overactive immune response. At AVK, we address allergies by strengthening immunity and reducing hypersensitivity through constitutional Ayurvedic treatment, rather than suppressing symptoms.",
    symptoms: ["Itchy skin rashes or hives", "Swelling of the skin", "Redness and inflammation", "Recurring reactions to specific triggers", "Dry, flaking skin"],
    causes: ["Food allergens", "Environmental triggers — dust, pollen, chemicals", "Medications", "Weak digestive fire (mandagni)", "Accumulated toxins (ama)"],
    ayurvedicView: "Allergies indicate a disturbed immune response rooted in weak agni (digestive fire) and accumulated ama. When agni is weak, incompletely digested food creates toxins that sensitise the immune system. Treatment strengthens agni, clears ama, and restores immune balance.",
    treatments: [["Agni deepana", "Digestive-fire strengthening through specific herbs and dietary practices — the foundation of allergy treatment."], ["Virechana", "Therapeutic purgation to eliminate pitta and ama from the system, reducing allergic sensitivity."], ["Internal medicines", "Immunomodulating formulations using Haridra, Guduchi, and Amalaki to rebuild balanced immunity."], ["Lifestyle protocol", "Identification and avoidance of triggers, seasonal detox routines, and pranayama for respiratory allergies."]],
  },
  {
    slug: "psoriasis", name: "Psoriasis", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Psoriasis is a chronic autoimmune condition causing rapid skin cell turnover, resulting in thick, scaly patches. At AVK, we treat psoriasis through sustained internal purification and dietary correction — typically over 3–6 months — for results that conventional treatments rarely achieve.",
    symptoms: ["Thick, silvery-white scales on red patches", "Dry, cracked skin that may bleed", "Itching, burning, or soreness", "Thickened or ridged nails", "Flare-ups triggered by stress, infection, or weather"],
    causes: ["Autoimmune dysfunction", "Genetic predisposition", "Chronic stress", "Infections and skin injuries", "Smoking, alcohol, and dietary factors"],
    ayurvedicView: "Psoriasis (Kitibha/Ekakushtha) is a deep-seated kapha-vata skin disorder with pitta involvement. Impure blood (dushita rakta), accumulated toxins, and compromised immunity drive the condition. Treatment requires sustained Shodhana (purification) and Shamana (palliative) therapy.",
    treatments: [["Panchakarma", "A structured detoxification programme — Vamana or Virechana — to clear deep-seated toxins driving the autoimmune response."], ["Takra Dhara", "Medicated buttermilk therapy over the affected areas — profoundly healing for psoriatic skin."], ["Strict dietary protocol", "A customised anti-psoriatic diet eliminating triggers — the single most influential lever in psoriasis management."], ["Internal medicines", "Blood-purifying and immune-modulating formulations taken consistently over 3–6 months."]],
  },
  {
    slug: "acne", name: "Acne", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Acne — whether adolescent or adult — reflects an internal imbalance of digestion, hormones, or stress. At AVK, we treat acne from the inside out, addressing the root causes through diet, blood purification, and gentle topical care rather than harsh chemicals.",
    symptoms: ["Pimples, whiteheads, and blackheads", "Painful cystic or nodular lesions", "Oily skin", "Scarring and post-inflammatory pigmentation", "Flare-ups around menstrual cycles or stress"],
    causes: ["Hormonal imbalances — puberty, PCOS, stress", "Poor digestion and constipation", "Excess oily or processed food", "Stress and sleep deprivation", "Improper skincare routines"],
    ayurvedicView: "Acne (Yuvana Pidaka / Mukhadooshika) is primarily a pitta-kapha disorder. Excess pitta heats the blood, while kapha blocks the channels (srotas) in the skin. Treatment focuses on cooling pitta, purifying rakta, and clearing blocked skin channels.",
    treatments: [["Dietary correction", "Elimination of pitta-aggravating foods — spicy, oily, fermented — and introduction of cooling, blood-purifying foods."], ["Blood purification", "Internal medicines with Manjistha, Sariva, and Neem to cool and cleanse the blood."], ["Nasya", "Medicated nasal therapy to clear excess kapha and address hormonal acne."], ["External care", "Gentle herbal face packs and medicated oils — no chemical peels, no harsh exfoliation."]],
  },
  {
    slug: "dermatitis", name: "Dermatitis", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Dermatitis — including contact dermatitis, seborrheic dermatitis, and other inflammatory skin reactions — causes redness, itching, and irritation. At AVK, we treat dermatitis by identifying the underlying dosha imbalance and addressing it through internal purification and gentle external care.",
    symptoms: ["Red, inflamed, itchy skin", "Blisters or oozing in acute cases", "Dry, flaky, or scaly patches", "Burning sensation", "Skin darkening in chronic areas"],
    causes: ["Contact with irritants or allergens", "Stress and hormonal changes", "Fungal overgrowth (seborrheic)", "Weak digestive fire", "Genetic predisposition"],
    ayurvedicView: "Dermatitis is classified under Kushtha (skin diseases) in Ayurveda, involving varying combinations of vata, pitta, and kapha with rakta dushti (blood vitiation). Accurate dosha assessment is critical — treatment varies significantly based on the dominant imbalance.",
    treatments: [["Dosha assessment", "Detailed pulse diagnosis and history to determine the specific type of dermatitis and dominant dosha involvement."], ["Internal purification", "Blood-purifying and dosha-specific medicines — cooling for pitta types, drying for kapha types."], ["Takra Dhara or Dhanyamla Dhara", "Medicated liquid therapy over affected areas — chosen based on the type of dermatitis."], ["Diet & lifestyle", "Trigger identification, elimination diet, and stress management protocols."]],
  },
  {
    slug: "scars", name: "Scars", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Scars — from acne, injuries, or surgery — can be significantly improved through Ayurvedic therapies that promote skin regeneration, improve blood circulation, and restore the natural texture and tone of the skin.",
    symptoms: ["Raised or depressed skin at the scar site", "Discolouration — darker or lighter than surrounding skin", "Tightness or restricted movement near the scar", "Itching at the scar site", "Self-consciousness about visible scars"],
    causes: ["Acne scarring", "Surgical incisions", "Burns", "Injuries and wounds", "Keloid-prone skin type"],
    ayurvedicView: "Scars reflect disrupted healing in the skin tissue (twak and mamsa dhatu). Ayurvedic treatment promotes proper tissue regeneration by improving local blood circulation (rakta dhatu), nourishing skin tissue, and using specific herbs that stimulate skin cell renewal.",
    treatments: [["Lepana", "Specialised herbal paste applications using Kumkumadi, Manjistha, and Lodhra to lighten and soften scars."], ["Abhyanga with medicated oils", "Regular application of Kumkumadi Taila or Nalpamaradi oil to improve skin texture and reduce discolouration."], ["Raktamokshana", "Localised blood-letting (where indicated) to improve circulation and promote healing at the scar site."], ["Internal medicines", "Skin-nourishing and blood-purifying formulations to support regeneration from within."]],
  },
  {
    slug: "urticaria", name: "Urticaria", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Urticaria (hives) causes sudden, itchy welts on the skin that appear and disappear unpredictably. At AVK, we address both acute and chronic urticaria by treating the underlying immune hypersensitivity and digestive dysfunction that drive recurrent episodes.",
    symptoms: ["Raised, itchy welts (wheals) on the skin", "Welts that change size and shape", "Swelling of lips, eyelids, or throat (angioedema)", "Episodes triggered by heat, stress, or specific foods", "Chronic recurring episodes lasting weeks or months"],
    causes: ["Food allergens", "Medications", "Infections", "Stress and heat", "Autoimmune conditions"],
    ayurvedicView: "Urticaria (Sheetapitta/Udarda) is a pitta-kapha disorder with vata involvement. Aggravated pitta in the blood combines with kapha to create the characteristic raised, itchy welts. Treatment focuses on cooling pitta, clearing kapha, and strengthening the immune system.",
    treatments: [["Virechana", "Therapeutic purgation to eliminate excess pitta from the system — often the single most effective intervention."], ["Internal medicines", "Haridrakhandam, Kaisora Guggulu, and other classical formulations to reduce allergic sensitivity."], ["Dietary protocol", "Strict avoidance of pitta-aggravating foods — sour, fermented, spicy — and emphasis on cooling, simple meals."], ["Pranayama & stress management", "Sheetali pranayama and lifestyle modifications to reduce stress-triggered episodes."]],
  },
  {
    slug: "vitiligo", name: "Vitiligo", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Vitiligo causes loss of skin pigmentation in patches, creating white spots on the skin. At AVK, we treat vitiligo through a sustained, multi-month Ayurvedic protocol that stimulates melanocyte regeneration and addresses the autoimmune component of the condition.",
    symptoms: ["White or depigmented patches on the skin", "Patches that gradually expand", "Premature greying of hair", "Loss of colour in the mouth or nose lining", "Sensitivity to sun in affected areas"],
    causes: ["Autoimmune destruction of melanocytes", "Genetic predisposition", "Severe sunburn or chemical exposure", "Chronic stress", "Vitamin D and B12 deficiency"],
    ayurvedicView: "Vitiligo (Shwitra/Kilasa) is a tridoshic condition with predominant pitta and bhrajaka pitta involvement. The destruction of skin pigment is driven by vitiated pitta affecting the bhrajaka pitta (the sub-dosha responsible for skin colour). Treatment requires prolonged, consistent therapy.",
    treatments: [["Bakuchi therapy", "Internal and external use of Bakuchi (Psoralea corylifolia) — the cornerstone herb for vitiligo in Ayurveda."], ["Panchakarma", "Periodic Virechana and Raktamokshana to purify the blood and modulate the immune response."], ["Medicated oil application", "Daily application of specific oils containing Bakuchi, Khadira, and other melanocyte-stimulating herbs."], ["Internal medicines", "Long-term formulations to balance pitta, purify blood, and support repigmentation — typically 6–12 months."]],
  },
];

export function getConditionsBySpeciality(specialitySlug: string): Condition[] {
  const s = specialities.find((x) => x.slug === specialitySlug);
  if (!s) return [];
  return s.conds.map((name) => conditions.find((c) => c.name === name)).filter(Boolean) as Condition[];
}

export function conditionSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

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
