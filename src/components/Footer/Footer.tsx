import Brand from "../Logo/Logo";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return <div className={classes.footer}>
    <Brand/>
  </div>
};

export default Footer;
