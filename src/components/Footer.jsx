import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-wrap pd-20 mb-20 card-box d-flex justify-content-between align-items-center">
      <span>
        {t("Gestión del Absentismo")} - Designed by{" "}
        <a href="https://www.mindden.com/" target="_blank" rel="noreferrer">
          Mindden
        </a>
      </span>

      <a 
        href="https://mindden-soft-tech.github.io/xynaxis/" 
        target="_blank" 
        rel="noreferrer"
        className="d-flex align-items-center text-dark" 
        style={{ textDecoration: 'none' }}
      >
        <img 
          src="/Absentismo/vendors/images/xynaxis.png" 
          alt="Xynaxis Logo" 
          style={{ 
            width: '35px', 
            height: 'auto', 
            marginRight: '8px' 
          }} 
        />
        <span>
          Powered by <strong className="ml-1">Xynaxis</strong>
        </span>
      </a>
    </div>
  );
};

export default Footer;