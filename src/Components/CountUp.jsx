import { useEffect, useState } from 'react';

export default function CountUp({ value, inView, duration = 1200 }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <>{count}{suffix}</>;
}