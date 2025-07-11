import React, { useState } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Summary } from './components/Summary';
import { WorkExperience } from './components/WorkExperience';
import { Leadership } from './components/Leadership';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ResumePreview } from './components/ResumePreview';
import { RotateCcw } from 'lucide-react';

function App() {
  const initialData = {
    personalInfo: {
      name: 'Adit Jain',
      title: 'Product Manager | Customer-Centric Solutions | Data-Driven Strategy | Agile & UX Expert',
      phone: '+1 (401)582-5428',
      email: 'aditljain21@gmail.com',
      location: 'Los Angeles, California, United States',
      linkedin: 'https://linkedin.com/in/aditjain',
      portfolio: 'https://aditjain.portfolio.com'
    },
    summary: 'Product Manager with 3+ years of experience leading full product lifecycles, digital transformation initiatives, and cross-functional teams. Proven track record of increasing feature delivery by 35%, improving operational efficiency, and shipping scalable SaaS products. Adept at using data, market research, and agile practices to drive user adoption, engagement, and retention. Passionate about building human-centric, high-impact digital experiences.',
    workExperience: [
      {
        id: '1',
        position: 'Product Manager',
        company: 'FLASHFIRE',
        duration: 'Jul 2024 - May 2025',
        responsibilities: [
          'Boosted sprint velocity by 35% by refining agile workflows, conducting weekly deployment reviews, and enhancing cross-functional alignment—resulting in the delivery of 45 features per sprint and saving 100+ engineering hours monthly.',
          'Improved job fulfilment accuracy by implementing a job validation workflow, increasing work order completion from 83% to 90% and cutting fulfilment errors by 40%, directly minimizing revenue leakage.',
          'Deployed real-time KPI scorecards to enhance visibility into performance metrics across teams, streamlining planning cycles and cutting project preparation time by 30%.',
          'Automated SMB work order processing, reducing quote turnaround from 3 days to 1.5, while launching a priority-based assignment system that drove a 25% improvement in lead conversion rates.',
          'Reduced follow-up delays by 33% through automation of real-time job status notifications, improving customer response rates and saving over 15 man-hours per week in coordination efforts.',
          'Led a UTM-tracked rebranding campaign across digital channels, driving an 18% increase in brand engagement and lowering customer churn through targeted performance marketing strategies.'
        ]
      },
      {
        id: '2',
        position: 'Program Coordinator',
        company: 'Qubit.',
        duration: 'Mar 2024 - Dec 2024',
        responsibilities: [
          'Coordinated end-to-end logistics for 100+ university events, leveraging Excel-based scheduling tools and vendor management systems to boost service reliability and guest satisfaction scores by 22%.',
          'Introduced a centralized feedback and incident tracking system, resolving 95% of service issues within 24 hours and enhancing stakeholder communication across 5+ university departments.',
          'Collaborated with culinary and procurement teams to implement data-driven inventory controls, minimizing overstocking and reducing per- event food surplus by 30%.'
        ]
      },
      {
        id: '3',
        position: 'Associate Product Manager',
        company: 'Global Services',
        duration: 'Jun 2022 - Feb 2023',
        responsibilities: [
          'Designed and implemented a Finance Module for seamless fundraising, fund transfers, and expense tracking, improving financial transparency by 90%, along with key features such as project management, CRM, prospect management, and ticketing modules.',
          'Conducted market research and competitor analysis across 10+ companies, interviewed 50+ target users, and developed a data-driven business model that increased projected fundraising efficiency by 40%.',
          'Enhanced event management with an advanced ticketing module, increasing efficiency by 50% and enabling streamlined ticket sales and tracking for organizational events.',
          'Built and managed 10+ channel partnerships, expanding the company\'s reach to over 5,000 nonprofit organizations and securing 150+ nonprofits ready to subscribe at launch based on the clickable prototype.',
          'Built and optimized a hierarchical leadership module with six levels of access control for appointment, termination, promotions, and approvals, streamlining decision-making with affiliation-based approval workflows.'
        ]
      }
    ],
    leadership: [
      {
        id: '1',
        title: 'Strategic Growth Advisor',
        organization: 'Cathartic'
      },
      {
        id: '2',
        title: 'Department Senator',
        organization: 'Viterbi Graduate Student Association'
      }
    ],
    skills: [
      {
        id: '1',
        category: 'Product Management & Strategy',
        skills: 'Product Development, Go-To-Market Strategy, Product Marketing, Market Research, Roadmapping Tools, Agile Methodologies, Scrum, Kanban, SAFe, Risk Mitigation, Cross-Functional Collaboration, Stakeholder Management, Customer Journey Mapping, KPI/OKR Ownership'
      },
      {
        id: '2',
        category: 'Tools & Software',
        skills: 'Jira, Trello, Aha!, Notion, Confluence'
      },
      {
        id: '3',
        category: 'Design & Collaboration',
        skills: 'Figma, Miro, Adobe Creative Suite, Sketch, Canva, PowerPoint'
      },
      {
        id: '4',
        category: 'Data & Analytics',
        skills: 'Microsoft Excel, Google Analytics, HubSpot, Power BI, Meta Business Suite'
      },
      {
        id: '5',
        category: 'Programming & Web Technologies',
        skills: 'Python, C, HTML, CSS, SQL, Bubble'
      },
      {
        id: '6',
        category: 'Certifications',
        skills: 'Project Management Essentials Certified, Risk Management & Insurance Planning'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'University of Southern California',
        location: 'Los Angeles, CA, United States',
        degree: 'Master of Science',
        field: 'Engineering Management',
        additionalInfo: 'Dean\'s Master\'s Scholarship'
      },
      {
        id: '2',
        institution: 'UPES',
        location: 'Punjab, India',
        degree: 'Bachelor of Engineering',
        field: 'Computer Science',
        additionalInfo: 'Specialisation: UX/UI'
      }
    ]
  };

  const [resumeData, setResumeData] = useState(initialData);
  const [showLeadership, setShowLeadership] = useState(true);

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updateSummary = (value: string) => {
    setResumeData(prev => ({
      ...prev,
      summary: value
    }));
  };

  const updateWorkExperience = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      workExperience: data
    }));
  };

  const updateLeadership = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      leadership: data
    }));
  };

  const updateSkills = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      skills: data
    }));
  };

  const updateEducation = (data: any[]) => {
    setResumeData(prev => ({
      ...prev,
      education: data
    }));
  };

  const handlePrint = () => {
    // Simple print with instructions
    const shouldPrint = window.confirm(
      '📄 PRINT SETTINGS:\n\n' +
      '• Set Margins to "None"\n' +
      '• Disable "Headers and footers"\n' +
      '• Set Scale to 100%\n' +
      '• Use "Save as PDF" for best quality\n\n' +
      'Click OK to print your resume.'
    );
    
    if (shouldPrint) {
      window.print();
    }
  };

  const handleStartOver = () => {
    if (window.confirm('Are you sure you want to start over? This will reset all your data.')) {
      setResumeData({
        personalInfo: {
          name: '',
          title: '',
          phone: '',
          email: '',
          location: '',
          linkedin: '',
          portfolio: ''
        },
        summary: '',
        workExperience: [{
          id: '1',
          position: '',
          company: '',
          duration: '',
          responsibilities: ['']
        }],
        leadership: [{
          id: '1',
          title: '',
          organization: ''
        }],
        skills: [{
          id: '1',
          category: '',
          skills: ''
        }],
        education: [{
          id: '1',
          institution: '',
          location: '',
          degree: '',
          field: '',
          additionalInfo: ''
        }]
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b no-print">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Professional Resume Builder Portal</h1>
          <p className="text-gray-600 mt-1">Edit sections on the left, see live preview on the right</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Edit Sections */}
          <div className="space-y-6 bg-white rounded-lg shadow-sm p-6 h-fit max-h-[800px] overflow-y-auto no-print">
            <PersonalInfo 
              data={resumeData.personalInfo} 
              onChange={updatePersonalInfo} 
            />
            <Summary 
              data={resumeData.summary} 
              onChange={updateSummary} 
            />
            <WorkExperience 
              data={resumeData.workExperience} 
              onChange={updateWorkExperience} 
            />
            
            {/* Leadership & Volunteering Toggle */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="showLeadership"
                  checked={showLeadership}
                  onChange={(e) => setShowLeadership(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="showLeadership" className="text-sm font-medium text-gray-700">
                  Include Leadership & Volunteering section
                </label>
              </div>
              
              {showLeadership && (
                <Leadership 
                  data={resumeData.leadership} 
                  onChange={updateLeadership} 
                />
              )}
            </div>
            
            <Skills 
              data={resumeData.skills} 
              onChange={updateSkills} 
            />
            <Education 
              data={resumeData.education} 
              onChange={updateEducation} 
            />
            
            {/* Start Over Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={handleStartOver}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
              >
                <RotateCcw size={18} />
                Start Over
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                This will clear all your data and start fresh
              </p>
            </div>
          </div>

          {/* Right Side - Live Preview */}
          <div className="lg:sticky lg:top-6 h-fit no-print">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Live Preview</h2>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm"
                >
                  Print Resume
                </button>
              </div>
              <ResumePreview data={resumeData} showLeadership={showLeadership} />
            </div>
          </div>
        </div>
      </div>

      {/* Print-only resume content - This is what gets printed */}
      <ResumePreview data={resumeData} showLeadership={showLeadership} />
    </div>
  );
}

export default App;