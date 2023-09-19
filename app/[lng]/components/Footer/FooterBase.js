import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import Lan from "./Lan";

export const FooterBase = ({ t, lng, path = "" }) => {
  return (
    <footer>
      <Lan lng={lng} />
      {/* {languages.map((l) => {
        return (
          <span key={l}>
            <Link href={`/${l}${path}`}>
              {l}
            </Link>
          </span>
        )
      })} */}
    </footer>
  );
};
