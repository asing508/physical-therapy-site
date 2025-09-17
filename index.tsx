/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

const LUMINOUS_REHAB_URL = 'https://www.luminousrehab.com/';

// Reusable component for the alternating info sections
const InfoSection = ({ title, children, imageUrl, imagePosition = 'left' }) => {
  const imageSideClass = imagePosition === 'left' ? 'image-left' : 'image-right';

  return (
    <section className={`info-section ${imageSideClass}`}>
      <div className="info-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="info-content">
        <h3>{title}</h3>
        {children}
        <a href={LUMINOUS_REHAB_URL} target="_blank" rel="noopener noreferrer" className="learn-more-button">
          Learn More at Luminous Rehab
        </a>
      </div>
    </section>
  );
};


function App() {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-heading">
          <div className="top-bar-title">Physical Therapy Consultation</div>
          <div className="top-bar-subtitle">Your First Step Towards Recovery & Wellness</div>
        </div>
        <a href={LUMINOUS_REHAB_URL} target="_blank" rel="noopener noreferrer" className="top-bar-button">
          Schedule a Consultation
        </a>
      </div>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Your Path to a <span>Pain-Free Life</span> Begins Here</h1>
            <p>
              A physical therapy consultation is your crucial first step towards understanding your body, managing pain, and restoring mobility. Discover how a personalized assessment can unlock your potential for recovery and wellness.
            </p>
            <a href={LUMINOUS_REHAB_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
              Learn More at Luminous Rehab
            </a>
          </div>
        </section>

        <div className="container">
          <InfoSection 
            title="What is a Physical Therapy Consultation?"
            imageUrl="https://uamshealth.com/wp-content/uploads/2020/01/Physical-therapy-512x288.jpg"
            imagePosition="right"
          >
            <p>
              A physical therapy consultation is a comprehensive one-on-one evaluation with a licensed physical therapist. It's a detailed diagnostic session that goes far beyond a simple chat about your aches. It involves a thorough interview about your health history and a physical assessment to pinpoint the underlying sources of your discomfort or functional limitations. 
            </p>
            <p>
              This initial meeting is foundational; it sets the stage for a successful rehabilitation journey by ensuring your treatment plan is built on a precise understanding of your unique body, lifestyle, and goals. It's about identifying the root cause, not just treating the symptoms.
            </p>
          </InfoSection>

          <InfoSection 
            title="What to Expect During Your First Visit"
            imageUrl="https://media.istockphoto.com/id/1325013910/photo/confident-mature-male-chiropractor-talks-with-new-patient.jpg?s=612x612&w=0&k=20&c=dPPNz57sQ2kmOmM6WFJEcKoa2t0uOgbEX2hkY22--_g="
            imagePosition="left"
          >
            <p>Your initial consultation is a structured, collaborative process designed for a thorough assessment:</p>
            <ul>
                <li><strong>In-Depth Medical History Review:</strong> This is a detailed conversation about your symptoms, when they started, what makes them better or worse, and your overall health history. This context is vital for an accurate diagnosis.</li>
                <li><strong>Comprehensive Physical Examination:</strong> Your therapist will perform a series of tests to evaluate your posture, strength, joint mobility, flexibility, and balance. This may include functional movement screens (like observing you walk or squat) and hands-on assessments to identify specific tissues involved.</li>
                <li><strong>Collaborative Goal Setting:</strong> You'll discuss what you want to achieve—whether it's running a marathon, playing with your grandchildren without pain, or simply getting through a workday comfortably. Your goals are the ultimate benchmark for success.</li>
                <li><strong>Treatment Plan Introduction:</strong> Based on the findings, your therapist will explain their diagnosis in clear terms and outline a proposed treatment plan. You'll understand the recommended therapies, the expected timeline, and what you can do at home to accelerate your progress.</li>
            </ul>
          </InfoSection>

          <InfoSection 
            title="Benefits of a Personalized Plan"
            imageUrl="https://www.shutterstock.com/image-photo/physiotherapist-stretching-band-senior-patient-600nw-2487067189.jpg"
            imagePosition="right"
          >
            <p>
              Cookie-cutter approaches don't work for complex human bodies. A plan tailored specifically to your condition, lifestyle, and goals ensures a more effective and efficient recovery.
            </p>
            <ul>
              <li><strong>Targeted & Efficient Treatment:</strong> A personalized plan focuses on the specific impairments found during your evaluation, ensuring every exercise is purposeful. This leads to faster, more efficient results compared to generic protocols.</li>
              <li><strong>Empowerment Through Education:</strong> A key benefit is understanding the 'why' behind your pain and the 'how' of your recovery. We empower you with knowledge about your body, proper mechanics, and self-management strategies to prevent future recurrences.</li>
              <li><strong>Holistic and Integrated Approach:</strong> Your plan considers your entire lifestyle, including work demands, hobbies, and overall fitness. This ensures the rehabilitation process fits seamlessly into your life, promoting better adherence and long-term success.</li>
            </ul>
          </InfoSection>

          <InfoSection 
            title="Common Conditions We Address"
            imageUrl="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2283699.jpg"
            imagePosition="left"
          >
            <p>A physical therapy consultation is the gateway to treating a vast array of musculoskeletal issues. We frequently develop successful plans for individuals experiencing:</p>
             <ul>
                <li>Sports Injuries and Performance Enhancement</li>
                <li>Post-Surgical Rehabilitation (e.g., knee, shoulder, hip replacement)</li>
                <li>Chronic Neck, Back, and Joint Pain</li>
                <li>Arthritis and Degenerative Conditions</li>
                <li>Balance Disorders and Fall Prevention</li>
                <li>Headaches and TMJ (Jaw) Dysfunction</li>
                <li>Work-Related Musculoskeletal Injuries</li>
            </ul>
          </InfoSection>

           <InfoSection 
            title="Your Role in a Successful Recovery"
            imageUrl="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/Active_recovery_GettyImages1265162147_Header-1024x575.jpg?w=1155&h=1528"
            imagePosition="right"
          >
            <p>
              Physical therapy is a partnership. While your therapist provides the expert guidance, your active participation is the most critical ingredient for a successful outcome. Your commitment to the recovery process can significantly accelerate your healing and help you achieve lasting results.
            </p>
            <ul>
              <li><strong>Consistency is Key:</strong> Adhering to your home exercise program is non-negotiable. These exercises are designed to build on the progress made during your sessions and are essential for rebuilding strength and mobility.</li>
              <li><strong>Open Communication:</strong> Always provide honest feedback. Let your therapist know what's working, what's painful, and any challenges you're facing. This allows for real-time adjustments to your treatment plan.</li>
              <li><strong>Patience and Persistence:</strong> Healing takes time. Trust the process, celebrate small victories, and stay focused on your long-term goals. Your dedication is your greatest asset.</li>
            </ul>
          </InfoSection>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Luminous Rehab. All Rights Reserved. This is an informational page.</p>
        </div>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);