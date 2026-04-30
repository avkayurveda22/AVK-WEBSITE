  export const clinic = {
  name: "AVK Ayurvedic Clinic & Pharmacy",
  phone: "+91 98449 79745",
  phoneHref: "tel:+919844979745",
  whatsappHref: "https://wa.me/919844979745?text=Hi%20AVK%2C%20I%27d%20like%20to%20book%20an%20appointment.",
  address1: "#2B/1, Akshayanagar Main Road",
  address2: "Opp. Fullinfaws College, Yellanahalli",
  address3: "Begur Post, Bangalore — 560068",
  email: "care@avkayurveda.in",
  hours: [
    { d: "Monday – Friday", t: "10:30 AM — 8:00 PM" },
    { d: "Saturday", t: "10:30 AM — 8:00 PM" },
    { d: "Sunday", t: "Closed" },
  ],
};

export type Speciality = {
  slug: string;
  name: string;
  icon: "spine" | "skin" | "family";
  route: string;
  tagline: string;
  short: string;
  long: string;
  conds: string[];
  approach: [string, string][];
};

const fiveStageApproach: [string, string][] = [
  ["Consultation", "An unhurried 30–45 minute consultation with our Ayurvedic physician — medical history, lifestyle, prior treatments and the root cause behind your condition."],
  ["Diagnostics", "Digital X-ray, range-of-motion testing, orthopedic and neurological assessment, and dosha evaluation — so every therapy is matched precisely to your body."],
  ["Personalized Plan", "A customized protocol — session count, frequency, herbal formulations, diet and home-care — walked through in detail before treatment begins."],
  ["Therapy Sessions", "12 to 30 sessions of precise Marma point stimulation and herbal bandaging under trained therapists. Typically 45–90 minutes per session — gentle, non-invasive, with no downtime."],
  ["Wellness & Follow-up", "Ongoing posture, diet and daily-routine guidance to sustain recovery. Follow-up consultations scheduled as needed to monitor progress and prevent recurrence."],
];

export const specialities: Speciality[] = [
  {
    slug: "spine-joint", name: "Spine & Joint", icon: "spine", route: "spine",
    tagline: "For backs, knees, necks and the everyday stiffness that slows you down.",
    short: "Non-surgical care for chronic spine, joint and musculoskeletal conditions — through Marma therapy, herbal bandaging and root-cause Ayurvedic protocols.",
    long: "Our Spine & Joint programme addresses acute and chronic musculoskeletal conditions — from everyday stiffness through to slip disc, sciatica, arthritis and nerve compression. Through classical Marma therapy, herbal bandaging (Bandana Chikitsa) and internal herbal formulations, we realign the spine, release nerve pressure and restore mobility — without surgery, steroids or long-term medication.",
    conds: ["Low Back Pain", "Neck Pain", "Slip Disc", "Sciatica", "Joint Pain", "Ligament Injuries", "Frozen Shoulder", "Tennis Elbow", "Tendinitis", "Osteoarthritis", "Rheumatoid Arthritis", "Fibromyalgia", "Calcaneal Spur", "Carpal Tunnel Syndrome", "Numbness"],
    approach: fiveStageApproach,
  },
  {
    slug: "skin", name: "Skin Ailments", icon: "skin", route: "skin",
    tagline: "Chronic, recurring and stress-linked skin conditions — treated from the root.",
    short: "Root-cause treatment for stubborn and chronic skin conditions — through internal purification with medications and root cause treatment.",
    long: "At AVK, skin conditions are approached as expressions of internal imbalance — often linked to heat, toxins (ama), stress or digestive weakness. Our treatment purifies the blood, rebalances doshas and strengthens immunity through personalized herbal formulations, internal purification with medications and root cause treatment — delivering lasting results even in chronic and recurring cases.",
    conds: ["Eczema", "Psoriasis", "Dermatitis", "Vitiligo", "Urticaria", "Allergies", "Acne", "Scars", "Chronic Itching"],
    approach: fiveStageApproach,
  },
  {
    slug: "geriatric", name: "Geriatric Care & Family Medicine", icon: "family", route: "family",
    tagline: "Age-friendly care, and a family doctor for the rest of the household.",
    short: "Gentle, preventive Ayurvedic care for seniors and families — everyday wellness combined with specialized support for age-related concerns.",
    long: "Our geriatric and family care programme offers gentle, preventive Ayurvedic care for seniors and their families across generations. Through age-appropriate Marma therapy, herbal formulations and lifestyle support, we address joint and mobility concerns, cognitive wellness, chronic lifestyle conditions and seasonal immunity — while providing a trusted family doctor for everyday ailments too.",
    conds: ["Age-related joint & mobility", "Memory & cognitive wellness", "Chronic lifestyle conditions", "Immunity & seasonal care", "Preventive family wellness", "Post-illness rejuvenation"],
    approach: fiveStageApproach,
  },
];

export const specialists = [
  { name: "Dr. Akshata Shetty", role: "BAMS · Chief Physician", focus: "Spine & Joint · Skin Ailments · Family Medicine", bio: "Fifteen years of clinical Ayurveda, with expertise across musculoskeletal conditions, chronic skin ailments, hormonal health, and general family practice. Studied at SDM Hassan and secured her BAMS degree from Rajiv Gandhi University of Health Sciences. Dr. Akshata brings a classical, patient-first approach to every consultation — combining pulse diagnosis, Marma therapy, personalized herbal formulations and authentic Bandana Chikitsa.", years: "15 yrs" },
];

export const testimonials = [
  {
    name: "TJ Anand",
    role: "Google review · May 2025",
    stars: 5,
    quote: "I highly recommend AVK Ayurvedic Clinic, especially due to the outstanding care provided by Dr. Akshatha. I had taken my parents to her for treatment of their joint pains that had found a dead end with allopathic medicine. From our first visit, I was impressed by the clinic's warm atmosphere and deep commitment to holistic well-being. Dr. Akshatha's expertise in Ayurveda and her care for the patients' well-being are truly remarkable. She's incredibly compassionate, took the time to listen, explained every step, and answered every question with patience and reassurance. Her treatments have been highly effective, leading to significant improvement in mobility for both my parents. If you're looking for authentic Ayurvedic care delivered with genuine expertise and compassion, Dr. Akshatha at AVK is an absolute standout. Thank you Doctor — you are a blessing.",
  },
  {
    name: "Sonia",
    role: "Google review · April 2026",
    stars: 5,
    quote: "Dr. Akshata Shetty has a very caring approach towards patients. She took the time to understand my health concerns in detail and explained the treatment in a simple and clear way. The medicines were natural and effective, and I could see improvement within a few weeks. Treatment is effective and focused on long-term health. Highly recommended. — Nandini and Family.",
  },
  {
    name: "Parvatamma Chandrappa",
    role: "Google review · August 2024",
    stars: 5,
    quote: "A healing touch at 64. At my age, finding a treatment that provides relief without the side effects often associated with conventional medicine can be a challenge. My journey to alleviate the pain from an L4 and L5 disc bulge and knee pain led me to Dr. Akshatha and the ancient wisdom of Ayurveda. Her approach goes beyond treating ailments — she seeks to understand the individual and their unique health challenges. The herbal packing treatment she administered was a testament to the power of natural remedies. After a long period of suffering, I am now able to walk, sit and perform my daily chores with minimal discomfort — a newfound freedom that has dramatically improved my quality of life.",
  },
  {
    name: "Devaiah NU",
    role: "Google review · October 2024",
    stars: 5,
    quote: "Had treatment for my knee ligament stretch from playing badminton, and Dr. Akshata suggested an ayurvedic leg pack which we kept on for 24 hours, twice. I felt instant relief. 5★",
  },
  {
    name: "Sowjanya Shetty",
    role: "Google review · August 2024",
    stars: 5,
    quote: "My experience with Dr. Akshatha was really great. I had been having digestion issues for more than 10 years and tried addressing them with many doctors, but from the time I started consulting with Dr. Akshatha, things have completely come on track. My digestion is steady and I feel great about my health.",
  },
  {
    name: "Mamatha Praveen",
    role: "Google review · April 2023",
    stars: 5,
    quote: "My mother was suffering from pain in her lower limb due to a bulging lumbar disc for six months. We consulted so many doctors and they all advised an operation. Then we consulted Dr. Akshatha — an orthopedic specialist in ayurvedic treatment — and started treatment with her. Now my mother is feeling much better than before, and we are continuing the treatment. Thank you Doctor.",
  },
  {
    name: "Chaithra Sriram",
    role: "Google review · March 2023",
    stars: 5,
    quote: "This place and Dr. Akshata Shetty have been a life-changing experience for my mother. The doctor is very kind and caring. I would definitely recommend this place for healthy life consulting. You are given enough time to explain your problems and understand the suggested treatment procedure. Best place for ayurvedic treatment — my mother is happy now without any back pain.",
  },
  {
    name: "Mallesha Rao K.L",
    role: "Google review · March 2023",
    stars: 5,
    quote: "Go-to place for ortho-related issues. I took my wife for a cervical issue and the herbal pack from Dr. Akshata is helping a lot — she's feeling way better than at any other place we have visited. I recommend the doctor!",
  },
  {
    name: "Ram Jilal",
    role: "Google review · June 2024",
    stars: 5,
    quote: "Very experienced doctor — we are very happy with the treatment.",
  },
  {
    name: "Naresh Jayakumar",
    role: "Google review · March 2023",
    stars: 5,
    quote: "Very effective and relevant treatment given.",
  },
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
    slug: "low-back-pain", name: "Low Back Pain", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Low back pain is the single most frequent reason patients come to AVK. Whether acute or chronic, our approach treats it as a systemic vata imbalance — not just a local problem. Through Marma therapy, herbal bandaging and internal formulations, we address the root cause for lasting relief.",
    symptoms: ["Dull aching or sharp pain in the lower back", "Pain radiating to the buttocks or thighs", "Stiffness after prolonged sitting or rest", "Muscle spasms", "Difficulty standing upright or bending"],
    causes: ["Lumbar spondylosis or disc degeneration", "Muscle strain from lifting or posture", "Sedentary work habits", "Excess body weight", "Stress and lack of movement"],
    ayurvedicView: "Known as Katigraha or Katishoola in Ayurveda, low back pain is a classic vata disorder. The dryness, roughness and mobility of aggravated vata lead to degeneration and pain in the lumbar spine. Treatment focuses on stimulating the Kati marma, nourishing tissues through medicated herbal bandaging and pacifying vata from within.",
    treatments: [
      ["Marma Point Stimulation", "Precise, calibrated stimulation of the Kati, Katikataruna and Kukundara marma points to release deep muscular tension, restore circulation and re-awaken the lumbar region's natural healing response."],
      ["Herbal Bandaging", "Medicated pastes, oils and decoctions applied over the lumbar region and secured with therapeutic bandages — allowing anti-inflammatory and tissue-nourishing herbs to penetrate deeply over time."],
      ["Medicinal Formulations", "Internal herbal and mineral preparations selected for their anti-inflammatory, analgesic and regenerative properties — tailored to your constitution and the severity of the condition."],
      ["Lifestyle & Dietary Guidance", "Posture correction, targeted asanas, vata-pacifying diet and a simple daily routine (dinacharya) designed to support and sustain the clinical treatment."],
    ],
  },
  {
    slug: "neck-pain", name: "Neck Pain", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Neck pain is one of the most common musculoskeletal complaints, often caused by poor posture, prolonged screen use or cervical spondylosis. At AVK, we treat neck pain through Marma therapy and herbal bandaging that address the root cause — not just the symptom.",
    symptoms: ["Stiffness in the neck and shoulders", "Pain radiating to the arms or upper back", "Headaches originating from the neck", "Restricted range of motion", "Numbness or tingling in the hands"],
    causes: ["Cervical spondylosis", "Poor posture and prolonged screen time", "Muscle strain or spasm", "Whiplash injury", "Stress and tension"],
    ayurvedicView: "In Ayurveda, neck pain is primarily a vata disorder — aggravated vata causes dryness, stiffness and degeneration in the cervical region. Treatment pacifies vata through stimulation of the Krikatika and Manya marma points, supported by medicated herbal bandaging over the cervical spine.",
    treatments: [
      ["Marma Point Stimulation", "Gentle, precise stimulation of the Krikatika, Manya and Siramatruka marma points to release cervical muscular tension and restore circulation."],
      ["Herbal Bandaging", "Warm medicated pastes and oils applied to the neck and secured with therapeutic bandages — sustaining localized healing at the exact point of imbalance."],
      ["Medicinal Formulations", "Internal preparations combining anti-inflammatory and vata-pacifying herbs, tailored to your constitution."],
      ["Lifestyle & Dietary Guidance", "Screen-ergonomics correction, posture retraining, vata-pacifying diet and a short daily routine designed to prevent recurrence."],
    ],
  },
  {
    slug: "slip-disc", name: "Slip Disc", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "A slipped (herniated) disc occurs when the soft centre of a spinal disc pushes through a crack in the outer casing, pressing on nearby nerves. At AVK, we treat disc herniations conservatively through Marma therapy and herbal bandaging — avoiding surgery in the majority of cases.",
    symptoms: ["Severe back pain, often sudden in onset", "Pain radiating to the arms or legs", "Numbness or tingling", "Muscle weakness in the affected area", "Pain worsening with coughing, sneezing or bending"],
    causes: ["Heavy lifting with poor technique", "Age-related disc degeneration", "Sudden twisting movements", "Prolonged sitting", "Excess body weight"],
    ayurvedicView: "Disc herniation is understood as a severe vata vitiation affecting the spine, where displaced disc material creates pressure on nerves. Treatment focuses on relieving nerve compression, nourishing the disc through sustained herbal bandaging, and stimulating the Kati marma to restore structural alignment.",
    treatments: [
      ["Marma Point Stimulation", "Carefully calibrated stimulation of the Kati, Katikataruna and adjacent marma points to release nerve compression and restore the spine's natural alignment."],
      ["Herbal Bandaging", "Sustained application of medicated oils and pastes along the affected spinal segment — delivering deep, continuous healing without surgical intervention."],
      ["Medicinal Formulations", "Internal formulations with regenerative and anti-inflammatory herbs to nourish disc tissue, reduce inflammation and strengthen surrounding structures."],
      ["Lifestyle & Dietary Guidance", "Guided rest protocol, gradual return to activity, posture correction and dietary support — typically over 4–8 weeks."],
    ],
  },
  {
    slug: "sciatica", name: "Sciatica", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Sciatica is a condition where pain radiates along the sciatic nerve — from the lower back through the hip and down the leg. At AVK, we use Marma therapy and herbal bandaging to address nerve compression and inflammation at the root, providing lasting relief without surgery.",
    symptoms: ["Sharp, shooting pain from lower back to leg", "Numbness or tingling in the leg or foot", "Weakness in the affected leg", "Pain worsening with sitting or standing", "Difficulty walking or bending"],
    causes: ["Herniated or bulging disc", "Spinal stenosis", "Piriformis syndrome", "Degenerative disc disease", "Sedentary lifestyle"],
    ayurvedicView: "Sciatica is known as Gridhrasi in Ayurveda — a vata-dominant condition where aggravated vata compresses and inflames the sciatic nerve pathway. Treatment stimulates the Kukundara and Kati marma points to release compression, with sustained herbal bandaging to nourish the nerve and reduce inflammation.",
    treatments: [
      ["Marma Point Stimulation", "Precise stimulation of Kukundara, Kati and Janu marma points along the sciatic pathway to release nerve compression and restore normal vata movement."],
      ["Herbal Bandaging", "Warm medicated pastes and oils applied along the lumbar region and down the nerve path — reducing inflammation and supporting nerve recovery."],
      ["Medicinal Formulations", "Internal medicines with nerve-nourishing and anti-inflammatory herbs to strengthen the spine, reduce pain and support long-term recovery."],
      ["Lifestyle & Dietary Guidance", "Activity modification, targeted stretches, vata-pacifying diet and a daily routine to prevent flare-ups."],
    ],
  },
  {
    slug: "joint-pain", name: "Joint Pain", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "General joint pain — whether in the knees, hips, wrists or ankles — is one of the most common reasons patients come to AVK. We assess each case individually, identify the dosha imbalance, and design a treatment protocol that addresses both pain and the underlying cause.",
    symptoms: ["Pain in one or more joints", "Swelling or warmth around the joint", "Stiffness, especially after rest", "Reduced range of motion", "Cracking sounds during movement"],
    causes: ["Age-related wear and tear", "Inflammatory conditions", "Overuse or repetitive strain", "Excess body weight", "Nutritional deficiencies"],
    ayurvedicView: "Joint pain (Sandhishoola) can arise from vata, pitta or kapha imbalances — or a combination. Vata causes dry, crackling pain; pitta causes hot, inflamed pain; kapha causes heavy, swollen pain. Accurate assessment of the dominant dosha is essential for effective treatment.",
    treatments: [
      ["Marma Point Stimulation", "Stimulation of the joint-specific marma points (Janu, Kurpara, Gulpha, Mani Bandha) to improve circulation and ease pain at the source."],
      ["Herbal Bandaging", "Medicated pastes and oils applied over the affected joint and secured with bandages — delivering sustained, localized healing."],
      ["Medicinal Formulations", "Dosha-specific internal preparations using traditional joint-strengthening herbs and minerals."],
      ["Lifestyle & Dietary Guidance", "Joint-friendly diet, weight management advice and activity modification tailored to the affected joints."],
    ],
  },
  {
    slug: "ligament-injuries", name: "Ligament Injuries", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Ligament injuries — sprains, partial tears and chronic laxity — are common in the knee, ankle and shoulder. At AVK, we support ligament healing through Marma therapy and herbal bandaging that reduce inflammation, strengthen connective tissue and restore joint stability without surgical intervention.",
    symptoms: ["Pain and swelling at the injured joint", "Instability or giving way of the joint", "Bruising around the area", "Restricted movement", "Popping sound at the time of injury"],
    causes: ["Sports injuries and falls", "Sudden twisting or pivoting", "Direct impact to the joint", "Overuse and repetitive stress", "Weak supporting muscles"],
    ayurvedicView: "Ligament tissue (snayu) is governed by vata dosha. Injuries aggravate vata locally, causing pain, instability and impaired healing. Treatment stabilizes vata through targeted marma stimulation, reduces local inflammation via herbal bandaging, and nourishes snayu dhatu to promote natural repair.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of joint-supporting marma points to restore circulation and reactivate healing around the injured ligament."],
      ["Herbal Bandaging", "Therapeutic bandaging with medicated oils (traditional formulations like Murivenna) to support the joint and accelerate tendon and ligament repair."],
      ["Medicinal Formulations", "Internal medicines to strengthen connective tissue, reduce swelling and support natural ligament regeneration."],
      ["Lifestyle & Dietary Guidance", "Progressive rehabilitation, muscle-strengthening routine and nourishing diet to prevent re-injury."],
    ],
  },
  {
    slug: "frozen-shoulder", name: "Frozen Shoulder", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Frozen shoulder (adhesive capsulitis) involves progressive stiffness and pain in the shoulder joint, severely limiting movement. At AVK, we treat it through Marma therapy, herbal bandaging and gentle mobilisation to restore full range of motion.",
    symptoms: ["Gradual onset of shoulder pain", "Increasing stiffness over weeks or months", "Inability to raise the arm or reach behind the back", "Pain worse at night", "Difficulty with daily activities like dressing"],
    causes: ["Prolonged immobilisation after injury or surgery", "Diabetes", "Thyroid disorders", "Age (40–60 years)", "Idiopathic — no identifiable cause"],
    ayurvedicView: "Frozen shoulder (Apabahuka) is a vata-kapha condition — vata causes pain and restriction, while kapha creates adhesions and stiffness in the joint capsule. Treatment combines Amsa marma stimulation with sustained herbal bandaging to break adhesions and restore mobility.",
    treatments: [
      ["Marma Point Stimulation", "Precise stimulation of the Amsa, Amsaphalaka and Siramatruka marma points to release deep capsular tension and restore shoulder mobility."],
      ["Herbal Bandaging", "Warm medicated oils and pastes applied over the shoulder and held in place with therapeutic bandages — softening adhesions and reducing stiffness over time."],
      ["Medicinal Formulations", "Vata-kapha pacifying internal preparations to reduce joint stiffness and support tissue healing."],
      ["Lifestyle & Dietary Guidance", "Guided mobilisation exercises, progressive range-of-motion practice and a warming, anti-stiffness diet."],
    ],
  },
  {
    slug: "tennis-elbow", name: "Tennis Elbow", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Tennis elbow (lateral epicondylitis) is a painful condition affecting the outer elbow, caused by overuse of the forearm muscles. At AVK, we treat it through Marma therapy and herbal bandaging that reduce tendon inflammation and promote tissue repair.",
    symptoms: ["Pain on the outer side of the elbow", "Weakness in grip strength", "Pain worsening when lifting, gripping or twisting", "Tenderness on pressing the elbow", "Pain radiating down the forearm"],
    causes: ["Repetitive gripping or twisting motions", "Computer and mouse overuse", "Racquet sports", "Manual labour", "Poor ergonomics"],
    ayurvedicView: "Tennis elbow involves local vata-pitta aggravation at the tendon attachment site. Vata causes tendon degeneration; pitta drives the inflammatory response. Treatment combines Kurpara marma stimulation with cooling herbal bandaging and internal anti-inflammatory formulations.",
    treatments: [
      ["Marma Point Stimulation", "Calibrated stimulation of the Kurpara and Ani marma points to relieve tendon tension and restore circulation to the elbow."],
      ["Herbal Bandaging", "Cooling, anti-inflammatory pastes and medicated oils (such as Murivenna) applied over the elbow and secured with therapeutic bandages to heal the damaged tendon."],
      ["Medicinal Formulations", "Internal medicines with anti-inflammatory and tissue-healing herbs to support recovery from within."],
      ["Lifestyle & Dietary Guidance", "Ergonomic correction, forearm-strengthening exercises and pitta-pacifying diet."],
    ],
  },
  {
    slug: "tendinitis", name: "Tendinitis", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Tendinitis is the inflammation or irritation of a tendon, commonly affecting the shoulder, elbow, wrist or heel. At AVK, we treat tendinitis through anti-inflammatory Marma therapy and herbal bandaging that promote natural healing of damaged tendon tissue.",
    symptoms: ["Pain at the site of the tendon, worsening with movement", "Swelling and tenderness", "A grating sensation when moving the joint", "Stiffness, especially in the morning", "Reduced range of motion"],
    causes: ["Repetitive motions or overuse", "Sports injuries", "Age-related degeneration", "Poor ergonomics at work", "Sudden increase in physical activity"],
    ayurvedicView: "Tendinitis involves aggravated vata and pitta — vata causing degeneration and stiffness, pitta causing inflammation and pain. Treatment stimulates the marma points nearest the affected tendon, uses herbal bandaging to reduce inflammation, and strengthens snayu (tendon tissue) internally.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of the marma points adjacent to the affected tendon to restore circulation and reduce muscular strain around the inflammation."],
      ["Herbal Bandaging", "Anti-inflammatory herbal pastes and oils secured with therapeutic bandages to reduce swelling, relieve pain and support tendon repair."],
      ["Medicinal Formulations", "Internal preparations with vata-pacifying, anti-inflammatory and tissue-strengthening herbs."],
      ["Lifestyle & Dietary Guidance", "Activity modification, graded exercise reintroduction and nourishing diet for connective tissue recovery."],
    ],
  },
  {
    slug: "osteoarthritis", name: "Osteoarthritis", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Osteoarthritis is the gradual wearing down of joint cartilage, most commonly affecting the knees, hips and spine. At AVK, we slow degeneration and restore mobility through Marma therapy, herbal bandaging and internal formulations that nourish and protect joint tissue.",
    symptoms: ["Joint pain that worsens with activity", "Morning stiffness lasting less than 30 minutes", "Swelling around the joint", "Crepitus — cracking or grating sounds", "Reduced range of motion over time"],
    causes: ["Age-related cartilage wear", "Excess body weight placing load on joints", "Previous joint injuries", "Genetic predisposition", "Repetitive joint stress"],
    ayurvedicView: "Osteoarthritis (Sandhigatavata) is a degenerative vata disorder where dryness and roughness erode the cartilage and synovial fluid in joints. Treatment nourishes the joints from within through herbal bandaging over the affected joints, with internal formulations that halt further degeneration.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of Janu, Kurpara or Gulpha marma points (depending on the affected joint) to improve circulation and ease pain."],
      ["Herbal Bandaging", "Warm medicated oils and pastes applied over the affected joint and secured with bandages — deeply nourishing cartilage and reducing inflammation."],
      ["Medicinal Formulations", "Classical internal preparations containing Guggulu, Ashwagandha and other joint-strengthening herbs — taken over 3–6 months."],
      ["Lifestyle & Dietary Guidance", "Weight management, joint-friendly movement, nourishing diet and warming routines to support long-term joint health."],
    ],
  },
  {
    slug: "rheumatoid-arthritis", name: "Rheumatoid Arthritis", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Rheumatoid arthritis is an autoimmune condition where the immune system attacks the joints, causing inflammation, pain and eventual joint damage. At AVK, we use Marma therapy, targeted herbal bandaging and internal formulations to modulate the immune response, reduce inflammation and protect joint integrity.",
    symptoms: ["Symmetrical joint pain and swelling", "Morning stiffness lasting over an hour", "Warm, tender, swollen joints", "Fatigue and low-grade fever", "Joint deformity over time if untreated"],
    causes: ["Autoimmune dysfunction", "Genetic predisposition", "Hormonal factors", "Chronic stress", "Environmental triggers"],
    ayurvedicView: "Rheumatoid arthritis (Amavata) is caused by the combination of ama (metabolic toxins) and aggravated vata lodging in the joints. Treatment addresses both — clearing ama through digestive correction and internal formulations, while pacifying vata through gentle marma stimulation and dry herbal applications.",
    treatments: [
      ["Marma Point Stimulation", "Gentle, calibrated stimulation of affected joint marma points — never aggressive — to restore circulation without aggravating inflammation."],
      ["Herbal Bandaging", "Dry herbal applications and warming bandages (rather than heavy oils) chosen specifically for the acute, inflammatory phase."],
      ["Medicinal Formulations", "Classical ama-clearing and immune-modulating formulations like Simhanada Guggulu, Amritadi Guggulu and Rasnasaptakam Kashayam."],
      ["Lifestyle & Dietary Guidance", "Digestive-fire strengthening diet, anti-ama routine and stress-reduction practices — foundational to managing Amavata."],
    ],
  },
  {
    slug: "fibromyalgia", name: "Fibromyalgia", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Fibromyalgia is a chronic condition characterised by widespread musculoskeletal pain, fatigue and cognitive difficulties. At AVK, we address fibromyalgia as a systemic vata-pitta imbalance, using gentle Marma therapy and sustained herbal support to calm the nervous system and reduce pain sensitivity.",
    symptoms: ["Widespread body pain and tenderness", "Chronic fatigue despite rest", "Sleep disturbances", "Cognitive difficulties (fibro fog)", "Heightened sensitivity to pain, light or sound"],
    causes: ["Chronic stress and anxiety", "Sleep disorders", "Hormonal imbalances", "Physical or emotional trauma", "Genetic predisposition"],
    ayurvedicView: "Fibromyalgia reflects a deep-seated vata imbalance affecting the entire musculoskeletal and nervous systems. Treatment is gentle, slow and focused on calming the nervous system through full-body marma therapy, warming herbal applications and nourishing internal formulations.",
    treatments: [
      ["Marma Point Stimulation", "Gentle, full-body marma stimulation performed slowly to calm the nervous system and reduce pain sensitivity."],
      ["Herbal Bandaging", "Warm, soothing herbal applications over regions of tenderness — secured with therapeutic bandages to ease widespread muscle pain and stiffness."],
      ["Medicinal Formulations", "Rasayana rejuvenatives — internal preparations to rebuild strength, improve sleep and restore vitality over 3–6 months."],
      ["Lifestyle & Dietary Guidance", "Sleep hygiene, grounding daily routine, gentle yoga and a vata-pacifying diet designed to lower nervous-system reactivity."],
    ],
  },
  {
    slug: "calcaneal-spur", name: "Calcaneal Spur", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "A calcaneal spur is a bony outgrowth on the heel bone, causing sharp pain with every step. At AVK, we treat the underlying inflammation and tissue degeneration through Marma therapy and herbal bandaging — providing relief without steroid injections or surgery.",
    symptoms: ["Sharp, stabbing heel pain — worst with first steps in the morning", "Pain after prolonged standing or walking", "Swelling at the bottom of the heel", "Tenderness on pressing the heel", "Difficulty walking barefoot"],
    causes: ["Plantar fasciitis", "Excess body weight", "Prolonged standing on hard surfaces", "Flat feet or high arches", "Improper footwear"],
    ayurvedicView: "Calcaneal spur (Vatakantaka) is a vata disorder affecting the heel, where aggravated vata causes degeneration and abnormal bone growth. Treatment combines gulpha and kshipra marma stimulation with sustained herbal bandaging and bone-regulating internal formulations.",
    treatments: [
      ["Marma Point Stimulation", "Precise stimulation of Gulpha, Kshipra and Kurcha marma points around the heel to restore circulation and reduce local vata aggravation."],
      ["Herbal Bandaging", "Anti-inflammatory herbal pastes applied to the heel overnight and secured with bandages — reducing swelling and pain over successive sessions."],
      ["Medicinal Formulations", "Calcium-regulating and anti-inflammatory internal preparations to address the root cause of spur formation."],
      ["Lifestyle & Dietary Guidance", "Footwear correction, weight management, foot-friendly routines and strengthening exercises."],
    ],
  },
  {
    slug: "carpal-tunnel-syndrome", name: "Carpal Tunnel Syndrome", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Carpal tunnel syndrome occurs when the median nerve is compressed at the wrist, causing pain, numbness and weakness in the hand. At AVK, we treat it through Marma therapy and herbal bandaging that reduce compression, nourish the nerve and restore hand function.",
    symptoms: ["Numbness and tingling in the thumb, index and middle fingers", "Pain in the wrist, hand or forearm", "Weakness in grip — dropping objects", "Symptoms worse at night", "Shaking or flicking hands for relief"],
    causes: ["Repetitive hand and wrist motions", "Prolonged computer use", "Pregnancy-related fluid retention", "Thyroid disorders", "Wrist injuries or arthritis"],
    ayurvedicView: "Carpal tunnel syndrome is a vata disorder where vata obstructs the nerve channel at the wrist. Treatment focuses on Mani Bandha marma stimulation, sustained herbal bandaging at the wrist and nerve-nourishing internal formulations.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of the Mani Bandha and Kurcha marma points to release nerve compression and reactivate hand circulation."],
      ["Herbal Bandaging", "Medicated oils (such as Ksheerabala) applied to the wrist and forearm, held in place with therapeutic bandages — nourishing the nerve and reducing inflammation."],
      ["Medicinal Formulations", "Nerve-strengthening internal preparations and vata-pacifying herbs to prevent recurrence."],
      ["Lifestyle & Dietary Guidance", "Ergonomic correction, wrist-friendly movement routines and a vata-pacifying diet."],
    ],
  },
  {
    slug: "numbness", name: "Numbness", speciality: "Spine & Joint", specialityRoute: "/spine",
    description: "Numbness or tingling in the extremities often signals nerve compression or impaired circulation. At AVK, we investigate the root cause — whether cervical, lumbar or systemic — and treat it through nerve-nourishing Marma therapy, herbal bandaging and internal formulations.",
    symptoms: ["Loss of sensation in hands, feet or limbs", "Pins-and-needles tingling", "Weakness in the affected area", "Burning sensation", "Difficulty gripping or walking"],
    causes: ["Cervical or lumbar disc compression", "Carpal tunnel syndrome", "Peripheral neuropathy", "Diabetes-related nerve damage", "Vitamin deficiency"],
    ayurvedicView: "Numbness (Supti) is a vata disorder where the flow of prana through the nerves is obstructed. Treatment clears the channels (srotoshodhana) through targeted marma stimulation, nourishes nerve tissue via medicated herbal bandaging and restores normal vata movement from within.",
    treatments: [
      ["Marma Point Stimulation", "Stimulation of marma points along the affected nerve pathway to restore the natural flow of prana and reactivate sensation."],
      ["Herbal Bandaging", "Medicated oils with nerve-nourishing herbs (Dhanwantaram, Ksheerabala) applied along the affected limb and secured with therapeutic bandages."],
      ["Medicinal Formulations", "Rasayana formulations to strengthen and regenerate nerve tissue — typically over 3–6 months."],
      ["Lifestyle & Dietary Guidance", "Activity modification, gentle nerve-stimulating exercise and a nourishing, vata-pacifying diet."],
    ],
  },

  // Skin Ailments
  {
    slug: "eczema", name: "Eczema", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Eczema (atopic dermatitis) is a chronic inflammatory skin condition causing itchy, red, dry patches. At AVK, we treat eczema as an internal imbalance — addressing digestion, blood purity and immune function for lasting relief rather than surface-level suppression.",
    symptoms: ["Intensely itchy, dry skin", "Red or inflamed patches", "Oozing or crusting in acute phases", "Thickened, leathery skin from chronic scratching", "Flare-ups triggered by stress, weather or diet"],
    causes: ["Genetic predisposition and family history", "Impaired skin barrier function", "Food sensitivities", "Stress and anxiety", "Environmental allergens"],
    ayurvedicView: "Eczema (Vicharchika) is a kapha-pitta disorder where impaired digestion creates ama (toxins) that enter the blood (rakta dhatu) and manifest on the skin. Treatment purifies the blood, strengthens digestion and restores skin health from within.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of marma points associated with digestion and circulation to support internal cleansing and reduce the systemic drive of flare-ups."],
      ["Herbal Applications & Bandaging", "Cooling, medicated pastes and oils applied to affected areas — gentle, medicated and never harsh — to soothe inflamed skin and reduce itching."],
      ["Medicinal Formulations", "Internal preparations with Manjistha, Neem, Khadira and other blood-purifying herbs to cleanse rakta dhatu from within."],
      ["Lifestyle & Dietary Guidance", "A 21-day customised elimination diet — the most important intervention for eczema — alongside stress and sleep support."],
    ],
  },
  {
    slug: "psoriasis", name: "Psoriasis", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Psoriasis is a chronic autoimmune condition causing rapid skin cell turnover, resulting in thick, scaly patches. At AVK, we treat psoriasis through sustained internal purification, targeted herbal applications and dietary correction — typically over 3–6 months — for results that conventional treatments rarely achieve.",
    symptoms: ["Thick, silvery-white scales on red patches", "Dry, cracked skin that may bleed", "Itching, burning or soreness", "Thickened or ridged nails", "Flare-ups triggered by stress, infection or weather"],
    causes: ["Autoimmune dysfunction", "Genetic predisposition", "Chronic stress", "Infections and skin injuries", "Smoking, alcohol and dietary factors"],
    ayurvedicView: "Psoriasis (Kitibha/Ekakushtha) is a deep-seated kapha-vata skin disorder with pitta involvement. Impure blood (dushita rakta), accumulated toxins and compromised immunity drive the condition. Treatment requires sustained internal purification alongside gentle external care.",
    treatments: [
      ["Marma Point Stimulation", "Calibrated stimulation of marma points linked to digestion and immunity, supporting the body's natural detoxification pathways."],
      ["Herbal Applications & Bandaging", "Medicated buttermilk and herbal pastes applied to affected areas — profoundly healing for psoriatic skin without steroids or coal tar."],
      ["Medicinal Formulations", "Blood-purifying and immune-modulating formulations taken consistently over 3–6 months."],
      ["Lifestyle & Dietary Guidance", "A customised anti-psoriatic diet eliminating triggers — the single most influential lever in psoriasis management."],
    ],
  },
  {
    slug: "dermatitis", name: "Dermatitis", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Dermatitis — including contact dermatitis, seborrheic dermatitis and other inflammatory skin reactions — causes redness, itching and irritation. At AVK, we identify the underlying dosha imbalance and address it through internal purification and gentle external care.",
    symptoms: ["Red, inflamed, itchy skin", "Blisters or oozing in acute cases", "Dry, flaky or scaly patches", "Burning sensation", "Skin darkening in chronic areas"],
    causes: ["Contact with irritants or allergens", "Stress and hormonal changes", "Fungal overgrowth (seborrheic)", "Weak digestive fire", "Genetic predisposition"],
    ayurvedicView: "Dermatitis is classified under Kushtha (skin diseases) in Ayurveda, involving varying combinations of vata, pitta and kapha with rakta dushti (blood vitiation). Accurate dosha assessment is critical — treatment varies significantly based on the dominant imbalance.",
    treatments: [
      ["Marma Point Stimulation", "Gentle marma stimulation chosen to match the dominant dosha involvement, easing internal triggers of the skin reaction."],
      ["Herbal Applications & Bandaging", "Dosha-specific medicated liquid and paste therapies — cooling for pitta types, drying for kapha types — applied to affected areas."],
      ["Medicinal Formulations", "Blood-purifying and dosha-specific internal medicines to address the root imbalance."],
      ["Lifestyle & Dietary Guidance", "Trigger identification, elimination diet and stress management protocols."],
    ],
  },
  {
    slug: "vitiligo", name: "Vitiligo", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Vitiligo causes loss of skin pigmentation in patches, creating white spots on the skin. At AVK, we treat vitiligo through a sustained, multi-month Ayurvedic protocol that stimulates melanocyte regeneration and addresses the autoimmune component of the condition.",
    symptoms: ["White or depigmented patches on the skin", "Patches that gradually expand", "Premature greying of hair", "Loss of colour in the mouth or nose lining", "Sensitivity to sun in affected areas"],
    causes: ["Autoimmune destruction of melanocytes", "Genetic predisposition", "Severe sunburn or chemical exposure", "Chronic stress", "Vitamin D and B12 deficiency"],
    ayurvedicView: "Vitiligo (Shwitra/Kilasa) is a tridoshic condition with predominant pitta and bhrajaka pitta involvement. The destruction of skin pigment is driven by vitiated pitta affecting the sub-dosha responsible for skin colour. Treatment requires prolonged, consistent therapy.",
    treatments: [
      ["Marma Point Stimulation", "Targeted stimulation of facial and local marma points to support pigment cell activity and improve circulation to affected areas."],
      ["Herbal Applications & Bandaging", "Daily application of medicated oils containing Bakuchi, Khadira and other melanocyte-stimulating herbs — sustained over months for repigmentation."],
      ["Medicinal Formulations", "Internal Bakuchi-based formulations and blood-balancing preparations taken long-term — typically 6–12 months."],
      ["Lifestyle & Dietary Guidance", "Trigger identification, pitta-pacifying diet, controlled sun exposure and stress management."],
    ],
  },
  {
    slug: "urticaria", name: "Urticaria", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Urticaria (hives) causes sudden, itchy welts on the skin that appear and disappear unpredictably. At AVK, we address both acute and chronic urticaria by treating the underlying immune hypersensitivity and digestive dysfunction that drive recurrent episodes.",
    symptoms: ["Raised, itchy welts (wheals) on the skin", "Welts that change size and shape", "Swelling of lips, eyelids or throat (angioedema)", "Episodes triggered by heat, stress or specific foods", "Chronic recurring episodes lasting weeks or months"],
    causes: ["Food allergens", "Medications", "Infections", "Stress and heat", "Autoimmune conditions"],
    ayurvedicView: "Urticaria (Sheetapitta/Udarda) is a pitta-kapha disorder with vata involvement. Aggravated pitta in the blood combines with kapha to create the characteristic raised, itchy welts. Treatment focuses on cooling pitta, clearing kapha and strengthening the immune system.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of marma points associated with digestion and circulation to support pitta balance and reduce reactive flare-ups."],
      ["Herbal Applications & Bandaging", "Cooling medicated pastes and lotions applied to affected areas to soothe itch and reduce welt intensity during acute episodes."],
      ["Medicinal Formulations", "Haridrakhandam, Kaisora Guggulu and other classical formulations to reduce allergic sensitivity."],
      ["Lifestyle & Dietary Guidance", "Strict avoidance of pitta-aggravating foods, stress management and Sheetali pranayama for heat-triggered episodes."],
    ],
  },
  {
    slug: "allergies", name: "Allergies", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Allergic skin reactions — hives, rashes and contact dermatitis — reflect an overactive immune response. At AVK, we address allergies by strengthening immunity and reducing hypersensitivity through constitutional Ayurvedic treatment, rather than suppressing symptoms.",
    symptoms: ["Itchy skin rashes or hives", "Swelling of the skin", "Redness and inflammation", "Recurring reactions to specific triggers", "Dry, flaking skin"],
    causes: ["Food allergens", "Environmental triggers — dust, pollen, chemicals", "Medications", "Weak digestive fire (mandagni)", "Accumulated toxins (ama)"],
    ayurvedicView: "Allergies indicate a disturbed immune response rooted in weak agni (digestive fire) and accumulated ama. When agni is weak, incompletely digested food creates toxins that sensitise the immune system. Treatment strengthens agni, clears ama and restores immune balance.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of digestive and immune-supporting marma points to reduce hypersensitivity at its root."],
      ["Herbal Applications & Bandaging", "Cooling, soothing applications over reactive skin — gentle enough for sensitive, inflamed areas."],
      ["Medicinal Formulations", "Agni-strengthening and immunomodulating formulations using Haridra, Guduchi and Amalaki to rebuild balanced immunity."],
      ["Lifestyle & Dietary Guidance", "Trigger identification and avoidance, seasonal routines and pranayama for respiratory allergies."],
    ],
  },
  {
    slug: "acne", name: "Acne", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Acne — whether adolescent or adult — reflects an internal imbalance of digestion, hormones or stress. At AVK, we treat acne from the inside out, addressing the root causes through diet, internal purification and gentle external care rather than harsh chemicals.",
    symptoms: ["Pimples, whiteheads and blackheads", "Painful cystic or nodular lesions", "Oily skin", "Scarring and post-inflammatory pigmentation", "Flare-ups around menstrual cycles or stress"],
    causes: ["Hormonal imbalances — puberty, PCOS, stress", "Poor digestion and constipation", "Excess oily or processed food", "Stress and sleep deprivation", "Improper skincare routines"],
    ayurvedicView: "Acne (Yuvana Pidaka / Mukhadooshika) is primarily a pitta-kapha disorder. Excess pitta heats the blood, while kapha blocks the channels (srotas) in the skin. Treatment cools pitta, purifies rakta and clears blocked skin channels.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of facial marma points (Sthapani, Phana) to improve circulation, reduce inflammation and calm the nervous drivers of hormonal acne."],
      ["Herbal Applications", "Gentle herbal face packs and medicated oils — no chemical peels, no harsh exfoliation."],
      ["Medicinal Formulations", "Internal preparations with Manjistha, Sariva and Neem to cool and purify the blood."],
      ["Lifestyle & Dietary Guidance", "Elimination of pitta-aggravating foods — spicy, oily, fermented — and introduction of cooling, blood-purifying foods."],
    ],
  },
  {
    slug: "scars", name: "Scars", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Scars — from acne, injuries or surgery — can be significantly improved through Ayurvedic therapies that promote skin regeneration, improve blood circulation and restore the natural texture and tone of the skin.",
    symptoms: ["Raised or depressed skin at the scar site", "Discolouration — darker or lighter than surrounding skin", "Tightness or restricted movement near the scar", "Itching at the scar site", "Self-consciousness about visible scars"],
    causes: ["Acne scarring", "Surgical incisions", "Burns", "Injuries and wounds", "Keloid-prone skin type"],
    ayurvedicView: "Scars reflect disrupted healing in the skin tissue (twak and mamsa dhatu). Ayurvedic treatment promotes proper tissue regeneration by improving local blood circulation (rakta dhatu), nourishing skin tissue and using specific herbs that stimulate skin cell renewal.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation around the scar site and related marma points to improve circulation and reactivate natural tissue renewal."],
      ["Herbal Applications", "Specialised applications using Kumkumadi Taila, Nalpamaradi and Manjistha pastes to lighten and soften scars over time."],
      ["Medicinal Formulations", "Skin-nourishing and blood-purifying internal formulations to support regeneration from within."],
      ["Lifestyle & Dietary Guidance", "Scar-friendly diet, sun-protection advice and gentle daily skincare routines."],
    ],
  },
  {
    slug: "chronic-itching", name: "Chronic Itching", speciality: "Skin Ailments", specialityRoute: "/skin",
    description: "Chronic itching (Kandu) — whether generalized or localized — often reflects internal imbalances of rakta (blood) and pitta rather than just a surface-level skin issue. At AVK, we treat persistent itching through blood purification, cooling herbal applications and Marma therapy.",
    symptoms: ["Persistent or recurring itch", "Dry, rough or inflamed skin", "Itch worsening at night or with heat", "Scratching leading to thickened or darkened skin", "Disturbed sleep"],
    causes: ["Liver or digestive imbalance", "Allergic hypersensitivity", "Dry skin and dehydration", "Chronic stress", "Underlying autoimmune or metabolic conditions"],
    ayurvedicView: "Chronic itching (Kandu) is classified as a rakta and pitta disorder, with kapha involvement in damp, weeping presentations. Vitiated blood drives the itch; accumulated ama and weak agni sustain it. Treatment combines internal purification with cooling external applications.",
    treatments: [
      ["Marma Point Stimulation", "Gentle stimulation of marma points linked to digestion and liver function to reduce the internal drive behind persistent itching."],
      ["Herbal Applications", "Cooling, soothing medicated pastes and oils applied to itchy areas to calm the skin without suppressing the underlying process."],
      ["Medicinal Formulations", "Blood-purifying internal preparations (Manjistha, Sariva, Khadira) taken consistently to clear the vitiated rakta."],
      ["Lifestyle & Dietary Guidance", "A cooling, pitta-pacifying diet, hydration, stress management and avoidance of known triggers."],
    ],
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

export const benefits: [string, string][] = [
  ["Realigns the Spine", "Corrects spinal misalignments naturally, without surgical intervention."],
  ["Relieves Nerve Pressure", "Releases compression on nerves and reduces radiating pain and numbness."],
  ["Tissue Regeneration", "Supports natural healing of discs, ligaments, cartilage and soft tissue."],
  ["Restores Posture", "Rebuilds healthy biomechanics and natural body alignment."],
  ["Improves Mobility", "Returns range of motion to stiff joints and restricted movement."],
  ["Long-term Pain Relief", "Addresses the root cause, reducing recurrence over time."],
  ["Awakens Self-Healing", "Activates the body's innate capacity to repair and regenerate."],
  ["No Side Effects", "Free from the risks of steroids, painkillers and invasive procedures."],
];

export const comparison: [string, string, string][] = [
  ["Goal", "Manage symptoms", "Address root cause"],
  ["Invasiveness", "Often surgical or injection-based", "Non-surgical, non-invasive"],
  ["Medication", "Long-term painkillers, steroids", "Natural herbal support"],
  ["Customization", "Standardized protocols", "Personalized to each patient"],
  ["Side Effects", "Common with long-term use", "Minimal to none"],
  ["Recovery Time", "Variable, often with downtime", "No downtime, resume daily life"],
  ["Recurrence", "Frequent once medication stops", "Reduced through root-cause healing"],
  ["Lifestyle Integration", "Rarely included", "Central to the treatment plan"],
];

export const coreComponents: [string, string][] = [
  ["Marma Point Stimulation", "Gentle, precise manual stimulation of the body's vital energy points — 107 in classical Ayurveda — to restore circulation, release tension and awaken the body's natural healing response."],
  ["Herbal Bandaging", "Carefully formulated medicated pastes, oils and decoctions applied to affected areas and secured with therapeutic bandages — delivering sustained, localized healing."],
  ["Medicinal Herbs & Minerals", "Traditional anti-inflammatory, analgesic and regenerative formulations — prepared in-house, tailored to each patient's condition and constitution."],
  ["Lifestyle & Dietary Guidance", "Personalized diet, daily routine (dinacharya), posture and activity advice — so healing continues outside the clinic."],
];

export const gallery = [
  { cat: "clinic", cap: "Reception & waiting area", src: "/IMG20220818180544.jpg" },
  { cat: "therapy", cap: "Therapy room — marma session", src: "/2023-03-3.jpg" },
  { cat: "therapy", cap: "Herbal bandaging in progress", src: "/2023-03-13.jpg" },
  { cat: "clinic", cap: "The medicinal garden", src: "/2023-07-14.jpg" },
];

// ============================================================
// EDIT HERE to update the next Swarna Prashana date.
// This single value drives the home-page banner and the
// /swarna-prashana detail page.
// ============================================================
export const swarnaPrashanaNextDose = {
  display: "21 May 2026",
  nakshatra: "Pushya Nakshatra",
};
// ============================================================

export const swarnaPrashana = {
  short:
    "An ancient Ayurvedic immunisation for children — purified gold (Suvarna Bhasma) administered on Pushya Nakshatra to support immunity, memory, digestion and overall growth.",
  origin:
    "Mentioned in the Kashyap Samhita, one of the oldest classical Ayurvedic texts on paediatric care. Practised in India for centuries as a monthly nourishment for growing children.",
  ageRange: "Newborn to 12 years",
  cadence: "Once a month, on Pushya Nakshatra",
  benefits: [
    "Boosts immune system",
    "Enhances memory & intellect",
    "Improves digestion",
    "Nourishes the skin",
    "Reduces mental agitation",
    "Improves hearing & vision",
    "Supports physical growth",
    "Strengthens overall health",
  ],
  nextDose: swarnaPrashanaNextDose,
};

export const navPrimary: [string, string][] = [
  ["/about", "About"],
  ["/specialists", "Specialists"],
  ["/spine", "Spine & Joint"],
  ["/skin", "Skin"],
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
  ["/family", "Geriatric & Family"],
  ["/gallery", "Gallery"],
  ["/testimonials", "Reviews"],
  ["/contact", "Contact"],
];
