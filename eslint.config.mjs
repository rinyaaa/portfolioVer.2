import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from "eslint-config-prettier"; // Prettier設定をインポート

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // Next.jsの基本設定
  ...compat.extends("next/core-web-vitals"),

  // ここに独自のルール設定を追加できる
  {
    rules: {
      // 例：特定のルールを無効化
      // "@next/next/no-img-element": "off",
      
    },
  },

  // Prettierとの競合ルールを無効化する設定（必ず最後に置く）
  prettierConfig,
];

export default eslintConfig;
