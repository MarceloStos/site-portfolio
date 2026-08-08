import { ProjectCard } from './components/ProjectCard'
import { Terminal, MonitorPlay, Code2, Server, Globe, Mail } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-terminal-dark text-terminal-green crt relative selection:bg-terminal-green selection:text-terminal-dark">
      <div className="scanlines"></div>
      <div className="vignette"></div>
      
      {/* Navbar / Topbar */}
      <nav className="fixed top-0 w-full z-40 bg-terminal-dark/90 border-b border-terminal-green/30 backdrop-blur-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Terminal size={24} className="animate-pulse" />
            <span>marcelo@portfolio:~$</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#inicio" className="hover:text-white transition-colors hover:underline">./início</a>
            <a href="#sobre" className="hover:text-white transition-colors hover:underline">./sobre</a>
            <a href="#projetos" className="hover:text-white transition-colors hover:underline">./projetos</a>
            <a href="#contato" className="hover:text-white transition-colors hover:underline">./contato</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 max-w-6xl mx-auto px-4 z-10 relative">
        
        {/* Hero Section */}
        <section id="inicio" className="min-h-[70vh] flex flex-col justify-center mb-16">
          <div className="space-y-4">
            <p className="text-terminal-green/70">
              <span className="text-white">root@system:</span><span className="text-blue-400">~</span>$ whoami
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Desenvolvedor de Software <span className="animate-pulse">_</span>
            </h1>
            <p className="max-w-2xl text-terminal-green/80 text-lg leading-relaxed mb-8">
              &gt; Olá, eu sou Marcelo Santos. Sou Desenvolvedor de sistemas Jr e estudante de Ciência da Computação (UFS). 
              Com mais de 2 anos de experiência prática construindo sistemas na Companhia de Saneamento de Sergipe (DESO), meu foco é transformar regras de negócio complexas em APIs robustas e escaláveis. 
              Minha stack principal transita entre Java, PHP e C#, sempre guiado por princípios de Clean Code, SOLID e cultura DevOps.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#projetos" className="bg-terminal-green text-terminal-dark px-6 py-2 font-bold hover:bg-white transition-colors">
                [ VER PROJETOS ]
              </a>
              <a href="#contato" className="border border-terminal-green px-6 py-2 hover:bg-terminal-green/10 transition-colors">
                [ CONTATAR ]
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section (JSON Style) */}
        <section id="sobre" className="mb-24">
          <div className="flex items-center gap-2 mb-8 border-b border-terminal-green/30 pb-2">
            <Code2 className="text-terminal-green" />
            <h2 className="text-2xl font-bold">./habilidades.json</h2>
          </div>
          <div className="bg-terminal-darker border border-terminal-green/30 p-6 rounded-none">
            <pre className="text-sm md:text-base overflow-x-auto text-terminal-green/90">
              <code>{`{
  "frontend": ["React", "TailwindCSS"],
  "backend": ["Java", PHP, "C#"],
  "database": ["PostgreSQL", "SQL Server", "MySQL""],
  "devops": ["Docker", "RabbitMQ", "CI/CD", "Linux"],
  "status": "Always Learning"
}`}</code>
            </pre>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="mb-24">
          <div className="flex items-center gap-2 mb-8 border-b border-terminal-green/30 pb-2">
            <MonitorPlay className="text-terminal-green" />
            <h2 className="text-2xl font-bold">ls -la ./projetos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="CSM (Central de Sistemas de Marcelo)"
              description="É um provedor de Identity and Access Management (IAM) de código aberto, construído para atuar como o coração da segurança em um ecossistema corporativo de microsserviços."
              technologies={["Java", "SpringBoot", "Docker", "PostgreSQL"]}
              status="Ativo"
              url="https://github.com/MarceloStos/CSM"
            />
            
            <ProjectCard 
              title="HelpInvest Dashboard"
              description="Dashboard financeiro com integração em tempo real com a Brapi API, apresentando indicadores fundamentalistas e sincronização em background."
              technologies={["C#", "ASP.NET Core", "Blazor", "SQL Server"]}
              status="Dev"
              url="#"
            />

            <ProjectCard 
              title="Sistema de Pagamentos"
              description="Microsserviço de pagamentos de alta escalabilidade. Responsável pelo processamento de transações e integração com gateways."
              technologies={["Java 17", "SpringBoot", "RabbitMQ"]}
              status="Análise"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="mb-12">
          <div className="flex items-center gap-2 mb-8 border-b border-terminal-green/30 pb-2">
            <Server className="text-terminal-green" />
            <h2 className="text-2xl font-bold">ping -c 4 contato</h2>
          </div>
          <div className="border border-terminal-green p-6 max-w-2xl">
            <p className="mb-6">Connection established. Awaiting signals...</p>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/marcelostos" className="flex items-center gap-3 hover:text-white transition-colors">
                <Code2 size={20} /> github.com/marcelostos
              </a>
              <a href="https://www.linkedin.com/in/marcelostoscrz" className="flex items-center gap-3 hover:text-white transition-colors">
                <Globe size={20} /> linkedin.com/in/marcelostoscrz
              </a>
              <a href="mailto:marcelostos.dev@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={20} /> Enviar email diretamente
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-terminal-green/30 bg-terminal-darker p-4 text-center text-sm text-terminal-green/60 z-10 relative">
        <p>SYSTEM.HALTED // Desenvolvido no terminal // © 2026</p>
      </footer>
    </div>
  )
}

export default App