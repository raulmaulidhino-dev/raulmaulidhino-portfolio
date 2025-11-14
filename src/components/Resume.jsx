import EducationCard from "./EducationCard.jsx";

import BobotsariSHS1Logo from "../assets/logo/education/sman1bobotsari-logo.webp";
import BobotsariSHS1Logo_fallback from "../assets/logo/education/sman1bobotsari-logo.png";

import PENS_EEPISLogo from "../assets/logo/education/PENS-EEPIS-logo.webp";
import PENS_EEPISLogo_fallback from "../assets/logo/education/PENS-EEPIS-logo.png";

export default function Resume() {
  let educations = [
    {
      schoolLogo: PENS_EEPISLogo,
      schoolLogo_fallback: PENS_EEPISLogo_fallback,
      schoolName:
        "The Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)",
      schoolWebsite: "https://pens.ac.id/",
      startYear: "2025",
      endYear: "Present",
      description:
        "I am a new student majoring in Mechatronics Engineering at this polytechnic. I'm excited to explore anything about Mechatronics, Software Engineering and Robotics. I plan to join the Software Development and Robotics Club and take part in competitions. I also hope to improve my communication and teamwork skills. I'm looking forward to graining both technical knowledge and practical experience during my studies.",
    },
    {
      schoolLogo: BobotsariSHS1Logo,
      schoolLogo_fallback: BobotsariSHS1Logo_fallback,
      schoolName: "Bobotsari Senior High School 1 (SMANSABOZZ)",
      schoolWebsite: "http://sman1bobotsari.sch.id/",
      startYear: "2022",
      endYear: "2025",
      description:
        "I've developed strong analytical and communication skills through course in Math, Science and English. Active participation in group projects and extracurricular activities has enhanced my teamwork abilities.",
    },
  ];

  let certificates = [
    {
      certificateName: "MERN Full-Stack Development Bootcamp",
      certificateImage:
        "/assets/images/certificates/MERN-Full-Stack-Web-Development.webp",
      certificateImage_fallback:
        "/assets/images/certificates/MERN-Full-Stack-Web-Development.jpg",
      certificateLink:
        "https://icecenter.itb.ac.id/en/tutor-certificate?cert_hash=aa4d715a6cbeb8b1",
      issuedBy: "Sanbercode & Non Reguler Education ITB",
      issueDate: "August 2025",
    },
    {
      certificateName: "Junior Web Programmer Competency",
      certificateImage:
        "/assets/images/certificates/Junior-Web-Programmer-Competency_BNSP.webp",
      certificateImage_fallback:
        "/assets/images/certificates/Junior-Web-Programmer-Competency_BNSP.jpg",
      certificateLink:
        "https://drive.google.com/file/d/1kh1xvsmdwU_HHgB31Nic5SXeCzhv1SX0/view?usp=sharing",
      issuedBy: "Lembaga Sertifikasi Profesi Teknologi Digital",
      issueDate: "January 2025",
    },
  ];

  let awards = [
    {
      awardName:
        "1st Place Winner of the 2024 National Science Olympiad at the Regency/City Level in Informatics",
      awardedBy: "Central Java Provincial Office of Education and Culture",
      awardDate: "October 2024",
      awardImage:
        "/assets/images/awards/Sertifikat-Juara-1-OSN-K-2024.webp",
      awardImage_fallback:
        "/assets/images/awards/Sertifikat-Juara-1-OSN-K-2024.jpg",
    },
    {
      awardName:
        "1st Place Winner of the 2023 National Science Olympiad at the Regency/City Level in Informatics",
      awardedBy: "Central Java Provincial Office of Education and Culture",
      awardDate: "May 2023",
      awardImage:
        "/assets/images/awards/Sertifikat-Juara-1-OSN-K-2023.webp",
      awardImage_fallback:
        "/assets/images/awards/Sertifikat-Juara-1-OSN-K-2023.jpg",
    }
  ];

  return (
    <section id="resume" className="flex flex-col gap-8 px-10 py-[6rem]">
      <h2
        className="text-neon-cyan font-extrabold text-center text-5xl font-special md:text-6xl mb-10"
        data-aos="zoom-in"
      >
        RESUME
      </h2>
      <section className="education">
        <h3
          className="text-xl md:text-3xl font-bold mb-[1em]"
          data-aos="zoom-in"
        >
          EDUCATION
        </h3>
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] [grid-gap:1.25rem;]">
          {educations.map((education, index) => (
            <EducationCard
              key={index}
              schoolName={education.schoolName}
              startYear={education.startYear}
              endYear={education.endYear}
              description={education.description}
              schoolLogo={education.schoolLogo}
              schoolLogo_fallback={education.schoolLogo_fallback}
              schoolWebsite={education.schoolWebsite}
            />
          ))}
        </section>
      </section>
      {/* Certifications */}
      <section className="certificates mt-16">
        <h3
          className="text-xl md:text-3xl font-bold mb-[1em]"
          data-aos="zoom-in"
        >
          CERTIFICATIONS
        </h3>
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] [grid-gap:1.25rem;]">
          {certificates.map((certificate, index) => (
            <a
              key={index}
              href={certificate.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card border border-gray-700 rounded-lg p-4 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
            >
              <picture>
                <source
                  srcSet={certificate.certificateImage}
                  type="image/webp"
                />
                <img
                  src={certificate.certificateImage_fallback}
                  alt={certificate.certificateName}
                  className="w-full h-auto mb-4 rounded aspect-[4/3] object-cover object-top"
                />
              </picture>
              <h4 className="text-lg font-semibold mb-2">
                {certificate.certificateName}
              </h4>
              <p className="text-gray-400 mb-1">
                Issued by <strong>{certificate.issuedBy}</strong>
              </p>
              <p className="text-gray-400">
                In <strong>{certificate.issueDate}</strong>
              </p>
            </a>
          ))}
        </section>
      </section>
      {/* Awards */}
      <section className="awards mt-16">
        <h3
          className="text-xl md:text-3xl font-bold mb-[1em]"
          data-aos="zoom-in"
        >
          AWARDS
        </h3>
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] [grid-gap:1.25rem;]">
          {awards.map((award, index) => (
            <div
              key={index}
              className="award-card border border-gray-700 rounded-lg p-4 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
            >
              <picture>
                <source srcSet={award.awardImage} type="image/webp" />
                <img
                  src={award.awardImage_fallback}
                  alt={award.awardName}
                  className="w-full h-auto mb-4 rounded aspect-[4/3] object-cover"
                />
              </picture>
              <h4 className="text-lg font-semibold mb-2">{award.awardName}</h4>
              <p className="text-gray-400 mb-1">
                Awarded by <strong>{award.awardedBy}</strong>
              </p>
              <p className="text-gray-400">
                In <strong>{award.awardDate}</strong>
              </p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
