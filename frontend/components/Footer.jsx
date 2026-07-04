export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white text-center py-6 mt-8 border-t border-slate-700">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} News App. All rights reserved.
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Powered by NewsAPI
      </p>
    </footer>
  );
}
