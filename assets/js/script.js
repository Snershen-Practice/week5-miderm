let data = [
  {
    id: 0,
    name: '肥宅心碎賞櫻3日',
    imgUrl:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80',
    area: '高雄',
    description: '賞櫻花最佳去處。肥宅不得不去的超讚景點！',
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: '貓空纜車雙程票',
    imgUrl:
      'https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    area: '台北',
    description: '乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感',
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: '台中谷關溫泉會1日',
    imgUrl:
      'https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    area: '台中',
    description: '全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。',
    group: 20,
    price: 1765,
    rate: 7,
  },
];

const ticketCardArea = document.querySelector('.ticketCard-area');
const searchMenu = document.querySelector('#searchMenu');
const searchNum = document.querySelector('#search-num');

function renderContent() {
  let ticketContent = '';
  let obj = [];
  data.forEach((item) => {
    obj.push(item);
    searchNum.textContent = `本次搜尋共 ${obj.length} 筆資料`;
    ticketContent += `<li class="ticketCard">
    <a href="#" class="ticketCard-img">
      <img
        src="${item.imgUrl}"
        alt="${item.name}"
      />
    </a>
    <div class="ticketCard-location">${item.area}</div>
    <div class="ticketCard-content">
      <h2 class="ticketCard-title">${item.name}</h2>
      <p class="ticketCard-description">
      ${item.description}
      </p>
      <div class="ticketCard-info">
        <p class="ticketCard-num"><i class="fa-solid fa-circle-exclamation"></i>剩下最後 ${item.group} 組</p>
        <p class="ticketCard-price">
          TWD
          <span>$${item.price}</span>
        </p>
        <div class="ticketCard-rate">${item.rate}</div>
      </div>
    </div>
  </li>`;
    ticketCardArea.innerHTML = ticketContent;
  });
}

renderContent();

searchMenu.addEventListener('change', (e) => {
  let obj = [];
  data.forEach((item) => {
    if (item.area == e.target.value) {
      obj.push(item);
      searchNum.textContent = `本次搜尋共 ${obj.length} 筆資料`;
      let ticketContent = '';
      ticketContent += `<li class="ticketCard">
          <a href="#" class="ticketCard-img">
            <img
              src="${item.imgUrl}"
              alt="${item.name}"
            />
          </a>
          <div class="ticketCard-location">${item.area}</div>
          <div class="ticketCard-content">
            <h2 class="ticketCard-title">${item.name}</h2>
            <p class="ticketCard-description">
            ${item.description}
            </p>
            <div class="ticketCard-info">
              <p class="ticketCard-num"><i class="fa-solid fa-circle-exclamation"></i>剩下最後 ${item.group} 組</p>
              <p class="ticketCard-price">
                TWD
                <span>$${item.price}</span>
              </p>
              <div class="ticketCard-rate">${item.rate}</div>
            </div>
          </div>
        </li>`;
      ticketCardArea.innerHTML = ticketContent;
    } else if (e.target.value === '全部地區') {
      renderContent();
    }
  });
});
