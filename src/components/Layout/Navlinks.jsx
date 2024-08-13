import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const categories = [
  {
    name: "Development",
    subcategories: [
      {
        name: "Frontend",
        topics: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Angular",
          "Vue.js",
          "SASS",
          "Bootstrap",
          "Tailwind CSS",
          "TypeScript",
        ],
      },
      {
        name: "Backend",
        topics: [
          "Node.js",
          "Python",
          "Ruby",
          "Java",
          "PHP",
          "C#",
          "Go",
          "Rust",
          "Django",
          "Flask",
        ],
      },
      {
        name: "Data Science",
        topics: [
          "Machine Learning",
          "Data Analysis",
          "Data Visualization",
          "Big Data",
          "Statistics",
          "Python for Data Science",
          "R",
          "TensorFlow",
          "Keras",
          "Pandas",
        ],
      },
      {
        name: "Mobile Development",
        topics: [
          "Android",
          "iOS",
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Java",
          "Xamarin",
          "Ionic",
          "Cordova",
        ],
      },
      {
        name: "DevOps",
        topics: [
          "CI/CD",
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Ansible",
          "Terraform",
          "AWS",
          "Azure",
          "Google Cloud",
          "Linux",
        ],
      },
      {
        name: "Cybersecurity",
        topics: [
          "Network Security",
          "Application Security",
          "Cryptography",
          "Ethical Hacking",
          "Penetration Testing",
          "Security Audits",
          "Incident Response",
          "Malware Analysis",
          "Risk Management",
          "Compliance",
        ],
      },
      {
        name: "Game Development",
        topics: [
          "Unity",
          "Unreal Engine",
          "Godot",
          "C#",
          "C++",
          "Game Design",
          "2D Game Development",
          "3D Game Development",
          "Mobile Game Development",
          "Game Testing",
        ],
      },
      {
        name: "Software Engineering",
        topics: [
          "Software Architecture",
          "Design Patterns",
          "Agile",
          "Scrum",
          "Kanban",
          "System Design",
          "UML",
          "Version Control",
          "Refactoring",
          "Testing",
        ],
      },
      {
        name: "Database Management",
        topics: [
          "SQL",
          "NoSQL",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Oracle",
          "Database Design",
          "Database Administration",
          "Data Warehousing",
          "Data Mining",
        ],
      },
      {
        name: "Cloud Computing",
        topics: [
          "AWS",
          "Azure",
          "Google Cloud",
          "Cloud Architecture",
          "Cloud Security",
          "Serverless",
          "Cloud Storage",
          "Cloud Networking",
          "Cloud Migration",
          "Hybrid Cloud",
        ],
      },
    ],
  },
  {
    name: "Business",
    subcategories: [
      {
        name: "Entrepreneurship",
        topics: [
          "Business Strategy",
          "Startup Funding",
          "Lean Startup",
          "Product Development",
          "Business Planning",
          "Pitching",
          "Market Research",
          "Business Models",
          "Growth Hacking",
          "Business Networking",
        ],
      },
      {
        name: "Finance",
        topics: [
          "Investing",
          "Financial Planning",
          "Stock Market",
          "Cryptocurrency",
          "Budgeting",
          "Corporate Finance",
          "Financial Analysis",
          "Risk Management",
          "Accounting",
          "Tax Planning",
        ],
      },
      {
        name: "Marketing",
        topics: [
          "Digital Marketing",
          "Content Marketing",
          "SEO",
          "Social Media Marketing",
          "Email Marketing",
          "Branding",
          "Market Research",
          "PPC",
          "Affiliate Marketing",
          "Marketing Strategy",
        ],
      },
      {
        name: "Management",
        topics: [
          "Project Management",
          "Leadership",
          "Team Management",
          "Strategic Planning",
          "Operational Management",
          "Performance Management",
          "Change Management",
          "Conflict Resolution",
          "Decision Making",
          "Time Management",
        ],
      },
      {
        name: "Sales",
        topics: [
          "Sales Techniques",
          "Customer Relationship Management",
          "Sales Strategy",
          "Lead Generation",
          "Negotiation",
          "Sales Presentations",
          "Closing Sales",
          "Retail Sales",
          "B2B Sales",
          "Inside Sales",
        ],
      },
      {
        name: "Human Resources",
        topics: [
          "Recruitment",
          "Employee Relations",
          "Performance Management",
          "Training and Development",
          "Compensation and Benefits",
          "HR Analytics",
          "Labor Law",
          "Workforce Planning",
          "Diversity and Inclusion",
          "Employee Engagement",
        ],
      },
      {
        name: "Operations",
        topics: [
          "Supply Chain Management",
          "Logistics",
          "Quality Management",
          "Process Improvement",
          "Inventory Management",
          "Operations Strategy",
          "Lean Operations",
          "Six Sigma",
          "Production Planning",
          "Facilities Management",
        ],
      },
      {
        name: "Economics",
        topics: [
          "Microeconomics",
          "Macroeconomics",
          "Economic Policy",
          "International Trade",
          "Economic Theory",
          "Behavioral Economics",
          "Econometrics",
          "Development Economics",
          "Environmental Economics",
          "Health Economics",
        ],
      },
      {
        name: "Real Estate",
        topics: [
          "Real Estate Investment",
          "Property Management",
          "Real Estate Law",
          "Commercial Real Estate",
          "Residential Real Estate",
          "Real Estate Development",
          "Appraisal",
          "Mortgage Financing",
          "Property Valuation",
          "Real Estate Marketing",
        ],
      },
      {
        name: "Customer Service",
        topics: [
          "Customer Experience",
          "Customer Support",
          "Customer Satisfaction",
          "Customer Feedback",
          "Call Center Management",
          "Help Desk Management",
          "Customer Retention",
          "Complaint Handling",
          "Service Quality",
          "Customer Success",
        ],
      },
    ],
  },
  {
    name: "Design",
    subcategories: [
      {
        name: "Graphic Design",
        topics: [
          "Adobe Illustrator",
          "Photoshop",
          "Typography",
          "Logo Design",
          "Branding",
          "Print Design",
          "Color Theory",
          "Illustration",
          "Packaging Design",
          "Infographics",
        ],
      },
      {
        name: "UX/UI Design",
        topics: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Usability Testing",
          "Interaction Design",
          "Visual Design",
          "Information Architecture",
          "Design Thinking",
          "User Flows",
          "Accessibility",
        ],
      },
      {
        name: "Web Design",
        topics: [
          "Responsive Design",
          "HTML/CSS",
          "Web Typography",
          "UI Kits",
          "Bootstrap",
          "Grid Systems",
          "Web Layouts",
          "Design Systems",
          "Web Animation",
          "Web Accessibility",
        ],
      },
      {
        name: "3D Design",
        topics: [
          "3D Modeling",
          "Rendering",
          "Animation",
          "Blender",
          "Maya",
          "3ds Max",
          "Cinema 4D",
          "SketchUp",
          "ZBrush",
          "Substance Painter",
        ],
      },
      {
        name: "Motion Graphics",
        topics: [
          "After Effects",
          "Motion Design",
          "2D Animation",
          "Video Editing",
          "Visual Effects",
          "Title Design",
          "Compositing",
          "Kinetic Typography",
          "Explainer Videos",
          "Broadcast Design",
        ],
      },
      {
        name: "Interior Design",
        topics: [
          "Space Planning",
          "Furniture Design",
          "Lighting Design",
          "Color Schemes",
          "Residential Design",
          "Commercial Design",
          "CAD",
          "3D Rendering",
          "Design Trends",
          "Sustainable Design",
        ],
      },
      {
        name: "Fashion Design",
        topics: [
          "Fashion Illustration",
          "Pattern Making",
          "Sewing Techniques",
          "Textile Design",
          "Fashion Marketing",
          "Trend Forecasting",
          "Fashion Photography",
          "Fashion Technology",
          "Fashion History",
          "Fashion Styling",
        ],
      },
      {
        name: "Industrial Design",
        topics: [
          "Product Design",
          "Design Sketching",
          "CAD",
          "3D Printing",
          "Materials and Manufacturing",
          "Ergonomics",
          "Design for Manufacturing",
          "Prototype Development",
          "User-Centered Design",
          "Design Strategy",
        ],
      },
      {
        name: "Architectural Design",
        topics: [
          "Building Design",
          "Sustainable Architecture",
          "Urban Planning",
          "Architectural Drawing",
          "Building Information Modeling (BIM)",
          "Structural Systems",
          "Landscape Architecture",
          "Interior Architecture",
          "Historic Preservation",
          "Construction Management",
        ],
      },
      {
        name: "Game Design",
        topics: [
          "Game Mechanics",
          "Level Design",
          "Character Design",
          "Storytelling",
          "Game Engines",
          "3D Modeling",
          "Animation",
          "User Experience",
          "Prototyping",
          "Game Production",
        ],
      },
    ],
  },
  {
    name: "Health & Fitness",
    subcategories: [
      {
        name: "Nutrition",
        topics: [
          "Healthy Eating",
          "Diet Plans",
          "Supplements",
          "Vitamins",
          "Nutritional Counseling",
          "Meal Planning",
          "Sports Nutrition",
          "Nutrition for Special Populations",
          "Nutrition Research",
          "Nutrition Coaching",
        ],
      },
      {
        name: "Exercise",
        topics: [
          "Yoga",
          "Strength Training",
          "Cardio",
          "Pilates",
          "HIIT",
          "Functional Training",
          "Flexibility Training",
          "CrossFit",
          "Group Fitness",
          "Exercise Physiology",
        ],
      },
      {
        name: "Mental Health",
        topics: [
          "Stress Management",
          "Meditation",
          "Mindfulness",
          "Therapy",
          "Counseling",
          "Psychology",
          "Behavioral Therapy",
          "Emotional Intelligence",
          "Mental Health Disorders",
          "Self-care",
        ],
      },
      {
        name: "Sports",
        topics: [
          "Sport Psychology",
          "Coaching",
          "Athletic Training",
          "Sports Medicine",
          "Sports Nutrition",
          "Sports Injuries",
          "Team Sports",
          "Individual Sports",
          "Exercise Physiology",
          "Performance Enhancement",
        ],
      },
      {
        name: "Wellness",
        topics: [
          "Holistic Health",
          "Alternative Medicine",
          "Mind-Body Connection",
          "Wellness Coaching",
          "Self-improvement",
          "Personal Development",
          "Spirituality",
          "Lifestyle Design",
          "Health Education",
          "Healthy Habits",
        ],
      },
      {
        name: "Public Health",
        topics: [
          "Epidemiology",
          "Health Policy",
          "Global Health",
          "Environmental Health",
          "Health Promotion",
          "Community Health",
          "Health Equity",
          "Healthcare Systems",
          "Public Health Interventions",
          "Infectious Diseases",
        ],
      },
      {
        name: "Physical Therapy",
        topics: [
          "Rehabilitation",
          "Manual Therapy",
          "Orthopedic Physical Therapy",
          "Sports Physical Therapy",
          "Geriatric Physical Therapy",
          "Pediatric Physical Therapy",
          "Neurological Physical Therapy",
          "Cardiovascular Physical Therapy",
          "Pain Management",
          "Physical Therapy Techniques",
        ],
      },
      {
        name: "Fitness Technology",
        topics: [
          "Wearable Technology",
          "Fitness Apps",
          "Health Monitoring Devices",
          "Smart Gym Equipment",
          "Virtual Reality Fitness",
          "Fitness Tracking",
          "Biomechanics",
          "Exercise Physiology",
          "Biofeedback",
          "Sports Analytics",
        ],
      },
      {
        name: "Health Education",
        topics: [
          "Health Literacy",
          "Patient Education",
          "School Health Programs",
          "Community Health Education",
          "Health Communication",
          "Health Education Curriculum",
          "Health Behavior Change",
          "Health Education Research",
          "Health Education Policy",
          "Digital Health Education",
        ],
      },
      {
        name: "Occupational Health",
        topics: [
          "Workplace Safety",
          "Occupational Medicine",
          "Industrial Hygiene",
          "Ergonomics",
          "Occupational Health Psychology",
          "Occupational Health Regulations",
          "Employee Wellness Programs",
          "Workplace Health Promotion",
          "Occupational Health Surveillance",
          "Occupational Health Management",
        ],
      },
    ],
  },
];

const NavLinks = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleCategoryMouseEnter = (categoryName) => {
    setActiveCategory(categoryName);
    setActiveSubcategory(null); // Reset subcategory when a new category is hovered
  };

  const handleSubcategoryMouseEnter = (subcategoryName) => {
    setActiveSubcategory(subcategoryName);
  };

  const renderCategories = () => {
    return (
      <div className="border-r border-gray-400 px-6 py-2 min-w-60">
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
              onMouseEnter={() => handleCategoryMouseEnter(category.name)}
              className={`py-2 ${
                activeCategory === category.name ? "font-bold" : ""
              }`}
            >
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-base font-semibold hover:text-[#800020] hover:underline">
                    {category.name}
                  </h1>
                </div>
                <div className=" pl-10 pt-1">
                  <IoIosArrowForward />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderSubcategories = () => {
    const activeCategoryData = categories.find(
      (cat) => cat.name === activeCategory
    );

    if (!activeCategoryData) return null;

    return (
      <div className="border-r border-gray-400 pr-6 py-2 min-w-60">
        <ul>
          {activeCategoryData.subcategories.map((subcategory) => (
            <li
              key={subcategory.name}
              onMouseEnter={() => handleSubcategoryMouseEnter(subcategory.name)}
              className={`py-2 ${
                activeSubcategory === subcategory.name ? "font-bold" : ""
              }`}
            >
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-base font-semibold hover:text-[#800020] hover:underline">
                    {subcategory.name}
                  </h1>
                </div>
                <div className=" pl-10 pt-1">
                  <IoIosArrowForward />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderTopics = () => {
    const activeCategoryData = categories.find(
      (cat) => cat.name === activeCategory
    );

    if (!activeCategoryData || !activeSubcategory) return null;

    const activeSubcategoryData = activeCategoryData.subcategories.find(
      (sub) => sub.name === activeSubcategory
    );

    if (!activeSubcategoryData) return null;

    return (
      <div className=" min-w-60 py-4">
        <h1 className="text-xl font-semibold pb-2">Topics</h1>
        <ul>
          {activeSubcategoryData.topics.map((topic) => (
            <li key={topic} className="py-1">
              <Link
                to={`/${topic.replace(/\s+/g, "-").toLowerCase()}`}
                className="hover:underline text-base font-semibold"
              >
                {topic}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="px-3 text-left md:cursor-pointer group">
      <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 group">
        Categories
      </h1>

      <div className="absolute top-20 hidden group-hover:md:block hover:md:block ">
        <div className="bg-white border border-gray-400 mt-6   flex space-x-6 min-h-96">
          {renderCategories()}
          {renderSubcategories()}
          {renderTopics()}
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
