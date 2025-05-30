import React from "react";
import CertificateCard from "./CertificateCard";

// Updated paths to match your exact public directory structure
const ExcelImg = "/assets/CertificatesPhotos/Excel Mother of Business Intelligence.jpg";
const pythonImg = "/assets/CertificatesPhotos/Python_basic.png";
const SQLImg = "/assets/CertificatesPhotos/SQL_basic.png";
const Software_engineerImag = "/assets/CertificatesPhotos/Software_engineer.png";
const JavaScriptImg = "/assets/CertificatesPhotos/JavaScript_basic.png";

const certificates = [
  {
    image: ExcelImg,
    title: "Excel: Mother of Business Intelligence",
    description:
      "Awarded for mastering Excel tools used in business intelligence, data analysis, and automation.",
    verifyLink: "https://codebasics.io/certificate/CB-51-276135",
  },
  {
    image: pythonImg,
    title: "Python Programming Certificate From HackerRank",
    description:
      "Certified for fundamental knowledge in Python including loops, functions, and problem-solving.",
    verifyLink: "https://www.hackerrank.com/certificates/62d12db16ea8",
  },
  {
    image: SQLImg,
    title: "SQL Basic Certificate from HackerRank",
    description:
      "Verified SQL skills including SELECT, JOIN, GROUP BY, and aggregate functions.",
    verifyLink: "https://www.hackerrank.com/certificates/7589c28a7ce4",
  },
  {
    image: Software_engineerImag,
    title: "Software Engineering Intern Certificate from HackerRank",
    description:
      "Completed internship program covering software design, development, and testing methodologies.",
    verifyLink: "https://www.hackerrank.com/certificates/78d1fd1162f1",
  },
  {
    image: Software_engineerImag,
    title: "Software Engineering Intern Certificate from HackerRank",
    description:
      "Completed internship program covering software design, development, and testing methodologies.",
    verifyLink: "https://www.hackerrank.com/certificates/78d1fd1162f1",
  },
  {
    image: Software_engineerImag,
    title: "Software Engineering Intern Certificate from HackerRank",
    description:
      "Completed internship program covering software design, development, and testing methodologies.",
    verifyLink: "https://www.hackerrank.com/certificates/78d1fd1162f1",
  },
  {
    image: JavaScriptImg,
    title: "JavaScript Basic Certificate from HackerRank",
    description:
      "Certified for fundamental knowledge in JavaScript including loops, functions, and problem-solving.",
    verifyLink: "https://www.hackerrank.com/certificates/4b60888b4be2",
  },
];

const CertificateGallery = () => {
  return (
    <div id="Certificates" className="p-10 mt-0 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">
        Awards & Certificates.
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mt-8 ml-12">
        {certificates.map((cert, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <CertificateCard
              image={cert.image}
              title={cert.title}
              description={cert.description}
              verifyLink={cert.verifyLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;