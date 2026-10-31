# POP STREAM PORTFOLIO

ゲーム配信・VTuber切り抜き向けの1ページポートフォリオです。HTML / CSS / JavaScriptだけで動き、GitHub Pagesで公開できます。スマホ表示優先。

## まず使う

1. `index.html` をブラウザで開くとデザインを確認できます。
2. `site-data.js` をテキストエディタで開いて作品・連絡先を編集します。
3. 公開前に、作品スクリーンショット・出演者の掲載許諾を確認してください。

## 作品の動画を再生可能にする（重要）

`site-data.js` の `works` に各動画の `youtubeId` または `videoFile` を設定してください。

- YouTube: `https://www.youtube.com/watch?v=AbCdEfGh123` なら `youtubeId: 'AbCdEfGh123'`（動画IDの11文字のみ）。限定公開動画も埋め込み可の場合がありますが、動画側で埋め込み禁止なら再生できません。
- MP4: `assets/video-01.mp4` のように配置し、`videoFile: 'assets/video-01.mp4'` と設定。GitHub Pagesにはファイルサイズの制約があるため、基本的にはYouTube等の動画配信サービスを推奨します。
- どちらも空欄の間は、サムネイルをクリックすると「設定されていません」と案内されます。ダミー動画や無関係な動画は再生しません。
- `image` はサムネイルのパスです。今はお送りいただいたスクリーンショットを切り出したサンプルを使っています。差し替え推奨です。
- `works` の並び順を変えると表示順を変更できます。

## 連絡先を設定する

`site-data.js` に以下を入力。

```js
email: 'your-address@example.com',
formEndpoint: 'https://formspree.io/f/取得したフォームID',
```

- メールアドレスを設定すると「メールで相談する」が有効になります。
- 静的サイトだけではフォームの送信内容を保存・配送できません。このサイトでは外部のFormspreeを使う想定です。Formspreeでフォームを作成し、発行されたendpointを設定してください。
- endpoint未設定では送信されず、設定案内が表示されます。
- 入力データは送信時に外部サービスへ送信されます。公開時は利用サービスのプライバシー条件を確認してください。

## GitHub Pagesで公開する

1. GitHubでPublicリポジトリを作成。
2. このフォルダ内の `index.html`、`styles.css`、`script.js`、`site-data.js`、`assets/` をリポジトリの最上位にアップロード。
3. リポジトリの **Settings → Pages → Build and deployment → Deploy from a branch** を選ぶ。
4. ブランチ `main`、フォルダ `/(root)` を選んで保存。公開URLが発行されます。

## 編集ガイド

- 色は `styles.css` の先頭 `:root` にあります。
- `bio` がプロフィール文です。
- 動画のタイトル・説明・比率は `site-data.js` を編集します。`ratio` は `landscape` か `portrait`。
- 使用フォントは Google Fonts の `M PLUS Rounded 1c`、`Noto Sans JP`、`DM Sans`。
- スマホでの再生・フォーム送信は公開後も実機で確認してください。

※本サイトは特定チーム・企業のロゴやデザインを模倣していません。
