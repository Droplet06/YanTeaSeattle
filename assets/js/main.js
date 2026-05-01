/* ── MENU DATA ──────────────────────────────────────── */
const menu = [
  // coming-back
  { cat:'coming-back', zh:'桂花乌龙拿铁', en:'Roasted Oolong Tea Latte w/ Cream 22oz', price:7.50, soldOut:true },

  // floral
  { cat:'floral', zh:'山茶花燕麦拿铁', en:'Camellia Oolong Oat Milk Latte 22oz', price:5.75, soldOut:false },
  { cat:'floral', zh:'手捣秋梨山茶花拿铁', en:'Camellia Milk Tea w/ Pear & Rice Pudding 22oz', price:7.50, soldOut:true },
  { cat:'floral', zh:'甜橙山茶花拿铁', en:'Camellia Oolong Milk Tea w/ Fresh Orange 22oz', price:7.50, soldOut:false },
  { cat:'floral', zh:'竹香乌龙拿铁', en:'Bamboo Oolong Milk Tea 22oz', price:5.75, soldOut:false },
  { cat:'floral', zh:'兰花乌龙拿铁', en:'Orchid Oolong Milk Tea 22oz', price:5.75, soldOut:false },

  // lemon
  { cat:'lemon', zh:'爆锤柠檬红茶', en:'Mashed Lemons in Black Tea 22oz', price:7.50, soldOut:false },
  { cat:'lemon', zh:'爆锤柠檬绿茶', en:'Mashed Lemons in Jasmine Green Tea 22oz', price:7.50, soldOut:false },
  { cat:'lemon', zh:'爆锤柠檬山茶花乌龙', en:'Mashed Lemons in Camellia Oolong Tea 22oz', price:7.50, soldOut:false },
  { cat:'lemon', zh:'爆锤柠檬竹香乌龙', en:'Mashed Lemons in Bamboo Oolong Tea 22oz', price:7.50, soldOut:false },
  { cat:'lemon', zh:'爆锤柠檬兰花乌龙', en:'Mashed Lemons in Orchid Oolong Tea 22oz', price:7.50, soldOut:false },

  // coconut
  { cat:'coconut', zh:'番石榴椰椰', en:'Guava Coconut Milk 22oz', price:7.50, soldOut:true },
  { cat:'coconut', zh:'生椰大满贯', en:'Coconut Milk Tea + Purple Rice + Coconut Jelly + Rice Pudding', price:7.50, soldOut:true },
  { cat:'coconut', zh:'血糯米紫薯厚椰乳', en:'Coconut Milk w/ Purple Yam & Purple Rice 22oz', price:7.50, soldOut:true },

  // yam
  { cat:'yam', zh:'阿尔卑斯厚紫薯泥鲜奶', en:'Fresh Milk w/ Purple Yam and Butterscotch 22oz', price:7.50, soldOut:true },
  { cat:'yam', zh:'血糯米紫薯厚椰乳', en:'Coconut Milk w/ Purple Yam & Purple Rice 22oz', price:7.50, soldOut:true },

  // cheese
  { cat:'cheese', zh:'苹苹无花', en:'Cheese Apple Fig 22oz', price:7.50, soldOut:true },

  // yogurt
  { cat:'yogurt', zh:'酸酪牛油果脆波波', en:'Yogurt Avocado with Crunchy Boba 22oz', price:7.50, soldOut:false },
  { cat:'yogurt', zh:'酸酪牛油果血糯米', en:'Yogurt Avocado with Sticky Purple Rice 22oz', price:7.50, soldOut:true },
  { cat:'yogurt', zh:'酸酪牛油果秋梨', en:'Yogurt Avocado with Pear 22oz', price:7.50, soldOut:true },

  // fresh
  { cat:'fresh', zh:'鲜茶系列', en:'Fresh Tea 22oz', price:5.00, soldOut:false },
  { cat:'fresh', zh:'奶茶系列', en:'Fresh Milk Tea 22oz', price:5.75, soldOut:false },
  { cat:'fresh', zh:'黑糖珍珠鲜牛奶', en:'Black Sugar Boba Milk 22oz', price:6.75, soldOut:false },

  // probiotic
  { cat:'probiotic', zh:'火锅爽', en:'Probiotic Strawberry & Orange Jasmine Green Tea 22oz', price:7.50, soldOut:true },
  { cat:'probiotic', zh:'番石榴爽', en:'Probiotic Guava Jasmine Green Tea 22oz', price:7.50, soldOut:true },
];

/* ── FEATURED — exactly 4, diverse categories ────────── */
const catLabel = {
  floral:       'Floral Oolong',
  lemon:        'Mashed Lemon',
  yogurt:       'Yogurt',
  fresh:        'Fresh Tea',
  coconut:      'Coconut',
  yam:          'Purple Yam',
  cheese:       'Cheese',
  probiotic:    'Probiotic',
  'coming-back':'Coming Back',
};

const featured = (() => {
  const available = menu.filter(m => !m.soldOut);
  const picks = [];
  const usedCats = new Set();
  const priority = ['lemon','floral','yogurt','fresh'];
  for (const cat of priority) {
    const item = available.find(m => m.cat === cat);
    if (item) { picks.push(item); usedCats.add(cat); }
    if (picks.length === 4) break;
  }
  // fallback: fill from remaining available
  for (const item of available) {
    if (picks.length >= 4) break;
    if (!picks.includes(item)) picks.push(item);
  }
  return picks.slice(0, 4);
})();

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = featured.map((item, i) => {
    const enClean = item.en.replace(/ \d+oz$/, '').replace(/ \d+ oz$/, '');
    const badge = i === 0 ? '<span class="feat-badge">Popular</span>' : '';
    return `
    <div class="feat-card">
      <div class="feat-card-accent"></div>
      <div class="feat-body">
        <p class="feat-tag">${catLabel[item.cat] || item.cat}${badge}</p>
        <div class="feat-divider"></div>
        <p class="feat-zh">${item.zh}</p>
        <p class="feat-en">${enClean}</p>
        <div class="feat-footer">
          <span class="feat-size">22 oz</span>
          <span class="feat-price">$${item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ── LANGUAGE ───────────────────────────────────────── */
function setLang(lang) {
  document.body.classList.toggle('zh', lang === 'zh');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');
  document.getElementById('langZh').classList.toggle('active', lang === 'zh');
}

/* ── SCROLL NAV ─────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── REVEAL ON SCROLL ───────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── INIT ───────────────────────────────────────────── */
renderFeatured();
