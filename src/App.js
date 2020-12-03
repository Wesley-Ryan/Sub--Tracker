
/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import Logo from "./assets/img_300x300/logo.png";
import SubscriptionCard from "./components/SubscriptionCard";

const NavWrapper = css({
  display: `flex`,
  justifyContent: `space-between`,
});

const MainContent = css({
  width: `95%`,
  height: `150vh`,
  margin: `25px`,
});

const StickySided = css({
  border: `1px solid black`,
  width: `25%`,
  height: `100vh`,
  position: `sticky`,
  top: `0`,
});

const NavBrand = css({
  width: `90%`,
  margin: `10px 0 40px 0`,
});
const links = css({
  display: `flex`,
  flexDirection: `column`,
  margin: ` 0`,
  padding: `0 0 0 10px`,
});
const styledLink = css({
  margin: `20px 0 10px 0`,
});

function App() {
  return (
    <div css={NavWrapper}>
      <div css={StickySided}>
        <ul css={links}>
          <img src={Logo} css={NavBrand} />
          <Link to="/" css={styledLink}>
            Home
          </Link>
          <Link to="/" css={styledLink}>
            Profile
          </Link>
          <Link to="/" css={styledLink}>
            Add Sub
          </Link>
          <Link to="/" css={styledLink}>
            Edit Subs
          </Link>
          <Link to="/" css={styledLink}>
            Log Out
          </Link>
        </ul>
      </div>
      <div css={MainContent}>
        <h1
          css={css`
            text-align: center;
            margin: 0 0 40px 0;
          `}
        >
          Track your Subs
        </h1>
        <SubscriptionCard />
      </div>

    </div>
  );
}

export default App;
