import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container not-found">
      <span className="not-found-code gradient-text">404</span>
      <h1 className="not-found-heading">Page not found</h1>
      <p className="hero-desc" style={{ margin: '0 auto 32px' }}>
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}