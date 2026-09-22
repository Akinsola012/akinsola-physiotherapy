import Link from "next/link";
import { practice } from "../../components/site-data";

export const metadata = {
  title: `FAQ — ${practice.name}`,
  description: "Frequently asked questions about home physiotherapy, booking, and pricing."
};

const faqGroups = [
  {
    title: "About Home Physiotherapy",
    faqs: [
      {
        q: "What is home physiotherapy?",
        a: "Home physiotherapy is exactly what it sounds like — we bring professional physiotherapy to your home. Instead of you travelling to a clinic, we come to you with all the equipment needed for a full session. It's ideal for people who have difficulty travelling, are recovering from surgery, or simply prefer the comfort of their own space."
      },
      {
        q: "Is home physiotherapy as effective as clinic-based?",
        a: "Yes — research shows home-based physiotherapy is just as effective as clinic-based care, and often more relevant. You practise functional skills in the actual environment where you need them, which leads to better real-world outcomes."
      },
      {
        q: "Do I need a referral from a doctor?",
        a: "No. Physiotherapists are primary healthcare providers. You can book directly with us — no referral needed. If we identify something that needs medical attention, we'll refer you appropriately."
      },
      {
        q: "What conditions do you treat?",
        a: "We treat a wide range of muscle, joint, and nerve conditions — from back pain and sports injuries to stroke recovery, arthritis, and post-surgical rehabilitation. Visit our What We Treat page to see the full list of conditions we handle."
      },
      {
        q: "Who can benefit from home physiotherapy?",
        a: "Everyone from young athletes recovering from injury to older adults managing arthritis or recovering from surgery. If you have a movement problem that affects your daily life, physiotherapy can help."
      }
    ]
  },
  {
    title: "Booking & Visits",
    faqs: [
      {
        q: "How do I book a home visit?",
        a: "You can call or WhatsApp us on 08079877837, or fill out the contact form on our website. We respond the same day and usually schedule your first visit within 48 hours."
      },
      {
        q: "What areas do you cover?",
        a: "We provide home visits across Ibadan, Lagos, Abeokuta, Osogbo, and Ife. Ibadan is our primary base with same-day or next-day visits. For other cities, we schedule visits in advance — contact us to arrange."
      },
      {
        q: "How long does each session last?",
        a: "Initial assessments typically take 60 minutes. Follow-up treatment sessions are 45–60 minutes. We never rush — every minute is purposeful."
      },
      {
        q: "How many sessions will I need?",
        a: "This depends on your condition. Acute injuries may need 4–6 sessions. Chronic conditions often need 8–12 sessions or more. Post-surgical rehab varies by procedure. We'll give you a personalised estimate after your first assessment."
      },
      {
        q: "How often should I have physiotherapy?",
        a: "Most people benefit from 1–3 sessions per week. Frequency depends on your condition, stage of recovery, and goals. We'll recommend a schedule and adjust as you progress."
      },
      {
        q: "What should I wear to my appointment?",
        a: "Wear comfortable, loose clothing that allows access to the affected area — for example, shorts for knee or hip issues, or a sleeveless top for shoulder problems. We'll bring anything else we need."
      },
      {
  q: "Do I need to prepare anything?",
  a: "Usually no — just find a comfortable space where we can work (a living room, bedroom, or any clear area). We bring all equipment and set up ourselves. If any preparation is required for your specific session, we'll let you know 48–24 hours before we arrive."
},
      {
        q: "What if I have a busy schedule?",
        a: "We offer visits 7 days a week, from 7am to 7pm. We work around your schedule and can arrange early morning, evening, or weekend appointments."
      },
      {
        q: "What if I need to cancel or reschedule?",
        a: "Life happens — just let us know as early as possible. We ask for at least 4 hours' notice for cancellations so we can adjust our schedule. Repeated last-minute cancellations may incur a small fee."
      }
    ]
  },
  {
    title: "Pricing & Payments",
    faqs: [
      {
  q: "How much does a home visit cost?",
  a: "Our Home Visit Assessment starts from ₦25,000 and includes a full assessment, personalised treatment plan, and first treatment session...",
  note: "Package pricing: 3 sessions from ₦75,000, 5 sessions from ₦120,000, 9 sessions from ₦210,000."
},
      {
        q: "Do you offer payment plans?",
        a: "Yes — for our 5-session and 9-session packages, we offer flexible payment options. Contact us to discuss a plan that works for you."
      },
      {
        q: "Can I pay per session instead of a package?",
        a: "Yes. Per-session pricing is available. Contact us and we'll recommend the best option for your condition."
      },
      {
        q: "Do you charge extra for travel?",
        a: "For Ibadan, travel is included. For Lagos, Abeokuta, Osogbo, and Ife, a small travel surcharge may apply — this will be clearly stated in your personalised quote."
      },
     
      {
        q: "Do you offer any discounts?",
        a: "Yes — package bookings (3, 5, or 9 sessions) offer a lower per-session rate than individual sessions. We also occasionally offer scholarship or referral discounts. Ask us for details."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfer, cash, and mobile money. Full details are provided at booking."
      }
    ]
  },
  {
    title: "Treatment & Approach",
    faqs: [
      {
        q: "What happens during the first visit?",
        a: "Your first visit includes: a detailed conversation about your health history and goals, a full physical assessment, a clear explanation of what's causing your symptoms, a personalised treatment plan, and your first treatment session. You'll know exactly what we're working on and why."
      },
      {
        q: "Will physiotherapy be painful?",
        a: "Some techniques may cause mild discomfort, but physiotherapy should not be severely painful. We adjust every technique to your comfort level. Mild soreness after a session is normal and usually settles within 24–48 hours."
      },
  {
  q: "What equipment do you bring?",
  a: "We bring the equipment your condition needs — starting with the essentials and progressing to additional modalities only if clinically appropriate. No preparation is usually needed on your part; just find a comfortable space and we'll handle the rest. If any preparation is required for your session, we'll let you know 48–24 hours before we arrive.",
  note: "Consumables such as analgesic cream, electrode pads, and sandbags are billed separately. You may purchase them from us or use your own."
},
      {
        q: "How is physiotherapy different from massage therapy?",
        a: "Massage therapy focuses on soft tissue relaxation and relief. Physiotherapy is broader — it includes assessment, diagnosis, hands-on treatment, exercise prescription, and long-term rehabilitation to fix the root cause. Both can be helpful, but physiotherapy is more comprehensive."
      },
      {
        q: "Do I need imaging (X-ray, MRI) before starting?",
        a: "Not always. Many conditions can be assessed and treated without imaging. If we suspect something that needs imaging, we'll refer you appropriately. If you've already had imaging, bring the reports."
      },
      {
        q: "How long does recovery take?",
        a: "It depends on your condition. Minor strains may resolve in 2–4 weeks. Chronic conditions often improve over 6–12 weeks. Post-surgical recovery varies by procedure. We'll give you a realistic timeline after assessment."
      },
      {
        q: "What if my pain gets worse after treatment?",
        a: "Mild soreness can happen after treatment as your body adapts. If pain increases significantly or lasts more than 48 hours, contact us — we'll adjust your plan. Significant worsening may indicate a problem needing medical review."
      },
      {
        q: "Can I exercise between sessions?",
        a: "Yes — and you should. Home exercises are essential to progress. We prescribe a personalised programme you can do safely between sessions. Consistency matters more than intensity."
      }
    ]
  },
  {
    title: "About Our Practice",
    faqs: [
      {
        q: "Are your physiotherapists licensed?",
        a: "Yes. All our physiotherapists are licensed by the Medical Rehabilitation Therapists Board (MRTB) of Nigeria and follow evidence-based practice."
      },
      {
        q: "Do you work with other healthcare providers?",
        a: "Yes — with your consent, we coordinate with your doctor, specialists, and family caregivers. We share assessment findings, provide written progress reports, and adjust the plan based on medical guidance."
      },
      {
        q: "Do you treat children?",
        a: "Yes — we treat patients of all ages, including children, with age-appropriate assessment and treatment approaches."
      },
      {
        q: "Do you offer emergency care?",
        a: "No. We do not provide emergency medical care. For urgent symptoms or a medical emergency, please seek immediate medical help from a hospital or call emergency services."
      },
      {
        q: "What if I'm not sure physiotherapy is right for me?",
        a: "Just call or WhatsApp us. We'll ask a few questions about your situation and give you honest advice — even if that means recommending a different specialist. There's no pressure."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero shell">
        <p className="eyebrow">Frequently Asked Questions</p>
        <h1>Questions? We have answers.</h1>
        <p className="lead">
          Everything you need to know about home physiotherapy — from booking
          your first visit to understanding pricing and treatment.
        </p>
      </section>

      {/* FAQ GROUPS */}
      <section className="section">
        <div className="shell">
          {faqGroups.map((group) => (
            <div className="faq-group" key={group.title}>
              <h2>{group.title}</h2>

              <div className="faq-list">
                {group.faqs.map((faq, i) => (
  <details className="faq-item" key={i}>
    <summary>{faq.q}</summary>
    <div className="faq-answer">
      <p>{faq.a}</p>
      {faq.note && <p className="faq-note">{faq.note}</p>}
    </div>
  </details>
))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section tint">
        <div className="shell callout">
          <div>
            <h2>Still have questions?</h2>
            <p>Call or WhatsApp us — we respond the same day.</p>
          </div>
          <Link className="button" href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}