import { Link as RouterLink } from "react-router-dom";

const Link = ({ style, href, to, children, ...props }) => {
  if (to) {
    return (
      <RouterLink className={style} to={to} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a className={style} href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
