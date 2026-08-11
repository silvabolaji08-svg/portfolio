export default function ThemeToggle({ isLight, onToggle }) {
  return (
    <button
      className={`switch ${isLight ? 'switch-on' : ''}`}
      onClick={onToggle}
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span className="switch-thumb">{isLight ? '☀️' : '🌙'}</span>
    </button>
  );
}