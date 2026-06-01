export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            {lang === 'en' ? '© 2024 Mohamed Sayed. All Rights Reserved.' : '© 2024 محمد سيد. جميع الحقوق محفوظة.'}
          </p>
          <p className="footer-tagline">
            {lang === 'en' ? 'Built with ' : 'صُنع بـ '}
            <i className="fas fa-heart"></i>
            {lang === 'en' ? ' using React & Django' : ' باستخدام React و Django'}
          </p>
        </div>
      </div>
    </footer>
  )
}
