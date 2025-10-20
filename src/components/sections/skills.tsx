import { SKILLS } from "@/components/constants/data";
import Image from "next/image";

// This object remains the same, it's the mapping of skill name to icon name
const SKILL_ICONS: Record<string, string> = {
  HTML: "html",
  CSS: "css",
  JavaScript: "js",
  TypeScript: "ts",
  React: "react",
  "Next.js": "nextjs",
  "Vue.js": "vue",
  Angular: "angular",
  Redux: "redux",
  TailwindCSS: "tailwind",
  Bootstrap: "bootstrap",
  Sass: "sass",
  Less: "less",
  jQuery: "jquery",
  "Node.js": "nodejs",
  "Express.js": "express",
  NestJS: "nestjs",
  Django: "django",
  Flask: "flask",
  "Spring Boot": "spring",
  "Ruby on Rails": "rails",
  Laravel: "laravel",
  "ASP.NET": "dotnet",
  FastAPI: "fastapi",
  MongoDB: "mongodb",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  SQLite: "sqlite",
  Redis: "redis",
  Firebase: "firebase",
  Supabase: "supabase",
  C: "c",
  "C++": "cpp",
  "C#": "cs",
  Java: "java",
  Python: "py",
  Go: "go",
  Rust: "rust",
  Ruby: "ruby",
  PHP: "php",
  Kotlin: "kotlin",
  Swift: "swift",
  Dart: "dart",
  Scala: "scala",
  AWS: "aws",
  Azure: "azure",
  GCP: "gcp",
  Docker: "docker",
  Kubernetes: "kubernetes",
  Vercel: "vercel",
  Netlify: "netlify",
  Heroku: "heroku",
  "GitHub Actions": "githubactions",
  Jenkins: "jenkins",
  "VS Code": "vscode",
  Git: "git",
  GitHub: "github",
  GitLab: "gitlab",
  Bitbucket: "bitbucket",
  Postman: "postman",
  Figma: "figma",
  Vite: "vite",
  Webpack: "webpack",
  Babel: "babel",
  Prometheus: "prometheus", 
  // Swagger: "swagger",       
  // Consul: "consul",
  Jest: "jest",
  Cypress: "cypress",
  Linux: "linux",
  Windows: "windows",
  MacOS: "apple",
};

// This component for a single skill badge remains the same
const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-2 py-1 text-sm badge text-foreground flex items-center gap-2">
    {SKILL_ICONS[skill] && (
      <Image
        src={`https://skillicons.dev/icons?i=${SKILL_ICONS[skill]}`}
        alt={`${skill} icon`}
        width={16}
        height={16}
        className="w-4 h-4"
      />
    )}
    {skill}
  </span>
);

// The main Skills component has been updated
const Skills = () => {
  return (
    <section className="py-5 border-t border-border">
      <h2 className="text-xl font-semibold mb-4">technical skills.</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;