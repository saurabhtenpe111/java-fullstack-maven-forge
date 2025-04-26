
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    const printContent = document.getElementById('resume-content');
    
    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Saurabh Tenpe - Resume</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; max-width: 1000px; margin: 0 auto; }
                h1 { font-size: 24px; margin-bottom: 5px; color: #1a1f2c; }
                h2 { font-size: 18px; margin-top: 15px; margin-bottom: 10px; color: #7E69AB; border-bottom: 2px solid #9b87f5; padding-bottom: 5px; }
                h3 { font-size: 16px; margin-bottom: 5px; color: #403E43; }
                p, ul { margin: 5px 0; }
                ul { padding-left: 20px; }
                .contact-info { margin-bottom: 15px; color: #666; }
                .section { margin-bottom: 20px; }
                .project { margin-bottom: 15px; }
                .date { color: #666; font-style: italic; }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        
        printWindow.document.close();
        printWindow.focus();
        
        setTimeout(() => {
          printWindow.print();
        }, 250);

        toast({
          title: "Download initiated",
          description: "Your resume is ready to download as PDF"
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div id="resume-content" className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-8 border-b bg-gradient-to-r from-purple-100 to-pink-50">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Saurabh Tenpe</h1>
          <div className="text-gray-600 space-y-1">
            <p>Pune, Maharashtra • 8390488947</p>
            <p>saurabhtenpe1011@gmail.com • linkedin.com/in/saurabhtenpe</p>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-4 text-purple-900">JAVA FULL STACK DEVELOPER</h2>
          <p className="text-gray-600 mt-2">
            Results-oriented Computer Engineering graduate with extensive knowledge in Java development, Spring Boot, and microservices architecture. Seeking a challenging Java Full Stack Developer position to apply strong technical expertise and problem-solving abilities.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Code className="h-5 w-5" />
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p><span className="font-semibold">Programming:</span> Core Java, JavaScript, Spring Boot, React.js</p>
              <p><span className="font-semibold">Testing & Build:</span> JUnit, Maven</p>
              <p><span className="font-semibold">Databases:</span> MySQL, PostgreSQL</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Tools:</span> Git, Docker, Eclipse, Postman</p>
              <p><span className="font-semibold">Web Tech:</span> HTML5, CSS3, RESTful APIs</p>
              <p><span className="font-semibold">Core Concepts:</span> Microservices, OOP, API Development</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            WORK EXPERIENCE
          </h2>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">RedBerylTech</h3>
                <p className="text-purple-700 font-medium">Java Full Stack Developer</p>
              </div>
              <p className="text-gray-600">12/2024 - Present</p>
            </div>
            <p className="text-gray-600 mb-2">Pune, Maharashtra</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Engineer critical backend components for VState platform, improving system performance by 40%</li>
              <li>Implement robust backend services using Java, Spring Boot, and microservices architecture</li>
              <li>Develop content management system with dynamic CRUD API generation</li>
              <li>Lead Agile sprint planning and execution to deliver high-quality code</li>
            </ul>
          </div>
        </div>

        {/* Professional Projects */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Code className="h-5 w-5" />
            PROFESSIONAL PROJECTS
          </h2>
          <div className="space-y-4">
            {/* Enterprise CMS */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">Enterprise Content Management System</h3>
                <span className="text-gray-600 text-sm">03/2025 - 04/2025</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>Built full-stack CMS using React.js frontend and Spring Boot backend</li>
                <li>Implemented RESTful APIs and role-based permissions system</li>
                <li>Integrated secure authentication using Spring Security and JWT</li>
              </ul>
            </div>
            
            {/* Blog System */}
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">Blog Management System</h3>
                <span className="text-gray-600 text-sm">09/2024 - 11/2024</span>
              </div>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>Developed full-stack blog platform with Spring MVC, JSP, and MySQL</li>
                <li>Implemented secure user authentication and role-based access</li>
                <li>Enhanced performance through optimized queries and caching</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                EDUCATION
              </h2>
              <div>
                <h3 className="font-semibold text-gray-900">B.Tech in Computer Engineering</h3>
                <p className="text-gray-600">Bajaj Institute of Technology • GPA: 7.68/10</p>
                <p className="text-gray-600">2020 - 2024</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                CERTIFICATIONS
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Java Full Stack Development - JSPider, Pune (12/2024)</li>
                <li>GATE Qualified - IIT (03/2024)</li>
                <li>Master Microservices with Spring Boot - Udemy (03/2024)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-b-lg">
          <Button 
            onClick={handleDownload} 
            className="w-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center"
          >
            <Download className="mr-2" size={18} />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
