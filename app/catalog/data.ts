export const PLAN_LEVELS: { [key: string]: number } = {
  Basic: 0,
  Pro: 1,
  Business: 2,
  Enterprise: 3,
}

export const PLAN_NAMES = ['Basic', 'Pro', 'Business', 'Enterprise'] as const

export type PlanId = (typeof PLAN_NAMES)[number]

export interface PlanInfo {
  id: PlanId
  name: string
  desc: string
}

export const PLAN_LIST: PlanInfo[] = [
  { id: 'Basic', name: 'Basic', desc: '基本的な動画配信・コンテンツ管理' },
  { id: 'Pro', name: 'Pro', desc: '収益化・高度なエンゲージメント機能' },
  { id: 'Business', name: 'Business', desc: 'テスト・セキュリティ・高度な分析' },
  { id: 'Enterprise', name: 'Enterprise', desc: 'SAML認証・フルカスタマイズ' },
]

export interface Purpose {
  id: string
  icon: string
  name: string
  desc: string
}

export const PURPOSES: Purpose[] = [
  { id: 'deliver', icon: '\u{1F3AC}', name: 'コンテンツ配信', desc: '動画・音声・記事など多様な形式でコンテンツを届ける' },
  { id: 'ai', icon: '\u{1F916}', name: 'AI活用', desc: 'AIで字幕生成・概要作成・検索を自動化' },
  { id: 'player', icon: '\u{1F3AE}', name: '視聴体験', desc: 'チャプター・シークバー制御などプレイヤーをカスタマイズ' },
  { id: 'monetize', icon: '\u{1F4B0}', name: '収益化', desc: 'サブスク・単品販売・クーポンでコンテンツを収益化' },
  { id: 'engage', icon: '\u{1F4AC}', name: 'エンゲージメント', desc: 'コメント・アンケート・テスト・イベントで視聴者と繋がる' },
  { id: 'access', icon: '\u{1F512}', name: '配信・アクセス制御', desc: '公開範囲・セキュリティ・認証を細かく設定' },
  { id: 'analytics', icon: '\u{1F4CA}', name: '分析', desc: '視聴データ・ユーザー行動を可視化し改善に活用' },
  { id: 'automation', icon: '\u26A1', name: '自動化・メール', desc: 'ワークフロー・メール配信で運用を効率化' },
  { id: 'customize', icon: '\u{1F3A8}', name: 'サイトカスタマイズ', desc: 'テーマ・ロゴ・ランディングページでブランドを構築' },
  { id: 'integrate', icon: '\u{1F517}', name: '外部連携', desc: 'GA・API・Stripeなど外部サービスと接続' },
]

export interface Feature {
  key: string
  purpose: string
  name: string
  desc: string
  plan: PlanId
}

export const FEATURES: Feature[] = [
  { key: 'video', purpose: 'deliver', name: '動画', desc: '動画コンテンツのアップロード・配信', plan: 'Basic' },
  { key: 'podcast', purpose: 'deliver', name: 'ポッドキャスト', desc: '音声コンテンツで移動中のユーザーにもリーチ', plan: 'Basic' },
  { key: 'pdf', purpose: 'deliver', name: 'PDF', desc: '資料やテキスト教材をPDFで配信', plan: 'Basic' },
  { key: 'article', purpose: 'deliver', name: '記事', desc: 'テキスト形式のコンテンツ配信', plan: 'Basic' },
  { key: 'live', purpose: 'deliver', name: 'LIVE配信', desc: 'リアルタイム配信で双方向コミュニケーション', plan: 'Basic' },
  { key: 'playlist', purpose: 'deliver', name: 'プレイリスト', desc: 'コース形式でコンテンツを整理し視聴完了率を向上', plan: 'Basic' },

  { key: 'ai_subtitle', purpose: 'ai', name: 'AI字幕の自動生成', desc: 'アクセシビリティ向上と検索性向上を同時に実現', plan: 'Basic' },
  { key: 'ai_summary', purpose: 'ai', name: 'AI概要文の自動生成', desc: 'コンテンツ概要を自動生成し制作効率アップ', plan: 'Basic' },
  { key: 'ai_ocr', purpose: 'ai', name: 'PDFのAI OCR処理', desc: 'PDFの文字認識でテキスト検索を可能に', plan: 'Basic' },
  { key: 'ai_search', purpose: 'ai', name: 'AI検索（AIエージェント）', desc: 'AIがコンテンツの中から最適な回答を提示', plan: 'Pro' },

  { key: 'chapter', purpose: 'player', name: 'チャプター設定', desc: '動画内の任意のポイントに直接ジャンプ', plan: 'Basic' },
  { key: 'seekbar', purpose: 'player', name: 'シークバー制御（早送り防止）', desc: 'コンプライアンス研修などで早送りを防止', plan: 'Basic' },
  { key: 'end_action', purpose: 'player', name: '動画終了時のアクション設定', desc: '次の動画への自動遷移やアンケート表示', plan: 'Basic' },
  { key: 'thumbnail', purpose: 'player', name: 'サムネイル設定', desc: 'カスタムサムネイルでクリック率を向上', plan: 'Basic' },
  { key: 'version', purpose: 'player', name: 'バージョン管理（動画の差し替え）', desc: 'URLを維持したまま動画を差し替え', plan: 'Basic' },
  { key: 'premiere', purpose: 'player', name: 'プレミア公開', desc: '動画の公開日時を予約し告知と同時にリリース', plan: 'Pro' },
  { key: 'embed', purpose: 'player', name: '埋め込みコード', desc: '外部サイトに動画プレイヤーを埋め込み', plan: 'Enterprise' },

  { key: 'subscription', purpose: 'monetize', name: 'サブスクリプション課金', desc: '月額/年額の定期課金で安定した売上基盤を構築', plan: 'Pro' },
  { key: 'single_purchase', purpose: 'monetize', name: '単品購入 / レンタル販売', desc: '個別コンテンツの販売・期間限定レンタル', plan: 'Pro' },
  { key: 'set_sale', purpose: 'monetize', name: 'セット販売', desc: '複数コンテンツをまとめて販売し客単価向上', plan: 'Pro' },
  { key: 'stripe', purpose: 'monetize', name: 'Stripe連携（決済基盤）', desc: 'Stripeと連携して決済を受け付け', plan: 'Pro' },
  { key: 'coupon', purpose: 'monetize', name: 'クーポン設定', desc: 'クーポンで新規獲得やキャンペーン施策', plan: 'Pro' },
  { key: 'tax', purpose: 'monetize', name: '税率設定', desc: '適切な税率を設定しコンプライアンスを確保', plan: 'Pro' },

  { key: 'comment', purpose: 'engage', name: 'コメント機能', desc: '視聴者のフィードバックを収集しコンテンツ改善に活用', plan: 'Basic' },
  { key: 'survey', purpose: 'engage', name: 'アンケート', desc: 'ユーザーの声を収集しサービス改善に活用', plan: 'Pro' },
  { key: 'test_quiz', purpose: 'engage', name: 'テスト・クイズ', desc: '理解度テストで学習効果を測定、修了証発行にも', plan: 'Business' },
  { key: 'chat', purpose: 'engage', name: 'チャット（1対1メッセージ）', desc: '個別サポートで顧客満足度を向上', plan: 'Pro' },
  { key: 'event', purpose: 'engage', name: 'イベント機能', desc: 'イベント作成・申込管理・開催を一元化', plan: 'Basic' },

  { key: 'public_release', purpose: 'access', name: 'パブリックリリース', desc: '非会員にもコンテンツを公開し新規獲得に', plan: 'Basic' },
  { key: 'limited_url', purpose: 'access', name: '限定URL共有', desc: '特定ユーザーだけがアクセスできるURLで安全に共有', plan: 'Basic' },
  { key: 'group_access', purpose: 'access', name: 'グループアクセス制限', desc: '部署やコース別に閲覧権限を設定', plan: 'Basic' },
  { key: 'publish_period', purpose: 'access', name: '公開期間の設定', desc: '期間限定配信でコンテンツの希少性を演出', plan: 'Basic' },
  { key: 'trial', purpose: 'access', name: 'トライアル期間の設定', desc: '無料体験期間でコンバージョン率を向上', plan: 'Pro' },
  { key: 'qrcode', purpose: 'access', name: 'QRコードの活用', desc: 'オフラインからオンラインへの誘導に効果的', plan: 'Basic' },
  { key: 'ip_restrict', purpose: 'access', name: 'IP制限', desc: '社内ネットワークからのみアクセスを許可', plan: 'Business' },
  { key: 'two_factor', purpose: 'access', name: '二要素認証', desc: 'セキュリティを強化し不正アクセスを防止', plan: 'Pro' },
  { key: 'single_login', purpose: 'access', name: 'シングルログイン', desc: '同時ログイン制限でアカウント共有を防止', plan: 'Business' },
  { key: 'email_auth', purpose: 'access', name: 'メールアドレス認証必須', desc: '正規メールアドレスを持つユーザーのみ許可', plan: 'Basic' },
  { key: 'saml', purpose: 'access', name: 'カスタムID / SAML認証', desc: '既存認証基盤と統合しシングルサインオンを実現', plan: 'Enterprise' },

  { key: 'video_analytics', purpose: 'analytics', name: '動画視聴分析', desc: '再生数・完了率・離脱率でコンテンツ改善', plan: 'Basic' },
  { key: 'user_analytics', purpose: 'analytics', name: 'ユーザー別視聴分析', desc: '個人ごとの学習進捗を把握しフォローアップ', plan: 'Basic' },
  { key: 'live_analytics', purpose: 'analytics', name: 'LIVE参加者分析', desc: 'LIVE配信の参加者データを分析', plan: 'Basic' },
  { key: 'test_analytics', purpose: 'analytics', name: 'テスト回答分析', desc: 'テスト結果を分析し理解不足の領域を特定', plan: 'Business' },
  { key: 'csv_export', purpose: 'analytics', name: 'CSVエクスポート', desc: 'データをCSV出力し外部ツールで詳細分析', plan: 'Basic' },
  { key: 'analytics_30d', purpose: 'analytics', name: '分析期間 30日', desc: '過去30日間のデータを分析（Basicは7日間）', plan: 'Pro' },
  { key: 'analytics_90d', purpose: 'analytics', name: '分析期間 90日', desc: '過去90日間のデータを分析', plan: 'Business' },
  { key: 'analytics_365d', purpose: 'analytics', name: '分析期間 365日', desc: '過去1年間のデータを分析', plan: 'Enterprise' },

  { key: 'wf_account', purpose: 'automation', name: 'アカウント作成時ワークフロー', desc: '新規登録時に自動で初期設定やウェルカムメール送信', plan: 'Basic' },
  { key: 'wf_watch', purpose: 'automation', name: '視聴完了時ワークフロー', desc: '視聴完了後に次のステップを自動案内', plan: 'Basic' },
  { key: 'wf_subscription', purpose: 'automation', name: 'サブスク購入時ワークフロー', desc: '購入後オンボーディングを自動化し早期解約防止', plan: 'Pro' },
  { key: 'wf_test', purpose: 'automation', name: 'テスト回答時ワークフロー', desc: '合格時に自動で修了証送付やグループ変更', plan: 'Business' },
  { key: 'wf_email', purpose: 'automation', name: 'メール自動送信', desc: '条件に応じたメールを自動送信し運用工数削減', plan: 'Basic' },
  { key: 'wf_group', purpose: 'automation', name: 'グループ自動変更', desc: 'ユーザー行動に応じて自動でグループを変更', plan: 'Basic' },
  { key: 'mail_template', purpose: 'automation', name: 'メールテンプレート', desc: 'ブランドに合わせたメールデザインで統一感', plan: 'Basic' },
  { key: 'mail_bulk', purpose: 'automation', name: '一斉メール配信', desc: '会員全体へのお知らせやキャンペーン告知', plan: 'Basic' },
  { key: 'mail_invite', purpose: 'automation', name: '招待メール', desc: 'メールで直接招待しスムーズなオンボーディング', plan: 'Basic' },
  { key: 'admin_invite', purpose: 'automation', name: '管理者招待', desc: '複数の管理者を招待しチーム運用を実現', plan: 'Pro' },

  { key: 'theme', purpose: 'customize', name: 'サイトカラー・テーマ', desc: 'ブランドカラーに合わせたデザイン', plan: 'Basic' },
  { key: 'logo', purpose: 'customize', name: 'ロゴ・ファビコン設定', desc: '自社ロゴを設定し信頼性とブランド認知向上', plan: 'Basic' },
  { key: 'landing_page', purpose: 'customize', name: 'ランディングページ', desc: 'バナー・紹介動画で第一印象を向上', plan: 'Basic' },
  { key: 'header_menu', purpose: 'customize', name: 'ヘッダーメニュー', desc: 'ナビゲーションをカスタマイズし回遊率向上', plan: 'Basic' },
  { key: 'top_layout', purpose: 'customize', name: 'トップページ配置', desc: 'コンテンツ配置を最適化し重要情報を強調', plan: 'Basic' },
  { key: 'custom_field', purpose: 'customize', name: 'カスタムフィールド', desc: '会員登録時に追加情報を収集しセグメント活用', plan: 'Pro' },
  { key: 'custom_domain', purpose: 'customize', name: 'カスタムドメイン', desc: '独自ドメインでサイトを運用しブランド力を強化', plan: 'Business' },
  { key: 'hide_footer', purpose: 'customize', name: 'フッターロゴ非表示', desc: 'one-streamロゴを非表示にし完全な自社ブランド化', plan: 'Business' },

  { key: 'ga_gtm', purpose: 'integrate', name: 'GA / GTM連携', desc: 'Googleアナリティクスで詳細な行動分析', plan: 'Basic' },
  { key: 'api_key', purpose: 'integrate', name: 'APIキー・開発者ポータル', desc: 'APIで自社システムとの連携を実現', plan: 'Business' },
  { key: 'stripe_ext', purpose: 'integrate', name: 'Stripe連携（決済）', desc: '決済基盤を構築しコンテンツの収益化を開始', plan: 'Pro' },
]

export function isAvail(feature: Feature, planId: PlanId): boolean {
  return PLAN_LEVELS[feature.plan] <= PLAN_LEVELS[planId]
}

export function featsByPurpose(purposeId: string): Feature[] {
  return FEATURES.filter(f => f.purpose === purposeId)
}

export function allAvail(planId: PlanId): Feature[] {
  return FEATURES.filter(f => isAvail(f, planId))
}
