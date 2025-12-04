import Image from "next/image";
import { FaPython, FaDatabase, FaRProject } from "react-icons/fa";
import { SiApachespark, SiGooglebigquery, SiRadstudio } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Reduced size */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-light text-gray-800 mb-8 tracking-wide">
              Data Analyst & MS in Data Analytics Graduate from Oregon State University
            </p>
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Photo */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
            <span className="text-gray-50">
              About Me
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo Section */}
              <div className="w-full md:w-1/3">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Austin Snyder"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                    quality={85}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/3">
                <p className="text-gray-600 mb-8 flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  Hello! I&apos;m a recent MS in Data Analytics graduate from Oregon State University, with a background in Psychology and minors in Statistics and Business Administration. My academic journey sharpened my ability to think critically about data, behavior, and systems, and fueled my passion for solving problems through analytics.
                </p>
                <p className="text-gray-600 mb-8 flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  Most recently, I worked as a Data Analyst at DaBella, where I collaborated with HR and Recruiting teams to build dashboards, automate systems, and unify data pipelines across 36+ markets. From building PostgreSQL databases to using Tableau for reporting, I helped drive strategic hiring decisions, improve retention, and streamline data workflows across departments.
                </p>
                <p className="text-gray-600 mb-8 flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  I&apos;m currently seeking my next opportunity to apply and expand my data science skills. I&apos;m especially motivated by roles where I can contribute to solving meaningful problems, learn from others, and keep growing technically!
                </p>
                <p className="text-gray-600 mb-8 flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  Outside of work, I love to cook, experiment with new recipes, and stay active.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UFC Model Project */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">UFC Match Prediction Model</h3>
              <p className="text-gray-600 mb-4">
                Machine learning models to predict UFC fight outcomes using historical data and statistical features. Achieved 67.4% test accuracy with Random Forest.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <SiRadstudio className="w-4 h-4" />
                  <span>R Studio</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <FaRProject className="w-4 h-4" />
                  <span>R</span>
                </div>
              </div>
              <a
                href="https://austinsnyd.github.io/ufc-model-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project →
              </a>
            </div>

            {/* UFC Scraper Project */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">UFC Data Scraper</h3>
              <p className="text-gray-600 mb-4">
                Automated extraction of UFC fight statistics using Selenium and Python. Features data organization in multiple formats and Google BigQuery integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <FaPython className="w-4 h-4" />
                  <span>Python</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <FaDatabase className="w-4 h-4" />
                  <span>SQL</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <SiApachespark className="w-4 h-4" />
                  <span>PySpark</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <SiGooglebigquery className="w-4 h-4" />
                  <span>BigQuery</span>
                </div>
              </div>
              <a
                href="https://austinsnyd.github.io/UFC-Scraper/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project →
              </a>
            </div>

            {/* Crash Data Project */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">NZ Crash Data Analysis</h3>
              <p className="text-gray-600 mb-4">
                Analysis of New Zealand road crash data using Poisson and Negative Binomial regression to evaluate crash risk patterns.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <SiRadstudio className="w-4 h-4" />
                  <span>R Studio</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <FaRProject className="w-4 h-4" />
                  <span>R</span>
                </div>
              </div>
              <a
                href="https://austinsnyd.github.io/crash-data-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <a
                href="mailto:austinsnyder.bend@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                austinsnyder.bend@gmail.com
              </a>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/austinsnyd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/austin-snyder-researcher/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
