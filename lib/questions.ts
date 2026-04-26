import { Question } from './types';

export const predefinedQuestions: Question[] = [
  {
    id: 'local-1',
    caseStudy: 'A 24-year-old college student presents to the emergency room with a sudden onset of high fever, severe headache, and a stiff neck. He reports feeling nauseous and is unusually sensitive to the bright hospital lights.',
    options: ['Influenza', 'Meningitis', 'Migraine', 'Brain Tumor', 'Encephalitis'],
    answer: 'Meningitis',
    explanation: 'The classic triad of meningitis is fever, headache, and a stiff neck. Sensitivity to light (photophobia) and nausea are also strongly indicative of meningeal irritation.',
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-2',
    caseStudy: 'A 12-year-old boy is brought to the clinic by his mother. She reports that he has been extremely thirsty, urinating frequently, and eating much more than usual, yet he has lost 4.5 kg over the past month. He looks tired and lethargic.',
    options: ['Hypothyroidism', 'Diabetes Mellitus Type 1', "Cushing's Syndrome", 'Hyperthyroidism', 'Kidney Failure'],
    answer: 'Diabetes Mellitus Type 1',
    explanation: 'These are the classic signs of Type 1 Diabetes, driven by hyperglycemia. Because the body cannot use glucose for energy, it resorts to burning fat and muscle, causing weight loss despite increased hunger.',
    difficulty: 'easy',
    source: 'local'
  },
  {
    id: 'local-3',
    caseStudy: 'A 35-year-old male arrives at the urgent care clinic complaining of pain that started around his navel yesterday but has now shifted to his lower right abdomen. He has a low-grade fever, nausea, and says the pain worsens when he coughs.',
    options: ['Kidney Stones', 'Ovarian Cyst', 'Appendicitis', 'Gastroenteritis', 'Ectopic Pregnancy'],
    answer: 'Appendicitis',
    explanation: "Pain starting around the navel and shifting to the lower right abdomen (McBurney's point) is a hallmark of appendicitis, often accompanied by loss of appetite and low-grade fever.",
    difficulty: 'easy',
    source: 'local'
  },
  {
    id: 'local-4',
    caseStudy: 'A 10-year-old girl is brought to the ER with a history of coughing, especially at night. Her mother states she frequently complains of chest tightness. Upon auscultation, wheezing is prominent during expiration.',
    options: ['Pneumonia', 'Heart Failure', 'Asthma', 'COPD', 'Bronchitis'],
    answer: 'Asthma',
    explanation: 'Asthma is a condition in which airways narrow and swell, producing extra mucus. This triggers coughing, a whistling sound (wheezing) when breathed out, and shortness of breath.',
    difficulty: 'easy',
    source: 'local'
  },
  {
    id: 'local-5',
    caseStudy: 'A 55-year-old male with a history of hypertension presents with crushing chest pain that radiates to his left arm and jaw. He is sweating profusely, feels lightheaded, and is short of breath.',
    options: ['Angina', 'Myocardial Infarction', 'Pulmonary Embolism', 'Panic Attack', 'GERD'],
    answer: 'Myocardial Infarction',
    explanation: 'A myocardial infarction (heart attack) occurs when blood flow to the heart muscle is blocked. Radiating chest pain, shortness of breath, and cold sweats are critical emergency indicators.',
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-6',
    caseStudy: 'A 68-year-old female suddenly developed slurred speech and weakness in her right arm and leg while eating lunch. When asked to smile, the right side of her face droops significantly.',
    options: ['Multiple Sclerosis', 'Seizure', 'Stroke', "Bell's Palsy", 'Migraine with Aura'],
    answer: 'Stroke',
    explanation: 'A stroke is a medical emergency where blood supply to part of the brain is interrupted or reduced. The FAST symptoms (Face drooping, Arm weakness, Speech difficulty, Time to call) are classic signs.',
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-7',
    caseStudy: 'A 30-year-old traveler recently returned from Sub-Saharan Africa and presents with cyclical fevers, chills, and profuse sweating. He also complains of a severe headache and generalized muscle aches.',
    options: ['Dengue Fever', 'Zika Virus', 'Malaria', 'Yellow Fever', 'Typhoid Fever'],
    answer: 'Malaria',
    explanation: 'Malaria is a life-threatening disease caused by parasites transmitted through the bites of infected female Anopheles mosquitoes, characterized by cyclic fever, chills, and sweats.',
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-8',
    caseStudy: 'A 40-year-old male presents with fatigue, fever, and a distinct "bullseye" rash on his leg. He mentions hiking in a wooded area in the northeastern US two weeks ago.',
    options: ['Ringworm', 'Spider Bite', 'Cellulitis', 'Lyme Disease', 'Lupus'],
    answer: 'Lyme Disease',
    explanation: 'Lyme disease is caused by the bacterium Borrelia burgdorferi transmitted by tick bites. The expanding red "bullseye" rash (erythema migrans) is a primary distinguishing symptom.',
    difficulty: 'easy',
    source: 'local'
  },
  {
    id: 'local-9',
    caseStudy: 'A 45-year-old homeless man presents with a chronic cough that has lasted for over 4 weeks. He has been coughing up blood-tinged sputum and reports significant weight loss and drenching night sweats.',
    options: ['Lung Cancer', 'Tuberculosis', 'Pneumonia', 'Bronchitis', 'Pulmonary Fibrosis'],
    answer: 'Tuberculosis',
    explanation: 'Tuberculosis (TB) focuses primarily on the lungs. A severe cough lasting over three weeks, accompanied by coughing up blood and intense night sweats, strongly points to active pulmonary TB.',
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-10',
    caseStudy: 'A 28-year-old female complains of chronic diarrhea, abdominal bloating, and weight loss. She mentions that her symptoms seem to worsen specifically after eating bread, pasta, or other wheat-based products.',
    options: ["Crohn's Disease", 'Irritable Bowel Syndrome', 'Ulcerative Colitis', 'Celiac Disease', 'Gastric Ulcer'],
    answer: 'Celiac Disease',
    explanation: "Celiac disease is an immune reaction to eating gluten. Over time, it damages the small intestine's lining, leading to malabsorption, diarrhea, and abdominal distress.",
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-11',
    caseStudy: 'A 32-year-old female presents with chronic, severe pelvic pain that worsens during menstruation (dysmenorrhea). She also reports pain during intercourse and has been struggling to conceive for the past two years.',
    options: ['Polycystic Ovary Syndrome (PCOS)', 'Endometriosis', 'Pelvic Inflammatory Disease', 'Uterine Fibroids', 'Ovarian Cancer'],
    answer: 'Endometriosis',
    explanation: 'Endometriosis is an often painful disorder where tissue similar to the lining of the uterus grows outside the uterus, causing severe pelvic pain and potentially infertility.',
    difficulty: 'hard',
    source: 'local'
  },
  {
    id: 'local-12',
    caseStudy: 'A 50-year-old man visits the dermatologist for severe, scaly, silvery plaques on his elbows and knees. He also notes that some of his nails are pitted and thickened. He has symmetric joint pain in his fingers.',
    options: ['Eczema', 'Psoriasis', 'Seborrheic Dermatitis', 'Ringworm', 'Rosacea'],
    answer: 'Psoriasis',
    explanation: 'Psoriasis is a chronic autoimmune condition causing rapid buildup of skin cells, leading to scaly patches. Joint involvement indicates possible psoriatic arthritis.',
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-13',
    caseStudy: 'A 22-year-old male is brought in by his family because he has been whispering to himself and claiming that the government is transmitting thoughts into his brain. His speech is highly disorganized and he lacks emotional expression.',
    options: ['Bipolar Disorder', 'Major Depressive Disorder', 'Schizophrenia', 'Borderline Personality Disorder', 'PTSD'],
    answer: 'Schizophrenia',
    explanation: 'Schizophrenia is a serious mental disorder involving delusions, hallucinations, and disorganized speech (positive symptoms) along with flattened affect (negative symptoms).',
    difficulty: 'easy',
    source: 'local'
  },
  {
    id: 'local-14',
    caseStudy: 'A 65-year-old male presents with a "pill-rolling" tremor in his right hand when resting. His wife notes he has been moving much slower recently (bradykinesia) and his handwriting has become extremely small.',
    options: ["Huntington's Disease", 'Essential Tremor', 'ALS', "Parkinson's Disease", "Alzheimer's Disease"],
    answer: "Parkinson's Disease",
    explanation: "Parkinson's is a progressive nervous system disorder that affects movement. A resting tremor and bradykinesia are classic early signs due to the loss of dopamine-producing neurons.",
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-15',
    caseStudy: 'A 30-year-old female experiences sudden blurry vision in one eye with pain on eye movement. She also reports extreme fatigue, a sensation of an "electric shock" down her back, and occasional numbness in her legs.',
    options: ['Lyme Disease', 'Multiple Sclerosis', 'Guillain-Barré Syndrome', 'Myasthenia Gravis', 'Fibromyalgia'],
    answer: 'Multiple Sclerosis',
    explanation: 'MS is a demyelinating disease of the CNS. Optic neuritis (vision issues) combined with sensory symptoms and Lhermitte\'s sign (electric shock sensation) are classic presentations.',
    difficulty: 'hard',
    source: 'local'
  },
  {
    id: 'local-16',
    caseStudy: 'A 45-year-old female presents with bilateral pain, swelling, and stiffness in the small joints of her hands. She notes that the stiffness is most severe in the morning, often lasting for more than an hour before improving.',
    options: ['Osteoarthritis', 'Gout', 'Rheumatoid Arthritis', 'Lupus', 'Psoriatic Arthritis'],
    answer: 'Rheumatoid Arthritis',
    explanation: 'Unlike osteoarthritis, rheumatoid arthritis affects the synovium, causing painful swelling bilaterally and prominent morning stiffness lasting over an hour.',
    difficulty: 'medium',
    source: 'local'
  },
  {
    id: 'local-17',
    caseStudy: 'A 40-year-old female complains of extreme fatigue, unexplained weight gain of 7 kg despite eating less, constipation, and feeling unusually cold even in warm weather. You note her face appears somewhat puffy.',
    options: ['Depression', 'Hyperthyroidism', "Cushing's Syndrome", 'Polycystic Ovary Syndrome', 'Hypothyroidism'],
    answer: 'Hypothyroidism',
    explanation: "Hypothyroidism occurs when the thyroid gland doesn't produce enough crucial hormones, slowing down the body's metabolism, leading to weight gain, cold sensitivity, and fatigue.",
    difficulty: 'easy',
    source: 'local'
  },
  {
    id: 'local-18',
    caseStudy: 'A 28-year-old vegan female presents with severe fatigue, pale skin, and shortness of breath when climbing stairs. She also complains of frequently cold hands and occasional irregular heartbeats.',
    options: ['Anemia', 'Leukemia', 'Heart Arrhythmia', 'Chronic Fatigue Syndrome', 'Hypothyroidism'],
    answer: 'Anemia',
    explanation: "Anemia is a condition where the body lacks enough healthy red blood cells to carry adequate oxygen, causing fatigue, paleness, and shortness of breath.",
    difficulty: 'easy',
    source: 'local'
  },
  {
    id: 'local-19',
    caseStudy: 'A 50-year-old male notices a tender, red, warm area on his lower leg. Upon palpation, you feel a hard, cord-like structure just under the surface of the skin along a visible vein.',
    options: ['Deep Vein Thrombosis', 'Superficial Thrombophlebitis', 'Cellulitis', 'Varicose Veins', 'Peripheral Artery Disease'],
    answer: 'Superficial Thrombophlebitis',
    explanation: 'This refers to an inflammation of a vein near the surface of the skin caused by a blood clot. The "cord-like" feeling at the surface is a common hallmark distinction from deep vein issues.',
    difficulty: 'hard',
    source: 'local'
  },
  {
    id: 'local-20',
    caseStudy: 'A 26-year-old patient who recently returned from a trip to Southeast Asia presents with a sudden onset of high fever, severe retro-orbital headache (behind the eyes), and agonizing joint map that feels like "bone-breaking" pain. A generalized rash is noted.',
    options: ['Malaria', 'Typhoid', 'Dengue Fever', 'Chikungunya', 'Yellow Fever'],
    answer: 'Dengue Fever',
    explanation: 'Often called "breakbone fever" because of severe joint and muscle pain, Dengue is characterized by sudden high fever, retro-orbital pain, and a rash.',
    difficulty: 'medium',
    source: 'local'
  }
];
