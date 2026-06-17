function App() {
  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "postman",
    "Git & GitHub",
    "REST APIs",
    "FastAPI",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
    "Pinecone",
    "Mistral AI"
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Samyak</h1>

        <ul className="flex gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
      <h1 className="text-6xl font-bold mb-4">
  Samyak Sthul
</h1>
<img
  src="/profile.jpg"
  alt="Samyak"
  className="w-40 h-40 rounded-full border-4 border-white mb-6 object-cover"
/>
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center h-[80vh]"
      >
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm Samyak 👋
        </h1>

        <h2 className="text-2xl text-gray-400 mb-6">
          Java Full Stack Developer | AI Enthusiast
        </h2>

        <p className="max-w-2xl text-gray-300">
          Recently graduated Computer Science Engineer passionate about
          building web applications using Java, Spring Boot, React, and MySQL.
        </p>

        <a
  href="/Samyak_Sthul_Resume.pdf"
  download
  className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold inline-block"
>
  Download Resume
</a>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-10 bg-gray-900"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg">
          <p>
            I am a recently graduated Computer Science Engineer with
            strong skills in Full Stack Development, Java, Spring Boot,
            React.js, MySQL, Python, FastAPI, and AI-powered applications.
          </p>

          <p className="mt-6">
            I enjoy building real-world software solutions and continuously
            learning new technologies to solve practical problems.
          </p>
        </div>
      </section>
      <section className="py-20 px-10">
  <h2 className="text-4xl font-bold text-center mb-10">
    Career Objective
  </h2>

  <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg">
    Seeking an opportunity as a Java Full Stack Developer where I can
    utilize my skills in Java, Spring Boot, React.js, and database
    technologies to contribute to innovative software solutions while
    continuously enhancing my technical expertise.
  </div>
</section>

      {/* Skills */}
      <section
        id="skills"
        className="py-20 px-10"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 p-5 rounded-xl text-center font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-20 px-10 bg-gray-900"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Edu-Smart */}
          <div className="bg-black p-6 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-3">
              Edu-Smart: Study Resources Finder
            </h3>

            <p className="text-gray-400">
              AI-powered learning platform that helps students access
              Notes, Previous Year Question Papers (PYQs), smart search,
              personalized study recommendations, progress tracking, and
              an intelligent AI Study Assistant.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-800 px-3 py-1 rounded">React.js</span>
              <span className="bg-gray-800 px-3 py-1 rounded">FastAPI</span>
              <span className="bg-gray-800 px-3 py-1 rounded">MongoDB</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Pinecone</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Mistral AI</span>
              <span className="bg-gray-800 px-3 py-1 rounded">JWT</span>
            </div>
          </div>

          {/* Smart Task Manager */}
          <div className="bg-black p-6 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-3">
              Smart Task Manager
            </h3>

            <p className="text-gray-400">
              Full-stack task management application featuring secure JWT
              authentication, task creation, status tracking, task updates,
              and a responsive dashboard to improve productivity.

            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-800 px-3 py-1 rounded">Java</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Spring Boot</span>
              <span className="bg-gray-800 px-3 py-1 rounded">React.js</span>
              <span className="bg-gray-800 px-3 py-1 rounded">MySQL</span>
              <span className="bg-gray-800 px-3 py-1 rounded">JWT</span>
              <span className="bg-gray-800 px-3 py-1 rounded">REST API</span>
            </div>
            <a
  href="https://github.com/sthul06/smart-task-manager"
  target="_blank"
  rel="noreferrer"
  className="text-blue-400 mt-4 inline-block"
>
  View on GitHub →
</a>
          </div>

        </div>
      </section>
      {/* Contact Section */}
<section
  id="contact"
  className="py-20 px-10"
>
  <h2 className="text-4xl font-bold text-center mb-10">
    Contact Me
  </h2>

  <div className="max-w-3xl mx-auto text-center">

    <p className="text-gray-400 text-lg mb-6">
      I'm actively looking for opportunities as a Java Full Stack Developer.
      Feel free to connect with me.
    </p>

    <div className="flex justify-center gap-6 flex-wrap">

      <a
        href="https://github.com/sthul06"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-900 px-6 py-3 rounded-lg hover:bg-gray-700"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/samyak-sthul-b47a75284"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        LinkedIn
      </a>

      <a
        href="mailto:sthulsamyak9@gmail.com"
        className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Email Me
      </a>

    </div>
  </div>
</section>

{/* Footer */}
<footer className="border-t border-gray-800 py-6 text-center text-gray-500">
  © 2026 Samyak Sthul | Java Full Stack Developer
</footer>

    </div>
    
  );
  
}

export default App;