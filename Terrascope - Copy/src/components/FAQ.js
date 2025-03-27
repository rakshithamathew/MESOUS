import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  // Categories list
  const categories = [
    { id: 'law', name: 'LAW', active: true },
    { id: 'finance', name: 'FINANCE & COMPENSATION', active: false },
    { id: 'process', name: 'PROCESS RELATED', active: false },
    { id: 'fightForMeso', name: 'FIGHTFORMESO', active: false }
  ];

  // FAQ questions and answers
  const faqItems = [
    {
      id: 1,
      question: 'Am I eligible to file a Mesothelioma lawsuit?',
      answer: 'If you have been diagnosed with mesothelioma, you are likely eligible to file a lawsuit. Mesothelioma is almost exclusively caused by asbestos exposure, which establishes the basis for legal action against companies responsible for that exposure.',
      category: 'law',
      expanded: false
    },
    {
      id: 2,
      question: 'What if my asbestos exposure happened decades ago?',
      answer: 'Most mesothelioma cases develop 20-50 years after asbestos exposure. The law recognizes this long latency period, and the statute of limitations typically begins when you are diagnosed, not when exposure occurred.',
      category: 'law',
      expanded: false
    },
    {
      id: 3,
      question: 'How long do I have to file a claim after my diagnosis?',
      answer: 'The time limit to file a claim varies by state and is determined by the statute of limitations—typically 1 to 5 years from the date of diagnosis. It\'s crucial to consult a lawyer quickly to ensure you meet the deadline.',
      category: 'law',
      expanded: true
    },
    {
      id: 4,
      question: 'Can I still file a lawsuit if I don\'t know where I was exposed to asbestos?',
      answer: 'Yes, you can still file a lawsuit even if you are uncertain about where your asbestos exposure occurred. Experienced mesothelioma attorneys have resources to investigate your work history and identify potential exposure sources.',
      category: 'finance',
      expanded: false
    },
    {
      id: 5,
      question: 'What if my asbestos exposure happened decades ago?',
      answer: 'Most mesothelioma cases develop 20-50 years after asbestos exposure. The law recognizes this long latency period, and the statute of limitations typically begins when you are diagnosed, not when exposure occurred.',
      category: 'finance',
      expanded: false
    },
    {
      id: 6,
      question: 'Is my family eligible to file a lawsuit on my behalf?',
      answer: 'Yes, if you are unable to file a lawsuit due to illness, a spouse, child, or legal representative can file on your behalf. If a loved one has passed away due to mesothelioma, family members may also file a wrongful death claim to seek compensation.',
      category: 'finance',
      expanded: true
    }
  ];

  // State management
  const [activeCategory, setActiveCategory] = useState('law');
  const [expandedItems, setExpandedItems] = useState(
    faqItems.reduce((acc, item) => {
      acc[item.id] = item.expanded;
      return acc;
    }, {})
  );

  // Toggle FAQ item expansion
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter FAQ items by active category
  const filteredItems = faqItems.filter(item => item.category === activeCategory);

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* FAQ Title and Category Selection */}
        <div className="faq-header">
          <h2 className="faq-title">FAQS</h2>
          
          <div className="faq-categories">
            {categories.map(category => (
              <div 
                key={category.id}
                className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.name}</span>
                <div className={`category-indicator ${activeCategory === category.id ? 'active' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="faq-content">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`faq-item ${expandedItems[item.id] ? 'expanded' : ''}`}
            >
              {index > 0 && <div className="faq-divider"></div>}
              <div className="faq-question-row" onClick={() => toggleItem(item.id)}>
                <h3 className="faq-question">{item.question}</h3>
                <button 
                  className={`faq-toggle ${expandedItems[item.id] ? 'expanded' : ''}`} 
                  aria-label="Toggle answer"
                >
                  <div className="plus-icon">
                    <span className="plus-vertical"></span>
                    <span className="plus-horizontal"></span>
                  </div>
                </button>
              </div>
              {expandedItems[item.id] && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 