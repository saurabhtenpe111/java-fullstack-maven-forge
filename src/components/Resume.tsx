
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="p-8 border-b">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Saurabh Tenpe</h1>
          <div className="text-gray-600 space-y-1">
            <p>Pune, Maharashtra • 8390488947</p>
            <p>saurabhtenpe1011@gmail.com • linkedin.com/in/saurabhtenpe</p>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">JAVA FULL STACK DEVELOPER</h2>
          <p className="text-gray-600 mt-2">
            Results-oriented Computer Engineering graduate with extensive knowledge in Java development, Spring Boot, and microservices architecture. Seeking a challenging Java Full Stack Developer position to apply strong technical expertise and problem-solving abilities in developing robust enterprise applications.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="p-8 border-b">
          <h2 className="text-xl font-bold text-gray-900 mb-4">TECHNICAL SKILLS</h2>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Programming Languages & Frameworks:</span>
              <span className="text-gray-600"> Core Java, JavaScript, Spring Boot, Spring MVC, Spring IoC, Hibernate/JPA, JSP, Servlets, React.js</span>
            </div>
            <div>
              <span className="font-semibold">Testing & Build Tools:</span>
              <span className="text-gray-600"> JUnit, Maven</span>
            </div>
            <div>
              <span className="font-semibold">Databases:</span>
              <span className="text-gray-600"> MySQL, PostgreSQL</span>
            </div>
            <div>
              <span className="font-semibold">Development Tools:</span>
              <span className="text-gray-600"> Git, Docker, Eclipse, Postman</span>
            </div>
            <div>
              <span className="font-semibold">Web Technologies:</span>
              <span className="text-gray-600"> HTML5, CSS3, Bootstrap, RESTful APIs, Prime React UI</span>
            </div>
            <div>
              <span className="font-semibold">Core Concepts:</span>
              <span className="text-gray-600"> Microservices Architecture, API Development, Multithreading, JDBC, Collections, Exception Handling, OOP</span>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="p-8 border-b">
          <h2 className="text-xl font-bold text-gray-900 mb-4">WORK EXPERIENCE</h2>
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">RedBerylTech</h3>
                <p className="text-gray-700 font-medium">Java Full Stack Developer</p>
              </div>
              <p className="text-gray-600">12/2024 - Present</p>
            </div>
            <p className="text-gray-600 mb-2">Pune, Maharashtra</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Engineer critical backend components for VState platform, improving system performance by 40%</li>
              <li>Implement robust backend services using Java, Spring Boot, and microservices architecture, reducing API response time by 30%</li>
              <li>Develop content management system with Java framework based on dynamic CRUD API generation with OpenAPI</li>
              <li>Create and maintain Content Management System functionalities with integration of AI tools</li>
              <li>Lead Agile sprint planning and execution to deliver high-quality code within project deadlines</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="p-8 border-b">
          <h2 className="text-xl font-bold text-gray-900 mb-4">EDUCATION</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900">B.Tech in Computer Engineering</h3>
              <p className="text-gray-600">Bajaj Institute of Technology • GPA: 7.68/10</p>
            </div>
            <p className="text-gray-600">2019 - 2023</p>
          </div>
        </div>

        {/* Projects */}
        <div className="p-8 border-b">
          <h2 className="text-xl font-bold text-gray-900 mb-4">PROFESSIONAL DEVELOPMENT</h2>
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">E-Commerce Microservices Application</h3>
              <p className="text-gray-600">01/2023 - 06/2023</p>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Designed and developed a full-stack e-commerce application using microservices architecture</li>
              <li>Implemented user authentication, product catalog, and order processing services with Spring Boot</li>
              <li>Created responsive frontend with React.js and integrated payment gateway APIs</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">CERTIFICATIONS</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Java Full Stack Development Course - Great Learning Academy (01/2024)</li>
            <li>GATE Qualified - Indian Institute of Technology (01/2024)</li>
            <li>Master Microservices with Spring Boot, Docker and Kubernetes - Udemy (01/2023)</li>
          </ul>
        </div>

        {/* Download Button */}
        <div className="p-8 bg-gray-50 rounded-b-lg">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
