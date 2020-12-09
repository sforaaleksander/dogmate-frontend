import "./header.css";
import { useState } from "react";

export default function Header() {
  const { isLogoClicked, setIsLogoClicked } = useState(true);

  function changeIsAvatarClicked() {
    setIsLogoClicked(!isLogoClicked);
  }

  return (
    <header className={"brown-background"}>
      <div className="logo">DOGMATE</div>
      {/*{isLogoClicked && (*/}
      <div className="main-avatar yellow" onClick={changeIsAvatarClicked}>
        <span>A</span>
      </div>
      )}
    </header>
  );
}
