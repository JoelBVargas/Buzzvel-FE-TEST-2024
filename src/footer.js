export function Footer() {
  return (
    <footer className="sticky flex w-auto flex-col items-center gap-6">
      <div className="mt-6 flex items-center gap-2">
        <figure>
          <img srcSet="/images/logo.svg" alt="logo-image" />
        </figure>
        <a className="leading-[26.4px ] text-[24px] font-bold" href="/">
          Soller
        </a>
      </div>
      <span className="leading-[22.4px]">
        @ 2023 Soller, Inc. All rights reserved.
      </span>

      <nav className="leading-[22.4px ] mb-6 flex gap-4">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/suport">Suport</a>
      </nav>
    </footer>
  );
}
