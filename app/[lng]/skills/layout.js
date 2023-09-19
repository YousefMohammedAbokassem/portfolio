import { useTranslation } from "@/app/i18n";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return { title: t("skills") };
}
export default function layout({ children,params:{lng}}) {
  return <>{children}</>;
}
