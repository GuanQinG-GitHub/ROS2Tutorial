// ── Tab switching ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabs = btn.closest('.tabs');
    tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    tabs.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    tabs.querySelector('#tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ── Copy button (strips leading "$ ") ──
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.nextElementSibling.textContent;
    const cleaned = code.split('\n').map(line => {
      return line.replace(/^\$\s?/, '');
    }).join('\n').trim();
    navigator.clipboard.writeText(cleaned).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  });
});

// ── Mobile menu toggle ──
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
});
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
});
