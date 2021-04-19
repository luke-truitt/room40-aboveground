import React from "react";
import "./../utils/global.css";
import {
  Breadcrumbs,
  Link,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { primaryTheme } from "../utils/constants";

function GlobalBreadcrumbs() {
  // TODO @Mary Needs linking, pages from props, handleClick
  const pages = [
    { title: "Home", href: "" },
    { title: "Portfolio", href: "" },
  ];
  const handleClick = () => {};

  return (
    <ThemeProvider theme={primaryTheme}>
      <Breadcrumbs className="global-breadcrumbs">
        {pages.slice(0, -1).map((page) => (
          <Link color="inherit" href={page.href} onClick={handleClick}>
            {page.title}
          </Link>
        ))}
        <Typography color="textPrimary">
          {pages[pages.length - 1].title}
        </Typography>
      </Breadcrumbs>
    </ThemeProvider>
  );
}
export default GlobalBreadcrumbs;
