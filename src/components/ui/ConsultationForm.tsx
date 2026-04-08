import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface ConsultationFormProps {
  variant?: "default" | "minimal";
  ambiente?: string;
}

export const ConsultationForm = ({ variant = "default", ambiente }: ConsultationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Richiesta inviata!", {
        description: "Ti contatteremo entro 24 ore.",
      });
    }, 1500);
  };

  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input 
              placeholder="Nome e Cognome *" 
              required 
              className="bg-background"
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Email *" 
              required 
              className="bg-background"
            />
          </div>
        </div>
        <div>
          <Input 
            type="tel" 
            placeholder="Telefono" 
            className="bg-background"
          />
        </div>
        <div>
          <Textarea 
            placeholder="Come possiamo aiutarti?" 
            rows={3}
            className="bg-background resize-none"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Invio in corso..." : "Richiedi Consulenza Gratuita"}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome e Cognome *</Label>
          <Input 
            id="name"
            placeholder="Mario Rossi" 
            required 
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input 
            id="email"
            type="email" 
            placeholder="mario@esempio.it" 
            required 
            className="bg-background"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefono</Label>
          <Input 
            id="phone"
            type="tel" 
            placeholder="+39 333 123 4567" 
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ambiente">Ambiente di interesse</Label>
          <Select defaultValue={ambiente}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Seleziona ambiente" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cucina">Cucina</SelectItem>
              <SelectItem value="bagno">Bagno</SelectItem>
              <SelectItem value="soggiorno">Soggiorno</SelectItem>
              <SelectItem value="camera">Camera</SelectItem>
              <SelectItem value="living">Living</SelectItem>
              <SelectItem value="altro">Altro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Il tuo progetto</Label>
        <Textarea 
          id="message"
          placeholder="Raccontaci il tuo progetto, le tue esigenze e i tuoi desideri..."
          rows={5}
          className="bg-background resize-none"
        />
      </div>
      
      <Button 
        type="submit" 
        size="lg"
        className="w-full md:w-auto bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Invio in corso..." : "Prenota la Tua Consulenza Gratuita"}
      </Button>
      
      <p className="text-sm text-muted-foreground">
        * Campi obbligatori. I tuoi dati saranno trattati nel rispetto della privacy.
      </p>
    </form>
  );
};
