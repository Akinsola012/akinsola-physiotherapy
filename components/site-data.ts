export const practice = {
  name: "Brave Physiotherapy",
  shortName: "Brave Physio",
  location: "Ibadan, Nigeria",
  serviceArea: "Ibadan, Lagos, Abeokuta, Osogbo & Ife",
  phone: "08079877837",
  phoneHref: "tel:+2348079877837",
  whatsappHref: "https://wa.me/2348079877837",
  email: "akinsolaoluwaseye1@gmail.com",
  emailHref: "mailto:akinsolaoluwaseye1@gmail.com",
  credentials: "Licensed Physiotherapists",
  hours: "Monday – Sunday, 7am – 7pm"
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  helpsWith: string[];
  approach: string;
  imageLabel: string;
  cta: string;
};

// CONDITIONS WE TREAT — grouped by who they affect
export type Condition = {
  slug: string;
  title: string;
  category: string;
  description: string;
  imageLabel: string;
};

export const conditionGroups = [
  {
    group: "Most Common — Adults",
    intro: "The conditions we see most often. Back pain, neck pain and joint problems affect millions of adults every year.",
    conditions: [
      {
        slug: "back-pain-sciatica",
        title: "Back Pain & Sciatica",
        description: "Lower back pain, disc problems, and shooting leg pain — the most common reason adults seek physiotherapy.",
        imageLabel: "Add a back assessment photograph"
      },
      {
        slug: "neck-pain",
        title: "Neck Pain & Headaches",
        description: "Stiff neck, tension headaches, and postural strain from desk work or phone use.",
        imageLabel: "Add a neck treatment photograph"
      },
      {
        slug: "knee-pain",
        title: "Knee Pain",
        description: "Osteoarthritis, meniscus injuries, ligament strains, and post-operative knee recovery.",
        imageLabel: "Add a knee rehabilitation photograph"
      },
      {
        slug: "shoulder-pain",
        title: "Shoulder Pain & Impingement",
        description: "Rotator cuff injuries, frozen shoulder, and shoulder impingement syndrome.",
        imageLabel: "Add a shoulder assessment photograph"
      },
      {
        slug: "hip-pain",
        title: "Hip Pain",
        description: "Hip osteoarthritis, bursitis, and recovery after hip replacement surgery.",
        imageLabel: "Add a hip rehabilitation photograph"
      },
      {
        slug: "sports-injuries",
        title: "Sports Injuries",
        description: "Sprains, strains, muscle tears, and return-to-sport rehabilitation for active adults.",
        imageLabel: "Add a sports rehabilitation photograph"
      }
    ]
  },
  {
    group: "Neurological Conditions",
    intro: "Conditions affecting the brain, spinal cord, or nerves. We help patients regain movement, balance and independence.",
    conditions: [
      {
        slug: "stroke",
        title: "Stroke Recovery",
        description: "Rehabilitation after stroke to improve movement, balance, walking, and daily function.",
        imageLabel: "Add a stroke rehabilitation photograph"
      },
      {
        slug: "cerebral-palsy",
        title: "Cerebral Palsy",
        description: "Movement and coordination support for children and adults living with cerebral palsy.",
        imageLabel: "Add a cerebral palsy support photograph"
      },
      {
        slug: "facial-palsy",
        title: "Facial Palsy / Bell's Palsy",
        description: "Facial muscle weakness or paralysis, including Bell's palsy and post-viral facial palsy.",
        imageLabel: "Add a facial palsy treatment photograph"
      },
      {
        slug: "foot-drop",
        title: "Foot Drop",
        description: "Weakness in lifting the front of the foot — caused by nerve injury, stroke, or MS.",
        imageLabel: "Add a foot drop treatment photograph"
      },
      {
        slug: "parkinsons",
        title: "Parkinson's Disease",
        description: "Movement, balance and gait training for people living with Parkinson's disease.",
        imageLabel: "Add a Parkinson's rehabilitation photograph"
      },
      {
        slug: "balance-disorders",
        title: "Balance & Dizziness",
        description: "Vestibular rehabilitation for dizziness, vertigo, and balance problems.",
        imageLabel: "Add a balance training photograph"
      }
    ]
  },
  {
    group: "Older Adults",
    intro: "Age-related conditions we treat at home. We help older adults stay strong, steady, and independent.",
    conditions: [
      {
        slug: "arthritis",
        title: "Arthritis & Joint Stiffness",
        description: "Osteoarthritis and rheumatoid arthritis management to reduce pain and improve movement.",
        imageLabel: "Add an arthritis support photograph"
      },
      {
        slug: "falls-prevention",
        title: "Falls Prevention",
        description: "Balance training and strength work to reduce the risk of falls at home.",
        imageLabel: "Add a falls prevention photograph"
      },
      {
        slug: "post-surgical",
        title: "Post-Surgical Rehabilitation",
        description: "Recovery after hip, knee, or spinal surgery — guided at your own pace.",
        imageLabel: "Add a post-surgery rehabilitation photograph"
      },
      {
        slug: "fracture-recovery",
        title: "Fracture Recovery",
        description: "Rehabilitation after hip, wrist, or other fractures to regain strength and confidence.",
        imageLabel: "Add a fracture recovery photograph"
      },
      {
        slug: "mobility-decline",
        title: "Reduced Mobility & Weakness",
        description: "Support for walking difficulty, muscle weakness, and getting back to daily activities.",
        imageLabel: "Add a mobility support photograph"
      },
      {
        slug: "elderly-home-rehab",
        title: "Elderly Home Rehabilitation",
        description: "Physiotherapy delivered in your home for comfort and convenience.",
        imageLabel: "Add a home visit photograph"
      }
    ]
  },
  {
    group: "Ergonomic & Postural",
    intro: "Conditions caused or worsened by how you sit, stand, or work. We help you fix the root cause.",
    conditions: [
      {
        slug: "desk-posture",
        title: "Desk & Posture Problems",
        description: "Neck, back and shoulder pain from prolonged sitting or poor workstation setup.",
        imageLabel: "Add a workstation assessment photograph"
      },
      {
        slug: "repetitive-strain",
        title: "Repetitive Strain Injuries",
        description: "Wrist, elbow, and shoulder pain from repetitive tasks — including carpal tunnel syndrome.",
        imageLabel: "Add a repetitive strain treatment photograph"
      },
      {
        slug: "manual-handling",
        title: "Manual Handling Injuries",
        description: "Back and shoulder injuries from lifting, carrying, or moving heavy loads.",
        imageLabel: "Add a manual handling training photograph"
      },
      {
        slug: "driving-posture",
        title: "Driving & Prolonged Sitting Pain",
        description: "Back and hip pain from long hours of driving or sitting — common with Lagos commuters.",
        imageLabel: "Add a driving posture photograph"
      }
    ]
  },
  {
    group: "Children & Young People",
    intro: "Gentle, age-appropriate physiotherapy for children with movement or developmental conditions.",
    conditions: [
      {
        slug: "cerebral-palsy-children",
        title: "Cerebral Palsy (Children)",
        description: "Movement, posture and coordination support for children living with cerebral palsy.",
        imageLabel: "Add a paediatric cerebral palsy photograph"
      },
      {
        slug: "developmental-delay",
        title: "Developmental Delay",
        description: "Support for children who are late to roll, sit, crawl, or walk.",
        imageLabel: "Add a paediatric developmental photograph"
      },
      {
        slug: "toe-walking",
        title: "Toe Walking",
        description: "Assessment and treatment for children who walk on their toes beyond the expected age.",
        imageLabel: "Add a paediatric gait photograph"
      },
      {
        slug: "postural-children",
        title: "Postural Problems in Children",
        description: "Posture correction for school-age children, especially with heavy school bags and screen time.",
        imageLabel: "Add a paediatric posture photograph"
      },
      {
        slug: "sports-children",
        title: "Sports Injuries in Children",
        description: "Safe rehabilitation for young athletes recovering from injury.",
        imageLabel: "Add a youth sports rehabilitation photograph"
      }
    ]
  }
];

export const conditions = [
  "Back and neck pain",
  "Knee, hip and shoulder pain",
  "Stroke recovery",
  "Sports injuries",
  "Arthritis and joint stiffness",
  "Post-surgical rehabilitation",
  "Post-fracture recovery",
  "Balance and fall prevention",
  "Sciatica and nerve pain",
  "Muscle weakness",
  "Walking difficulties",
  "Elderly mobility support"
];

export const locations = [
  { city: "Ibadan", note: "Our primary base — same-day visits often available." },
  { city: "Lagos", note: "Home visits across the mainland and island." },
  { city: "Abeokuta", note: "Scheduled home visits throughout the week." },
  { city: "Osogbo", note: "Home visits by appointment." },
  { city: "Ife", note: "Home visits by appointment." }
];

export const trustPoints = [
  { title: "Licensed", text: "Licensed physiotherapists you can trust." },
  { title: "Home Visits", text: "We come to you — across South-West Nigeria." },
  { title: "7 Days a Week", text: "Available Monday to Sunday, 7am – 7pm." },
  { title: "One-on-One", text: "Personal sessions focused on your recovery." }
];
export type ConditionDetail = {
  slug: string;
  intro: string;
  understanding: {
    heading: string;
    paragraphs: string[];
  };
  symptoms: string[];
  howWeTreat: {
    heading: string;
    paragraphs: string[];
  };
  faqs: { q: string; a: string }[];
};

export const conditionDetails: ConditionDetail[] = [
  {
    slug: "back-pain-sciatica",
    intro: "Back pain is one of the most common reasons people seek physiotherapy — affecting up to 80% of adults at some point. Whether it's a dull ache, sharp pain with movement, or sciatica shooting down your leg, we help you understand your condition, reduce your pain, and return to the activities that matter.",
    understanding: {
      heading: "Understanding Back Pain & Sciatica",
      paragraphs: [
        "The lower back (lumbar spine) is made up of five vertebrae stacked on top of the sacrum. Between each vertebra sits an intervertebral disc — a tough outer ring surrounding a gel-like centre — that acts as a shock absorber. Behind the discs, facet joints guide spinal movement, while muscles and ligaments provide stability and control.",
        "Most back pain is 'mechanical' — meaning it comes from the muscles, joints, discs, or ligaments rather than serious disease. In fact, around 90% of cases are non-specific, meaning we cannot pinpoint a single structure as the cause, and importantly, we don't need to in order to treat it effectively.",
        "Sciatica refers to pain radiating along the sciatic nerve — from the lower back, through the buttock, and down the leg. True sciatica involves irritation or compression of a lumbar nerve root (most commonly L4, L5, or S1). The good news: 80–90% of people with sciatica from a disc herniation improve without surgery, typically within 6–12 weeks."
      ]
    },
    symptoms: [
      "Aching, stiffness, or sharp pain in the lower back",
      "Pain with bending, lifting, twisting, or transitional movements",
      "Pain worse with prolonged sitting, standing, or certain positions",
      "Morning stiffness that improves with movement",
      "Muscle spasm or visible tightness",
      "Referred pain to the buttocks or upper thighs",
      "Radiating leg pain (sharp, shooting, or burning)",
      "Numbness, tingling, or weakness in the leg or foot",
      "Pain that worsens with coughing or sneezing"
    ],
    howWeTreat: {
      heading: "How We Treat Back Pain & Sciatica",
      paragraphs: [
        "Comprehensive Assessment: Every session begins with a detailed history, physical examination, and functional testing. We screen for red flags, identify contributing factors, and understand your goals before designing a plan.",
        "Education & Reassurance: Understanding your pain is therapeutic. Research shows that reassurance and education reduce fear-avoidance beliefs — which are strong predictors of recovery. We explain what's likely causing your symptoms, why the outlook is generally good, and what you can do to help yourself.",
        "Manual Therapy: Hands-on techniques — spinal mobilisation, soft tissue work, neural mobilisation, and muscle energy techniques — reduce pain and improve mobility, creating a window for you to move and exercise more comfortably.",
        "Exercise Therapy: Exercise is the cornerstone of back pain treatment. We prescribe directional preference exercises, core stability training (deep stabilisers like transversus abdominis and multifidus), general strengthening, flexibility work, aerobic conditioning, and graded exposure to feared movements.",
        "Pain Management Strategies: We teach practical strategies — positioning, activity modification, pacing, heat or ice, and flare-up management — so you can stay in control during recovery.",
        "Lifestyle & Ergonomic Guidance: We address workstation setup, lifting technique, sleeping positions, and daily movement habits — helping you build variety and movement into your day rather than chasing a rigid 'perfect' posture."
      ]
    },
    faqs: [
      {
        q: "Do I need an X-ray or MRI for my back pain?",
        a: "Usually not initially. Imaging is only indicated when red flags are present, symptoms aren't improving, or surgery is being considered. For most back pain, imaging doesn't change treatment and can reveal incidental findings that increase anxiety without helping recovery."
      },
      {
        q: "My MRI shows disc degeneration or bulging. Is that causing my pain?",
        a: "Not necessarily. Studies show 30–40% of young adults and 80–90% of older adults have disc abnormalities on MRI with no symptoms. Treatment based on clinical presentation is often more effective than treatment based on imaging alone."
      },
      {
        q: "Should I rest until my back feels better?",
        a: "No. Prolonged rest delays recovery. Current guidelines recommend staying as active as possible within pain limits. Walking, gentle movement, and modified daily activities promote healing better than bed rest."
      },
      {
        q: "Will I need surgery?",
        a: "Most likely not. The vast majority of back pain and sciatica improves with conservative treatment. Surgery is typically reserved for cauda equina syndrome, progressive neurological deficits, or severe symptoms not responding to 6–12 weeks of appropriate physiotherapy."
      },
      {
        q: "How long will my sciatica last?",
        a: "Most sciatica improves significantly within 6–12 weeks with conservative treatment. Some people continue improving over 3–6 months as the underlying disc herniation naturally shrinks. Recovery isn't always linear — fluctuations are normal."
      },
      {
        q: "Is my spine damaged?",
        a: "Usually, no. The spine is remarkably strong and adaptable. Even disc herniations represent a part of the disc pushing outward, not permanent damage — and most herniations naturally resorb. Pain doesn't necessarily mean damage."
      },
      {
        q: "Do I need a referral to see a physiotherapist?",
        a: "No. Physiotherapists are primary healthcare providers. You can book directly, and we'll assess your condition, begin treatment, and refer you for imaging or specialist consultation if indicated."
      }
    ]
  },
{
    slug: "neck-pain",
    intro: "Neck pain and headaches are among the most common reasons adults seek physiotherapy — often linked to posture, prolonged sitting, or stress. Whether your pain is sharp, dull, or accompanied by headaches, we help you understand the cause and recover safely at home.",
    understanding: {
      heading: "Understanding Neck Pain & Headaches",
      paragraphs: [
        "The neck (cervical spine) consists of seven vertebrae that support the head while allowing a wide range of movement. Between each vertebra are discs, and behind them are facet joints that guide motion. Muscles and ligaments work together to stabilise the neck — but prolonged poor posture, repetitive strain, or sudden injury can overload these structures.",
        "Most neck pain is mechanical — meaning it comes from muscles, joints, or discs rather than serious disease. Common triggers include prolonged desk work, phone use (often called 'text neck'), poor sleeping positions, stress-related muscle tension, and whiplash injuries.",
        "Headaches that originate from the neck — known as cervicogenic headaches — are often felt at the base of the skull and can radiate to the forehead or behind the eyes. They respond well to physiotherapy that addresses the underlying neck dysfunction."
      ]
    },
    symptoms: [
      "Stiffness or aching in the neck",
      "Sharp pain with certain head movements",
      "Headaches at the base of the skull or behind the eyes",
      "Pain referring into the shoulder or upper back",
      "Muscle tightness or spasm in the neck and shoulders",
      "Reduced range of motion (difficulty turning the head)",
      "Tingling, numbness, or weakness in the arm (if a nerve is involved)",
      "Pain worsened by prolonged sitting or looking down"
    ],
    howWeTreat: {
      heading: "How We Treat Neck Pain & Headaches",
      paragraphs: [
        "Comprehensive Assessment: We take a detailed history, examine posture and neck movement, test strength and neurological function, and identify the specific structures involved. We also screen for red flags that may require medical referral.",
        "Manual Therapy: Gentle mobilisation of the cervical spine, soft tissue release of tight muscles (upper trapezius, levator scapulae, suboccipitals), and trigger point therapy reduce pain and restore movement.",
        "Postural Correction: We assess your workstation, phone habits, and sleeping position, then recommend practical changes that reduce daily strain on the neck.",
        "Exercise Therapy: Targeted exercises strengthen the deep neck flexors and scapular stabilisers, improve mobility, and prevent recurrence. We also teach you micro-breaks and desk stretches.",
        "Headache Management: For cervicogenic headaches, we combine manual therapy with specific exercises and education on headache triggers and prevention.",
        "Ergonomic & Lifestyle Guidance: Small changes — screen height, chair position, pillow choice — make a big difference in preventing neck pain from returning."
      ]
    },
    faqs: [
      {
        q: "Do I need an X-ray or MRI for my neck pain?",
        a: "Usually not initially. Imaging is only indicated if there are red flags (such as severe trauma, progressive weakness, or signs of serious pathology). For most neck pain, a clinical examination is more useful than imaging."
      },
      {
        q: "Are headaches caused by my neck?",
        a: "Often, yes. Cervicogenic headaches originate from the neck and are felt at the base of the skull, temples, or behind the eyes. They're usually one-sided and worsened by certain neck movements or sustained postures. Physiotherapy addressing the neck can significantly reduce these headaches."
      },
      {
        q: "How long will it take to recover?",
        a: "Most acute neck pain improves within 2–6 weeks with appropriate treatment. Chronic or postural cases may take 6–12 weeks, especially if the underlying cause (workstation, posture) isn't addressed."
      },
      {
        q: "Is it safe to exercise with neck pain?",
        a: "Yes, appropriate exercise is one of the most effective treatments. We prescribe specific exercises that strengthen the neck without aggravating symptoms. Some mild soreness after exercise is normal."
      },
      {
        q: "Can stress cause neck pain?",
        a: "Yes — stress leads to sustained muscle tension in the neck and shoulders, which can trigger or worsen pain. We address both the physical and lifestyle aspects to help break the cycle."
      },
      {
        q: "Should I use a special pillow?",
        a: "A supportive pillow that keeps your neck in a neutral position can help. We can advise on pillow type, height, and sleeping positions based on your specific issue."
      }
    ]
  },
  {
    slug: "knee-pain",
    intro: "Knee pain affects people of all ages — from athletes to older adults — and can limit walking, stairs, and daily independence. Whether from injury, arthritis, or post-surgery recovery, physiotherapy helps restore strength, mobility, and confidence.",
    understanding: {
      heading: "Understanding Knee Pain",
      paragraphs: [
        "The knee is the largest joint in the body — a complex hinge where the thigh bone (femur), shin bone (tibia), and kneecap (patella) meet. It relies on cartilage, menisci (shock-absorbing pads), ligaments, and surrounding muscles to function smoothly.",
        "Knee pain can arise from many sources: osteoarthritis (wear of joint cartilage), ligament injuries (ACL, MCL), meniscus tears, patellofemoral pain (kneecap tracking problems), tendinopathies, or post-surgical recovery. In older adults, osteoarthritis is the most common cause.",
        "Regardless of the cause, most knee pain improves with the right combination of strengthening, mobility work, and load management. Surgery is only needed in specific cases."
      ]
    },
    symptoms: [
      "Pain with walking, stairs, or getting up from a chair",
      "Swelling, stiffness, or warmth around the knee",
      "Clicking, grinding, or locking sensations",
      "Reduced range of motion (difficulty bending or straightening)",
      "Weakness or giving-way sensations",
      "Pain at the front of the knee (patellofemoral pain)",
      "Pain on the inner or outer side of the knee",
      "Morning stiffness, especially with arthritis"
    ],
    howWeTreat: {
      heading: "How We Treat Knee Pain",
      paragraphs: [
        "Comprehensive Assessment: We assess your knee's movement, strength, stability, and how it functions during daily activities. We also look at the hip and ankle — because problems there often contribute to knee pain.",
        "Pain Relief Techniques: Hands-on therapy, manual mobilisation of the joint, soft tissue release, and modalities (TENS, ice, infrared) help reduce pain and swelling.",
        "Progressive Strengthening: The most effective long-term treatment is strengthening the quadriceps, hamstrings, glutes, and calf. We build strength gradually, respecting your pain levels.",
        "Mobility & Flexibility: Restoring full knee extension and flexion is essential for normal walking and stair climbing. We use targeted stretches and mobility drills.",
        "Balance & Proprioception: Training your knee to sense position and respond quickly reduces the risk of re-injury and improves confidence on uneven ground.",
        "Activity & Load Management: We help you understand how much activity is safe and how to gradually return to walking, stairs, sport, or work."
      ]
    },
    faqs: [
      {
        q: "Do I need surgery for my knee pain?",
        a: "Most knee pain — including osteoarthritis and many meniscus tears — improves with conservative physiotherapy. Surgery is typically reserved for specific cases like complete ligament tears in athletes, large meniscus tears causing locking, or advanced arthritis unresponsive to therapy."
      },
      {
        q: "Is walking bad for my knee?",
        a: "No — walking is generally good for knee health. It keeps the joint lubricated, strengthens supporting muscles, and helps manage weight. We'll advise on distance and pace based on your specific condition."
      },
      {
        q: "Will I need to stop climbing stairs?",
        a: "Usually not. We teach you how to climb stairs safely (good leg up first, affected leg down first) and gradually strengthen the muscles needed. Avoiding stairs entirely can actually weaken the knee further."
      },
      {
        q: "How long does knee recovery take?",
        a: "Minor strains may resolve in 2–4 weeks. Osteoarthritis management is ongoing, with significant improvement in 6–12 weeks. Post-surgical recovery varies by procedure, typically 3–6 months for full function."
      },
      {
        q: "Can knee pain be caused by hip or ankle problems?",
        a: "Yes. Hip weakness or ankle stiffness changes how you walk, which can overload the knee. That's why we always assess the whole leg, not just the knee."
      },
      {
        q: "Should I use a knee brace?",
        a: "Braces can help in specific situations (post-injury, post-surgery, or during certain activities), but over-reliance can weaken the knee over time. We'll advise whether a brace is helpful for your case."
      }
    ]
  },
  {
    slug: "shoulder-pain",
    intro: "Shoulder pain can make everyday tasks — dressing, reaching, lifting, even sleeping — difficult. Whether from impingement, rotator cuff injury, frozen shoulder, or post-surgical recovery, physiotherapy restores movement and function.",
    understanding: {
      heading: "Understanding Shoulder Pain & Impingement",
      paragraphs: [
        "The shoulder is the most mobile joint in the body — a ball-and-socket design that allows an extraordinary range of movement. That mobility comes at a cost: the shoulder relies heavily on muscles and ligaments (the rotator cuff and surrounding structures) for stability.",
        "Shoulder impingement occurs when tendons in the shoulder are compressed during certain movements — especially reaching overhead. It's often caused by poor posture, muscle imbalances, or repetitive overhead activity.",
        "Other common causes of shoulder pain include rotator cuff tears, frozen shoulder (adhesive capsulitis), bursitis, and referred pain from the neck. Accurate assessment is essential to identify the right treatment."
      ]
    },
    symptoms: [
      "Pain reaching overhead, behind your back, or to the side",
      "Pain at night, especially when lying on the affected side",
      "Weakness in the arm or difficulty lifting objects",
      "Clicking, catching, or grinding sensations",
      "Stiffness with reduced range of motion (frozen shoulder)",
      "Pain referring into the upper arm or neck",
      "Difficulty with everyday tasks (dressing, combing hair)",
      "Gradual onset of pain without a specific injury"
    ],
    howWeTreat: {
      heading: "How We Treat Shoulder Pain & Impingement",
      paragraphs: [
        "Comprehensive Assessment: We test shoulder range of motion, strength, and specific movements to identify which structures are involved. We also check the neck, as referred pain is common.",
        "Manual Therapy: Joint mobilisation, soft tissue release, and dry needling (where appropriate) reduce pain and improve shoulder mechanics.",
        "Postural Correction: Rounded shoulders and forward head posture contribute to impingement. We address this with specific stretches and strengthening.",
        "Rotator Cuff Strengthening: Progressive loading of the rotator cuff and scapular stabilisers is the cornerstone of long-term recovery.",
        "Mobility Restoration: For frozen shoulder, we use a combination of gentle mobility work, stretching, and progressive strengthening — respecting the natural phases of recovery.",
        "Activity Modification: We help you adapt movements temporarily so you can continue daily activities without aggravating the shoulder."
      ]
    },
    faqs: [
      {
        q: "Is shoulder impingement caused by poor posture?",
        a: "Often, yes. Rounded shoulders and forward head posture reduce the space in the shoulder joint, causing tendons to be pinched during movement. Correcting posture is a key part of treatment."
      },
      {
        q: "How long does frozen shoulder take to recover?",
        a: "Frozen shoulder typically has three phases — freezing (painful), frozen (stiff), and thawing (recovery). Full recovery often takes 12–18 months, but physiotherapy can significantly speed progress and reduce pain at each stage."
      },
      {
        q: "Do I need surgery for a rotator cuff tear?",
        a: "Not always. Many partial tears and even some full tears respond well to physiotherapy, especially in older adults. Surgery is usually considered for full tears in younger, active people or when conservative treatment fails."
      },
      {
        q: "Should I rest my shoulder or keep using it?",
        a: "Complete rest is usually not helpful and can lead to stiffness. We recommend modified activity — avoiding painful movements while keeping the shoulder gently active. We'll guide you on what's safe."
      },
      {
        q: "Can shoulder pain be referred from my neck?",
        a: "Yes. Neck problems can refer pain into the shoulder, arm, or hand. That's why our assessment always includes the neck to make sure we're treating the right source."
      },
      {
        q: "How long until I can lift again?",
        a: "It depends on the cause and severity. Minor impingement may improve in 4–6 weeks; rotator cuff injuries typically take 8–12 weeks; post-surgical recovery takes longer. We'll set realistic milestones together."
      }
    ]
  },
  {
    slug: "hip-pain",
    intro: "Hip pain affects walking, sitting, and daily independence. Whether from osteoarthritis, bursitis, or post-surgical recovery, physiotherapy helps restore strength, mobility, and confidence at home.",
    understanding: {
      heading: "Understanding Hip Pain",
      paragraphs: [
        "The hip is a ball-and-socket joint where the head of the femur (thigh bone) fits into the acetabulum (socket of the pelvis). It bears the body's weight and enables walking, standing, and a wide range of leg movements.",
        "Common causes of hip pain include osteoarthritis (wear of joint cartilage), trochanteric bursitis (inflammation of the bursa on the outer hip), muscle strains, labral tears, and referred pain from the lower back.",
        "Hip pain in older adults is often due to osteoarthritis, which causes progressive stiffness, pain, and reduced walking tolerance. While there is no cure for osteoarthritis, physiotherapy can significantly reduce pain and maintain function — often delaying or avoiding the need for surgery."
      ]
    },
    symptoms: [
      "Pain in the groin, outer hip, or buttock",
      "Stiffness with walking or getting up from a chair",
      "Pain with prolonged sitting or standing",
      "Reduced range of motion (difficulty putting on socks)",
      "Limping or altered walking pattern",
      "Pain at night, especially when lying on the affected side",
      "Pain referring into the thigh or knee",
      "Clicking, locking, or catching sensations"
    ],
    howWeTreat: {
      heading: "How We Treat Hip Pain",
      paragraphs: [
        "Comprehensive Assessment: We assess hip movement, strength, walking pattern, and check the lower back — since referred pain from the spine is a common cause of hip symptoms.",
        "Manual Therapy: Joint mobilisation, soft tissue release of the glutes and hip flexors, and trigger point therapy reduce pain and improve movement.",
        "Strengthening Programme: We focus on the glutes (especially gluteus medius, which stabilises the hip), hip flexors, quadriceps, and core. Strong hip muscles protect the joint and improve walking.",
        "Mobility Work: Restoring full hip extension and rotation is essential for normal walking. We use targeted stretches and mobility drills.",
        "Walking & Gait Retraining: We correct walking patterns that overload the hip, reducing pain and improving efficiency.",
        "Fall Prevention: For older adults with hip pain, we combine strength, balance, and confidence training to reduce fall risk."
      ]
    },
    faqs: [
      {
        q: "Do I need a hip replacement?",
        a: "Not necessarily. Many people with hip osteoarthritis manage well with physiotherapy, weight management, and activity modification. Hip replacement is considered when pain is severe, function is significantly limited, and conservative treatment has been exhausted."
      },
      {
        q: "Is walking good for hip pain?",
        a: "Moderate walking is generally good — it keeps the joint lubricated, strengthens supporting muscles, and helps manage weight. We'll advise on distance and pace based on your specific condition."
      },
      {
        q: "Why does my hip pain refer to my knee?",
        a: "The hip and knee share nerve pathways. Hip problems — especially osteoarthritis — commonly refer pain to the front of the thigh or knee. That's why hip pain is often felt in the knee first."
      },
      {
        q: "How long does hip recovery take?",
        a: "Minor strains may resolve in 2–4 weeks. Osteoarthritis management is ongoing, with noticeable improvement in 6–12 weeks. Post-surgical recovery varies by procedure, typically 3–6 months for hip replacement."
      },
      {
        q: "Can hip pain come from my back?",
        a: "Yes. Referred pain from the lumbar spine and sacroiliac joint commonly presents as hip or buttock pain. Our assessment always includes the lower back."
      },
      {
        q: "Should I use a walking stick?",
        a: "A walking stick can reduce load on the hip during flare-ups or after surgery. We'll advise whether it's helpful for you — and when to wean off it as you get stronger."
      }
    ]
  },
  {
    slug: "stroke",
    intro: "Stroke can affect movement, balance, speech, and independence. Physiotherapy after stroke helps retrain the brain and body to regain function — improving walking, arm use, and confidence in daily activities, all in your own home.",
    understanding: {
      heading: "Understanding Stroke Recovery",
      paragraphs: [
        "A stroke occurs when blood flow to part of the brain is interrupted — either by a clot (ischaemic stroke) or a bleed (haemorrhagic stroke). This damages brain cells, affecting the functions they control: movement, sensation, balance, speech, and coordination.",
        "Recovery after stroke depends on neuroplasticity — the brain's remarkable ability to rewire itself. Through repetitive, task-specific practice, undamaged areas of the brain can take over some functions of damaged areas. This is why consistent physiotherapy is essential.",
        "The first 3–6 months after stroke typically show the fastest recovery, but improvements can continue for years with ongoing rehabilitation. Every stroke is different — our treatment is tailored to your specific deficits and goals."
      ]
    },
    symptoms: [
      "Weakness or paralysis on one side of the body (hemiplegia)",
      "Difficulty walking or poor balance",
      "Reduced arm and hand function",
      "Muscle stiffness or spasticity",
      "Foot drop or dragging the affected leg",
      "Difficulty with coordination or fine movements",
      "Fatigue during physical activity",
      "Reduced confidence with daily tasks"
    ],
    howWeTreat: {
      heading: "How We Treat Stroke Recovery",
      paragraphs: [
        "Comprehensive Assessment: We assess movement, strength, balance, walking pattern, and functional abilities. We also understand your goals — whether it's walking independently, using your arm again, or returning to specific activities.",
        "Task-Specific Training: We practice the exact movements you need — walking, standing up, reaching, dressing — because the brain rewires best through repetition of meaningful tasks.",
        "Gait & Balance Training: We work on standing balance, weight shifting, and safe walking with or without aids. We progress from supported to independent walking as ability improves.",
        "Strength & Coordination: Targeted exercises strengthen weak muscles and improve coordination on the affected side.",
        "Spasticity Management: For muscle stiffness, we use positioning, stretching, and gentle movement to reduce tone and prevent contractures.",
        "Family & Caregiver Training: We teach family members how to support transfers, walking, and exercises safely at home — with consent and proper guidance.",
        "Home Safety: We assess your home environment and recommend practical changes (grab bars, clear pathways, appropriate seating) to reduce fall risk."
      ]
    },
    faqs: [
      {
        q: "How soon after stroke should I start physiotherapy?",
        a: "As soon as medically stable — often within days. Early, consistent rehabilitation significantly improves outcomes. Home physiotherapy can begin as soon as you're discharged from hospital."
      },
      {
        q: "How long does stroke recovery take?",
        a: "Most rapid recovery happens in the first 3–6 months. However, with ongoing rehabilitation, improvements can continue for months or years. Recovery isn't linear — some weeks bring more progress than others."
      },
      {
        q: "Can I regain use of my arm and hand?",
        a: "Many people do, especially with intensive, task-specific practice. Recovery depends on the location and size of the stroke, your overall health, and how consistently you practise. We focus on functional gains that matter to your daily life."
      },
      {
        q: "Will I walk again?",
        a: "Most stroke survivors regain some walking ability with rehabilitation. Some walk independently, others need a cane or walker. We work toward the highest level of independence your body allows."
      },
      {
        q: "Is home physiotherapy as effective as clinic-based?",
        a: "Yes — research shows home-based physiotherapy is just as effective, and often more relevant because you practise skills in your actual environment. It also removes the burden of travel during recovery."
      },
      {
        q: "How many sessions will I need?",
        a: "This varies widely. Some need 2–3 sessions per week for several months; others benefit from periodic check-ins. We'll recommend a schedule after assessment and adjust as you progress."
      }
    ]
  },
  {
    slug: "cerebral-palsy",
    intro: "Cerebral palsy affects movement, posture, and coordination. Physiotherapy helps children and adults with CP build strength, improve mobility, and gain greater independence — at home, at school, and in the community.",
    understanding: {
      heading: "Understanding Cerebral Palsy",
      paragraphs: [
        "Cerebral palsy (CP) is a group of movement disorders caused by damage to the developing brain — usually before, during, or shortly after birth. It affects muscle tone, posture, and movement, but does not worsen over time (though symptoms can change with age).",
        "CP presents differently in every person. Some have stiff muscles (spastic CP), others have involuntary movements (dyskinetic CP), poor coordination (ataxic CP), or a mix. Severity ranges from mild — affecting one limb — to severe, affecting the whole body.",
        "Physiotherapy is a cornerstone of CP management. It doesn't cure CP, but it helps maximise function, prevent complications like contractures, and support participation in daily life. Early intervention gives the best results, but improvement is possible at any age."
      ]
    },
    symptoms: [
      "Muscle stiffness or spasticity",
      "Poor coordination or balance",
      "Delayed motor milestones (sitting, crawling, walking)",
      "Difficulty with fine motor tasks (writing, buttons)",
      "Toe walking or altered gait pattern",
      "Involuntary movements or tremors",
      "Muscle weakness or low tone in some areas",
      "Difficulty with posture and trunk control"
    ],
    howWeTreat: {
      heading: "How We Treat Cerebral Palsy",
      paragraphs: [
        "Comprehensive Assessment: We assess movement patterns, muscle tone, strength, balance, and functional abilities. We also understand your (or your child's) goals — from sitting independently to walking to school.",
        "Neurodevelopmental Therapy: We use play-based and task-specific approaches that work with the brain's natural development, especially in young children.",
        "Strengthening & Stretching: Targeted exercises build functional strength and maintain flexibility, reducing the risk of contractures and deformities.",
        "Gait & Mobility Training: We work on walking, using aids when needed, and improving efficiency of movement.",
        "Postural Management: We advise on seating, standing frames, and positioning to support alignment and prevent complications.",
        "Family Education: Parents and caregivers are essential partners. We teach you how to support exercises, positioning, and daily activities at home."
      ]
    },
    faqs: [
      {
        q: "Can physiotherapy cure cerebral palsy?",
        a: "No — CP is a lifelong condition. But physiotherapy significantly improves function, reduces complications, and helps people with CP live fuller, more independent lives."
      },
      {
        q: "At what age should physiotherapy start?",
        a: "As early as possible. Early intervention during the brain's most plastic years gives the best results. However, physiotherapy benefits people with CP at any age."
      },
      {
        q: "Will my child ever walk?",
        a: "Many children with CP walk — some independently, others with aids. It depends on the type and severity of CP. We work toward the highest level of mobility your child can achieve."
      },
      {
        q: "How often should therapy happen?",
        a: "Typically 1–2 sessions per week, plus a home programme you can do daily. Consistency matters more than frequency — regular practice between sessions is key."
      },
      {
        q: "Does physiotherapy help adults with CP?",
        a: "Yes. Adults with CP benefit from physiotherapy for pain management, maintaining mobility, preventing falls, and managing age-related changes. It's never too late to improve function."
      },
      {
        q: "Should we use a standing frame or walker?",
        a: "Sometimes. Equipment can support alignment, build tolerance, and enable activity. We'll advise based on your specific needs — equipment should help, not replace, active movement."
      }
    ]
  },
  {
    slug: "facial-palsy",
    intro: "Facial palsy — including Bell's palsy — causes weakness or paralysis of the facial muscles, affecting expressions, eating, and speech. Physiotherapy helps restore movement and function through targeted facial exercises and techniques.",
    understanding: {
      heading: "Understanding Facial Palsy & Bell's Palsy",
      paragraphs: [
        "Facial palsy is weakness or paralysis of the muscles on one side of the face, usually caused by dysfunction of the facial nerve (cranial nerve VII). The most common type is Bell's palsy — a sudden, one-sided facial weakness of unknown cause, often linked to viral infection.",
        "Other causes include viral infections (shingles, herpes), trauma, surgery, or neurological conditions. In most cases, the cause is identified through clinical examination and sometimes imaging.",
        "The good news: around 70% of people with Bell's palsy recover fully within 3–6 months, even without treatment. Physiotherapy can significantly improve recovery, prevent complications like synkinesis (abnormal muscle co-contraction), and help those with incomplete recovery."
      ]
    },
    symptoms: [
      "Drooping on one side of the face",
      "Difficulty closing the eye on the affected side",
      "Drooling or difficulty with eating and drinking",
      "Reduced ability to smile, frown, or raise eyebrows",
      "Slurred speech or difficulty with certain sounds",
      "Altered taste sensation",
      "Pain around the jaw or behind the ear",
      "Facial muscle twitching or spasms"
    ],
    howWeTreat: {
      heading: "How We Treat Facial Palsy",
      paragraphs: [
        "Comprehensive Assessment: We assess facial movement, symmetry, eye closure, and functional impact. We also check for any signs that require medical attention.",
        "Facial Muscle Re-education: Gentle, targeted exercises help retrain facial muscles to move normally. Timing and technique matter — over-exercising can worsen outcomes.",
        "Mirror Therapy: Using a mirror to visually cue movement helps reconnect the brain with the affected muscles.",
        "Manual Techniques: Gentle massage and myofascial release reduce tension and improve circulation to the facial muscles.",
        "Eye Care Education: If eye closure is affected, we teach protective strategies (lubricating drops, taping) to prevent corneal damage.",
        "Synkinesis Management: If abnormal muscle co-contraction develops, we use specific techniques to retrain normal movement patterns.",
        "Speech & Swallowing Coordination: Where needed, we coordinate with speech therapy for comprehensive care."
      ]
    },
    faqs: [
      {
        q: "How long does Bell's palsy take to recover?",
        a: "Most people recover within 3–6 months, with the fastest improvement in the first 3 weeks. Physiotherapy can speed recovery and prevent complications."
      },
      {
        q: "Is facial palsy permanent?",
        a: "Usually not. Bell's palsy has a high recovery rate — around 70% recover fully, and 85% recover most function. Recovery depends on the cause, severity, and how early treatment begins."
      },
      {
        q: "Should I exercise my face a lot?",
        a: "No — over-exercising can actually worsen outcomes and lead to synkinesis (abnormal muscle co-contraction). We prescribe specific, timed exercises that promote normal movement patterns."
      },
      {
        q: "What is synkinesis?",
        a: "Synkinesis is when one facial movement triggers another unintentionally — for example, smiling causes the eye to close. It develops when nerves regrow abnormally. Physiotherapy can help retrain normal patterns."
      },
      {
        q: "Do I need medication for Bell's palsy?",
        a: "Corticosteroids (and sometimes antivirals) are often prescribed within 72 hours of onset. We coordinate with your doctor — physiotherapy complements medical treatment."
      },
      {
        q: "Can I still work with facial palsy?",
        a: "Yes — most people continue working. We help you manage symptoms like eye dryness, eating, and speaking so you can maintain normal routines while recovering."
      }
    ]
  },
  {
    slug: "foot-drop",
    intro: "Foot drop is weakness or paralysis of the muscles that lift the front of the foot. It causes the foot to drag when walking and increases fall risk. Physiotherapy helps restore movement and improve walking safety.",
    understanding: {
      heading: "Understanding Foot Drop",
      paragraphs: [
        "Foot drop is not a condition itself — it's a symptom of an underlying problem affecting the peroneal nerve, the sciatic nerve, or the brain and spinal cord pathways that control ankle movement.",
        "Common causes include stroke, multiple sclerosis, peripheral nerve injury, lumbar disc herniation, spinal stenosis, hip or knee surgery, and diabetes-related neuropathy.",
        "The foot drops because the muscles that lift it (tibialis anterior and others) aren't getting proper nerve signals. This causes the toes to drag during walking, leading to tripping, falls, and compensatory patterns like high-stepping or hip hiking."
      ]
    },
    symptoms: [
      "Difficulty lifting the front of the foot",
      "Dragging the toes when walking",
      "Tripping or stumbling frequently",
      "Slapping sound when the foot hits the ground",
      "Compensatory high-stepping or hip hiking",
      "Numbness or tingling on top of the foot or shin",
      "Weak ankle movement (especially dorsiflexion)",
      "Increased fall risk"
    ],
    howWeTreat: {
      heading: "How We Treat Foot Drop",
      paragraphs: [
        "Comprehensive Assessment: We identify the underlying cause, assess nerve function, ankle strength, and gait pattern. We coordinate with medical specialists if further investigation is needed.",
        "Strengthening: Targeted exercises for the ankle dorsiflexors, toe extensors, and supporting muscles — even partial activation can improve over time.",
        "Gait Retraining: We retrain walking patterns to reduce tripping and fall risk, using mirrors and feedback.",
        "Electrical Stimulation: Where appropriate, electrical stimulation of the peroneal nerve can help retrain the muscles.",
        "Orthotic Support: We advise on ankle-foot orthoses (AFOs) or functional electrical stimulation devices that can help with safe walking while muscles recover.",
        "Balance & Safety Training: We work on balance and confidence to reduce fall risk in daily life.",
        "Home Safety Assessment: We check for tripping hazards, advise on lighting, and recommend practical changes to keep you safe."
      ]
    },
    faqs: [
      {
        q: "Can foot drop be cured?",
        a: "It depends on the cause. Nerve-based foot drop often improves with time and therapy, especially if the nerve is only compressed (not severed). Central causes (like stroke) may improve with rehabilitation. Some cases require lifelong support."
      },
      {
        q: "Do I need an ankle-foot orthosis (AFO)?",
        a: "An AFO is often helpful for safe walking, especially early on. It supports the foot during walking while muscles recover. We'll advise if it's right for you and how to use it correctly."
      },
      {
        q: "How long does recovery take?",
        a: "Nerve recovery is slow — typically 1mm per day for regeneration. Full recovery can take 6–18 months depending on the cause. Some improvement often begins within weeks."
      },
      {
        q: "Is surgery ever needed?",
        a: "Sometimes — for nerve decompression, tendon transfer, or other procedures. Surgery is usually considered when conservative treatment hasn't worked or when the cause is mechanical. We coordinate with your specialist."
      },
      {
        q: "Can I still walk independently?",
        a: "Most people can walk with appropriate support (AFO, FES device, or walking aid). We work toward the highest level of independent, safe mobility possible."
      },
      {
        q: "What is functional electrical stimulation (FES)?",
        a: "FES uses small electrical pulses to stimulate the nerve that lifts the foot during walking. It can dramatically improve gait for some people. We'll advise if it's suitable for your case."
      }
    ]
  },
    {
    slug: "parkinsons",
    intro: "Parkinson's disease affects movement, balance, and coordination. Physiotherapy helps people with Parkinson's maintain mobility, reduce fall risk, and stay independent — through targeted exercise and movement strategies.",
    understanding: {
      heading: "Understanding Parkinson's Disease",
      paragraphs: [
        "Parkinson's disease is a progressive neurological condition caused by the loss of dopamine-producing cells in the brain. Dopamine is essential for smooth, controlled movement — and its loss leads to the hallmark symptoms of tremor, stiffness, slowness (bradykinesia), and balance problems.",
        "Symptoms usually start on one side of the body and progress gradually. Beyond movement, Parkinson's can affect sleep, mood, digestion, and speech. Everyone's journey is different.",
        "While there's no cure, exercise is the most evidence-based intervention for maintaining function and slowing decline in Parkinson's. Physiotherapy tailored to Parkinson's significantly improves quality of life and independence."
      ]
    },
    symptoms: [
      "Tremor at rest (typically hands, arms, legs, or jaw)",
      "Muscle stiffness or rigidity",
      "Slowness of movement (bradykinesia)",
      "Balance problems and increased fall risk",
      "Shuffling or small-step walking",
      "Reduced arm swing when walking",
      "Difficulty with fine motor tasks (buttons, writing)",
      "Reduced facial expression (masked face)",
      "Soft or monotone speech",
      "Freezing episodes while walking"
    ],
    howWeTreat: {
      heading: "How We Treat Parkinson's Disease",
      paragraphs: [
        "Comprehensive Assessment: We assess movement, balance, walking pattern, and functional abilities. We also consider how medication timing affects your movement — many people with Parkinson's have 'on' and 'off' periods.",
        "Big Movement Training: Parkinson's causes people to make smaller movements over time. We use big, exaggerated movements (LSVT-BIG principles) to retrain the brain's sense of normal movement.",
        "Gait Training: We work on step length, arm swing, turning, and strategies to overcome freezing — using visual and auditory cues.",
        "Balance Training: Progressive balance exercises reduce fall risk and build confidence.",
        "Strength & Flexibility: Targeted strengthening maintains muscle function; stretching reduces rigidity.",
        "Dual-Task Training: Practice combining movement with cognitive tasks (like walking while talking) — essential for real-world function.",
        "Home Safety: We assess fall hazards and recommend changes that keep you safe."
      ]
    },
    faqs: [
      {
        q: "Can physiotherapy slow Parkinson's progression?",
        a: "While we can't stop the disease, research strongly suggests that regular, targeted exercise slows functional decline and helps maintain independence. Exercise is considered as important as medication for Parkinson's."
      },
      {
        q: "What is LSVT-BIG?",
        a: "LSVT-BIG is an evidence-based therapy that uses big, exaggerated movements to recalibrate the brain's perception of normal movement. It's specifically designed for Parkinson's and has strong research support."
      },
      {
        q: "When should I start physiotherapy?",
        a: "As early as possible after diagnosis. Early intervention helps you build strength, balance, and movement strategies before significant decline occurs."
      },
      {
        q: "How often should I exercise?",
        a: "Research recommends at least 2.5 hours of moderate exercise per week for Parkinson's. This can be split into daily sessions. Consistency matters more than intensity."
      },
      {
        q: "What can I do about freezing episodes?",
        a: "Freezing can be helped by strategies like visual cues (laser pointer on a cane), auditory cues (counting), shifting weight side to side, or stepping backward first. We teach you personalised strategies."
      },
      {
        q: "Is home physiotherapy effective for Parkinson's?",
        a: "Yes — home-based physiotherapy is often more effective because you practise in your actual environment. It also removes the burden of travel, which can be tiring with Parkinson's."
      }
    ]
  },
  {
    slug: "balance-disorders",
    intro: "Balance problems and dizziness affect confidence, independence, and safety. Physiotherapy — especially vestibular rehabilitation — can significantly improve symptoms and reduce fall risk.",
    understanding: {
      heading: "Understanding Balance & Dizziness",
      paragraphs: [
        "Balance is a complex skill involving the inner ear (vestibular system), vision, and sensations from the muscles and joints. When any of these are disrupted, you may experience dizziness, vertigo, unsteadiness, or imbalance.",
        "Common causes include vestibular disorders (BPPV, vestibular neuritis, Meniere's disease), stroke, neurological conditions, medication side effects, low blood pressure, and age-related changes.",
        "Vestibular rehabilitation is a specialised form of physiotherapy that retrains the brain to process balance signals more effectively. It's highly effective for many causes of dizziness and imbalance."
      ]
    },
    symptoms: [
      "Spinning sensation (vertigo)",
      "Light-headedness or feeling faint",
      "Unsteadiness when walking or standing",
      "Dizziness when changing position (lying to sitting)",
      "Nausea or vomiting with movement",
      "Increased fall risk",
      "Blurred vision with head movement",
      "Feeling of 'floating' or 'swaying'",
      "Difficulty with busy environments (supermarkets, crowds)"
    ],
    howWeTreat: {
      heading: "How We Treat Balance & Dizziness",
      paragraphs: [
        "Comprehensive Assessment: We identify the cause of your dizziness through specific tests — including positional testing for BPPV, gaze stability tests, and balance assessment.",
        "Canalith Repositioning: For BPPV (a common cause of vertigo), specific head and body movements can reposition the displaced crystals in the inner ear — often resolving symptoms in 1–3 sessions.",
        "Gaze Stabilisation: Specific eye-head exercises retrain the vestibular system to stabilise vision during head movement.",
        "Habituation Training: For chronic dizziness, we use controlled exposure to the movements that trigger symptoms — gradually reducing sensitivity.",
        "Balance Training: Progressive balance exercises — on firm and soft surfaces, with eyes open and closed — improve postural control and confidence.",
        "Gait & Fall Prevention: We retrain walking patterns and provide strategies for safe mobility in daily life.",
        "Home Safety: We identify trip hazards, recommend lighting changes, and advise on grab bars or other supports."
      ]
    },
    faqs: [
      {
        q: "What is BPPV?",
        a: "BPPV (Benign Paroxysmal Positional Vertigo) is the most common cause of vertigo. It occurs when small calcium crystals in the inner ear become dislodged. It's easily treated with specific repositioning manoeuvres — often in 1–3 sessions."
      },
      {
        q: "Can physiotherapy cure my dizziness?",
        a: "Many causes of dizziness — especially BPPV and vestibular neuritis — respond very well to physiotherapy. Others are managed rather than cured. Even when a cure isn't possible, vestibular rehabilitation significantly improves symptoms and quality of life."
      },
      {
        q: "How long does vestibular rehab take?",
        a: "BPPV may resolve in 1–3 sessions. Chronic vestibular conditions typically improve over 4–8 weeks of consistent rehabilitation. Some people need ongoing maintenance exercises."
      },
      {
        q: "Will I feel worse before better?",
        a: "Sometimes — habituation exercises can temporarily increase symptoms as the brain adapts. This is expected and usually settles within days. We adjust intensity to keep you comfortable."
      },
      {
        q: "Should I stop moving when I feel dizzy?",
        a: "No — avoiding movement can actually make dizziness worse over time. Controlled, progressive exposure is what retrains the brain. We guide you on what's safe."
      },
      {
        q: "Can I drive if I have dizziness?",
        a: "It depends on the cause and severity. We'll advise based on your specific condition. Some people need to pause driving during acute phases — especially with vertigo."
      }
    ]
  },
  {
    slug: "arthritis",
    intro: "Arthritis causes joint pain, stiffness, and reduced mobility — but it doesn't mean you have to stop moving. Physiotherapy helps you manage pain, maintain function, and stay active at home.",
    understanding: {
      heading: "Understanding Arthritis & Joint Stiffness",
      paragraphs: [
        "Arthritis means inflammation of one or more joints. The most common type is osteoarthritis (OA) — caused by wear of the cartilage that cushions joints. Rheumatoid arthritis (RA) is an autoimmune condition where the body attacks its own joint linings.",
        "OA typically affects weight-bearing joints (knees, hips, spine) and hands. It causes pain, stiffness, and reduced movement. RA tends to affect smaller joints first and can cause fatigue and systemic symptoms.",
        "A common misconception is that exercise worsens arthritis. In fact, the opposite is true — appropriate exercise reduces pain, maintains joint function, and slows disease progression. Physiotherapy helps you exercise safely."
      ]
    },
    symptoms: [
      "Joint pain, especially with movement or after rest",
      "Morning stiffness (lasting over 30 minutes in RA)",
      "Reduced range of motion",
      "Swelling, warmth, or redness around joints",
      "Grinding or creaking sensation (crepitus)",
      "Muscle weakness around affected joints",
      "Fatigue (especially in RA)",
      "Difficulty with daily tasks (opening jars, stairs)"
    ],
    howWeTreat: {
      heading: "How We Treat Arthritis",
      paragraphs: [
        "Comprehensive Assessment: We assess joint movement, strength, and functional impact. We also understand your pain pattern and how it affects daily life.",
        "Pain Relief Techniques: Hands-on therapy, joint mobilisation, heat or ice, and TENS help manage pain and stiffness.",
        "Progressive Strengthening: Strengthening muscles around affected joints protects them from further damage and reduces pain. We build gradually, respecting your pain levels.",
        "Mobility Work: Gentle range-of-motion exercises maintain joint flexibility and prevent stiffness.",
        "Aerobic Exercise: Low-impact activities like walking, cycling, or water exercise improve overall function and reduce inflammation.",
        "Joint Protection Education: We teach you how to use joints efficiently, distribute load, and prevent pain flare-ups during daily tasks.",
        "Weight Management Support: Where relevant, we coordinate with your goals to reduce joint load."
      ]
    },
    faqs: [
      {
        q: "Is exercise bad for arthritis?",
        a: "No — the opposite. Appropriate exercise is one of the most effective treatments for arthritis. It reduces pain, maintains joint function, and slows progression. We'll guide you on what's safe."
      },
      {
        q: "Should I rest during flare-ups?",
        a: "Brief periods of rest are fine during acute flares, but prolonged inactivity worsens arthritis. We help you modify activity rather than stop it completely."
      },
      {
        q: "Can I reverse joint damage from arthritis?",
        a: "No — cartilage damage can't be reversed. But physiotherapy can significantly reduce pain, maintain function, and slow progression. Many people with arthritis live active, fulfilling lives."
      },
      {
        q: "What's the difference between OA and RA?",
        a: "OA is wear-and-tear of cartilage; RA is an autoimmune condition that causes joint inflammation. RA is typically managed with medication in addition to physiotherapy."
      },
      {
        q: "Should I use a walking stick or brace?",
        a: "Sometimes. A walking stick can reduce load on the hip or knee, and a brace can support an unstable joint. We'll advise based on your specific situation — equipment should help, not replace, active movement."
      },
      {
        q: "Will I need joint replacement surgery?",
        a: "Not necessarily. Many people with arthritis manage well without surgery. Joint replacement is considered when pain is severe, function is significantly limited, and conservative treatment has been exhausted."
      }
    ]
  },
  {
    slug: "falls-prevention",
    intro: "Falls are a major cause of injury and loss of independence in older adults. Physiotherapy — focused on strength, balance, and confidence — significantly reduces fall risk and keeps you safe at home.",
    understanding: {
      heading: "Understanding Falls Prevention",
      paragraphs: [
        "Falls aren't an inevitable part of aging. They're usually caused by a combination of factors: muscle weakness, poor balance, vision problems, medication side effects, home hazards, and fear of falling itself.",
        "About 1 in 3 adults over 65 falls each year. Falls can lead to fractures (especially hip fractures), head injuries, and loss of confidence that reduces activity — which then makes future falls more likely.",
        "The good news: most falls are preventable. Physiotherapy focuses on the modifiable factors — strength, balance, mobility, and confidence — that make the biggest difference."
      ]
    },
    symptoms: [
      "Muscle weakness, especially in the legs",
      "Balance problems (unsteadiness, swaying)",
      "Fear of falling or avoiding activities",
      "Difficulty with walking, turning, or transfers",
      "Reduced confidence in daily activities",
      "History of one or more falls in the past year",
      "Use of multiple medications",
      "Vision or hearing problems",
      "Dizziness or light-headedness"
    ],
    howWeTreat: {
      heading: "How We Treat Falls Prevention",
      paragraphs: [
        "Comprehensive Assessment: We assess strength, balance, walking pattern, and functional abilities. We also review your home environment and identify personal risk factors.",
        "Strength Training: Progressive strengthening of the legs, hips, and core — the muscles that keep you steady.",
        "Balance Training: Targeted exercises on different surfaces and conditions (eyes open/closed, firm/soft) to retrain balance responses.",
        "Gait Training: Improving walking pattern, step length, and safety — including turning and navigating obstacles.",
        "Functional Training: Practising real-life movements — getting up from a chair, stepping over thresholds, reaching, carrying.",
        "Confidence Building: Gradual exposure to activities you've been avoiding builds confidence and reduces the 'fear of falling' cycle.",
        "Home Safety Assessment: We identify trip hazards, recommend grab bars, improve lighting, and advise on safe footwear."
      ]
    },
    faqs: [
      {
        q: "How common are falls in older adults?",
        a: "About 1 in 3 adults over 65 falls each year. The risk increases with age, but falls are not inevitable — targeted physiotherapy significantly reduces risk."
      },
      {
        q: "Can falls be prevented?",
        a: "Yes — most falls are preventable. Strength, balance, and confidence training — combined with home safety changes — reduce fall risk by 30–50%."
      },
      {
        q: "How often should I do balance exercises?",
        a: "For best results, balance and strength exercises should be done 2–3 times per week, ongoing. Consistency matters more than intensity."
      },
      {
        q: "What home changes reduce fall risk?",
        a: "Key changes: remove trip hazards (rugs, cords), improve lighting, install grab bars in bathrooms, use non-slip mats, keep frequently used items within reach, and wear supportive footwear."
      },
      {
        q: "Should I use a walking aid?",
        a: "Sometimes — a cane or walker provides stability and confidence. But it's important to use it correctly. We'll advise whether an aid is right for you and how to use it safely."
      },
      {
        q: "I've already fallen — is it too late to help?",
        a: "Absolutely not. In fact, after a fall is often the most important time to start physiotherapy. We help you regain strength, confidence, and independence — and prevent the next fall."
      }
    ]
  },
  {
    slug: "post-surgical",
    intro: "Recovery after surgery is a critical window. Physiotherapy helps you regain strength, mobility, and confidence safely — at your own pace, in the comfort of your home.",
    understanding: {
      heading: "Understanding Post-Surgical Rehabilitation",
      paragraphs: [
        "After surgery — whether hip or knee replacement, spinal surgery, or another procedure — your body needs guided rehabilitation to return to normal function. Doing too much too soon can cause harm; doing too little delays recovery.",
        "The first few weeks are focused on protection, gentle movement, and managing swelling. Then comes progressive strengthening and return to daily activities. Finally, we work on full function and long-term fitness.",
        "Home physiotherapy is ideal after surgery because you learn to move safely in your own environment. It also removes the burden of travel during early recovery."
      ]
    },
    symptoms: [
      "Pain, swelling, or stiffness at the surgical site",
      "Muscle weakness after immobility",
      "Reduced range of motion",
      "Difficulty with walking, transfers, or stairs",
      "Scar tightness or sensitivity",
      "Fatigue during activity",
      "Difficulty with daily tasks (dressing, bathing)",
      "Fear of re-injury or moving normally"
    ],
    howWeTreat: {
      heading: "How We Treat Post-Surgical Rehabilitation",
      paragraphs: [
        "Comprehensive Assessment: We review your surgeon's protocol, assess your current function, and identify any precautions. Your rehab follows the surgeon's guidelines.",
        "Pain & Swelling Management: Positioning, ice, elevation, and gentle movement reduce swelling and discomfort in early recovery.",
        "Mobility Restoration: We restore joint range of motion through safe, progressive exercises — respecting surgical precautions.",
        "Progressive Strengthening: As healing progresses, we build strength in the operated area and supporting muscles.",
        "Gait & Functional Training: We retrain walking, transfers, stairs, and daily activities — with or without aids.",
        "Scar Management: Once cleared by your surgeon, gentle scar mobilisation reduces tightness and sensitivity.",
        "Home Safety: We assess your home for hazards and recommend changes that support safe recovery."
      ]
    },
    faqs: [
      {
        q: "When should I start physiotherapy after surgery?",
        a: "Usually within days to weeks, depending on the procedure. Some surgeries (like hip replacement) benefit from starting within 24–48 hours. We'll follow your surgeon's recommendations."
      },
      {
        q: "Will physiotherapy be painful?",
        a: "Some discomfort is normal during rehabilitation — but severe pain is not necessary for progress. We adjust intensity to keep you comfortable while still making progress."
      },
      {
        q: "How long does post-surgical rehab take?",
        a: "It varies by procedure. Minor surgeries: 4–6 weeks. Major joint replacement: 3–6 months for full function. Spinal surgery: 3–6 months or longer. We track your progress and adjust."
      },
      {
        q: "Do I need to do exercises between sessions?",
        a: "Yes — home exercises are essential. They build on what we do in sessions and accelerate recovery. We prescribe a personalised programme you can do safely."
      },
      {
        q: "What if I feel worse after a session?",
        a: "Mild soreness lasting 24–48 hours is normal. If pain is severe or lasts longer, contact us — we'll adjust your programme. Significant worsening might indicate a problem needing medical review."
      },
      {
        q: "Can home physiotherapy replace hospital-based rehab?",
        a: "For many surgeries, yes — home-based physiotherapy is just as effective and often more relevant because you practise in your actual environment. For complex cases, we may coordinate with a hospital team."
      }
    ]
  },
    {
    slug: "fracture-recovery",
    intro: "Fracture recovery takes time — but with the right physiotherapy, you can regain strength, mobility, and confidence. We help you recover safely after hip, wrist, ankle, or other fractures at home.",
    understanding: {
      heading: "Understanding Fracture Recovery",
      paragraphs: [
        "A fracture is a break in a bone. Recovery involves three phases: inflammation (initial healing), repair (bone rebuilding), and remodelling (bone strengthening). Each phase has different requirements for movement and loading.",
        "After a fracture, muscles around the affected area weaken quickly, joints stiffen, and confidence drops. Without proper rehabilitation, these changes can become permanent.",
        "Physiotherapy plays a crucial role in guiding safe recovery — protecting the healing bone while restoring movement, strength, and function as healing progresses."
      ]
    },
    symptoms: [
      "Pain, swelling, or bruising at the fracture site",
      "Reduced range of motion in nearby joints",
      "Muscle weakness after immobilisation",
      "Difficulty with weight-bearing or walking",
      "Loss of function in the affected limb",
      "Scar or incision tenderness (after surgery)",
      "Fear of re-injury or moving normally",
      "Difficulty with daily tasks (dressing, cooking)"
    ],
    howWeTreat: {
      heading: "How We Treat Fracture Recovery",
      paragraphs: [
        "Comprehensive Assessment: We assess healing progress, range of motion, strength, and functional abilities. We follow your doctor's guidelines on weight-bearing and activity restrictions.",
        "Gradual Loading: Bones heal best with progressive, safe loading. We guide you through stages — from gentle movement to full weight-bearing — respecting healing timelines.",
        "Mobility Restoration: Joints stiffen quickly during immobilisation. We use gentle mobilisation and stretching to restore range of motion.",
        "Progressive Strengthening: Targeted exercises rebuild strength in the muscles around the fracture — critical for protecting the healing bone and returning to activity.",
        "Balance & Gait Training: For lower limb fractures, we retrain balance, walking, and confidence.",
        "Functional Training: We practise the specific movements you need — getting up, walking, stairs, household tasks.",
        "Scar Management: Where surgery was involved, scar mobilisation reduces tightness and discomfort."
      ]
    },
    faqs: [
      {
        q: "How soon after a fracture can I start physiotherapy?",
        a: "Usually within days — even while still in a cast or brace. Gentle movement of unaffected joints and muscles prevents complications while the bone heals. We'll follow your doctor's guidelines."
      },
      {
        q: "How long does fracture recovery take?",
        a: "It varies by fracture type and location. Minor fractures: 6–8 weeks. Hip fractures (in older adults): 3–6 months for full recovery. Full strength may take 6–12 months."
      },
      {
        q: "Should I rest completely after a fracture?",
        a: "No — complete rest delays recovery. Appropriate movement (within medical guidelines) promotes healing, prevents stiffness, and maintains strength. We'll guide you on what's safe."
      },
      {
        q: "Will I regain full function?",
        a: "Most people regain excellent function with proper rehabilitation. Older adults and those with severe fractures may have some lasting limitations — but physiotherapy maximises recovery."
      },
      {
        q: "What if I feel pain during exercise?",
        a: "Mild discomfort during activity is normal. Sharp pain, or pain that worsens, is not. We adjust intensity to keep you progressing safely."
      },
      {
        q: "Can I do physiotherapy at home?",
        a: "Yes — home-based physiotherapy is ideal after a fracture. It removes travel burden and allows us to work with your actual environment for functional goals."
      }
    ]
  },
  {
    slug: "mobility-decline",
    intro: "Reduced mobility and muscle weakness can quietly erode independence. Physiotherapy helps you rebuild strength, improve walking, and regain confidence in daily activities — at your own pace, at home.",
    understanding: {
      heading: "Understanding Reduced Mobility & Weakness",
      paragraphs: [
        "Reduced mobility isn't just a normal part of aging — it's a signal that the body needs support. Muscle weakness, joint stiffness, balance problems, and fear of falling all contribute to declining mobility.",
        "Common causes include deconditioning after illness or hospital stay, chronic conditions (arthritis, heart disease, diabetes), neurological conditions, and simply getting less active over time.",
        "The good news: muscle and mobility can improve at any age. Even in your 80s or 90s, targeted exercise builds strength, improves walking, and reduces fall risk."
      ]
    },
    symptoms: [
      "Difficulty walking short distances",
      "Needing to sit frequently during the day",
      "Slow or unsteady gait",
      "Difficulty getting up from a chair",
      "Feeling unsteady or unbalanced",
      "Reduced activity tolerance",
      "Muscle weakness in legs or arms",
      "Relying on others for daily tasks",
      "Loss of confidence in moving around"
    ],
    howWeTreat: {
      heading: "How We Treat Reduced Mobility & Weakness",
      paragraphs: [
        "Comprehensive Assessment: We assess strength, balance, walking pattern, endurance, and functional abilities. We also identify underlying causes that may need medical review.",
        "Progressive Strengthening: We build strength in the legs, hips, and core — the muscles that keep you walking and steady.",
        "Endurance Training: Gentle aerobic exercise improves stamina for daily activities and overall health.",
        "Gait & Balance Training: We retrain walking patterns, improve balance, and reduce fall risk.",
        "Functional Training: We practise real-life movements — getting up, walking, stairs, carrying items.",
        "Confidence Building: Gradual exposure to activities builds confidence and breaks the cycle of inactivity.",
        "Home Safety: We identify hazards and recommend changes that support safe mobility."
      ]
    },
    faqs: [
      {
        q: "Is it too late to improve mobility at my age?",
        a: "Absolutely not. Muscle and mobility can improve at any age — including in your 80s and 90s. Research consistently shows that older adults benefit significantly from targeted exercise."
      },
      {
        q: "How often should I exercise?",
        a: "For best results, strength and balance exercises should be done 2–3 times per week, ongoing. Even 10–15 minutes a day makes a meaningful difference."
      },
      {
        q: "Will exercise make me tired?",
        a: "Initially, yes — but this improves quickly. Consistent, appropriate exercise increases energy levels over time, not decreases them. We progress gradually."
      },
      {
        q: "Should I use a walking aid?",
        a: "Sometimes. A cane or walker provides stability and confidence. But it should support — not replace — the goal of building strength and independence. We'll advise."
      },
      {
        q: "What if I have other medical conditions?",
        a: "We work with your medical team to ensure safe, appropriate exercise. Most chronic conditions (heart disease, diabetes, arthritis) actually improve with the right physiotherapy."
      },
      {
        q: "How long until I see improvement?",
        a: "Most people notice improvement in 4–8 weeks with consistent effort. Significant changes — like walking further, standing taller, feeling steadier — usually come within 3 months."
      }
    ]
  },
  {
    slug: "elderly-home-rehab",
    intro: "Home physiotherapy for older adults brings expert care to your doorstep — no travel, no waiting rooms, no stress. We help you stay strong, steady, and independent in the comfort of your own home.",
    understanding: {
      heading: "Understanding Elderly Home Rehabilitation",
      paragraphs: [
        "For many older adults, travelling to a clinic is difficult — and sometimes impossible. Home physiotherapy removes that barrier entirely, bringing rehabilitation to where you live.",
        "Home-based care is often more effective than clinic-based care because you practise functional skills — like getting up from your own chair, walking through your own doorway — in the actual environment where you need them.",
        "Whether you're recovering from surgery, managing a chronic condition, or simply want to maintain strength and independence, home physiotherapy is personalised, convenient, and effective."
      ]
    },
    symptoms: [
      "Difficulty travelling to a clinic",
      "Fatigue that makes outings exhausting",
      "Fear of falling or leaving the house",
      "Recent hospitalisation or surgery",
      "Chronic pain or stiffness limiting activity",
      "Reduced strength or balance",
      "Loss of independence in daily tasks",
      "Preference for care at home"
    ],
    howWeTreat: {
      heading: "How We Treat Elderly Home Rehabilitation",
      paragraphs: [
        "Personalised Assessment: We assess your strength, balance, walking, and functional abilities — in your own home.",
        "In-Home Strengthening: We use your furniture and surroundings to build strength safely and functionally.",
        "Balance & Fall Prevention: Targeted training reduces fall risk and builds confidence.",
        "Functional Training: We practise real-life movements — getting up, walking to the kitchen, using stairs, bathing safely.",
        "Chronic Condition Management: We work with your medical conditions to create a safe, effective programme.",
        "Caregiver Support: With your consent, we involve family members in your rehabilitation plan.",
        "Home Safety Recommendations: We identify hazards and suggest practical changes."
      ]
    },
    faqs: [
      {
        q: "Is home physiotherapy as effective as clinic-based?",
        a: "Yes — research shows home-based physiotherapy is just as effective, and often more relevant because you practise skills in your actual environment."
      },
      {
        q: "Do I need special equipment at home?",
        a: "No. We bring what we need — resistance bands, TENS, and other equipment. We also use your furniture, stairs, and doors for functional training."
      },
      {
        q: "How long are home visits?",
        a: "Typically 45–60 minutes. Initial assessments may be longer. We focus on quality over quantity — every minute is purposeful."
      },
      {
        q: "How often will I need sessions?",
        a: "Usually 1–3 times per week, depending on your needs. We adjust frequency as you progress."
      },
      {
        q: "Do I need a referral?",
        a: "No. You can book directly. If you have a doctor, we can coordinate with them for comprehensive care."
      },
      {
        q: "Can family be present during sessions?",
        a: "Yes — with your consent. Family members often benefit from learning how to support your exercises and daily activities."
      }
    ]
  },
  {
    slug: "desk-posture",
    intro: "Desk work and prolonged sitting can cause neck, back, and shoulder pain. Physiotherapy helps you fix the root cause — with posture correction, ergonomic advice, and targeted exercises.",
    understanding: {
      heading: "Understanding Desk & Posture Problems",
      paragraphs: [
        "The human body isn't designed to sit for long periods. Prolonged desk work puts sustained load on the neck, shoulders, and lower back — leading to pain, stiffness, and long-term problems.",
        "Common issues include forward head posture ('text neck'), rounded shoulders, and lower back strain. These develop gradually and often go unnoticed until pain appears.",
        "The good news: postural problems respond very well to physiotherapy. Small changes in workstation setup, movement habits, and specific exercises make a big difference."
      ]
    },
    symptoms: [
      "Neck pain or stiffness, especially at end of day",
      "Headaches at the base of the skull",
      "Shoulder or upper back pain",
      "Lower back pain after sitting",
      "Tingling or numbness in arms or hands",
      "Tightness in chest or shoulders",
      "Fatigue or eyestrain",
      "Reduced concentration due to discomfort"
    ],
    howWeTreat: {
      heading: "How We Treat Desk & Posture Problems",
      paragraphs: [
        "Postural Assessment: We assess your sitting posture, work setup, and movement patterns.",
        "Ergonomic Recommendations: We advise on screen height, chair position, keyboard placement, and other workstation changes.",
        "Manual Therapy: Hands-on treatment reduces muscle tension and joint stiffness.",
        "Strengthening Programme: We build strength in the deep neck flexors, upper back, and core — muscles that support good posture.",
        "Stretching & Mobility: We target tight muscles (chest, upper traps, hip flexors) that pull you out of alignment.",
        "Movement Breaks: We teach micro-breaks and desk stretches you can do throughout the day.",
        "Lifestyle Integration: We help you build movement variety into your daily routine."
      ]
    },
    faqs: [
      {
        q: "Is there a 'perfect' posture?",
        a: "No — variety matters more than any single 'perfect' posture. Prolonged positioning in any posture causes discomfort. We focus on movement and micro-breaks rather than rigid rules."
      },
      {
        q: "Do I need an expensive ergonomic chair?",
        a: "Not necessarily. Simple adjustments — screen height, chair position, foot support — often make the biggest difference. We'll advise on what's genuinely helpful."
      },
      {
        q: "How often should I take breaks?",
        a: "Ideally every 30–45 minutes. Stand, stretch, walk briefly. Even 1–2 minutes of movement resets posture and reduces strain."
      },
      {
        q: "Can posture problems cause long-term damage?",
        a: "Usually not directly — but sustained poor posture can lead to chronic pain, reduced mobility, and increased injury risk. Early intervention prevents this."
      },
      {
        q: "Will exercises fix my posture?",
        a: "Exercise strengthens the muscles that support good posture. But the biggest gains come from combining exercise with workstation changes and movement habits."
      },
      {
        q: "Can I do physiotherapy at work?",
        a: "We can visit your workplace for assessment and ergonomic advice. Or we can work with you at home and provide recommendations for your office setup."
      }
    ]
  },
  {
    slug: "repetitive-strain",
    intro: "Repetitive strain injuries (RSIs) cause pain in the wrists, elbows, shoulders, or neck from repeated movements. Physiotherapy helps you recover — and prevent recurrence — with targeted treatment and ergonomic advice.",
    understanding: {
      heading: "Understanding Repetitive Strain Injuries",
      paragraphs: [
        "Repetitive strain injuries develop from repeated movements that overload tendons, muscles, or nerves over time. Unlike acute injuries, RSIs build gradually — often becoming chronic before people seek help.",
        "Common types include carpal tunnel syndrome (wrist), tennis elbow (lateral elbow), golfer's elbow (medial elbow), and rotator cuff tendinopathy (shoulder).",
        "RSIs are common in desk workers, manual labourers, musicians, and anyone performing repetitive tasks. Early treatment prevents progression to chronic pain."
      ]
    },
    symptoms: [
      "Aching or burning pain in the affected area",
      "Pain worsening with activity, improving with rest",
      "Weakness or reduced grip strength",
      "Tingling, numbness, or 'pins and needles'",
      "Stiffness, especially in the morning",
      "Swelling or tenderness around the joint",
      "Reduced ability to perform the task",
      "Pain that persists at rest (in advanced cases)"
    ],
    howWeTreat: {
      heading: "How We Treat Repetitive Strain Injuries",
      paragraphs: [
        "Comprehensive Assessment: We identify the specific structures involved and understand the movement patterns that triggered the injury.",
        "Pain Relief: Hands-on therapy, TENS, and gentle mobilisation reduce pain and inflammation.",
        "Tendon Loading: For tendinopathies, progressive loading is key. We guide you through the right exercises at the right intensity.",
        "Nerve Mobilisation: For nerve-related RSIs (like carpal tunnel), we use specific techniques to improve nerve mobility.",
        "Ergonomic Advice: We assess your workstation, tools, or technique — and recommend changes that reduce strain.",
        "Strengthening: We build strength in supporting muscles to protect the affected area.",
        "Return-to-Activity Planning: We help you gradually return to work or activity without re-injury."
      ]
    },
    faqs: [
      {
        q: "Do I need to stop working?",
        a: "Usually not — but you may need to modify how you work temporarily. Complete rest isn't always helpful; controlled activity with the right supports promotes recovery."
      },
      {
        q: "How long does an RSI take to recover?",
        a: "Mild cases improve in 2–4 weeks. Chronic tendinopathies can take 3–6 months. Early treatment significantly shortens recovery."
      },
      {
        q: "Will it come back?",
        a: "With proper rehabilitation and ergonomic changes, recurrence risk is low. Without addressing the root cause, RSIs often return."
      },
      {
        q: "Do I need a wrist splint or brace?",
        a: "Sometimes — a splint can help during flare-ups or specific activities. But over-reliance can weaken muscles. We'll advise on appropriate use."
      },
      {
        q: "Is surgery ever needed?",
        a: "Rarely. Most RSIs respond to physiotherapy. Surgery is considered for severe carpal tunnel or other cases unresponsive to conservative treatment."
      },
      {
        q: "Can I prevent RSIs?",
        a: "Yes — with ergonomic setup, movement breaks, and appropriate strengthening. We'll teach you prevention strategies."
      }
    ]
  },
  {
    slug: "manual-handling",
    intro: "Manual handling injuries — from lifting, carrying, or moving loads — cause significant back, shoulder, and neck pain. Physiotherapy helps you recover and teaches safer techniques to prevent recurrence.",
    understanding: {
      heading: "Understanding Manual Handling Injuries",
      paragraphs: [
        "Manual handling includes any activity requiring you to lift, lower, push, pull, carry, or move a load. When done incorrectly — or when loads are too heavy — it can cause acute injury or gradual wear.",
        "Common injuries include lower back strain, disc injuries, shoulder strains, and neck pain. These are especially common in healthcare workers, labourers, warehouse staff, and caregivers.",
        "Physiotherapy helps in two ways: treating the current injury and preventing future ones through education and strengthening."
      ]
    },
    symptoms: [
      "Sharp or aching lower back pain",
      "Pain radiating into the leg (sciatica)",
      "Shoulder or neck pain after lifting",
      "Muscle spasm or tightness",
      "Difficulty bending or straightening",
      "Weakness in the affected area",
      "Pain worsened by movement",
      "Reduced ability to perform work tasks"
    ],
    howWeTreat: {
      heading: "How We Treat Manual Handling Injuries",
      paragraphs: [
        "Comprehensive Assessment: We identify the specific injury, assess movement and strength, and understand the tasks that caused it.",
        "Pain Relief: Manual therapy, modalities (TENS, ice), and gentle movement reduce pain and inflammation.",
        "Graduated Return to Activity: We guide safe, progressive return to work and daily activities.",
        "Core Strengthening: We build strength in the deep core and supporting muscles — the foundation of safe lifting.",
        "Manual Handling Education: We teach correct lifting technique, load assessment, and use of aids.",
        "Ergonomic Assessment: For work-related injuries, we assess your workstation or tasks and recommend changes.",
        "Prevention Strategies: We help you build habits that protect your back long-term."
      ]
    },
    faqs: [
      {
        q: "How soon can I return to work?",
        a: "It depends on the injury and your job demands. Many people return within days with modified duties; more serious injuries may need weeks. We help plan a safe return."
      },
      {
        q: "Should I rest completely after a manual handling injury?",
        a: "No — prolonged rest delays recovery. Modified activity, within pain limits, promotes healing better than bed rest."
      },
      {
        q: "What's the correct lifting technique?",
        a: "Key principles: keep the load close, bend knees not the back, avoid twisting while lifting, and get help for heavy loads. We'll teach you techniques specific to your work."
      },
      {
        q: "Do I need a back belt?",
        a: "Research doesn't support routine use of back belts for prevention. They may help some people during specific tasks, but strengthening and technique matter more."
      },
      {
        q: "How can I prevent this from happening again?",
        a: "Regular core strengthening, good lifting technique, appropriate equipment, and adequate rest between demanding tasks. We'll help you build these habits."
      },
      {
        q: "Can physiotherapy help chronic back pain from years of manual work?",
        a: "Yes — even long-standing pain responds to physiotherapy. We focus on restoring function and reducing pain, not just managing symptoms."
      }
    ]
  },
    {
    slug: "driving-posture",
    intro: "Long hours of driving — common for Lagos commuters — can cause back, hip, and neck pain. Physiotherapy helps you fix the root cause with posture correction, targeted exercises, and practical driving ergonomics.",
    understanding: {
      heading: "Understanding Driving & Prolonged Sitting Pain",
      paragraphs: [
        "Sitting in a car for long periods puts sustained pressure on the lower back, hips, and neck. The vibration from driving, combined with poor seat position, compounds the strain.",
        "Common issues include lower back pain, hip tightness, sciatica, and neck stiffness. Lagos traffic — with hours of stop-start driving — is a particular challenge.",
        "The good news: driving-related pain responds very well to physiotherapy. Simple changes in seat setup, movement habits, and targeted exercises make a real difference."
      ]
    },
    symptoms: [
      "Lower back pain during or after driving",
      "Stiffness when getting out of the car",
      "Hip or buttock pain",
      "Pain radiating into the leg (sciatica)",
      "Neck or shoulder stiffness",
      "Numbness or tingling in the legs",
      "Pain worse on long journeys",
      "Difficulty finding a comfortable seat position"
    ],
    howWeTreat: {
      heading: "How We Treat Driving & Prolonged Sitting Pain",
      paragraphs: [
        "Comprehensive Assessment: We assess your posture, mobility, and identify the specific structures affected by prolonged driving.",
        "Driving Ergonomics: We advise on seat position, lumbar support, steering wheel distance, and mirror placement to reduce strain.",
        "Manual Therapy: Hands-on treatment reduces muscle tension and joint stiffness.",
        "Strengthening Programme: We build strength in the deep core, glutes, and back extensors — muscles that support the spine during sitting.",
        "Mobility Work: Targeted stretches for hip flexors, hamstrings, and the lower back restore flexibility.",
        "Movement Breaks: We teach simple stretches you can do at traffic lights or during stops.",
        "Lifestyle Integration: We help you build movement variety into your daily routine — including non-driving days."
      ]
    },
    faqs: [
      {
        q: "Should I use a lumbar support cushion?",
        a: "Often, yes — a good lumbar cushion maintains the natural curve of the lower back and reduces strain. We'll advise on the right type for your car and body."
      },
      {
        q: "How should I set up my car seat?",
        a: "Key settings: seat back at 100–110 degrees, hips slightly higher than knees, lumbar support in the lower back curve, and the steering wheel close enough that your arms are slightly bent. We'll give you personalised advice."
      },
      {
        q: "How often should I take breaks on long journeys?",
        a: "Every 1–2 hours is ideal. Stop, walk for 2–3 minutes, and do a few gentle stretches. This prevents stiffness from building up."
      },
      {
        q: "Can driving cause sciatica?",
        a: "Yes — prolonged sitting in a car can aggravate disc problems and nerve compression, causing sciatica. Physiotherapy addresses both the symptoms and the underlying cause."
      },
      {
        q: "What stretches can I do at traffic lights?",
        a: "Safe options: shoulder rolls, gentle neck rotations, ankle pumps, and seat-based pelvic tilts. We'll teach you simple routines you can do without distraction."
      },
      {
        q: "Is standing better than sitting for back pain?",
        a: "Not necessarily — prolonged standing also causes problems. The key is movement variety. We help you alternate positions throughout the day."
      }
    ]
  },
  {
    slug: "cerebral-palsy-children",
    intro: "Physiotherapy helps children with cerebral palsy build strength, improve movement, and gain independence — through play-based therapy tailored to your child's unique needs at home.",
    understanding: {
      heading: "Understanding Cerebral Palsy in Children",
      paragraphs: [
        "Cerebral palsy (CP) in children is caused by damage to the developing brain — usually before, during, or shortly after birth. It affects muscle tone, posture, and movement, but does not worsen over time.",
        "CP presents differently in every child. Some have stiff muscles (spastic CP), others have involuntary movements (dyskinetic CP), poor coordination (ataxic CP), or a mix.",
        "Early intervention during the brain's most plastic years gives the best results. Physiotherapy helps children with CP maximise their movement potential, prevent complications, and participate fully in family life and school."
      ]
    },
    symptoms: [
      "Delayed milestones (rolling, sitting, crawling, walking)",
      "Muscle stiffness or floppiness",
      "Poor head control or trunk stability",
      "Difficulty with balance or coordination",
      "Toe walking or unusual gait pattern",
      "Difficulty with fine motor tasks",
      "Involuntary movements or tremors",
      "Feeding or swallowing difficulties"
    ],
    howWeTreat: {
      heading: "How We Treat Cerebral Palsy in Children",
      paragraphs: [
        "Comprehensive Assessment: We assess movement patterns, muscle tone, strength, and functional abilities. We also understand your family's goals and daily routines.",
        "Play-Based Therapy: Children learn through play. We use games, toys, and activities that build strength and movement while keeping therapy fun.",
        "Neurodevelopmental Techniques: We use specialised approaches that work with the brain's natural development — including Bobath and other evidence-based methods.",
        "Strengthening & Stretching: Targeted exercises build functional strength and maintain flexibility, reducing contracture risk.",
        "Gait & Mobility Training: We work on walking, using aids when needed, and improving efficiency of movement.",
        "Postural Management: We advise on seating, standing frames, and positioning to support alignment.",
        "Family & School Coordination: We work with parents, teachers, and other therapists to ensure consistent support across environments."
      ]
    },
    faqs: [
      {
        q: "At what age should physiotherapy start?",
        a: "As early as possible. Early intervention during the brain's most plastic years gives the best results. Even babies can benefit."
      },
      {
        q: "Will my child walk?",
        a: "Many children with CP walk — some independently, others with aids. It depends on the type and severity. We work toward the highest level of mobility your child can achieve."
      },
      {
        q: "How often should therapy happen?",
        a: "Typically 1–2 sessions per week, plus home activities you can do daily. Consistency matters more than frequency."
      },
      {
        q: "Will my child need a walker or standing frame?",
        a: "Sometimes. Equipment can support alignment, build tolerance, and enable activity. We'll advise based on your child's specific needs — equipment should help, not replace, active movement."
      },
      {
        q: "Should I do exercises with my child at home?",
        a: "Yes — home practice is essential. We teach you simple, effective activities that fit into your daily routine (bath time, playtime, mealtimes)."
      },
      {
        q: "Does my child need other therapies too?",
        a: "Often, yes. Speech therapy, occupational therapy, and orthopaedic input may all be helpful. We coordinate with your child's wider team."
      }
    ]
  },
  {
    slug: "developmental-delay",
    intro: "If your child is late to roll, sit, crawl, or walk, physiotherapy can help. We identify the cause, build foundational skills, and support your child's development — through play, at home.",
    understanding: {
      heading: "Understanding Developmental Delay",
      paragraphs: [
        "Developmental delay means a child is not meeting expected milestones within the usual age range. It can affect gross motor skills (rolling, sitting, crawling, walking), fine motor skills, speech, or social interaction.",
        "Causes vary widely: some children simply develop at their own pace; others have underlying conditions (neurological, genetic, or musculoskeletal) that need support.",
        "The good news: early physiotherapy intervention significantly improves outcomes. Even small delays benefit from targeted support to build foundational movement skills."
      ]
    },
    symptoms: [
      "Not rolling by 6 months",
      "Not sitting without support by 9 months",
      "Not crawling by 12 months",
      "Not walking by 18 months",
      "Poor head control after 4 months",
      "Stiffness or floppiness in limbs",
      "Frequent falling or poor balance",
      "Difficulty with fine motor tasks (grasping, pointing)"
    ],
    howWeTreat: {
      heading: "How We Treat Developmental Delay",
      paragraphs: [
        "Comprehensive Assessment: We assess your child's movement patterns, muscle tone, strength, and functional abilities — and identify areas of delay.",
        "Play-Based Therapy: Children learn through play. We use toys, games, and movement activities that build skills while keeping therapy fun.",
        "Milestone Progression: We work systematically through foundational skills — head control, rolling, sitting, crawling, standing, walking.",
        "Strengthening & Coordination: Targeted exercises build strength and coordination needed for the next milestone.",
        "Parent Education: You're the most important part of your child's therapy. We teach you activities to do at home between sessions.",
        "Home Environment Assessment: We look at how your home supports (or limits) your child's development.",
        "Referrals if Needed: If we identify signs that need medical review, we refer you appropriately."
      ]
    },
    faqs: [
      {
        q: "My child is late to walk — is that serious?",
        a: "Not always. Some children simply develop at their own pace. But a physiotherapy assessment can identify whether support is needed and give you peace of mind."
      },
      {
        q: "At what age should I seek help?",
        a: "If your child isn't meeting expected milestones, don't wait. Early intervention gives the best results — often within weeks of noticing a delay."
      },
      {
        q: "Will my child 'catch up'?",
        a: "Many children do, especially with early intervention. Some may always have some delay, but physiotherapy maximises their potential."
      },
      {
        q: "How often should therapy happen?",
        a: "Typically 1–2 sessions per week, plus daily home activities. Consistency matters most."
      },
      {
        q: "Should I use baby walkers?",
        a: "Generally, no. Baby walkers can delay development and cause injury. We recommend safe alternatives that build strength naturally."
      },
      {
        q: "Do I need a paediatrician referral?",
        a: "No — you can book directly. If we identify concerns needing medical input, we'll refer you to the right specialist."
      }
    ]
  },
  {
    slug: "toe-walking",
    intro: "If your child walks on their toes beyond the expected age, physiotherapy can help. We assess the cause, restore normal walking, and prevent long-term complications.",
    understanding: {
      heading: "Understanding Toe Walking",
      paragraphs: [
        "Toe walking means walking on the balls of the feet without the heel touching the ground. It's normal in early walkers (under 2 years), but persistent toe walking after age 3 may need assessment.",
        "Causes include: idiopathic toe walking (no known cause, often genetic), tight calf muscles or Achilles tendon, neurological conditions (cerebral palsy), or sensory processing differences.",
        "Early intervention prevents complications like shortening of the Achilles tendon, which can become permanent and require surgical correction."
      ]
    },
    symptoms: [
      "Walking on toes or balls of feet",
      "Heels not touching the ground",
      "Tight calf muscles",
      "Frequent falling or clumsiness",
      "Difficulty with running or jumping",
      "Fatigue during walking",
      "Stiffness in ankles",
      "Family history of toe walking"
    ],
    howWeTreat: {
      heading: "How We Treat Toe Walking",
      paragraphs: [
        "Comprehensive Assessment: We assess gait, ankle mobility, muscle tone, and any underlying neurological signs.",
        "Stretching Programme: Gentle, consistent stretching of the calf muscles and Achilles tendon.",
        "Strengthening: We build strength in the ankle dorsiflexors and supporting muscles.",
        "Gait Retraining: We use exercises and cues to encourage heel-to-toe walking.",
        "Orthotic Support: Where appropriate, we may recommend orthotics or serial casting to support normal alignment.",
        "Home Programme: We teach parents how to continue stretches and exercises at home.",
        "Sensory Integration: For sensory-related toe walking, we use activities that help the child process foot sensations."
      ]
    },
    faqs: [
      {
        q: "Is toe walking always a problem?",
        a: "Not always. Some children simply walk on their toes occasionally. But persistent toe walking after age 3 should be assessed to prevent complications."
      },
      {
        q: "Will my child grow out of it?",
        a: "Some do, especially if it's mild and occasional. Persistent toe walking usually needs intervention to prevent Achilles tightening."
      },
      {
        q: "Do we need casting or surgery?",
        a: "Rarely. Most cases respond well to physiotherapy, stretching, and orthotics. Casting or surgery is only considered in severe, longstanding cases."
      },
      {
        q: "How long does treatment take?",
        a: "Mild cases improve in weeks to months. More persistent cases may need ongoing therapy. Consistency with home exercises is crucial."
      },
      {
        q: "Should I use special shoes?",
        a: "Sometimes — supportive shoes with firm heel counters can help. We'll advise based on your child's specific needs."
      },
      {
        q: "Is toe walking a sign of autism?",
        a: "Sometimes toe walking occurs alongside autism, but most toe walkers are not autistic. We assess the whole picture and refer to specialists if needed."
      }
    ]
  },
  {
    slug: "postural-children",
    intro: "Heavy school bags, screen time, and poor sitting habits cause postural problems in children. Physiotherapy helps correct posture, build strength, and prevent long-term issues — with practical, child-friendly strategies.",
    understanding: {
      heading: "Understanding Postural Problems in Children",
      paragraphs: [
        "Children's posture is shaped by daily habits — how they sit at desks, carry bags, use phones, and move. Poor posture over time can cause neck, back, and shoulder pain, and affect long-term spinal health.",
        "Common issues include forward head posture ('text neck'), rounded shoulders, slouched sitting, and uneven shoulders from heavy school bags.",
        "The good news: childhood is the best time to correct postural habits. Small changes and targeted exercise make a big difference."
      ]
    },
    symptoms: [
      "Complaints of neck, back, or shoulder pain",
      "Visible slouching or rounded shoulders",
      "Forward head posture",
      "Uneven shoulders (one higher than the other)",
      "Difficulty sitting upright for long periods",
      "Fatigue in neck or shoulders during homework",
      "Complaints about heavy school bags",
      "Reduced flexibility or stiffness"
    ],
    howWeTreat: {
      heading: "How We Treat Postural Problems in Children",
      paragraphs: [
        "Comprehensive Assessment: We assess posture, flexibility, strength, and daily habits that contribute to poor alignment.",
        "Postural Education: We teach your child (in age-appropriate ways) how to sit, stand, and carry bags correctly.",
        "Strengthening Programme: We build strength in the core, upper back, and neck — muscles that support good posture.",
        "Stretching: We target tight muscles (chest, hip flexors) that pull the body out of alignment.",
        "Ergonomic Advice: We assess study setups, screen positions, and school bag weight and usage.",
        "Movement Breaks: We teach simple exercises and breaks to incorporate into the school day.",
        "Parent Education: We show you how to reinforce good habits at home without nagging."
      ]
    },
    faqs: [
      {
        q: "Is poor posture serious in children?",
        a: "Mild postural issues aren't serious on their own. But untreated habits can lead to chronic pain and long-term problems. Early correction is much easier than adult correction."
      },
      {
        q: "How heavy should a school bag be?",
        a: "No more than 10–15% of the child's body weight. A well-fitted backpack with two straps (not one) is essential."
      },
      {
        q: "Should my child use a laptop stand?",
        a: "Yes, for screen-based homework. Keeping the screen at eye level prevents forward head posture. We'll give specific recommendations."
      },
      {
        q: "Can posture be corrected at any age?",
        a: "Yes, but children's bodies respond fastest. Adult correction is possible but takes longer. There's no 'too late' — just easier when younger."
      },
      {
        q: "Do we need special furniture?",
        a: "Not necessarily. A supportive chair and desk at the right height for the child matters more than brand. We'll advise."
      },
      {
        q: "How long until we see improvement?",
        a: "With consistent effort, most children see noticeable improvement in 6–12 weeks. Lasting change comes from ongoing habits, not just therapy sessions."
      }
    ]
  },
  {
    slug: "sports-children",
    intro: "Young athletes face unique injury risks during growth spurts. Physiotherapy helps children recover from sports injuries safely — and return to play stronger, with fewer chances of re-injury.",
    understanding: {
      heading: "Understanding Sports Injuries in Children",
      paragraphs: [
        "Children's bodies are growing, which makes them vulnerable to specific injury patterns — especially during growth spurts when bones grow faster than muscles and tendons.",
        "Common injuries include Osgood-Schlatter disease (knee), Sever's disease (heel), ankle sprains, stress fractures, and muscle strains. Overuse injuries are increasingly common in young athletes who specialise early.",
        "The good news: with proper rehabilitation, most children recover fully. Physiotherapy also helps prevent recurrence by building strength and teaching safe training habits."
      ]
    },
    symptoms: [
      "Pain during or after sport",
      "Swelling or tenderness at the injury site",
      "Reduced performance or avoidance of activity",
      "Limping or altered movement patterns",
      "Pain that worsens with activity",
      "Clicking or instability in the joint",
      "Difficulty with specific movements (jumping, running)",
      "Fatigue during sports"
    ],
    howWeTreat: {
      heading: "How We Treat Sports Injuries in Children",
      paragraphs: [
        "Comprehensive Assessment: We assess the injury, growth stage, and training habits to understand the full picture.",
        "Pain Management: We use gentle techniques (manual therapy, ice, TENS) appropriate for growing bodies.",
        "Progressive Rehabilitation: We build strength, flexibility, and coordination gradually — respecting growth and healing timelines.",
        "Gait & Movement Retraining: We correct patterns that contribute to injury.",
        "Return-to-Sport Planning: We work with you and coaches to plan a safe return to training and competition.",
        "Injury Prevention Education: We teach proper warm-up, cool-down, and training techniques.",
        "Load Management: We help young athletes balance training volume with recovery."
      ]
    },
    faqs: [
      {
        q: "When can my child return to sport?",
        a: "It depends on the injury. Minor strains: 1–2 weeks. More significant injuries: 4–8 weeks. Return should be gradual and guided, not rushed."
      },
      {
        q: "Should my child rest completely?",
        a: "Not usually. Modified activity — avoiding the aggravating movement but keeping active — promotes healing better than complete rest."
      },
      {
        q: "Is it safe for children to lift weights?",
        a: "Yes, with proper supervision and appropriate loads. Strength training actually reduces injury risk in young athletes. We'll guide safe progression."
      },
      {
        q: "What is Osgood-Schlatter disease?",
        a: "A common cause of knee pain in growing adolescents. It's inflammation where the patellar tendon attaches to the shin bone. It usually resolves with growth, but physiotherapy helps manage symptoms and maintain activity."
      },
      {
        q: "Should my child specialise in one sport?",
        a: "Current evidence suggests young athletes should play multiple sports until late adolescence. Early specialisation increases injury risk and burnout."
      },
      {
        q: "How can we prevent sports injuries?",
        a: "Key factors: proper warm-up, adequate rest, appropriate load progression, strength training, and not playing through pain. We'll help you build these habits."
      }
    ]
  }
];
  