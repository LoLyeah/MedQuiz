import { Question } from './types';

export const predefinedQuestions: Question[] = [
  {
    id: 'local-1',
    caseStudy: 'A 24-year-old college student presents to the emergency room with a sudden onset of high fever, severe headache, and a stiff neck. He reports feeling nauseous and is unusually sensitive to the bright hospital lights.',
    options: ['Influenza', 'Meningitis', 'Migraine', 'Brain Tumor', 'Encephalitis'],
    answer: 'Meningitis',
    explanation: 'The classic triad of meningitis is fever, headache, and a stiff neck. Sensitivity to light (photophobia) and nausea are also strongly indicative of meningeal irritation.',
    difficulty: 'medium',
    source: 'local',
    tags: ['infectious', 'neurology']
  },
  {
    id: 'local-2',
    caseStudy: 'A 12-year-old boy is brought to the clinic by his mother. She reports that he has been extremely thirsty, urinating frequently, and eating much more than usual, yet he has lost 4.5 kg over the past month. He looks tired and lethargic.',
    options: ['Hypothyroidism', 'Diabetes Mellitus Type 1', "Cushing's Syndrome", 'Hyperthyroidism', 'Kidney Failure'],
    answer: 'Diabetes Mellitus Type 1',
    explanation: 'These are the classic signs of Type 1 Diabetes, driven by hyperglycemia. Because the body cannot use glucose for energy, it resorts to burning fat and muscle, causing weight loss despite increased hunger.',
    difficulty: 'easy',
    source: 'local',
    tags: ['endocrine', 'pediatric']
  },
  {
    id: 'local-3',
    caseStudy: 'A 35-year-old male arrives at the urgent care clinic complaining of pain that started around his navel yesterday but has now shifted to his lower right abdomen. He has a low-grade fever, nausea, and says the pain worsens when he coughs.',
    options: ['Kidney Stones', 'Ovarian Cyst', 'Appendicitis', 'Gastroenteritis', 'Ectopic Pregnancy'],
    answer: 'Appendicitis',
    explanation: "Pain starting around the navel and shifting to the lower right abdomen (McBurney's point) is a hallmark of appendicitis, often accompanied by loss of appetite and low-grade fever.",
    difficulty: 'easy',
    source: 'local',
    tags: ['gastrointestinal', 'surgery']
  },
  {
    id: 'local-4',
    caseStudy: 'A 10-year-old girl is brought to the ER with a history of coughing, especially at night. Her mother states she frequently complains of chest tightness. Upon auscultation, wheezing is prominent during expiration.',
    options: ['Pneumonia', 'Heart Failure', 'Asthma', 'COPD', 'Bronchitis'],
    answer: 'Asthma',
    explanation: 'Asthma is a condition in which airways narrow and swell, producing extra mucus. This triggers coughing, a whistling sound (wheezing) when breathed out, and shortness of breath.',
    difficulty: 'easy',
    source: 'local',
    tags: ['respiratory', 'pediatric']
  },
  {
    id: 'local-5',
    caseStudy: 'A 55-year-old male with a history of hypertension presents with crushing chest pain that radiates to his left arm and jaw. He is sweating profusely, feels lightheaded, and is short of breath.',
    options: ['Angina', 'Myocardial Infarction', 'Pulmonary Embolism', 'Panic Attack', 'GERD'],
    answer: 'Myocardial Infarction',
    explanation: 'A myocardial infarction (heart attack) occurs when blood flow to the heart muscle is blocked. Radiating chest pain, shortness of breath, and cold sweats are critical emergency indicators.',
    difficulty: 'medium',
    source: 'local',
    tags: ['cardiology', 'emergency']
  },
  {
    id: 'local-6',
    caseStudy: 'A 68-year-old female suddenly developed slurred speech and weakness in her right arm and leg while eating lunch. When asked to smile, the right side of her face droops significantly.',
    options: ['Multiple Sclerosis', 'Seizure', 'Stroke', "Bell's Palsy", 'Migraine with Aura'],
    answer: 'Stroke',
    explanation: 'A stroke is a medical emergency where blood supply to part of the brain is interrupted or reduced. The FAST symptoms (Face drooping, Arm weakness, Speech difficulty, Time to call) are classic signs.',
    difficulty: 'medium',
    source: 'local',
    tags: ['neurology', 'emergency']
  },
  {
    id: 'local-7',
    caseStudy: 'A 30-year-old traveler recently returned from Sub-Saharan Africa and presents with cyclical fevers, chills, and profuse sweating. He also complains of a severe headache and generalized muscle aches.',
    options: ['Dengue Fever', 'Zika Virus', 'Malaria', 'Yellow Fever', 'Typhoid Fever'],
    answer: 'Malaria',
    explanation: 'Malaria is a life-threatening disease caused by parasites transmitted through the bites of infected female Anopheles mosquitoes, characterized by cyclic fever, chills, and sweats.',
    difficulty: 'medium',
    source: 'local',
    tags: ['infectious', 'travel']
  },
  {
    id: 'local-8',
    caseStudy: 'A 40-year-old male presents with fatigue, fever, and a distinct "bullseye" rash on his leg. He mentions hiking in a wooded area in the northeastern US two weeks ago.',
    options: ['Ringworm', 'Spider Bite', 'Cellulitis', 'Lyme Disease', 'Lupus'],
    answer: 'Lyme Disease',
    explanation: 'Lyme disease is caused by the bacterium Borrelia burgdorferi transmitted by tick bites. The expanding red "bullseye" rash (erythema migrans) is a primary distinguishing symptom.',
    difficulty: 'easy',
    source: 'local',
    tags: ['infectious', 'dermatology']
  },
  {
    id: 'local-9',
    caseStudy: 'A 45-year-old homeless man presents with a chronic cough that has lasted for over 4 weeks. He has been coughing up blood-tinged sputum and reports significant weight loss and drenching night sweats.',
    options: ['Lung Cancer', 'Tuberculosis', 'Pneumonia', 'Bronchitis', 'Pulmonary Fibrosis'],
    answer: 'Tuberculosis',
    explanation: 'Tuberculosis (TB) focuses primarily on the lungs. A severe cough lasting over three weeks, accompanied by coughing up blood and intense night sweats, strongly points to active pulmonary TB.',
    difficulty: 'medium',
    source: 'local',
    tags: ['infectious', 'respiratory']
  },
  {
    id: 'local-10',
    caseStudy: 'A 28-year-old female complains of chronic diarrhea, abdominal bloating, and weight loss. She mentions that her symptoms seem to worsen specifically after eating bread, pasta, or other wheat-based products.',
    options: ["Crohn's Disease", 'Irritable Bowel Syndrome', 'Ulcerative Colitis', 'Celiac Disease', 'Gastric Ulcer'],
    answer: 'Celiac Disease',
    explanation: "Celiac disease is an immune reaction to eating gluten. Over time, it damages the small intestine's lining, leading to malabsorption, diarrhea, and abdominal distress.",
    difficulty: 'medium',
    source: 'local',
    tags: ['gastrointestinal', 'autoimmune']
  },
  {
    id: 'local-11',
    caseStudy: 'A 32-year-old female presents with chronic, severe pelvic pain that worsens during menstruation (dysmenorrhea). She also reports pain during intercourse and has been struggling to conceive for the past two years.',
    options: ['Polycystic Ovary Syndrome (PCOS)', 'Endometriosis', 'Pelvic Inflammatory Disease', 'Uterine Fibroids', 'Ovarian Cancer'],
    answer: 'Endometriosis',
    explanation: 'Endometriosis is an often painful disorder where tissue similar to the lining of the uterus grows outside the uterus, causing severe pelvic pain and potentially infertility.',
    difficulty: 'hard',
    source: 'local',
    tags: ['gynecology']
  },
  {
    id: 'local-12',
    caseStudy: 'A 50-year-old man visits the dermatologist for severe, scaly, silvery plaques on his elbows and knees. He also notes that some of his nails are pitted and thickened. He has symmetric joint pain in his fingers.',
    options: ['Eczema', 'Psoriasis', 'Seborrheic Dermatitis', 'Ringworm', 'Rosacea'],
    answer: 'Psoriasis',
    explanation: 'Psoriasis is a chronic autoimmune condition causing rapid buildup of skin cells, leading to scaly patches. Joint involvement indicates possible psoriatic arthritis.',
    difficulty: 'medium',
    source: 'local',
    tags: ['dermatology', 'rheumatology']
  },
  {
    id: 'local-13',
    caseStudy: 'A 22-year-old male is brought in by his family because he has been whispering to himself and claiming that the government is transmitting thoughts into his brain. His speech is highly disorganized and he lacks emotional expression.',
    options: ['Bipolar Disorder', 'Major Depressive Disorder', 'Schizophrenia', 'Borderline Personality Disorder', 'PTSD'],
    answer: 'Schizophrenia',
    explanation: 'Schizophrenia is a serious mental disorder involving delusions, hallucinations, and disorganized speech (positive symptoms) along with flattened affect (negative symptoms).',
    difficulty: 'easy',
    source: 'local',
    tags: ['psychiatry']
  },
  {
    id: 'local-14',
    caseStudy: 'A 65-year-old male presents with a "pill-rolling" tremor in his right hand when resting. His wife notes he has been moving much slower recently (bradykinesia) and his handwriting has become extremely small.',
    options: ["Huntington's Disease", 'Essential Tremor', 'ALS', "Parkinson's Disease", "Alzheimer's Disease"],
    answer: "Parkinson's Disease",
    explanation: "Parkinson's is a progressive nervous system disorder that affects movement. A resting tremor and bradykinesia are classic early signs due to the loss of dopamine-producing neurons.",
    difficulty: 'medium',
    source: 'local',
    tags: ['neurology', 'geriatrics']
  },
  {
    id: 'local-15',
    caseStudy: 'A 30-year-old female experiences sudden blurry vision in one eye with pain on eye movement. She also reports extreme fatigue, a sensation of an "electric shock" down her back, and occasional numbness in her legs.',
    options: ['Lyme Disease', 'Multiple Sclerosis', 'Guillain-Barré Syndrome', 'Myasthenia Gravis', 'Fibromyalgia'],
    answer: 'Multiple Sclerosis',
    explanation: 'MS is a demyelinating disease of the CNS. Optic neuritis (vision issues) combined with sensory symptoms and Lhermitte\'s sign (electric shock sensation) are classic presentations.',
    difficulty: 'hard',
    source: 'local',
    tags: ['neurology', 'autoimmune']
  },
  {
    id: 'local-16',
    caseStudy: 'A 45-year-old female presents with bilateral pain, swelling, and stiffness in the small joints of her hands. She notes that the stiffness is most severe in the morning, often lasting for more than an hour before improving.',
    options: ['Osteoarthritis', 'Gout', 'Rheumatoid Arthritis', 'Lupus', 'Psoriatic Arthritis'],
    answer: 'Rheumatoid Arthritis',
    explanation: 'Unlike osteoarthritis, rheumatoid arthritis affects the synovium, causing painful swelling bilaterally and prominent morning stiffness lasting over an hour.',
    difficulty: 'medium',
    source: 'local',
    tags: ['rheumatology', 'autoimmune']
  },
  {
    id: 'local-17',
    caseStudy: 'A 40-year-old female complains of extreme fatigue, unexplained weight gain of 7 kg despite eating less, constipation, and feeling unusually cold even in warm weather. You note her face appears somewhat puffy.',
    options: ['Depression', 'Hyperthyroidism', "Cushing's Syndrome", 'Polycystic Ovary Syndrome', 'Hypothyroidism'],
    answer: 'Hypothyroidism',
    explanation: "Hypothyroidism occurs when the thyroid gland doesn't produce enough crucial hormones, slowing down the body's metabolism, leading to weight gain, cold sensitivity, and fatigue.",
    difficulty: 'easy',
    source: 'local',
    tags: ['endocrine']
  },
  {
    id: 'local-18',
    caseStudy: 'A 28-year-old vegan female presents with severe fatigue, pale skin, and shortness of breath when climbing stairs. She also complains of frequently cold hands and occasional irregular heartbeats.',
    options: ['Anemia', 'Leukemia', 'Heart Arrhythmia', 'Chronic Fatigue Syndrome', 'Hypothyroidism'],
    answer: 'Anemia',
    explanation: "Anemia is a condition where the body lacks enough healthy red blood cells to carry adequate oxygen, causing fatigue, paleness, and shortness of breath.",
    difficulty: 'easy',
    source: 'local',
    tags: ['hematology']
  },
  {
    id: 'local-19',
    caseStudy: 'A 50-year-old male notices a tender, red, warm area on his lower leg. Upon palpation, you feel a hard, cord-like structure just under the surface of the skin along a visible vein.',
    options: ['Deep Vein Thrombosis', 'Superficial Thrombophlebitis', 'Cellulitis', 'Varicose Veins', 'Peripheral Artery Disease'],
    answer: 'Superficial Thrombophlebitis',
    explanation: 'This refers to an inflammation of a vein near the surface of the skin caused by a blood clot. The "cord-like" feeling at the surface is a common hallmark distinction from deep vein issues.',
    difficulty: 'hard',
    source: 'local',
    tags: ['vascular']
  },
  {
    id: 'local-20',
    caseStudy: 'A 26-year-old patient who recently returned from a trip to Southeast Asia presents with a sudden onset of high fever, severe retro-orbital headache (behind the eyes), and agonizing joint map that feels like "bone-breaking" pain. A generalized rash is noted.',
    options: ['Malaria', 'Typhoid', 'Dengue Fever', 'Chikungunya', 'Yellow Fever'],
    answer: 'Dengue Fever',
    explanation: 'Often called "breakbone fever" because of severe joint and muscle pain, Dengue is characterized by sudden high fever, retro-orbital pain, and a rash.',
    difficulty: 'medium',
    source: 'local',
    tags: ['infectious', 'travel']
  },
  {
    id: 'local-21',
    caseStudy: 'A 38-year-old female reports a 3-month history of muscle weakness, particularly when climbing stairs or brushing her hair. She also notes a purplish rash around her eyes and on her knuckles.',
    options: ['Myasthenia Gravis', 'Dermatomyositis', 'Lupus', 'Polymyalgia Rheumatica', 'Guillain-Barré Syndrome'],
    answer: 'Dermatomyositis',
    explanation: 'Proximal muscle weakness combined with classical dermatological findings like a heliotrope rash (around eyes) and Gottron papules (on knuckles) strongly suggests dermatomyositis.',
    difficulty: 'hard',
    source: 'local',
    tags: ['rheumatology', 'dermatology', 'autoimmune']
  },
  {
    id: 'local-22',
    caseStudy: 'A 5-year-old boy presents with a sudden onset of widespread small, extremely itchy, fluid-filled blisters. His mother mentions he had a slight fever and was feeling tired a couple of days before the rash appeared.',
    options: ['Measles', 'Rubella', 'Chickenpox (Varicella)', 'Hand, Foot, and Mouth Disease', 'Fifth Disease'],
    answer: 'Chickenpox (Varicella)',
    explanation: 'Chickenpox is characterized by a highly contiguous, itchy blister-like rash that typically begins on the chest, back, and face before spreading.',
    difficulty: 'easy',
    source: 'local',
    tags: ['pediatric', 'infectious']
  },
  {
    id: 'local-23',
    caseStudy: 'A 55-year-old male with a history of alcohol abuse presents with severe, radiating epigastric pain that worsens when he lies flat. He also experiences nausea and vomiting. Blood tests show elevated serum amylase and lipase.',
    options: ['Peptic Ulcer Disease', 'Acute Pancreatitis', 'Cholecystitis', 'Gastritis', 'Appendicitis'],
    answer: 'Acute Pancreatitis',
    explanation: 'Severe epigastric pain that radiates to the back, worse in the supine position, along with elevated amylase and lipase levels, are classic markers for acute pancreatitis, often triggered by alcohol or gallstones.',
    difficulty: 'medium',
    source: 'local',
    tags: ['gastrointestinal']
  },
  {
    id: 'local-24',
    caseStudy: 'A 60-year-old female complains of sudden, severe, unilateral head pain, jaw claudication (pain when chewing), and brief vision loss in her right eye. You notice her right temple area is tender to the touch.',
    options: ['Trigeminal Neuralgia', 'Giant Cell Arteritis', 'Migraine', 'Glaucoma', 'Cluster Headache'],
    answer: 'Giant Cell Arteritis',
    explanation: 'Temporal arteritis (Giant Cell Arteritis) typically presents in older adults with new-onset localized headache, jaw claudication, visual disturbances, and tender temporal artery. It is a medical emergency due to the risk of permanent blindness.',
    difficulty: 'hard',
    source: 'local',
    tags: ['rheumatology', 'ophthalmology', 'emergency']
  },
  {
    id: 'local-25',
    caseStudy: 'A 16-year-old male presents with severe throat pain, difficulty swallowing, swollen lymph nodes in his neck, and profound fatigue. Upon examination, his tonsils are enlarged and covered in a thick white exudate, and his spleen is palpable.',
    options: ['Strep Throat', 'Infectious Mononucleosis', 'Tonsillitis', 'Diphtheria', 'CMV Infection'],
    answer: 'Infectious Mononucleosis',
    explanation: 'The combination of exudative pharyngitis, profound lingering fatigue, cervical lymphadenopathy, and splenomegaly in a healthy teen is highly characteristic of infectious mononucleosis (often caused by EBV).',
    difficulty: 'medium',
    source: 'local',
    tags: ['infectious']
  },
  {
    id: 'local-26',
    caseStudy: 'A 72-year-old man comes to the clinic reporting progressive difficulty initiating urination, a weak stream, and the need to wake up 3-4 times a night to urinate. He denies any burning sensation or blood in the urine.',
    options: ['Urinary Tract Infection', 'Prostate Cancer', 'Benign Prostatic Hyperplasia (BPH)', 'Bladder Stones', 'Overactive Bladder'],
    answer: 'Benign Prostatic Hyperplasia (BPH)',
    explanation: 'Progressive lower urinary tract symptoms (hesitancy, weak stream, nocturia) in an older male without signs of infection or hematuria are classic for BPH.',
    difficulty: 'easy',
    source: 'local',
    tags: ['urology', 'geriatrics']
  },
  {
    id: 'local-27',
    caseStudy: 'A 29-year-old female presents with episodes of a sudden, racing heart rate accompanied by sweating, tremors, and a sensation of impending doom. These episodes occur unexpectedly and peak within a few minutes. All cardiac workups are normal.',
    options: ['Hyperthyroidism', 'Pheochromocytoma', 'Atrial Fibrillation', 'Panic Disorder', 'Hypoglycemia'],
    answer: 'Panic Disorder',
    explanation: 'Sudden, unprovoked episodes of intense fear accompanied by physical symptoms (tachycardia, diaphoresis) peaking rapidly, with unremarkable medical workup, define panic attacks within panic disorder.',
    difficulty: 'medium',
    source: 'local',
    tags: ['psychiatry']
  },
  {
    id: 'local-28',
    caseStudy: 'A 42-year-old overweight female presents to the ER with right upper quadrant abdominal pain that began 30 minutes after eating a greasy meal (fried chicken). The pain is steady, severe, and radiates to her right shoulder blade.',
    options: ['Gastric Ulcer', 'Acute Pancreatitis', 'Biliary Colic', 'Hepatitis', 'Renal Colic'],
    answer: 'Biliary Colic',
    explanation: 'Right upper quadrant pain provoked by fatty meals and radiating to the right scapula or shoulder is classic for biliary colic caused by gallstones.',
    difficulty: 'easy',
    source: 'local',
    tags: ['gastrointestinal']
  },
  {
    id: 'local-29',
    caseStudy: 'A 3-month-old infant is brought in after experiencing a sequence of rapid, severe coughs followed by a high-pitched "whoop" sound upon taking a breath. The infant occasionally vomits after the coughing spells.',
    options: ['Croup', 'Bronchiolitis', 'Pertussis', 'Asthma', 'Pneumonia'],
    answer: 'Pertussis',
    explanation: 'Pertussis (Whooping cough) is characterized by paroxysmal coughing fits followed by a characteristic inspiratory "whoop," which is especially prominent and dangerous in young infants.',
    difficulty: 'medium',
    source: 'local',
    tags: ['pediatric', 'infectious', 'respiratory']
  },
  {
    id: 'local-30',
    caseStudy: 'A 60-year-old man with a 40 pack-year smoking history presents with worsening shortness of breath, chronic cough producing sputum, and a barrel-shaped chest. His lips appear slightly bluish.',
    options: ['Asthma', 'Idiopathic Pulmonary Fibrosis', 'Congestive Heart Failure', 'Chronic Obstructive Pulmonary Disease (COPD)', 'Lung Cancer'],
    answer: 'Chronic Obstructive Pulmonary Disease (COPD)',
    explanation: 'A heavy smoking history paired with chronic productive cough, progressive dyspnea, cyanosis, and a barrel chest heavily points towards COPD.',
    difficulty: 'easy',
    source: 'local',
    tags: ['respiratory']
  },
  {
    id: 'local-31',
    caseStudy: 'A 14-year-old active boy complains of ongoing pain directly over the bump just below his kneecap. The pain is worse when he runs or jumps for basketball. Examination reveals a swollen, tender tibial tuberosity.',
    options: ['Patellar Tendinitis', 'Osgood-Schlatter Disease', 'Slipped Capital Femoral Epiphysis', 'Meniscus Tear', 'Bone Tumor'],
    answer: 'Osgood-Schlatter Disease',
    explanation: 'Apophysitis of the tibial tuberosity (Osgood-Schlatter disease) is a common cause of knee pain in rapidly growing adolescents who are active in sports involving running and jumping.',
    difficulty: 'medium',
    source: 'local',
    tags: ['orthopedics', 'pediatric']
  },
  {
    id: 'local-32',
    caseStudy: 'A 45-year-old man experiences recurrent episodes of severe, spinning dizziness (vertigo) lasting 2-3 hours. These are accompanied by a roaring sound (tinnitus) and a feeling of fullness in his right ear, along with fluctuating hearing loss.',
    options: ['Benign Paroxysmal Positional Vertigo (BPPV)', 'Vestibular Neuritis', 'Meniere\'s Disease', 'Acoustic Neuroma', 'Otitis Media'],
    answer: 'Meniere\'s Disease',
    explanation: 'The classic triad of Meniere\'s disease consists of episodic vertigo, sensorineural hearing loss, and tinnitus, often accompanied by a sensation of aural fullness.',
    difficulty: 'hard',
    source: 'local',
    tags: ['otolaryngology']
  },
  {
    id: 'local-33',
    caseStudy: 'A 68-year-old man notes painless, visible blood in his urine (gross hematuria) on multiple occasions over the last month. He is a retired chemical plant worker and a former smoker. He has no pain during urination.',
    options: ['Kidney Stones', 'Urinary Tract Infection', 'Benign Prostatic Hyperplasia (BPH)', 'Bladder Cancer', 'Polycystic Kidney Disease'],
    answer: 'Bladder Cancer',
    explanation: 'Painless gross hematuria in an older adult, especially one with a history of smoking or industrial chemical exposure, is a strong red flag for bladder cancer.',
    difficulty: 'medium',
    source: 'local',
    tags: ['oncology', 'urology']
  },
  {
    id: 'local-34',
    caseStudy: 'A 32-year-old woman at 30 weeks gestation presents with persistent right upper quadrant pain, vision changes, new-onset high blood pressure (160/110 mmHg), and proteinuria. Laboratory results show elevated liver enzymes and low platelets.',
    options: ['Gestational Diabetes', 'Preeclampsia', 'HELLP Syndrome', 'Placenta Previa', 'Ectopic Pregnancy'],
    answer: 'HELLP Syndrome',
    explanation: 'HELLP stands for Hemolysis, Elevated Liver enzymes, and Low Platelets. It is a severe variant of preeclampsia that threatens both maternal and fetal life, requiring immediate attention.',
    difficulty: 'hard',
    source: 'local',
    tags: ['obstetrics', 'emergency']
  },
  {
    id: 'local-35',
    caseStudy: 'A 10-year-old boy presents to the ER with sudden difficulty breathing, swelling of his lips and tongue, and an outbreak of hives after eating a peanut butter cookie at a party. His blood pressure drops significantly.',
    options: ['Asthma Attack', 'Anaphylaxis', 'Angioedema', 'Panic Attack', 'Foreign Body Aspiration'],
    answer: 'Anaphylaxis',
    explanation: 'A sudden multisystem allergic reaction characterized by airway compromise (swelling, bronchospasm), dermatologic manifestations (hives), and hypotension following allergen exposure is anaphylaxis.',
    difficulty: 'easy',
    source: 'local',
    tags: ['allergy/immunology', 'emergency']
  },
  {
    id: 'local-36',
    caseStudy: 'A 55-year-old man has noticed swelling in his legs, ankles, and around his eyes over the past month. A urine dipstick is remarkably positive for protein (4+). Bloodwork shows very low serum albumin.',
    options: ['Congestive Heart Failure', 'Nephrotic Syndrome', 'Liver Cirrhosis', 'Deep Vein Thrombosis', 'Chronic Kidney Disease'],
    answer: 'Nephrotic Syndrome',
    explanation: 'Edema associated with massive proteinuria and hypoalbuminemia strongly characterizes nephrotic syndrome, an impairment in the glomerular filtration barrier.',
    difficulty: 'hard',
    source: 'local',
    tags: ['nephrology']
  },
  {
    id: 'local-37',
    caseStudy: 'A 35-year-old woman complains of new-onset anxiety, palpitations, unintentional weight loss despite increased appetite, and frequent bowel movements. On exam, her eyes appear slightly bulging, and she has a fine hand tremor.',
    options: ['Generalized Anxiety Disorder', 'Pheochromocytoma', 'Graves\' Disease', 'Hashimoto\'s Thyroiditis', 'Celiac Disease'],
    answer: 'Graves\' Disease',
    explanation: 'Graves\' disease is an autoimmune cause of hyperthyroidism manifesting with weight loss, heat intolerance, tremor, palpitations, and classic eye findings like exophthalmos.',
    difficulty: 'medium',
    source: 'local',
    tags: ['endocrinology', 'autoimmune']
  },
  {
    id: 'local-38',
    caseStudy: 'A 6-year-old boy is brought in with severe bone pain in his legs, a low-grade fever, pale skin, and multiple unexplained bruises on his arms and torso. Blood work shows circulating blasts.',
    options: ['Osteomyelitis', 'Growing Pains', 'Acute Lymphoblastic Leukemia (ALL)', 'Hemophilia', 'Juvenile Idiopathic Arthritis'],
    answer: 'Acute Lymphoblastic Leukemia (ALL)',
    explanation: 'ALL is the most common childhood cancer. Bone pain, pancytopenia (causing pallor and bruising/petechiae), and blasts in the peripheral blood are signature findings.',
    difficulty: 'hard',
    source: 'local',
    tags: ['oncology', 'hematology', 'pediatric']
  },
  {
    id: 'local-39',
    caseStudy: 'A 2-day-old infant in the NICU develops jaundice. Blood work reveals a positive direct Coombs test, and the mother is blood type O-negative while the baby is A-positive. The baby appears lethargic.',
    options: ['Physiologic Jaundice', 'Hemolytic Disease of the Newborn', 'Biliary Atresia', 'Breast Milk Jaundice', 'Crigler-Najjar Syndrome'],
    answer: 'Hemolytic Disease of the Newborn',
    explanation: 'ABO and Rh incompatibility can lead to maternal antibodies crossing the placenta and attacking fetal red blood cells, causing rapid hemolysis and potentially severe jaundice in the neonate.',
    difficulty: 'medium',
    source: 'local',
    tags: ['neonatology', 'hematology']
  },
  {
    id: 'local-40',
    caseStudy: 'A 24-year-old male is brought to the ER by friends after attending a music festival. He is agitated, exhibiting extreme hyperthermia, muscle rigidity, shivering, and hyperreflexia. His friends mention he took a small pill.',
    options: ['Opioid Overdose', 'Serotonin Syndrome', 'Alcohol Poisoning', 'Malignant Hyperthermia', 'Cannabis Intoxication'],
    answer: 'Serotonin Syndrome',
    explanation: 'Classic signs of serotonin syndrome—often triggered by MDMA/ecstasy or SSRI overdose—include autonomic instability (hyperthermia), neuromuscular excitability (clonus, hyperreflexia), and altered mental status.',
    difficulty: 'hard',
    source: 'local',
    tags: ['toxicology', 'emergency']
  },
  {
    id: 'local-41',
    caseStudy: 'A 15-year-old tall, thin boy with long, spindly fingers and a history of a heart murmur presents to the clinic for a sports physical. You also notice he has a slightly sunken chest and flat feet.',
    options: ['Ehlers-Danlos Syndrome', 'Marfan Syndrome', 'Klinefelter Syndrome', 'Cystic Fibrosis', 'Achondroplasia'],
    answer: 'Marfan Syndrome',
    explanation: 'Marfan syndrome is a genetic disorder affecting connective tissue. The classic phenotype includes tall stature, arachnodactyly, pectus excavatum, and cardiovascular abnormalities (like aortic root dilation or mitral valve prolapse).',
    difficulty: 'medium',
    source: 'local',
    tags: ['genetics', 'cardiology']
  },
  {
    id: 'local-42',
    caseStudy: 'A 60-year-old woman with a history of diabetes comes in complaining of severe, sharp pain in her right cheek and jaw when she brushes her teeth or eats cold foods. The pain is electric, lasts a few seconds, and she has normal dentition.',
    options: ['Dental Abscess', 'Temporomandibular Joint Dysfunction (TMJ)', 'Trigeminal Neuralgia', 'Sinusitis', 'Bell\'s Palsy'],
    answer: 'Trigeminal Neuralgia',
    explanation: 'Brief, shock-like paroxysmal pain affecting one side of the face (V2/V3 distribution of the trigeminal nerve), triggered by light touch or chewing, is characteristic of trigeminal neuralgia.',
    difficulty: 'hard',
    source: 'local',
    tags: ['neurology', 'dentistry']
  },
  {
    id: 'local-43',
    caseStudy: 'A 45-year-old builder presents with a painful, red, swollen right eye. He notes blurred vision and severe sensitivity to light. Last week, he was grinding metal without safety goggles.',
    options: ['Conjunctivitis', 'Corneal Abrasion/Foreign Body', 'Glaucoma', 'Cataract', 'Macular Degeneration'],
    answer: 'Corneal Abrasion/Foreign Body',
    explanation: 'A history of high-velocity activities (metal grinding) without eye protection, combined with pain, photophobia, and a red eye, strongly points to a corneal foreign body or abrasion.',
    difficulty: 'easy',
    source: 'local',
    tags: ['ophthalmology', 'occupational-medicine']
  },
  {
    id: 'local-44',
    caseStudy: 'A 50-year-old overweight man reports excessive daytime sleepiness despite getting 8 hours of sleep. His wife mentions that he snores loudly and occasionally stops breathing for a few seconds during the night.',
    options: ['Narcolepsy', 'Insomnia', 'Obstructive Sleep Apnea (OSA)', 'Central Sleep Apnea', 'Restless Legs Syndrome'],
    answer: 'Obstructive Sleep Apnea (OSA)',
    explanation: 'Classic presentation of OSA includes obesity, daytime somnolence, loud snoring, and witnessed apneic episodes during sleep.',
    difficulty: 'easy',
    source: 'local',
    tags: ['sleep-medicine', 'pulmonology']
  },
  {
    id: 'local-45',
    caseStudy: 'A 65-year-old patient in the intensive care unit on a mechanical ventilator develops a sudden drop in blood pressure, tachycardia, and absent breath sounds on the right side of the chest. Tracheal deviation to the left is noted.',
    options: ['Pulmonary Embolism', 'Myocardial Infarction', 'Tension Pneumothorax', 'Pneumonia', 'Acute Respiratory Distress Syndrome (ARDS)'],
    answer: 'Tension Pneumothorax',
    explanation: 'A sudden respiratory and hemodynamic collapse in a mechanically ventilated patient (positive pressure breathing) with absent breath sounds and contralateral tracheal deviation is a hallmark of tension pneumothorax.',
    difficulty: 'medium',
    source: 'local',
    tags: ['critical-care', 'pulmonology', 'emergency']
  },
  {
    id: 'local-46',
    caseStudy: 'A 28-year-old healthcare worker presents for a routine check-up. A tuberculin skin test (PPD) is placed, and 48 hours later, there is a 12 mm area of induration, although the patient is asymptomatic and has a normal chest X-ray.',
    options: ['Active Pulmonary Tuberculosis', 'Latent Tuberculosis Infection', 'Nontuberculous Mycobacterial Infection', 'Previous BCG Vaccination Reaction', 'Pneumonia'],
    answer: 'Latent Tuberculosis Infection',
    explanation: 'A positive PPD test with no symptoms and a clear chest x-ray indicates Latent TB infection, where the bacteria are present but walled off and not currently causing active disease.',
    difficulty: 'medium',
    source: 'local',
    tags: ['preventive-medicine', 'infectious']
  },
  {
    id: 'local-47',
    caseStudy: 'A 55-year-old female with a history of breast cancer status post mastectomy and axillary lymph node dissection presents with progressive, non-pitting swelling of her right arm. The arm feels heavy but is not painful or red.',
    options: ['Deep Vein Thrombosis', 'Cellulitis', 'Lymphedema', 'Congestive Heart Failure', 'Peripheral Artery Disease'],
    answer: 'Lymphedema',
    explanation: 'Progressive, non-pitting swelling of an extremity following lymph node removal (like in breast cancer surgery) is classic for secondary lymphedema due to compromised lymphatic drainage.',
    difficulty: 'easy',
    source: 'local',
    tags: ['physical-medicine-rehabilitation', 'oncology']
  },
  {
    id: 'local-48',
    caseStudy: 'A 70-year-old man presents with severe, burning, and lancinating pain localized to the right side of his chest, wrap-around his back. A few days later, a blistering rash appears in the same band-like distribution, not crossing the midline.',
    options: ['Herpes Simplex', 'Psoriasis', 'Contact Dermatitis', 'Herpes Zoster (Shingles)', 'Cellulitis'],
    answer: 'Herpes Zoster (Shingles)',
    explanation: 'Unilateral, dermatomal nerve pain followed by a vesicular rash is the hallmark of Herpes Zoster, a reactivation of the Varicella Zoster virus.',
    difficulty: 'easy',
    source: 'local',
    tags: ['pain-medicine', 'dermatology', 'infectious']
  }
];
