/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
const { useState, useEffect, useRef, Fragment } = React;

// Map section IDs to internal paths for SEO-friendly internal linking
const getInternalLink = (id) => {
  const baseUrl = 'https://www.luminousrehab.com';
  const map = {
    'what-is-a-consultation': `${baseUrl}/services`,
    'first-visit-expectations': `${baseUrl}/faq`,
    'benefits-of-a-plan': `${baseUrl}/about`,
    'common-conditions': `${baseUrl}/services`,
    'your-role-in-recovery': `${baseUrl}/blog`
  };
  return map[id] || `${baseUrl}/contact`;
};

// Reusable component for the alternating info sections
const InfoSection = ({ id, title, children, imageUrl, imagePosition = 'left', imageAlt }) => {
  const imageSideClass = imagePosition === 'left' ? 'image-left' : 'image-right';
  return React.createElement('section', { id: id, className: `info-section ${imageSideClass}` },
    React.createElement('div', { className: 'info-image' },
      React.createElement('img', { 
        src: imageUrl, 
        alt: imageAlt || title,
        loading: 'lazy'
      })
    ),
    React.createElement('div', { className: 'info-content' },
      React.createElement('h2', null, title), // Changed from h3 → h2 for better heading hierarchy
      children,
      React.createElement('a', {
        href: getInternalLink(id),
        className: 'learn-more-button',
        'aria-label': `Learn more about ${title}`,
        target: '_blank', // Open in a new tab
        rel: 'noopener noreferrer' // Security best practice
      },
        'Learn More'
      )
    )
  );
};

// Social Share Component (unchanged)
const SocialShare = () => {
  const pageUrl = 'https://www.luminousrehab.com/physical-therapy-consultation';
  const pageTitle = encodeURIComponent('First Physical Therapy Consultation Guide | Luminous Rehab');
  const pageDescription = encodeURIComponent('Discover what happens during your first PT consultation. Get a personalized plan for pain relief, mobility, and faster recovery.');
  const socialLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" }, 
        React.createElement('path', { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" })
      )
    },
    {
      name: 'X (Twitter)',
      url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
      icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" }, 
        React.createElement('path', { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.064.077.608 1.881 2.373 3.256 4.466 3.293-1.728 1.356-3.899 2.166-6.265 2.166-.413 0-.82-.024-1.22-.074 2.233 1.442 4.881 2.28 7.733 2.28 9.281 0 14.363-7.693 14.363-14.363 0-.218-.005-.436-.014-.652.984-.71 1.836-1.599 2.52-2.616z" })
      )
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageDescription}`,
      icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" }, 
        React.createElement('path', { d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" })
      )
    }
  ];
  return React.createElement('section', { className: 'social-share-section' },
    React.createElement('div', { className: 'container' },
      React.createElement('h2', null, 'Share This Guide'),
      React.createElement('div', { className: 'social-share-grid' },
        socialLinks.map(link => 
          React.createElement('a', {
            key: link.name,
            href: link.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'social-share-button',
            'aria-label': `Share on ${link.name}`
          },
            link.icon,
            React.createElement('span', null, `Share on ${link.name}`)
          )
        )
      )
    )
  );
};

const sectionData = [
    {
        id: 'what-is-a-consultation',
        title: 'What is a Physical Therapy Consultation?',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Physical therapist conducting patient consultation',
        content: React.createElement(Fragment, null,
            React.createElement('p', null, 
              "A physical therapy consultation is a comprehensive one-on-one evaluation with a licensed physical therapist. It's a detailed diagnostic session that goes far beyond a simple chat about your aches. During this initial assessment, your therapist conducts a thorough interview about your health history and performs a physical examination to pinpoint the underlying sources of your discomfort or functional limitations."
            ),
            React.createElement('p', null, 
              "This foundational meeting is crucial for your rehabilitation journey. It ensures your treatment plan is built on a precise understanding of your unique body, lifestyle, and recovery goals. The consultation focuses on identifying root causes rather than just treating symptoms, setting the stage for effective, long-lasting results."
            )
        )
    },
    {
        id: 'first-visit-expectations',
        title: 'What to Expect During Your First Visit',
        imageUrl: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Patient and physical therapist during first consultation visit',
        content: React.createElement(Fragment, null,
            React.createElement('p', null, 'Your initial consultation is a structured, collaborative process designed for thorough assessment and personalized care planning.'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, 'In-Depth Medical History Review:'), " Your therapist will discuss symptoms, health history, medications, and lifestyle."),
                React.createElement('li', null, React.createElement('strong', null, 'Comprehensive Physical Examination:'), " Includes posture, strength, mobility, and functional movement tests."),
                React.createElement('li', null, React.createElement('strong', null, 'Collaborative Goal Setting:'), " Define your personal recovery goals together."),
                React.createElement('li', null, React.createElement('strong', null, 'Treatment Plan Introduction:'), " Clear explanation of diagnosis and proposed plan.")
            )
        )
    },
    {
        id: 'benefits-of-a-plan',
        title: 'Benefits of a Personalized Treatment Plan',
        imageUrl: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Physical therapy personalized treatment planning session',
        content: React.createElement(Fragment, null,
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('strong', null, 'Targeted & Efficient Treatment:'), " Faster results with focused interventions."),
              React.createElement('li', null, React.createElement('strong', null, 'Empowerment Through Education:'), " Understand your body and prevent future injuries."),
              React.createElement('li', null, React.createElement('strong', null, 'Holistic Approach:'), " Considers your full lifestyle for better adherence."),
              React.createElement('li', null, React.createElement('strong', null, 'Progress Tracking:'), " Regular reassessments ensure optimal recovery.")
            )
        )
    },
    {
        id: 'common-conditions',
        title: 'Common Conditions We Successfully Treat',
        imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Various physical therapy treatment techniques demonstration',
        content: React.createElement(Fragment, null,
             React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, 'Sports Injuries:'), ' ACL tears, rotator cuff, tennis elbow'),
                React.createElement('li', null, React.createElement('strong', null, 'Post-Surgical Rehab:'), ' Joint replacements, spinal surgeries'),
                React.createElement('li', null, React.createElement('strong', null, 'Chronic Pain:'), ' Back, neck, sciatica, stenosis'),
                React.createElement('li', null, React.createElement('strong', null, 'Arthritis:'), ' Osteoarthritis and rheumatoid management'),
                React.createElement('li', null, React.createElement('strong', null, 'Balance & Fall Prevention:'), ' Vestibular rehab for seniors'),
                React.createElement('li', null, React.createElement('strong', null, 'Headaches & TMJ:'), ' Tension headaches, jaw dysfunction'),
                React.createElement('li', null, React.createElement('strong', null, 'Work Injuries:'), ' Carpal tunnel, repetitive strain')
            )
        )
    },
    {
        id: 'your-role-in-recovery',
        title: 'Your Active Role in Successful Recovery',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Patient performing home exercise program for recovery',
        content: React.createElement(Fragment, null,
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('strong', null, 'Consistency:'), " Do your home exercises daily."),
              React.createElement('li', null, React.createElement('strong', null, 'Communication:'), " Share honest feedback with your therapist."),
              React.createElement('li', null, React.createElement('strong', null, 'Patience:'), " Trust the process and celebrate small wins."),
              React.createElement('li', null, React.createElement('strong', null, 'Lifestyle Changes:'), " Adjust habits to support healing.")
            )
        )
    }
];

const resourcesData = [
    {
        title: 'Preparing for Your Visit',
        description: 'Download our comprehensive checklist.',
        link: '/resources/consultation-checklist',
        linkText: 'Get Checklist'
    },
    {
        title: 'Insurance Guide',
        description: 'Understand your PT coverage.',
        link: '/resources/insurance-guide',
        linkText: 'View Guide'
    },
    {
        title: 'Exercise Library',
        description: 'Home exercise videos & instructions.',
        link: '/resources/exercise-library',
        linkText: 'Browse Exercises'
    },
    {
        title: 'Patient Success Stories',
        description: 'Real recovery journeys.',
        link: '/testimonials',
        linkText: 'Read Stories'
    }
];

function App() {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      if (isScrollingDown && currentScrollY > 10) {
        setIsTopBarVisible(false);
      } else {
        setIsTopBarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return React.createElement(Fragment, null,
    React.createElement('div', { className: `top-bar ${!isTopBarVisible ? 'top-bar--hidden' : ''}` },
      React.createElement('div', { className: 'top-bar-heading' },
        React.createElement('div', { className: 'top-bar-title' }, 'Physical Therapy Consultation'),
        React.createElement('div', { className: 'top-bar-subtitle' }, 'Your First Step Towards Recovery')
      ),
      React.createElement('a', { 
        href: '/contact', // ✅ Internal link
        className: 'top-bar-button',
        'aria-label': 'Schedule a consultation'
      },
        'Schedule a Consultation'
      )
    ),
    React.createElement('main', null,
      React.createElement('section', { className: 'hero' },
        React.createElement('div', { className: 'container' },
          React.createElement('h1', null, 'Your Path to a ', React.createElement('span', null, 'Pain-Free Life'), ' Begins Here'),
          React.createElement('h2', null, 'Comprehensive Physical Therapy Consultation Services'),
          React.createElement('p', null,
            'A physical therapy consultation is your crucial first step towards understanding your body, managing pain, and restoring mobility. Our expert therapists provide personalized assessments that unlock your potential for recovery and wellness.'
          ),
          React.createElement('a', { 
            href: '/contact', // ✅ Internal link
            className: 'cta-button',
            'aria-label': 'Start your recovery journey'
          },
            'Start Your Recovery Journey Today'
          )
        )
      ),
      React.createElement('nav', { className: 'quick-nav container', 'aria-label': 'Page Sections' },
        React.createElement('h2', null, 'Quick Navigation'),
        React.createElement('ul', null,
          sectionData.map(section => 
            React.createElement('li', { key: section.id },
              React.createElement('a', { href: `#${section.id}` }, section.title)
            )
          )
        )
      ),
      React.createElement('div', { className: 'container' },
        sectionData.map((section, index) => 
          React.createElement(InfoSection, {
            key: section.id,
            id: section.id,
            title: section.title,
            imageUrl: section.imageUrl,
            imageAlt: section.imageAlt,
            imagePosition: index % 2 === 1 ? 'left' : 'right',
            children: section.content
          })
        )
      ),
      React.createElement('section', { className: 'resources-section' },
        React.createElement('div', { className: 'container' },
          React.createElement('h2', null, 'Additional Resources'),
          React.createElement('div', { className: 'resources-grid' },
            resourcesData.map((resource, index) => 
              React.createElement('div', { key: index, className: 'resource-card' },
                React.createElement('h3', null, resource.title),
                React.createElement('p', null, resource.description),
                React.createElement('a', { 
                  href: resource.link,
                  'aria-label': `${resource.linkText} - ${resource.title}`
                }, resource.linkText)
              )
            )
          )
        )
      ),
      React.createElement(SocialShare, null)
    ),
    React.createElement('footer', { className: 'footer' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'footer-content' },
          React.createElement('div', { className: 'footer-column' },
            React.createElement('h3', null, 'Services'), // h3 under footer h2 context
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('a', { href: '/services/orthopedic-therapy' }, 'Orthopedic Therapy')),
              React.createElement('li', null, React.createElement('a', { href: '/services/sports-rehabilitation' }, 'Sports Rehabilitation')),
              React.createElement('li', null, React.createElement('a', { href: '/services/manual-therapy' }, 'Manual Therapy')),
              React.createElement('li', null, React.createElement('a', { href: '/services/post-surgical-rehab' }, 'Post-Surgical Rehab'))
            )
          ),
          React.createElement('div', { className: 'footer-column' },
            React.createElement('h3', null, 'Resources'),
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('a', { href: '/blog' }, 'Health Blog')),
              React.createElement('li', null, React.createElement('a', { href: '/faq' }, 'FAQ')),
              React.createElement('li', null, React.createElement('a', { href: '/patient-forms' }, 'Patient Forms')),
              React.createElement('li', null, React.createElement('a', { href: '/insurance' }, 'Insurance Info'))
            )
          ),
          React.createElement('div', { className: 'footer-column' },
            React.createElement('h3', null, 'Connect'),
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('a', { href: '/contact' }, 'Contact Us')),
              React.createElement('li', null, React.createElement('a', { href: '/locations' }, 'Our Locations')),
              React.createElement('li', null, React.createElement('a', { href: 'https://www.facebook.com/luminousrehab', target: '_blank', rel: 'noopener noreferrer' }, 'Facebook')),
              React.createElement('li', null, React.createElement('a', { href: 'https://www.instagram.com/luminousrehab', target: '_blank', rel: 'noopener noreferrer' }, 'Instagram'))
            )
          )
        ),
        React.createElement('div', { className: 'footer-bottom' },
          React.createElement('p', null, '© 2024 Luminous Rehab. All Rights Reserved. | ',
            React.createElement('a', { href: '/privacy-policy' }, 'Privacy Policy'),
            ' | ',
            React.createElement('a', { href: '/terms-of-service' }, 'Terms'),
            ' | ',
            React.createElement('a', { href: '/sitemap.xml' }, 'Sitemap')
          )
        )
      )
    )
  );
}

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  React.createElement(App)
);
