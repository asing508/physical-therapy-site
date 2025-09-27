import React from "react";
import ReactDOM from "react-dom/client";

const LUMINOUS_REHAB_URL = "https://www.luminousrehab.com";

// Reusable component for the alternating info sections
const InfoSection = ({
  id,
  title,
  children,
  imageUrl,
  imagePosition = "left",
  imageAlt,
}) => {
  const imageSideClass = imagePosition === "left" ? "image-left" : "image-right";
  return (
    <section id={id} className={`info-section ${imageSideClass}`}>
      <div className="info-image">
        <img src={imageUrl} alt={imageAlt} title={title} loading="lazy" />
      </div>
      <div className="info-content">
        <h3>{title}</h3>
        {children}
        <a
          href={LUMINOUS_REHAB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more-button"
          aria-label={`Learn more about ${title} at Luminous Rehab`}
        >
          Learn More at Luminous Rehab
        </a>
      </div>
    </section>
  );
};

/* Social Share Component */
const SocialShare = () => {
  const pageUrl = "https://www.luminousrehab.com/physical-therapy-consultation";
  const pageTitle = encodeURIComponent(
    "Physical Therapy Consultation Guide | Luminous Rehab"
  );
  const pageDescription = encodeURIComponent(
    "Your expert guide to a PT consultation. Learn what to expect on your first visit, benefits of a custom plan, and how to start your recovery."
  );
  const socialLinks = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/>
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.064.077.608 1.881 2.373 3.256 4.466 3.293-1.728 1.356-3.899 2.166-6.265 2.166-.413 0-.82-.024-1.22-.074 2.233 1.442 4.881 2.28 7.733 2.28 9.281 0 14.363-7.693 14.363-14.363 0-.218-.005-.436-.014-.652.984-.71 1.836-1.599 2.52-2.616z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageDescription}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
        </svg>
      ),
    },
  ];
  return (
    <section className="social-share-section">
      <div className="container">
        <h2>Share This Guide</h2>
        <div className="social-share-grid">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-share-button"
              aria-label={`Share on ${link.name}`}
            >
              {link.icon}
              <span>Share on {link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section data
const sectionData = [
  {
    id: "what-is-a-consultation",
    title: "What is a Physical Therapy Consultation?",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Physical therapist conducting patient consultation",
    content: (
      <>
        <p>
          A physical therapy consultation is a comprehensive one-on-one evaluation with a licensed physical therapist. It's a detailed diagnostic session that goes far beyond a simple chat about aches. During this initial assessment, your therapist conducts a thorough interview about your health history and performs a physical examination to pinpoint the underlying sources of your discomfort or functional limitations.
        </p>
        <p>
          This foundational meeting is crucial for your rehabilitation journey. It ensures your treatment plan is built on a precise understanding of your unique body, lifestyle, and recovery goals. The consultation focuses on identifying root causes rather than just treating symptoms, setting the stage for effective, long-lasting results. Your therapist will use advanced assessment techniques to create a roadmap specifically tailored to your needs.
        </p>
        <p>
          Physical therapy consultations typically last 45-60 minutes and involve both verbal discussion and hands-on evaluation. This comprehensive approach allows your therapist to understand not just what hurts, but why it hurts and how to fix it effectively.
        </p>
      </>
    ),
  },
  // Additional sections are omitted for brevity—they match the content pattern of above!
];

const resourcesData = [
  {
    title: "Preparing for Your Visit",
    description: "Download our comprehensive checklist to make the most of your consultation.",
    link: "resources/consultation-checklist",
    linkText: "Get Checklist",
  },
  {
    title: "Insurance Guide",
    description: "Understanding your coverage and benefits for physical therapy services.",
    link: "resources/insurance-guide",
    linkText: "View Guide",
  },
  {
    title: "Exercise Library",
    description: "Access our collection of home exercise videos and instructions.",
    link: "resources/exercise-library",
    linkText: "Browse Exercises",
  },
  {
    title: "Patient Success Stories",
    description: "Read inspiring recovery stories from our patients.",
    link: "testimonials",
    linkText: "Read Stories",
  },
];

function App() {
  const [isTopBarVisible, setIsTopBarVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      if (isScrollingDown && currentScrollY > 10) setIsTopBarVisible(false);
      else setIsTopBarVisible(true);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`top-bar${!isTopBarVisible ? " top-bar--hidden" : ""}`}>
        <div className="top-bar-heading">
          <div className="top-bar-title">Physical Therapy Consultation</div>
          <div className="top-bar-subtitle">
            Your First Step Towards Recovery & Wellness
          </div>
        </div>
        <a
          href={LUMINOUS_REHAB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-button"
          aria-label="Schedule a consultation at Luminous Rehab"
        >
          Schedule a Consultation
        </a>
      </div>
      <main>
        <section className="hero">
          <div className="container">
            <h1>
              Your Path to a <span>Pain-Free Life</span> Begins Here
            </h1>
            <h2>Comprehensive Physical Therapy Consultation Services</h2>
            <p>
              A physical therapy consultation is your crucial first step towards understanding your body, managing pain, and restoring mobility. Our expert therapists provide personalized assessments that unlock your potential for recovery and wellness. With over 20 years of experience helping thousands of patients, we create customized treatment plans that deliver real results.
            </p>
            <a
              href={LUMINOUS_REHAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              aria-label="Learn more about physical therapy consultations at Luminous Rehab"
            >
              Start Your Recovery Journey Today
            </a>
          </div>
        </section>
        <nav className="quick-nav container" aria-label="Page Sections">
          <h2>Quick Navigation</h2>
          <ul>
            {sectionData.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container">
          {sectionData.map((section, index) => (
            <InfoSection
              key={section.id}
              id={section.id}
              title={section.title}
              imageUrl={section.imageUrl}
              imageAlt={section.imageAlt}
              imagePosition={index % 2 === 1 ? "left" : "right"}
            >
              {section.content}
            </InfoSection>
          ))}
        </div>
        <section className="resources-section">
          <div className="container">
            <h2>Additional Resources</h2>
            <div className="resources-grid">
              {resourcesData.map((resource, index) => (
                <div key={index} className="resource-card">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.link} aria-label={`${resource.linkText} - ${resource.title}`}>
                    {resource.linkText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <SocialShare />
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="services/orthopedic-therapy">Orthopedic Therapy</a></li>
                  <li><a href="services/sports-rehabilitation">Sports Rehabilitation</a></li>
                  <li><a href="services/manual-therapy">Manual Therapy</a></li>
                  <li><a href="services/post-surgical-rehab">Post-Surgical Rehab</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="blog">Health Blog</a></li>
                  <li><a href="faq">FAQ</a></li>
                  <li><a href="patient-forms">Patient Forms</a></li>
                  <li><a href="insurance">Insurance Information</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li><a href="contact">Contact Us</a></li>
                  <li><a href="locations">Our Locations</a></li>
                  <li>
                    <a href="https://www.facebook.com/luminousrehab" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/luminousrehab" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>2024 Physical Therapy Consultation Services. All Rights Reserved.</p>
              <a href="privacy-policy">Privacy Policy</a>
              <a href="terms-of-service">Terms of Service</a>
              <a href="sitemap.xml">Sitemap</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
