export function getLangFromUrl(url: URL) {
  console.log(url.pathname);
  const [_, lang] = url.pathname.split("/");
  // if (lang in ui) return lang as keyof typeof ui;
  return "en";
}
