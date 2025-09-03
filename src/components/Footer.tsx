export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Journal for Advanced Computational and Business Studies</p>
      </div>
    </footer>
  );
}
