
import { Education, Experience, Project, SkillCategory, SocialLink, Hobby } from "./types";

export const CONTACT_INFO = {
  name: "Deepu Krishnareddy",
  title: "AI/ML Engineer & Research Associate",
  email: "deepukreddy007@gmail.com",
  phone: "+49 174 2500937",
  location: "Freiburg, Germany",
  summary: "Passionate AI/ML Engineer bridging the gap between research and application. Specialized in Computer Vision, Human-Robot Interaction, and Generative AI with a strong foundation in Embedded Systems."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/deepukr", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/deepukr007", icon: "github" },
  { platform: "Email", url: "mailto:deepukreddy007@gmail.com", icon: "mail" }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "Javascript", "C"]
  },
  {
    name: "Machine Learning",
    skills: ["PyTorch", "Scikit-learn", "Transformers", "OpenCV", "NumPy", "Deep Learning", "Computer Vision"]
  },
  {
    name: "GenAI & LLMs",
    skills: ["LangChain", "Agno", "Vector Databases", "Prompt Engineering", "RAG", "Florence-2", "GPT-4o API"]
  },
  {
    name: "Web Development",
    skills: ["React", "FastAPI", "Flask", "REST API", "Mulesoft"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Git", "MLFlow (MLOps)", "Github Actions (CI/CD)", "CVAT"]
  }
];

export const SPOKEN_LANGUAGES: SkillCategory = {
  name: "Spoken Languages",
  skills: ["English (C1)", "German (A1)", "Kannada", "Telugu"]
};

export const EXPERIENCE: Experience[] = [
  {
    id: "exp1",
    role: "Research Associate",
    company: "Reutlingen University",
    location: "Reutlingen, Germany",
    period: "Apr 2025 – Present",
    skills: ["Deep learning", "HRI", "PyTorch", "OpenCV"],
    description: [
      "Contributed to a human-robot collaboration framework combining natural language dialogue with real-time computer vision for adaptive task coordination.",
      "Created a face recognition and facial expression detection pipeline using state-of-the-art models."
    ]
  },
  {
    id: "exp2",
    role: "Research Assistant",
    company: "Fraunhofer IFF",
    location: "Magdeburg, Germany",
    period: "Nov 2023 – Sep 2024",
    skills: ["PyTorch", "OpenCV", "Object Detection", "CVAT"],
    description: [
      "Created a custom dataset for screw head detection and annotated objects using CVAT and Segment Anything Model (SAM).",
      "Trained and evaluated deep learning object detection models like Faster-RCNN, YOLOv5, YOLOv8.",
      "Increased mean Average Precision (mAP) from 0.75 to 0.88 by tackling small object detection and uneven lighting challenges."
    ]
  },
  {
    id: "exp3",
    role: "Research Assistant",
    company: "Fraunhofer IWM",
    location: "Freiburg, Germany",
    period: "July 2022 – Sep 2024",
    skills: ["Python", "Flask", "FastAPI", "Docker"],
    description: [
      "Designed a microservice API to convert JSON to RDF, enabling seamless data interoperability within a Data Space Management System.",
      "Actively contributed to various open-source projects maintained by the institute, improving software functionality and performance."
    ]
  },
  {
    id: "exp4",
    role: "Software Engineer",
    company: "Apisero (NTT Data)",
    location: "Bengaluru, India",
    period: "Sep 2020 – Oct 2021",
    skills: ["Mulesoft", "Javascript", "REST API"],
    description: [
      "Developed ETL and integration solutions for multiple clients, synchronizing data across Stripe, NetSuite, Salesforce, MySQL, and Amazon SQS.",
      "Designed and implemented scheduler-based applications to automate business processes."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Conversational AI Agent for Business Model Canvas",
    subtitle: "MongoDB, React, Prompt Engineering",
    technologies: ["React", "FastAPI", "MongoDB", "GPT-4o"],
    points: [
      "Designed a conversational AI system using GPT-4o API and tool calling to guide users in creating business model canvases.",
      "Developed a user-friendly React frontend for real-time interaction.",
      "Built a scalable FastAPI backend with MongoDB for secure chat history storage."
    ]
  },
  {
    id: "proj2",
    title: "Fine-tuning Florence-2 VLM for DocVQA",
    subtitle: "Pytorch, Transformers, Model Fine-tuning",
    technologies: ["PyTorch", "Huggingface", "Florence-2"],
    points: [
      "Fine-tuned Florence-2 large model on the Huggingface DocVQA dataset for document-based question answering.",
      "Utilized multimodal capabilities to align textual questions with visual document features."
    ]
  },
  {
    id: "proj3",
    title: "AskPDF - Chat with your PDF",
    subtitle: "RAG, Langchain, VectorDB, Python, Streamlit",
    technologies: ["RAG", "LangChain", "Ollama", "Streamlit"],
    points: [
      "Created an app allowing users to interact with PDFs via RAG.",
      "Provided options to use local LLMs (LLAMA3) or hosted LLMs (GPT-4o)."
    ]
  },
  {
    id: "proj4",
    title: "MockMaster - Dummy Data Generator",
    subtitle: "LLMs, Python, FastAPI, Docker",
    technologies: ["Python", "CLI", "JSON Schema", "PyPI"],
    link: "https://pypi.org/project/mockmaster",
    points: [
      "Published a CLI tool to generate dummy user data using LLMs.",
      "Implemented JSON Schema support for validation.",
      "Available on PyPI."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    institution: "University of Freiburg",
    degree: "M.Sc in Embedded Systems Engineering, AI/ML Specialization",
    location: "Freiburg, Germany",
    period: "Oct 2021 – Sep 2024",
    details: ["Relevant Subjects: Deep Learning, Computer Vision, AutoML, Robot Mapping"],
    grade: "1.8"
  },
  {
    id: "edu2",
    institution: "Dayananda Sagar College of Engineering",
    degree: "B.E in Electronics and Communication",
    location: "Bangalore, India",
    period: "Aug 2016 – Aug 2020",
    details: ["Relevant Subjects: C Programming, Python Programming"],
    grade: "2.0"
  }
];

export const HOBBIES: Hobby[] = [
  { name: "Hiking", icon: "mountain", description: "Exploring nature trails and mountain landscapes." },
  { name: "Food Blogging", icon: "food", description: "Discovering and sharing culinary experiences." },
  { name: "Running", icon: "running", description: "Endurance training and fitness." }
];

export const FULL_RESUME_CONTEXT = `
You are an AI assistant representing Deepu Krishnareddy. Answer questions based on his resume below.
Be professional, concise, and highlight his strengths in AI, ML, and Web Development.

Name: ${CONTACT_INFO.name}
Title: ${CONTACT_INFO.title}
Contact: ${CONTACT_INFO.email}, ${CONTACT_INFO.phone}, ${CONTACT_INFO.location}
Summary: ${CONTACT_INFO.summary}

Skills:
${SKILLS.map(s => `${s.name}: ${s.skills.join(', ')}`).join('\n')}
Languages: ${SPOKEN_LANGUAGES.skills.join(', ')}

Experience:
${EXPERIENCE.map(e => `
${e.role} at ${e.company} (${e.period})
Location: ${e.location}
Skills: ${e.skills.join(', ')}
Details:
${e.description.map(d => `- ${d}`).join('\n')}
`).join('\n')}

Projects:
${PROJECTS.map(p => `
Title: ${p.title}
Tech: ${p.technologies.join(', ')}
Details:
${p.points.map(d => `- ${d}`).join('\n')}
`).join('\n')}

Education:
${EDUCATION.map(e => `${e.degree} at ${e.institution} (${e.period}). Grade: ${e.grade}`).join('\n')}

Hobbies:
${HOBBIES.map(h => h.name).join(', ')}
`;
