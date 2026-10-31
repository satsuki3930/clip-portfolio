/* このファイルの値を変更するだけでポートフォリオの内容を更新できます。 */
window.PORTFOLIO = {
  name: 'おさつ',
  role: 'VIDEO EDITOR / VTUBER CLIPS',
  email: 'satsuki3930@gmail.com', // 未設定の場合はメールリンクを表示しません
  formEndpoint: '', // Formspree の URL（例: https://formspree.io/f/xxxxxxxx）。空なら下の formUrl を使う
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf3y_--55oVIaQNYH-9ClM5j7Cywb2qrO-PtbV0iduRY4Ri1g/viewform', // Googleフォームなど外部フォームのURL（ボタンから新しいタブで開く）
  intro: '配信の「おもしろい」を、もっと届く動画に。',
  bio: '動画制作を専門学校で学びながら、フリーランスで動画編集をしています。配信の空気感やリアクションを大切に、見やすく・テンポよく・楽しさが伝わる切り抜きを制作します。',
  works: [
    {
      title: '浮気判定チェックシート',
      type: '横長動画',
      ratio: 'landscape',
      image: 'assets/work-03.webp',
      description: '配信の中から、リアクションの大きい場面をまとめた横長の切り抜き。',
      length: '天菜はかせさんの配信（約1〜2時間）→ 約40秒',
      youtubeId: '',
      videoFile: 'assets/video-03.mp4'
    },
    {
      title: 'ネズミは卵から生まれると信じていた',
      type: '縦型ショート',
      ratio: 'portrait',
      image: 'assets/work-01.webp',
      description: '雑談配信のやりとりを、縦型ショートにまとめた切り抜き。',
      length: '樋凪理世さんの配信（約1〜2時間）→ 32秒',
      youtubeId: '',
      videoFile: 'assets/video-01.mp4'
    },
    {
      title: '過去最高同接なのに触れられない',
      type: '縦型ショート',
      ratio: 'portrait',
      image: 'assets/work-02.webp',
      description: '雑談配信のやりとりを、縦型ショートにまとめた切り抜き。',
      length: '天菜はかせさんの配信（約1〜2時間）→ 42秒',
      youtubeId: '',
      videoFile: 'assets/video-02.mp4'
    }
  ]
};
