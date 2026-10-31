(() => {
  const data = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const works = $('#works-list');
  data.works.forEach((work, index) => {
    const card = document.createElement('article');
    card.className = 'work-card';
    card.innerHTML = `<button class="work-media" type="button" aria-label="${escapeHTML(work.title)}を再生">
        <img src="${escapeHTML(work.image)}" alt="${escapeHTML(work.title)}の編集動画サムネイル" loading="${index === 0 ? 'eager':'lazy'}">
        <span class="play-bubble" aria-hidden="true">▶</span>
      </button>
      <div class="work-info"><div class="work-top"><span class="work-index">WORK 0${index + 1}</span><span class="work-badge">${escapeHTML(work.type)}</span></div>
      <h3>${escapeHTML(work.title)}</h3><p>${escapeHTML(work.description)}</p>
      ${work.length ? `<p class="work-length">${escapeHTML(work.length)}</p>` : ''}
      ${work.points && work.points.length ? `<ul class="work-points">${work.points.map((p) => `<li>${escapeHTML(p)}</li>`).join('')}</ul>` : ''}
      <button type="button" class="work-link">動画を見る ↗</button></div>`;
    card.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => openVideo(work)));
    works.append(card);
  });
  $('[data-name]').textContent = data.name;
  $('#profile-bio').textContent = data.bio;
  $('#year').textContent = new Date().getFullYear();
  const emailLink = $('#email-link');
  const address = data.email.trim();
  if (address) {
    // メールアプリが設定されていない環境でも使えるよう、mailto ではなくアドレスを表示＋コピーにする
    emailLink.classList.remove('hidden');
    const emailText = $('#email-text');
    emailText.textContent = `メール：${address}`;
    emailText.classList.remove('hidden');
    emailLink.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(address);
        emailLink.textContent = 'コピーしました ✓';
      } catch (_) {
        emailLink.textContent = '下のアドレスをコピーしてください';
      }
      setTimeout(() => { emailLink.textContent = 'メールアドレスをコピー'; }, 2500);
    });
  }
  const form = $('#contact-form');
  const formUrl = (data.formUrl || '').trim();
  $('#form-toggle').addEventListener('click', () => {
    // 外部フォーム（Googleフォーム等）が設定されていれば、ページ内フォームではなくそちらを開く
    if (formUrl && !data.formEndpoint.trim()) { window.open(formUrl, '_blank', 'noopener'); return; }
    form.hidden = !form.hidden; if (!form.hidden) form.querySelector('input').focus();
  });
  const ready = !!data.formEndpoint.trim();
  if ((ready || formUrl) && data.email.trim()) $('#contact-setup').classList.add('hidden');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = $('#form-status');
    if (!ready) { status.textContent = 'フォームの送信先はまだ設定されていません。公開前に site-data.js の formEndpoint を設定してください。'; return; }
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true; status.textContent = '送信中…';
    try {
      const response = await fetch(data.formEndpoint, { method: 'POST', body: new FormData(form), headers: {'Accept':'application/json'} });
      if (!response.ok) throw new Error('送信できませんでした');
      form.reset(); status.textContent = '送信しました。お問い合わせありがとうございます。';
    } catch (_) { status.textContent = '送信に失敗しました。時間をおいて再度お試しください。'; }
    finally { submit.disabled = false; }
  });
  const dialog = $('#video-dialog');
  const media = $('#dialog-media');
  function openVideo(work) {
    $('#dialog-title').textContent = work.title;
    media.replaceChildren();
    if (work.videoFile.trim()) {
      const video = document.createElement('video'); video.controls = true; video.autoplay = true; video.playsInline = true; video.preload = 'metadata';
      video.src = work.videoFile; video.poster = work.image;
      if (work.ratio === 'portrait') video.className = 'portrait';
      media.append(video);
    } else if (/^[a-zA-Z0-9_-]{11}$/.test(work.youtubeId.trim())) {
      const frame = document.createElement('iframe');
      frame.src = `https://www.youtube-nocookie.com/embed/${work.youtubeId.trim()}?autoplay=1&rel=0`;
      frame.title = `${work.title} の動画`; frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'; frame.allowFullscreen = true;
      if (work.ratio === 'portrait') { frame.style.maxWidth = '350px'; frame.style.aspectRatio = '9/16'; frame.style.height = 'min(75vh, 620px)'; }
      media.append(frame);
    } else {
      const placeholder = document.createElement('div'); placeholder.className = 'video-placeholder';
      placeholder.innerHTML = '<strong>動画URLがまだ設定されていません</strong><p>作品画像はプレビューとして表示しています。<br><code>site-data.js</code> の <code>youtubeId</code> か <code>videoFile</code> を設定すると、この場で再生できます。</p>';
      media.append(placeholder);
    }
    dialog.showModal();
  }
  function closeVideo(){ dialog.close(); media.replaceChildren(); }
  $('#dialog-close').addEventListener('click',closeVideo);
  dialog.addEventListener('click',(e)=>{if(e.target===dialog)closeVideo();});
  dialog.addEventListener('close',()=>media.replaceChildren());
})();
