import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
}

interface MousePosition {
  x: number;
  y: number;
}

interface NodeBackgroundProps {
  speed?: number; // Speed multiplier, default will be 1
  nodes?: number; // Number of nodes, default will be 15
}

export default function NodeBackground({ 
  speed = 1,
  nodes: nodeCount = 15 
}: NodeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Use nodeCount parameter for array length
    const nodes: Node[] = Array.from({ length: nodeCount }, () => {
      const homeX = Math.random() * canvas.width;
      const homeY = Math.random() * canvas.height;
      return {
        x: homeX,
        y: homeY,
        homeX,
        homeY,
        vx: (Math.random() - 0.5) * 0.2 * speed,
        vy: (Math.random() - 0.5) * 0.2 * speed,
      };
    });

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node1, i) => {
        nodes.forEach((node2, j) => {
          if (i !== j) {
            const dx = node2.x - node1.x;
            const dy = node2.y - node1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              const force = ((150 - distance) / 2500) * speed;
              node1.vx -= (dx / distance) * force;
              node1.vy -= (dy / distance) * force;
            }
          }
        });

        const dx = mousePosition.current.x - node1.x;
        const dy = mousePosition.current.y - node1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 300) {
          const force = Math.min((300 - distance) / 150000, 0.005) * speed;
          node1.vx += dx * force;
          node1.vy += dy * force;
        }

        const homeDistanceX = node1.homeX - node1.x;
        const homeDistanceY = node1.homeY - node1.y;
        const homeDistance = Math.sqrt(homeDistanceX * homeDistanceX + homeDistanceY * homeDistanceY);

        if (distance > 300) {
          const homeForce = (homeDistance / 30000) * speed;
          node1.vx += homeDistanceX * homeForce;
          node1.vy += homeDistanceY * homeForce;
        }

        node1.vx += (Math.random() - 0.5) * 0.01 * speed;
        node1.vy += (Math.random() - 0.5) * 0.01 * speed;

        node1.vx *= 0.9;
        node1.vy *= 0.9;

        node1.x += node1.vx * speed;
        node1.y += node1.vy * speed;

        const padding = 20;
        if (node1.x < padding) {
          node1.x = padding;
          node1.vx *= -0.2;
        }
        if (node1.x > canvas.width - padding) {
          node1.x = canvas.width - padding;
          node1.vx *= -0.2;
        }
        if (node1.y < padding) {
          node1.y = padding;
          node1.vy *= -0.2;
        }
        if (node1.y > canvas.height - padding) {
          node1.y = canvas.height - padding;
          node1.vy *= -0.2;
        }

        ctx.beginPath();
        ctx.arc(node1.x, node1.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';
        ctx.fill();
      });

      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach(node2 => {
          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 250) {
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.3 * (1 - distance / 250)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [speed, nodeCount]); // Added nodeCount to dependency array

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'transparent',
      }}
    />
  );
} 