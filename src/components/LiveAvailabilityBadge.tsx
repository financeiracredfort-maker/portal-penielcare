import { useState, useEffect } from "react";

const LiveAvailabilityBadge = () => {
  const [lastCall, setLastCall] = useState(3);

  useEffect(() => {
    // Simulate random last call updates
    const interval = setInterval(() => {
      setLastCall(Math.floor(Math.random() * 10) + 1);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary/10 border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 py-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="font-semibold text-secondary">Equipe disponível agora</span>
          </div>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <span className="hidden sm:inline text-muted-foreground">
            Última ligação: <span className="font-medium text-foreground">{lastCall} min atrás</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveAvailabilityBadge;
