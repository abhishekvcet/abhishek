export default function Footer() {
  return (
    <>
      <div className="bottom-ticker">
        <div className="marquee-track" style={{ animationDuration: '15s' }}>
          <div className="marquee-content" style={{ gap: '80px' }}>
            <span className="ticker-text">ABHISHEK SINGH</span>
            <span className="ticker-text">•</span>
            <span className="ticker-text">AI & DATA SCIENCE</span>
            <span className="ticker-text">•</span>
            <span className="ticker-text">ABHISHEK SINGH</span>
            <span className="ticker-text">•</span>
            <span className="ticker-text">AI & DATA SCIENCE</span>
            <span className="ticker-text">•</span>
          </div>
          <div className="marquee-content" style={{ gap: '80px' }} aria-hidden="true">
            <span className="ticker-text">ABHISHEK SINGH</span>
            <span className="ticker-text">•</span>
            <span className="ticker-text">AI & DATA SCIENCE</span>
            <span className="ticker-text">•</span>
            <span className="ticker-text">ABHISHEK SINGH</span>
            <span className="ticker-text">•</span>
            <span className="ticker-text">AI & DATA SCIENCE</span>
            <span className="ticker-text">•</span>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span className="footer-text">© 2025 Abhishek Singh. All rights reserved.</span>
        <div className="footer-links">
          <a href="https://github.com/abhishekvcet" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/abhishekvcet" target="_blank" rel="noopener noreferrer">LeetCode</a>
          <a href="mailto:abhishek.236427101@vcet.edu.in">Email</a>
        </div>
      </footer>
    </>
  );
}
