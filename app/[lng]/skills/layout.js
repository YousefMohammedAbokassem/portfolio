import { useTranslation as UseTranslation } from "@/app/i18n";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await UseTranslation(lng);
  return { title: t("skills") };
}
export default function layout({ children, params: { lng } }) {
  return <>{children}</>;
}
