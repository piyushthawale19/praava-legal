export function ThemeScript() {
  const script = `
    (function() {
      var key = 'theme';
      var stored = localStorage.getItem(key);
      var dark = stored === 'light' ? false : true;
      document.documentElement.classList.toggle('dark', dark);
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
