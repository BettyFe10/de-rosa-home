import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  project: string;
  image?: string;
}

export const TestimonialCard = ({ quote, author, project, image }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-8 h-full">
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-tortora mb-6" />
      
      {/* Quote */}
      <blockquote className="text-foreground body-large mb-8 leading-relaxed">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <img 
            src={image} 
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-tortora-light flex items-center justify-center">
            <span className="font-display font-semibold text-foreground">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-display font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{project}</p>
        </div>
      </div>
    </div>
  );
};
