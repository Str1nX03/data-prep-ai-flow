import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'absolute pointer-events-none rounded-full animate-ping';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.marginLeft = '-10px';
      ripple.style.marginTop = '-10px';
      ripple.style.background = 'radial-gradient(circle, hsla(210, 100%, 50%, 0.6) 0%, transparent 70%)';
      
      container.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        if (container.contains(ripple)) {
          container.removeChild(ripple);
        }
      }, 1000);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Morphing blobs */}
      <div className="morphing-blob w-96 h-96 top-20 left-10" />
      <div className="morphing-blob w-64 h-64 top-40 right-20" style={{ animationDelay: '2s' }} />
      <div className="morphing-blob w-80 h-80 bottom-20 left-1/3" style={{ animationDelay: '4s' }} />
      
      {/* Gradient overlays */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 80%, hsla(210, 100%, 50%, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(240, 100%, 60%, 0.15) 0%, transparent 50%)'
        }}
      />
    </div>
  );
};

export default InteractiveBackground;