import React, { useEffect, useRef } from 'react';

interface SkillsRadarProps {
  skills: { name: string; level: number }[];
  darkMode: boolean;
}

const SkillsRadar: React.FC<SkillsRadarProps> = ({ skills, darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;

    const drawRadar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid circles
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius * i) / 5, 0, Math.PI * 2);
        ctx.strokeStyle = darkMode ? '#374151' : '#e5e7eb';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw grid lines
      const angleStep = (Math.PI * 2) / skills.length;
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = darkMode ? '#374151' : '#e5e7eb';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw skill labels
        const labelX = centerX + Math.cos(angle) * (radius + 25);
        const labelY = centerY + Math.sin(angle) * (radius + 25);
        
        ctx.fillStyle = darkMode ? '#f3f4f6' : '#374151';
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skills[i].name, labelX, labelY);
      }

      // Draw skill polygon
      ctx.beginPath();
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const skillRadius = (radius * skills[i].level) / 100;
        const x = centerX + Math.cos(angle) * skillRadius;
        const y = centerY + Math.sin(angle) * skillRadius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      
      // Fill polygon
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, 'rgba(20, 184, 166, 0.3)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Stroke polygon
      ctx.strokeStyle = '#14b8a6';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw skill points
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const skillRadius = (radius * skills[i].level) / 100;
        const x = centerX + Math.cos(angle) * skillRadius;
        const y = centerY + Math.sin(angle) * skillRadius;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#14b8a6';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    drawRadar();
  }, [skills, darkMode]);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      className="mx-auto"
    />
  );
};

export default SkillsRadar;