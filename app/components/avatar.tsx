import { useState } from "react";

export default function Avatar() {
  const [srcAvatar, setSrcAvatar] = useState("kevverde.jpg");
  return (
    <div className="">
      <div className="w-64 h-64">
        <img
          src={srcAvatar}
          alt="Kevin Faveri"
          className="max-h-full rounded-lg"
          onMouseOver={() => setSrcAvatar("kevfaveri.jpeg")}
          onMouseOut={() => setSrcAvatar("kevverde.jpg")}
        />
      </div>
      <span className="text-xs">Hover to see my web3 version</span>
    </div>
  );
}
