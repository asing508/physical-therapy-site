/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

const { useState, useEffect, useRef, Fragment } = React;

const LUMINOUS_REHAB_URL = 'https://www.luminousrehab.com/';

// Reusable component for the alternating info sections
const InfoSection = ({ id, title, children, imageUrl, imagePosition = 'left' }) => {
  const imageSideClass = imagePosition === 'left' ? 'image-left' : 'image-right';

  return React.createElement('section', { id: id, className: `info-section ${imageSideClass}` },
    React.createElement('div', { className: 'info-image' },
      React.createElement('img', { src: imageUrl, alt: title })
    ),
    React.createElement('div', { className: 'info-content' },
      React.createElement('h3', null, title),
      children,
      React.createElement('a', { href: LUMINOUS_REHAB_URL, target: '_blank', rel: 'noopener noreferrer', className: 'learn-more-button' },
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
        content: React.createElement(Fragment, null,
            React.createElement('p', null, 
              "A physical therapy consultation is a comprehensive one-on-one evaluation with a licensed physical therapist. It's a detailed diagnostic session that goes far beyond a simple chat about your aches. It involves a thorough interview about your health history and a physical assessment to pinpoint the underlying sources of your discomfort or functional limitations."
            ),
            React.createElement('p', null, 
              "This initial meeting is foundational; it sets the stage for a successful rehabilitation journey by ensuring your treatment plan is built on a precise understanding of your unique body, lifestyle, and goals. It's about identifying the root cause, not just treating the symptoms."
            )
        )
    },
    {
        id: 'first-visit-expectations',
        title: 'What to Expect During Your First Visit',
        imageUrl: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=80',
        content: React.createElement(Fragment, null,
            React.createElement('p', null, 'Your initial consultation is a structured, collaborative process designed for a thorough assessment:'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, 'In-Depth Medical History Review:'), " This is a detailed conversation about your symptoms, when they started, what makes them better or worse, and your overall health history. This context is vital for an accurate diagnosis."),
                React.createElement('li', null, React.createElement('strong', null, 'Comprehensive Physical Examination:'), " Your therapist will perform a series of tests to evaluate your posture, strength, joint mobility, flexibility, and balance. This may include functional movement screens (like observing you walk or squat) and hands-on assessments to identify specific tissues involved."),
                React.createElement('li', null, React.createElement('strong', null, 'Collaborative Goal Setting:'), " You'll discuss what you want to achieve—whether it's running a marathon, playing with your grandchildren without pain, or simply getting through a workday comfortably. Your goals are the ultimate benchmark for success."),
                React.createElement('li', null, React.createElement('strong', null, 'Treatment Plan Introduction:'), " Based on the findings, your therapist will explain their diagnosis in clear terms and outline a proposed treatment plan. You'll understand the recommended therapies, the expected timeline, and what you can do at home to accelerate your progress.")
            )
        )
    },
    {
        id: 'benefits-of-a-plan',
        title: 'Benefits of a Personalized Plan',
        imageUrl: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop&q=80',
        content: React.createElement(Fragment, null,
            React.createElement('p', null,
              "Cookie-cutter approaches don't work for complex human bodies. A plan tailored specifically to your condition, lifestyle, and goals ensures a more effective and efficient recovery."
            ),
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('strong', null, 'Targeted & Efficient Treatment:'), " A personalized plan focuses on the specific impairments found during your evaluation, ensuring every exercise is purposeful. This leads to faster, more efficient results compared to generic protocols."),
              React.createElement('li', null, React.createElement('strong', null, 'Empowerment Through Education:'), " A key benefit is understanding the 'why' behind your pain and the 'how' of your recovery. We empower you with knowledge about your body, proper mechanics, and self-management strategies to prevent future recurrences."),
              React.createElement('li', null, React.createElement('strong', null, 'Holistic and Integrated Approach:'), " Your plan considers your entire lifestyle, including work demands, hobbies, and overall fitness. This ensures the rehabilitation process fits seamlessly into your life, promoting better adherence and long-term success.")
            )
        )
    },
    {
        id: 'common-conditions',
        title: 'Common Conditions We Address',
        imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&auto=format&fit=crop&q=80',
        content: React.createElement(Fragment, null,
            React.createElement('p', null, 'A physical therapy consultation is the gateway to treating a vast array of musculoskeletal issues. We frequently develop successful plans for individuals experiencing:'),
             React.createElement('ul', null,
                React.createElement('li', null, 'Sports Injuries and Performance Enhancement'),
                React.createElement('li', null, 'Post-Surgical Rehabilitation (e.g., knee, shoulder, hip replacement)'),
                React.createElement('li', null, 'Chronic Neck, Back, and Joint Pain'),
                React.createElement('li', null, 'Arthritis and Degenerative Conditions'),
                React.createElement('li', null, 'Balance Disorders and Fall Prevention'),
                React.createElement('li', null, 'Headaches and TMJ (Jaw) Dysfunction'),
                React.createElement('li', null, 'Work-Related Musculoskeletal Injuries')
            )
        )
    },
    {
        id: 'your-role-in-recovery',
        title: 'Your Role in a Successful Recovery',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80',
        content: React.createElement(Fragment, null,
            React.createElement('p', null,
              "Physical therapy is a partnership. While your therapist provides the expert guidance, your active participation is the most critical ingredient for a successful outcome. Your commitment to the recovery process can significantly accelerate your healing and help you achieve lasting results."
            ),
            React.createElement('ul', null,
              React.createElement('li', null, React.createElement('strong', null, 'Consistency is Key:'), " Adhering to your home exercise program is non-negotiable. These exercises are designed to build on the progress made during your sessions and are essential for rebuilding strength and mobility."),
              React.createElement('li', null, React.createElement('strong', null, 'Open Communication:'), " Always provide honest feedback. Let your therapist know what's working, what's painful, and any challenges you're facing. This allows for real-time adjustments to your treatment plan."),
              React.createElement('li', null, React.createElement('strong', null, 'Patience and Persistence:'), " Healing takes time. Trust the process, celebrate small victories, and stay focused on your long-term goals. Your dedication is your greatest asset.")
            )
        )
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
        React.createElement('h1', { className: 'top-bar-title' }, 'Physical Therapy Consultation'),
        React.createElement('div', { className: 'top-bar-subtitle' }, 'Your First Step Towards Recovery & Wellness')
      ),
      React.createElement('a', { href: LUMINOUS_REHAB_URL, target: '_blank', rel: 'noopener noreferrer', className: 'top-bar-button' },
        'Schedule a Consultation'
      )
    ),
    React.createElement('main', null,
      React.createElement('section', { className: 'hero' },
        React.createElement('div', { className: 'container' },
          React.createElement('h2', null, 'Your Path to a ', React.createElement('span', null, 'Pain-Free Life'), ' Begins Here'),
          React.createElement('p', null,
            'A physical therapy consultation is your crucial first step towards understanding your body, managing pain, and restoring mobility. Discover how a personalized assessment can unlock your potential for recovery and wellness.'
          ),
          React.createElement('a', { href: LUMINOUS_REHAB_URL, target: '_blank', rel: 'noopener noreferrer', className: 'cta-button' },
            'Learn More at Luminous Rehab'
          )
        )
      ),
      React.createElement('nav', { className: 'quick-nav container', 'aria-label': 'Page Sections' },
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
          // FIX: Moved the `children` prop into the props object to fix a TypeScript type error.
          React.createElement(InfoSection, {
            key: section.id,
            id: section.id,
            title: section.title,
            imageUrl: section.imageUrl,
            imagePosition: index % 2 === 1 ? 'left' : 'right',
            children: section.content
          })
        )
      )
    ),
    React.createElement('footer', { className: 'footer' },
      React.createElement('div', { className: 'container' },
        React.createElement('p', null, '© Physical Therapy Consultation. All Rights Reserved. This is an informational page.')
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
