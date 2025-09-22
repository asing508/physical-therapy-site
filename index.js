/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

const { useState, useEffect, useRef, Fragment } = React;

const LUMINOUS_REHAB_URL = 'https://www.luminousrehab.com/';

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
      React.createElement('h3', null, title),
      children,
      React.createElement('a', { 
        href: LUMINOUS_REHAB_URL, 
        target: '_blank', 
        rel: 'noopener noreferrer', 
        className: 'learn-more-button',
        'aria-label': `Learn more about ${title} at Luminous Rehab`
      },
        'Learn More at Luminous Rehab'
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
              "This foundational meeting is crucial for your rehabilitation journey. It ensures your treatment plan is built on a precise understanding of your unique body, lifestyle, and recovery goals. The consultation focuses on identifying root causes rather than just treating symptoms, setting the stage for effective, long-lasting results. Your therapist will use advanced assessment techniques to create a roadmap specifically tailored to your needs."
            ),
            React.createElement('p', null, 
              "Physical therapy consultations typically last 45-60 minutes and involve both verbal discussion and hands-on evaluation. This comprehensive approach allows your therapist to understand not just what hurts, but why it hurts and how to fix it effectively."
            )
        )
    },
    {
        id: 'first-visit-expectations',
        title: 'What to Expect During Your First Visit',
        imageUrl: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Patient and physical therapist during first consultation visit',
        content: React.createElement(Fragment, null,
            React.createElement('p', null, 'Your initial consultation is a structured, collaborative process designed for thorough assessment and personalized care planning. Understanding what to expect can help you prepare and make the most of your appointment.'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, 'In-Depth Medical History Review:'), " Your therapist will conduct a detailed conversation about your symptoms, including when they started, what makes them better or worse, and your overall health history. This context is vital for an accurate diagnosis and includes discussing previous injuries, surgeries, medications, and lifestyle factors."),
                React.createElement('li', null, React.createElement('strong', null, 'Comprehensive Physical Examination:'), " Your therapist will perform a series of tests to evaluate your posture, strength, joint mobility, flexibility, and balance. This may include functional movement screens (like observing you walk or squat), hands-on assessments to identify specific tissues involved, and specialized tests specific to your condition."),
                React.createElement('li', null, React.createElement('strong', null, 'Collaborative Goal Setting:'), " Together, you'll discuss what you want to achieve—whether it's running a marathon, playing with your grandchildren without pain, or simply getting through a workday comfortably. Your goals become the ultimate benchmark for success and guide every aspect of your treatment plan."),
                React.createElement('li', null, React.createElement('strong', null, 'Treatment Plan Introduction:'), " Based on the findings, your therapist will explain their diagnosis in clear, understandable terms. They'll outline a proposed treatment plan, including recommended therapies, expected timeline, frequency of visits, and what you can do at home to accelerate your progress.")
            ),
            React.createElement('p', null, 
              "Come prepared with comfortable clothing that allows easy movement, a list of current medications, any relevant medical imaging or reports, and questions you'd like to ask. Being prepared helps maximize the value of your consultation time."
            )
        )
    },
    {
        id: 'benefits-of-a-plan',
        title: 'Benefits of a Personalized Treatment Plan',
        imageUrl: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Physical therapy personalized treatment planning session',
        content: React.createElement(Fragment, null,
            React.createElement('p', null,
              "Cookie-cutter approaches don't work for complex human bodies. A personalized treatment plan tailored specifically to your condition, lifestyle, and goals ensures more effective and efficient recovery. Research shows that individualized physical therapy programs have significantly higher success rates than generic protocols."
            ),
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('strong', null, 'Targeted & Efficient Treatment:'), " A personalized plan focuses on the specific impairments found during your evaluation, ensuring every exercise and technique is purposeful. This targeted approach leads to faster, more efficient results compared to generic protocols, often reducing overall treatment time by 30-40%."),
              React.createElement('li', null, React.createElement('strong', null, 'Empowerment Through Education:'), " A key benefit is understanding the 'why' behind your pain and the 'how' of your recovery. We empower you with knowledge about your body, proper mechanics, and self-management strategies to prevent future recurrences. This education becomes a lifelong tool for maintaining your health."),
              React.createElement('li', null, React.createElement('strong', null, 'Holistic and Integrated Approach:'), " Your plan considers your entire lifestyle, including work demands, hobbies, sleep patterns, stress levels, and overall fitness. This comprehensive approach ensures the rehabilitation process fits seamlessly into your life, promoting better adherence and long-term success."),
              React.createElement('li', null, React.createElement('strong', null, 'Progress Tracking and Adaptability:'), " Personalized plans include specific milestones and regular reassessments. This allows your therapist to track progress objectively and adjust the treatment as needed, ensuring you're always working at the optimal level for recovery.")
            ),
            React.createElement('p', null, 
              "Studies indicate that patients with personalized physical therapy plans report 85% higher satisfaction rates and achieve their goals 40% faster than those following standardized programs. Your unique plan becomes your roadmap to recovery."
            )
        )
    },
    {
        id: 'common-conditions',
        title: 'Common Conditions We Successfully Treat',
        imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Various physical therapy treatment techniques demonstration',
        content: React.createElement(Fragment, null,
            React.createElement('p', null, 'Physical therapy consultations are the gateway to treating a vast array of musculoskeletal and neurological conditions. Our evidence-based approach has proven successful for thousands of patients with diverse health challenges. Here are the conditions we frequently address with excellent outcomes:'),
             React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, 'Sports Injuries and Performance Enhancement:'), ' From weekend warriors to professional athletes, we treat ACL tears, rotator cuff injuries, tennis elbow, and provide sport-specific training to prevent future injuries'),
                React.createElement('li', null, React.createElement('strong', null, 'Post-Surgical Rehabilitation:'), ' Specialized programs for knee, hip, and shoulder replacements, spinal surgeries, and ACL reconstruction with proven protocols to accelerate healing'),
                React.createElement('li', null, React.createElement('strong', null, 'Chronic Neck, Back, and Joint Pain:'), ' Comprehensive treatment for conditions like herniated discs, sciatica, stenosis, and chronic pain syndromes using manual therapy and targeted exercises'),
                React.createElement('li', null, React.createElement('strong', null, 'Arthritis and Degenerative Conditions:'), ' Management strategies for osteoarthritis, rheumatoid arthritis, and age-related joint degeneration to maintain mobility and reduce pain'),
                React.createElement('li', null, React.createElement('strong', null, 'Balance Disorders and Fall Prevention:'), ' Vestibular rehabilitation and balance training programs especially important for older adults to maintain independence'),
                React.createElement('li', null, React.createElement('strong', null, 'Headaches and TMJ Dysfunction:'), ' Specialized techniques for tension headaches, migraines, and jaw disorders that often respond well to targeted physical therapy'),
                React.createElement('li', null, React.createElement('strong', null, 'Work-Related Injuries:'), ' Ergonomic assessments and treatment for repetitive strain injuries, carpal tunnel syndrome, and occupational injuries')
            ),
            React.createElement('p', null, 
              "Each condition requires a unique approach, which is why the initial consultation is so important. It allows us to understand your specific situation and create the most effective treatment strategy for your recovery."
            )
        )
    },
    {
        id: 'your-role-in-recovery',
        title: 'Your Active Role in Successful Recovery',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80',
        imageAlt: 'Patient performing home exercise program for recovery',
        content: React.createElement(Fragment, null,
            React.createElement('p', null,
              "Physical therapy is a collaborative partnership between you and your therapist. While your therapist provides expert guidance, assessment, and hands-on treatment, your active participation is the most critical ingredient for successful outcomes. Research shows that patients who actively engage in their recovery achieve their goals 60% faster than passive participants."
            ),
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('strong', null, 'Consistency is Key:'), " Adhering to your home exercise program is non-negotiable for success. These exercises are scientifically designed to build on the progress made during your sessions and are essential for rebuilding strength, flexibility, and mobility. Even 10-15 minutes daily can make a significant difference."),
              React.createElement('li', null, React.createElement('strong', null, 'Open Communication:'), " Always provide honest feedback about your pain levels, challenges, and progress. Let your therapist know what's working, what's difficult, and any concerns you have. This allows for real-time adjustments to your treatment plan and ensures you're always working at the optimal intensity."),
              React.createElement('li', null, React.createElement('strong', null, 'Patience and Persistence:'), " Healing takes time, and progress isn't always linear. Trust the process, celebrate small victories, and stay focused on your long-term goals. Your dedication and positive mindset are powerful tools in your recovery arsenal."),
              React.createElement('li', null, React.createElement('strong', null, 'Lifestyle Modifications:'), " Be willing to make temporary or permanent changes to support your recovery. This might include ergonomic adjustments at work, modifying exercise routines, or adopting new movement patterns to prevent re-injury.")
            ),
            React.createElement('p', null, 
              "Remember, your therapist is your guide and coach, but you are the one doing the work. Studies show that patients who take ownership of their recovery not only heal faster but also maintain their improvements longer. Your commitment today leads to a healthier, more active tomorrow."
            )
        )
    }
];

// Additional resources data
const resourcesData = [
    {
        title: 'Preparing for Your Visit',
        description: 'Download our comprehensive checklist to make the most of your consultation.',
        link: '/resources/consultation-checklist',
        linkText: 'Get Checklist'
    },
    {
        title: 'Insurance Guide',
        description: 'Understanding your coverage and benefits for physical therapy services.',
        link: '/resources/insurance-guide',
        linkText: 'View Guide'
    },
    {
        title: 'Exercise Library',
        description: 'Access our collection of home exercise videos and instructions.',
        link: '/resources/exercise-library',
        linkText: 'Browse Exercises'
    },
    {
        title: 'Patient Success Stories',
        description: 'Read inspiring recovery stories from our patients.',
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
        React.createElement('div', { className: 'top-bar-subtitle' }, 'Your First Step Towards Recovery & Wellness')
      ),
      React.createElement('a', { 
        href: LUMINOUS_REHAB_URL, 
        target: '_blank', 
        rel: 'noopener noreferrer', 
        className: 'top-bar-button',
        'aria-label': 'Schedule a consultation at Luminous Rehab'
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
            'A physical therapy consultation is your crucial first step towards understanding your body, managing pain, and restoring mobility. Our expert therapists provide personalized assessments that unlock your potential for recovery and wellness. With over 20 years of experience helping thousands of patients, we create customized treatment plans that deliver real results.'
          ),
          React.createElement('a', { 
            href: LUMINOUS_REHAB_URL, 
            target: '_blank', 
            rel: 'noopener noreferrer', 
            className: 'cta-button',
            'aria-label': 'Learn more about physical therapy consultations at Luminous Rehab'
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
      )
    ),
    React.createElement('footer', { className: 'footer' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'footer-content' },
          React.createElement('div', { className: 'footer-column' },
            React.createElement('h4', null, 'Services'),
            React.createElement('ul', null,
              React.createElement('li', null, 
                React.createElement('a', { href: '/services/orthopedic-therapy' }, 'Orthopedic Therapy')
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: '/services/sports-rehabilitation' }, 'Sports Rehabilitation')
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: '/services/manual-therapy' }, 'Manual Therapy')
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: '/services/post-surgical-rehab' }, 'Post-Surgical Rehab')
              )
            )
          ),
          React.createElement('div', { className: 'footer-column' },
            React.createElement('h4', null, 'Resources'),
            React.createElement('ul', null,
              React.createElement('li', null, 
                React.createElement('a', { href: '/blog' }, 'Health Blog')
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: '/faq' }, 'FAQ')
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: '/patient-forms' }, 'Patient Forms')
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: '/insurance' }, 'Insurance Information')
              )
            )
          ),
          React.createElement('div', { className: 'footer-column' },
            React.createElement('h4', null, 'Connect'),
            React.createElement('ul', null,
              React.createElement('li', null, 
                React.createElement('a', { href: '/contact' }, 'Contact Us')
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: '/locations' }, 'Our Locations')
              ),
              React.createElement('li', null, 
                React.createElement('a', { 
                  href: 'https://www.facebook.com/luminousrehab',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }, 'Facebook')
              ),
              React.createElement('li', null, 
                React.createElement('a', { 
                  href: 'https://www.instagram.com/luminousrehab',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }, 'Instagram')
              )
            )
          )
        ),
        React.createElement('div', { className: 'footer-bottom' },
          React.createElement('p', null, '© 2024 Physical Therapy Consultation Services. All Rights Reserved. | ',
            React.createElement('a', { href: '/privacy-policy' }, 'Privacy Policy'),
            ' | ',
            React.createElement('a', { href: '/terms-of-service' }, 'Terms of Service'),
            ' | ',
            React.createElement('a', { href: '/sitemap.xml' }, 'Sitemap')
          )
        )
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
