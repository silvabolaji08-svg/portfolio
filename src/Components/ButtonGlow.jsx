import { useEffect } from 'react';

export default function ButtonGlow() {
  useEffect(() => {
    const handleMove = (e) => {
      const btn = e.target.closest('.btn, .hire-btn');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      btn.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return null;
}