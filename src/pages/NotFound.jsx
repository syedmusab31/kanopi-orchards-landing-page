import Logo from "../components/Logo";

const NotFound = () => (
  <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
    <Logo />
    <p className="mono-label mt-12 text-muted">Error 404</p>
    <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">
      This row is <em>empty</em>
    </h1>
    <p className="mt-5 max-w-md text-lg text-muted">
      The page you're looking for was moved, renamed, or never planted.
    </p>
    <a href="/" className="btn-primary mt-8">Back to the orchard</a>
  </main>
);

export default NotFound;
