import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ 
  title, 
  description, 
  technologies = [], 
  status, 
  url 
}) {
  return (
    <div className="group relative w-full h-full p-6 border border-terminal-green/30 bg-terminal-darker hover:border-terminal-green hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-300 flex flex-col">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-terminal-green"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-terminal-green"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-terminal-green"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-terminal-green"></div>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-terminal-green flex items-center gap-2">
          <span className="text-terminal-green/50">{'>'}</span> {title}
        </h3>
        {status && (
          <span className={`text-xs px-2 py-1 uppercase tracking-wider ${status === 'Ativo' ? 'bg-terminal-green text-terminal-darker' : 'bg-terminal-border text-terminal-green'}`}>
            [{status}]
          </span>
        )}
      </div>
      
      <p className="text-terminal-green/80 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 border border-terminal-green/20 text-terminal-green/70 bg-terminal-green/5"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold text-terminal-green hover:text-white hover:underline flex items-center gap-2"
          >
            [ACESSAR SISTEMA] <span className="animate-pulse">_</span>
          </a>
        )}
      </div>
    </div>
  );
}
