const icons = [
  { symbol: '▲', top: '8%', left: '6%', delay: '0s', size: '2.4rem' },
  { symbol: '⚛', top: '18%', left: '88%', delay: '0.6s', size: '2.8rem' },
  { symbol: 'JS', top: '75%', left: '4%', delay: '1.2s', size: '1.6rem' },
  { symbol: '⬢', top: '60%', left: '92%', delay: '1.8s', size: '2.6rem' },
  { symbol: '🍃', top: '35%', left: '15%', delay: '2.4s', size: '2.2rem' },
  { symbol: '</>', top: '85%', left: '80%', delay: '0.3s', size: '1.8rem' },
  { symbol: '⚛', top: '50%', left: '50%', delay: '1s', size: '2.2rem' },
  { symbol: '▲', top: '92%', left: '45%', delay: '2s', size: '2rem' },
];

export default function FloatingIcons() {
  return (
    <div className="floating-icons" aria-hidden="true">
      {icons.map((icon, i) => (
        <span
          key={i}
          className="floating-icon"
          style={{
            top: icon.top,
            left: icon.left,
            fontSize: icon.size,
            animationDelay: icon.delay,
          }}
        >
          {icon.symbol}
        </span>
      ))}
    </div>
  );
}