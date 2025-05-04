import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const pricingPlans = [
  {
    tier: "Common",
    price: "$0",
    description: "For individuals and teams getting started with Huly.",
    features: [
      "Unlimited users",
      "Unlimited Huly Objects",
      "10GB Storage per Workspace",
      "10GB Video/Audio Traffic",
      "AI — TBD",
    ],
    cta: "Start Free",
    ctaLink: "/signup",
    highlight: false,
  },
  {
    tier: "Rare",
    price: "$19.99",
    description: "For individual creatives, freelancers, and micro-agencies.",
    features: [
      "Unlimited users",
      "Unlimited Huly Objects",
      "100GB Storage",
      "100GB Video / Audio Traffic",
      "AI — TBD",
    ],
    cta: "Start Free",
    ctaLink: "/signup",
    highlight: false,
  },
  {
    tier: "Epic",
    price: "$99.99",
    description: "For professional creative companies and small businesses.",
    features: [
      "Unlimited users",
      "Unlimited Huly Objects",
      "1TB Storage",
      "500GB Video / Audio Traffic",
      "AI — TBD",
    ],
    cta: "Start Free",
    ctaLink: "/signup",
    highlight: false,
  },
  {
    tier: "Legendary",
    price: "$399.99",
    description: "Best for large multiple teams that need maximum capabilities.",
    features: [
      "Unlimited users",
      "Unlimited Huly Objects",
      "10TB Storage",
      "2TB Video / Audio Traffic",
      "AI — TBD",
    ],
    cta: "Start Free",
    ctaLink: "/signup",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28">
        <section className="relative bg-huly-background py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-semibold mb-6 tracking-tight">
                Huly Pricing
              </h1>
              <div className="text-lg md:text-xl text-grey-60 space-y-6 max-w-3xl mx-auto mb-8">
                <p>
                  The Huly team prioritizes open software, ensuring Huly remains free.
                  To sustain cloud operations and further development, cloud users
                  will be charged for consumed cloud resources. These resources currently
                  fall into three categories: storage, network and compute.
                </p>
                <p>
                  Storage charges depend on data size, excluding Huly objects but
                  including attachments. Users can have unlimited Huly objects without
                  storage limitations, but documents, images and videos are counted
                  based on the plan.
                </p>
                <p>
                  Network charges apply only to audio and video calls.
                </p>
                <p>
                  Compute resource charges will apply to the upcoming Huly AI and
                  Huly MetaBrain features, with costs assured to be no higher than
                  industry leaders like OpenAI. Users can pay for these services
                  directly via their OpenAI accounts.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-title font-semibold mb-10 text-center mt-12">
              Huly pricing plans
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.tier}
                  className={`rounded-xl p-8 flex flex-col h-full bg-huly-dark border border-white/5 ${
                    plan.highlight ? "ring-2 ring-huly-accent" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{plan.tier}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-grey-60 ml-1">/monthly</span>
                  </div>
                  <p className="text-grey-60 mb-6">{plan.description}</p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-3 text-green-500 flex-shrink-0"
                        >
                          <path
                            d="M9 12l2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaLink}
                    className="w-full py-3 px-4 rounded-full text-center transition bg-white text-huly-dark hover:opacity-90"
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-20 text-center">
              <h3 className="text-2xl font-semibold mb-4">Our Custom Plan</h3>
              <p className="text-lg text-grey-60 mb-8">
                Our Custom Plan is tailored to meet your unique needs and requirements.
                Get specific features, extra storage, or enhanced support. Flexible
                pricing based on your specifications.
              </p>
              <p className="text-lg font-medium mb-8">
                Ready to discuss your needs and get a personalized quote?
              </p>
              <a
                href="mailto:hey@huly.io"
                className="inline-block py-3 px-8 rounded-full border border-white/30 text-white transition hover:bg-white/5"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Background glow effect */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-0">
            <div className="absolute top-[30%] right-[15%] w-[600px] h-[600px] rounded-full bg-huly-accent/10 filter blur-[150px] opacity-40" />
            <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-huly-orange/5 filter blur-[120px] opacity-30" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
