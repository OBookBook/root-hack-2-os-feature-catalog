import type { Route } from "./+types/home";
import Catalog from "../catalog/catalog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "one-stream 全機能カタログ" },
    { name: "description", content: "プランごとに使える全機能を目的別にわかりやすく確認できます" },
  ];
}

export default function Page() {
  return <Catalog />;
}
