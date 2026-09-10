export const practice = {
  name: "[Your Name] Physiotherapy",
  shortName: "[Your Name]",
  location: "[Your Location]",
  serviceArea: "[Your City and surrounding areas]",
  phone: "[Your phone number]",
  phoneHref: "tel:+0000000000",
  whatsappHref: "https://wa.me/0000000000",
  email: "[Your email address]",
  emailHref: "mailto:your@email.com",
  credentials: "[Your qualification and professional registration]"
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

export const services: Service[] = [
  {
    slug: "home-physiotherapy",
    title: "Home Physiotherapy",
    shortTitle: "Home visits",
    summary: "Professional rehabilitation in the comfort and familiarity of your home.",
    intro: "Home physiotherapy brings professional rehabilitation to you when travel is difficult, energy is limited or care works best in your own environment.",
    helpsWith: ["Recovery after surgery, illness, injury or a hospital stay", "Reduced mobility, walking difficulty or fear of falling", "Pain, stiffness or weakness that makes travel difficult", "Functional practice in the place where daily life happens"],
    approach: "Your first visit includes a conversation about your health history, goals and usual activities, followed by an assessment suited to your needs. Together, we agree practical next steps and a programme that fits your home and routine.",
    imageLabel: "Add a professional home-visit photograph",
    cta: "Ask about a home visit"
  },
  {
    slug: "orthopaedic-physiotherapy",
    title: "Orthopaedic Physiotherapy",
    shortTitle: "Orthopaedic care",
    summary: "Support for pain, injury and recovery of movement.",
    intro: "Orthopaedic physiotherapy focuses on how muscles, joints and bones are affecting your movement and function.",
    helpsWith: ["Back, neck, shoulder, hip, knee, ankle or wrist pain", "Sprains, strains, tendon or ligament injuries", "Joint stiffness and reduced movement", "Rehabilitation after fracture, surgery or joint replacement", "Return-to-activity planning"],
    approach: "Your rehabilitation may include movement and strength assessment, guided exercise, mobility work, activity modification, education and a tailored home programme. The plan depends on your assessment, medical advice and goals.",
    imageLabel: "Add a professional movement-assessment photograph",
    cta: "Book an orthopaedic assessment"
  },
  {
    slug: "neurological-physiotherapy",
    title: "Neurological Physiotherapy",
    shortTitle: "Neurological rehab",
    summary: "Goal-led rehabilitation for changes in movement, balance and independence.",
    intro: "Neurological physiotherapy supports people whose movement, balance, coordination, strength or independence has changed because of a condition affecting the nervous system.",
    helpsWith: ["Stroke", "Parkinson's disease", "Multiple sclerosis", "Brain or spinal cord injury", "Peripheral nerve injury", "Other neurological conditions under appropriate medical guidance"],
    approach: "We begin with the activities that matter to you. Sessions may include task-specific practice, balance and gait work, strength and mobility exercises, fatigue-aware planning and education for safe everyday activity.",
    imageLabel: "Add a professional neurological rehabilitation photograph",
    cta: "Discuss neurological rehabilitation"
  },
  {
    slug: "geriatric-physiotherapy",
    title: "Geriatric Physiotherapy",
    shortTitle: "Care for older adults",
    summary: "Thoughtful support for strength, safer mobility and confidence at home.",
    intro: "Geriatric physiotherapy is designed around the changing needs of older adults, supporting mobility, balance, confidence and functional independence.",
    helpsWith: ["Reduced strength or confidence after illness or inactivity", "Joint pain, stiffness or age-related mobility changes", "Balance problems, falls or fear of falling", "Walking difficulty and transfers", "Recovery after fracture, surgery or a hospital stay"],
    approach: "Care takes account of health conditions, medications, energy levels, the home environment and available support. With the patient's agreement, practical guidance can include family members and caregivers.",
    imageLabel: "Add a professional mobility-support photograph",
    cta: "Arrange a geriatric physiotherapy visit"
  },
  {
    slug: "ergonomic-physiotherapy",
    title: "Ergonomic Physiotherapy",
    shortTitle: "Ergonomic support",
    summary: "Practical support for healthier movement and workspaces.",
    intro: "Ergonomic physiotherapy looks at how work tasks, equipment, posture and movement habits may contribute to discomfort or physical strain.",
    helpsWith: ["Desk work and remote working", "Repetitive tasks", "Manual handling", "Prolonged standing or driving", "Staff education and workstation assessments", "Return-to-work support"],
    approach: "An ergonomic visit can include observation of tasks and workspace, discussion of work demands, set-up recommendations, movement-break strategies and a written summary of agreed actions where required.",
    imageLabel: "Add a professional workstation-assessment photograph",
    cta: "Discuss workplace ergonomics"
  }
];
