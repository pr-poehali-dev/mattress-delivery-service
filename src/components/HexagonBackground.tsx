import { useEffect, useRef } from 'react';

interface Hexagon {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export default function HexagonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hexagonsRef = useRef<Hexagon[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initHexagons();
    };

    const initHexagons = () => {
      hexagonsRef.current = [];
      const cols = Math.ceil(canvas.width / 80);
      const rows = Math.ceil(canvas.height / 70);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * 80 + (row % 2) * 40;
          const y = row * 70;
          
          hexagonsRef.current.push({
            x,
            y,
            size: 25 + Math.random() * 10,
            opacity: 0.05 + Math.random() * 0.15,
            pulseSpeed: 0.001 + Math.random() * 0.002,
            pulseOffset: Math.random() * Math.PI * 2
          });
        }
      }
    };

    const drawHexagon = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(139, 92, 46, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    const drawConnections = (time: number) => {
      const hexagons = hexagonsRef.current;
      
      for (let i = 0; i < hexagons.length; i++) {
        const hex1 = hexagons[i];
        
        for (let j = i + 1; j < hexagons.length; j++) {
          const hex2 = hexagons[j];
          const dx = hex2.x - hex1.x;
          const dy = hex2.y - hex1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15 * 
              (Math.sin(time * 0.001 + hex1.pulseOffset) * 0.5 + 0.5);
            
            ctx.beginPath();
            ctx.moveTo(hex1.x, hex1.y);
            ctx.lineTo(hex2.x, hex2.y);
            ctx.strokeStyle = `rgba(139, 92, 46, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawConnections(time);
      
      hexagonsRef.current.forEach((hex) => {
        const pulseFactor = Math.sin(time * hex.pulseSpeed + hex.pulseOffset) * 0.5 + 0.5;
        const currentOpacity = hex.opacity * (0.5 + pulseFactor * 0.5);
        const currentSize = hex.size * (0.9 + pulseFactor * 0.2);
        
        drawHexagon(hex.x, hex.y, currentSize, currentOpacity);
        
        const glowOpacity = pulseFactor * hex.opacity * 2;
        if (glowOpacity > 0.1) {
          ctx.beginPath();
          ctx.arc(hex.x, hex.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(197, 147, 100, ${glowOpacity})`;
          ctx.fill();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
