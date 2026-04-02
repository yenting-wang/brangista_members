// ============================================================
//  app.js  —  UI 生成 & ナビゲーション
//  このファイルは通常編集不要です。社員データは members.js を編集してください。
// ============================================================

const homeScreen   = document.getElementById('home-screen');
const teamScreen   = document.getElementById('team-screen');
const folderRow    = document.getElementById('folder-row');
const memberGrid   = document.getElementById('member-grid');
const teamHeading  = document.getElementById('team-heading');
const backBtn      = document.getElementById('back-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalWindow  = document.getElementById('modal-window');

// ---------- モーダル ----------
function openModal(m, teamId) {
  modalWindow.innerHTML = '';
  const card = buildModalCard(m, teamId);
  modalWindow.appendChild(card);
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// オーバーレイ背景クリックで閉じる
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

// ESC キーで閉じる
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ---------- ホーム画面：フォルダ生成 ----------
TEAMS.forEach(team => {
  const btn = document.createElement('button');
  btn.className = 'folder-btn';
  btn.dataset.team = team.id;
  btn.innerHTML = `
    <div class="folder-icon">
      <div class="folder-body"></div>
    </div>
    <span class="folder-label">${team.labelJp}</span>
  `;
  btn.addEventListener('click', () => showTeam(team));
  folderRow.appendChild(btn);
});

// ---------- チーム画面を表示 ----------
function showTeam(team) {
  teamHeading.textContent = team.labelJp;
  teamHeading.style.color = team.color;

  memberGrid.innerHTML = '';
  team.members.forEach(m => {
    memberGrid.appendChild(buildCard(m, team.id));
  });

  homeScreen.classList.remove('active');
  teamScreen.classList.add('active');
  window.scrollTo(0, 0);
}

// ---------- 一覧カード生成（小さいカード用）----------
function buildCard(m, teamId) {
  const card = document.createElement('div');
  card.className = `win-card ${teamId}`;

  const infoItems = [];
  if (m.years)   infoItems.push(m.years);
  if (m.origin)  infoItems.push(m.origin);
  if (m.likes)   infoItems.push(m.likes);
  if (m.hobbies) infoItems.push(m.hobbies);

  const infoHTML = infoItems.map(item => `<li>${escHtml(item)}</li>`).join('');

  card.innerHTML = `
    <div class="win-titlebar">
      <span class="win-title">${escHtml(m.nameEn)}</span>
      <div class="win-controls">
        <div class="win-btn">□</div>
        <div class="win-btn">□</div>
        <div class="win-btn">×</div>
      </div>
    </div>
    <div class="win-body">
      <div class="win-content">
        <div class="member-header">
          <img class="avatar" src="${m.photo}" alt="${escHtml(m.nameJp)}" onerror="this.style.background='#ddd'">
          <div class="member-names">
            <div class="name-jp">${escHtml(m.nameJp)}</div>
            ${m.nameReading ? `<div class="name-reading">${escHtml(m.nameReading)}</div>` : ''}
          </div>
        </div>
        <div class="member-info">
          <div class="grade-badge">${escHtml(m.grade)}</div>
          <ul class="info-list">${infoHTML}</ul>
        </div>
        <div class="fav-section">
          <p class="fav-label">${escHtml(m.favLabel)} (๑'~')و</p>
          <img class="fav-photo" src="${m.favPhoto}" alt="一押し写真" onerror="this.style.display='none'">
        </div>
      </div>
      <div class="win-scrollbar">
        <div class="scroll-arrow">∧</div>
        <div class="scroll-track"><div class="scroll-thumb"></div></div>
        <div class="scroll-arrow">∨</div>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openModal(m, teamId));
  applyPhotoBgColor(card.querySelector('.fav-photo'));
  return card;
}

// ---------- モーダル用カード生成（横長2カラム）----------
function buildModalCard(m, teamId) {
  const card = document.createElement('div');
  card.className = `win-card ${teamId}`;

  const infoItems = [];
  if (m.years)   infoItems.push(m.years);
  if (m.origin)  infoItems.push(m.origin);
  if (m.likes)   infoItems.push(m.likes);
  if (m.hobbies) infoItems.push(m.hobbies);

  const infoHTML = infoItems.map(item => `<li>${escHtml(item)}</li>`).join('');

  card.innerHTML = `
    <div class="win-titlebar">
      <span class="win-title">${escHtml(m.nameEn)}</span>
      <div class="win-controls">
        <div class="win-btn">□</div>
        <div class="win-btn">□</div>
        <div class="win-btn close-btn" id="modal-close-btn">×</div>
      </div>
    </div>
    <div class="modal-body-inner">
      <div class="modal-left">
        <img class="modal-avatar" src="${m.photo}" alt="${escHtml(m.nameJp)}" onerror="this.style.background='#ddd'">
        <div class="modal-name-jp">${escHtml(m.nameJp)}</div>
        ${m.nameReading ? `<div class="modal-name-reading">${escHtml(m.nameReading)}</div>` : ''}
        <div class="modal-grade">${escHtml(m.grade)}</div>
        <ul class="modal-info-list">${infoHTML}</ul>
      </div>
      <div class="modal-right">
        <p class="modal-fav-label">${escHtml(m.favLabel)} (๑'~')و</p>
        <img class="modal-fav-photo" src="${m.favPhoto}" alt="一押し写真" onerror="this.style.display='none'">
      </div>
    </div>
  `;

  card.querySelector('#modal-close-btn').addEventListener('click', closeModal);
  applyPhotoBgColor(card.querySelector('.modal-fav-photo'));
  return card;
}

// ---------- 戻るボタン ----------
backBtn.addEventListener('click', () => {
  teamScreen.classList.remove('active');
  homeScreen.classList.add('active');
  window.scrollTo(0, 0);
});

// ---------- 写真から背景色を抽出して適用 ----------
function applyPhotoBgColor(imgEl) {
  imgEl.addEventListener('load', () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgEl, 0, 0, 16, 16);
      const data = ctx.getImageData(0, 0, 16, 16).data;
      let r = 0, g = 0, b = 0;
      const pixels = data.length / 4;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]; g += data[i+1]; b += data[i+2];
      }
      r = Math.round(r / pixels);
      g = Math.round(g / pixels);
      b = Math.round(b / pixels);
      // 少し明るく・彩度を抑えてやわらかく
      const toSoft = v => Math.round(v * 0.6 + 200 * 0.4);
      imgEl.style.background = `rgb(${toSoft(r)}, ${toSoft(g)}, ${toSoft(b)})`;
    } catch(e) {
      imgEl.style.background = '#f0f0f0';
    }
  }, { once: true });
}

// ---------- XSS 対策 ----------
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
