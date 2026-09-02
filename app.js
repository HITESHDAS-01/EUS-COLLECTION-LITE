// ===== DEFAULT MEMBERS FROM EXCEL =====
const DEFAULT_MEMBERS = [
  { id: "EUS/032026/C/001", name: "CHAMPA DAS", amount: 200 },
  { id: "EUS/032026/C/002", name: "PINKU DAS", amount: 200 },
  { id: "EUS/032026/C/003", name: "RUMI DAS", amount: 100 },
  { id: "EUS/032026/C/004", name: "ABHIJIT DAS", amount: 100 },
  { id: "EUS/032026/C/005", name: "KAMINI DAS", amount: 200 },
  { id: "EUS/032026/C/006", name: "CHUMI KALITA DAS", amount: 200 },
  { id: "EUS/032026/C/007", name: "MILAN DAS", amount: 100 },
  { id: "EUS/032026/C/008", name: "KABITA DAS", amount: 500 },
  { id: "EUS/032026/C/009", name: "BANDANA DAS", amount: 200 },
  { id: "EUS/032026/C/010", name: "HRISHIKESH TALUKDAR", amount: 200 },
  { id: "EUS/032026/C/011", name: "MRIDUL TALUKDAR", amount: 500 },
  { id: "EUS/032026/C/012", name: "SANTANA DAS", amount: 200 },
  { id: "EUS/032026/C/013", name: "BIKASH DAS", amount: 100 },
  { id: "EUS/032026/C/014", name: "RIDIP DAS", amount: 100 },
  { id: "EUS/032026/C/015", name: "PRANITA DAS", amount: 200 },
  { id: "EUS/032026/C/016", name: "RAJDEEP DAS", amount: 500 },
  { id: "EUS/032026/C/017", name: "JIYANDEEP DAS", amount: 500 },
  { id: "EUS/032026/C/018", name: "LABHITA KAKATI", amount: 100 },
  { id: "EUS/032026/C/019", name: "PRIYASI DAS", amount: 100 },
  { id: "EUS/032026/C/020", name: "LATIKA DAS", amount: 200 },
  { id: "EUS/032026/C/021", name: "CHAKRADHAR DAS", amount: 500 },
  { id: "EUS/032026/C/022", name: "LABHITA DEVI", amount: 100 },
  { id: "EUS/032026/C/023", name: "BIMALA DAS", amount: 500 },
  { id: "EUS/032026/C/024", name: "KANIKA DAS", amount: 300 },
  { id: "EUS/032026/C/025", name: "USHA DAS", amount: 1000 },
  { id: "EUS/042026/C/026", name: "CHINMOY TALUKDAR", amount: 500 },
  { id: "EUS/042026/C/027", name: "NILIMA TALUKDAR", amount: 200 },
  { id: "EUS/042026/C/028", name: "BIBAN KASHYAP", amount: 300 },
  { id: "EUS/042026/C/029", name: "UMESH DAS", amount: 300 },
  { id: "EUS/042026/C/030", name: "PARESH DAS", amount: 200 },
  { id: "EUS/042026/C/031", name: "JUMI HALOI DAS", amount: 500 },
  { id: "EUS/042026/C/032", name: "SANGITA DAS", amount: 200 },
  { id: "EUS/042026/C/033", name: "SIKHAMANI DAS", amount: 100 },
  { id: "EUS/042026/C/034", name: "JAYANTA DAS", amount: 200 },
  { id: "EUS/042026/C/035", name: "GITUMANI KALITA DAS", amount: 1000 },
  { id: "EUS/042026/C/036", name: "JUMAN DAS", amount: 100 },
  { id: "EUS/042026/C/037", name: "KAKALI DEVI", amount: 200 },
  { id: "EUS/042026/C/038", name: "BHAGABAN DAS", amount: 1000 },
  { id: "EUS/042026/C/039", name: "GOBINDA DAS", amount: 200 },
  { id: "EUS/042026/C/040", name: "DIPAK DAS", amount: 200 },
  { id: "EUS/042026/C/041", name: "RUPALI KAKATI", amount: 300 },
  { id: "EUS/042026/C/042", name: "NIHAR TALUKDAR", amount: 200 },
  { id: "EUS/042026/C/043", name: "RUPALI MAZUMDAR", amount: 1000 },
  { id: "EUS/042026/C/044", name: "RAMEN DAS", amount: 500 },
  { id: "EUS/042026/C/045", name: "SARAT DEKA", amount: 500 },
  { id: "EUS/042026/C/046", name: "PURNIMA MAZUMDAR", amount: 500 },
  { id: "EUS/042026/C/047", name: "CHANDANA MAZUMDAR", amount: 500 },
  { id: "EUS/042026/C/048", name: "NAREN DAS", amount: 500 },
  { id: "EUS/052026/C/049", name: "NIRUPAMA DAS", amount: 500 },
  { id: "EUS/052026/C/050", name: "NAMITA TALUKDAR", amount: 100 },
  { id: "EUS/052026/C/051", name: "RAMALA TALUKDAR", amount: 200 },
  { id: "EUS/052026/C/052", name: "TINKU DAS", amount: 100 },
  { id: "EUS/052026/C/053", name: "BABU ALI (HAYATULLA)", amount: 200 },
  { id: "EUS/052026/C/054", name: "MANIKA BARUAH", amount: 200 },
  { id: "EUS/052026/C/055", name: "RITUL KALITA", amount: 500 },
  { id: "EUS/052026/C/056", name: "LABHITA DAS", amount: 200 },
  { id: "EUS/052026/C/057", name: "LATIKA DAS", amount: 200 },
  { id: "EUS/052026/C/058", name: "MAINU TALUKDAR", amount: 200 },
  { id: "EUS/052026/C/059", name: "GYANAM KAKATI", amount: 500 },
  { id: "EUS/052026/C/060", name: "SUMI DAS", amount: 500 },
  { id: "EUS/052026/C/061", name: "PRIYANKA DAS", amount: 500 },
  { id: "EUS/062026/C/062", name: "BARASHA DEVI", amount: 100 },
  { id: "EUS/062026/C/063", name: "SABITRI DAS", amount: 200 },
];

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const MONTH_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// ===== STORAGE =====
const STORAGE_MEMBERS = "eus_members";
const STORAGE_COLLECTIONS = "eus_collections";

function getMembers() {
  try {
    const data = localStorage.getItem(STORAGE_MEMBERS);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return sortMembers(parsed);
    }
  } catch (e) {
    console.warn("Corrupted members data, resetting to defaults:", e);
  }
  localStorage.setItem(STORAGE_MEMBERS, JSON.stringify(DEFAULT_MEMBERS));
  return sortMembers([...DEFAULT_MEMBERS]);
}

function sortMembers(arr) {
  return [...arr].sort((a, b) => a.name.localeCompare(b.name));
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function saveMembers(members) {
  localStorage.setItem(STORAGE_MEMBERS, JSON.stringify(members));
}

function getCollections() {
  try {
    const data = localStorage.getItem(STORAGE_COLLECTIONS);
    if (data) {
      const parsed = JSON.parse(data);
      if (typeof parsed === "object" && parsed !== null) return parsed;
    }
  } catch (e) {
    console.warn("Corrupted collections data, resetting:", e);
  }
  return {};
}

function saveCollections(collections) {
  localStorage.setItem(STORAGE_COLLECTIONS, JSON.stringify(collections));
}

function collectionKey(month, year) {
  return `${year}-${String(month + 1).padStart(2, "0")}`;
}

// Store collections using member ID instead of index (safer after sort)
function isPaid(memberId, month, year) {
  const key = collectionKey(month, year);
  const cols = getCollections();
  return cols[key] && cols[key].includes(memberId);
}

function togglePayment(memberId, month, year) {
  const key = collectionKey(month, year);
  const cols = getCollections();
  if (!cols[key]) cols[key] = [];
  const idx = cols[key].indexOf(memberId);
  if (idx >= 0) {
    cols[key].splice(idx, 1);
  } else {
    cols[key].push(memberId);
  }
  saveCollections(cols);
}

function removePayment(memberId, month, year) {
  const key = collectionKey(month, year);
  const cols = getCollections();
  if (!cols[key]) return;
  const idx = cols[key].indexOf(memberId);
  if (idx >= 0) {
    cols[key].splice(idx, 1);
    saveCollections(cols);
  }
}

// ===== HISTORY =====
const STORAGE_HISTORY = "eus_history";

function getHistory() {
  try {
    const data = localStorage.getItem(STORAGE_HISTORY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.warn("Corrupted history data:", e);
  }
  return [];
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_HISTORY, JSON.stringify(history));
}

function addToHistory(memberId, amount, month, year) {
  const history = getHistory();
  history.unshift({
    memberId,
    amount,
    month: collectionKey(month, year),
    date: new Date().toISOString()
  });
  saveHistory(history);
}

function deleteFromHistory(index) {
  const history = getHistory();
  if (index < 0 || index >= history.length) return;
  const entry = history[index];
  const [yearStr, monthStr] = entry.month.split("-");
  const m = parseInt(monthStr, 10) - 1;
  const y = parseInt(yearStr, 10);
  removePayment(entry.memberId, m, y);
  history.splice(index, 1);
  saveHistory(history);
}

let collectMemberId = null;

function openCollectSheet(memberId) {
  const members = getMembers();
  const m = members.find(mem => mem.id === memberId);
  if (!m) return;
  collectMemberId = memberId;
  document.getElementById("collectAvatar").textContent = m.name.charAt(0);
  document.getElementById("collectName").textContent = m.name;
  document.getElementById("collectId").textContent = m.id;
  document.getElementById("collectAmount").value = m.amount;
  document.getElementById("collectSheet").classList.remove("hidden");
}

function setupCollectSheet() {
  document.getElementById("collectCancel").addEventListener("click", () => {
    document.getElementById("collectSheet").classList.add("hidden");
    collectMemberId = null;
  });
  document.getElementById("collectScrim").addEventListener("click", () => {
    document.getElementById("collectSheet").classList.add("hidden");
    collectMemberId = null;
  });
  document.getElementById("collectSave").addEventListener("click", () => {
    if (!collectMemberId) return;
    const amt = parseInt(document.getElementById("collectAmount").value, 10) || 0;
    togglePayment(collectMemberId, currentMonth, currentYear);
    addToHistory(collectMemberId, amt, currentMonth, currentYear);
    document.getElementById("collectSheet").classList.add("hidden");
    collectMemberId = null;
    toast("Payment collected!");
    renderCollectList(document.getElementById("searchInput").value);
  });
}

// ===== STATE =====
const now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();
let sumMonth = currentMonth;
let sumYear = currentYear;
let pickerTarget = "collect"; // "collect" or "summary"

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  setupBottomNav();
  setupCollectPage();
  setupCollectSheet();
  setupSummaryPage();
  setupHistoryPage();
  setupMembersPage();
  setupBackup();
  setupServiceWorker();
});

// ===== BOTTOM NAV =====
function setupBottomNav() {
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const page = btn.dataset.page;
      document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      document.getElementById("page-" + page).classList.add("active");

      if (page === "collect") renderCollectList(document.getElementById("searchInput").value);
      if (page === "summary") renderSummary();
      if (page === "members") renderMemberManage();
      if (page === "history") renderHistoryList();
    });
  });
}

// ===== MONTH LABEL HELPER =====
function getMonthLabel(m, y) {
  return MONTH_FULL[m] + " " + y;
}

// ===== COLLECT PAGE =====
function setupCollectPage() {
  const monthLabel = document.getElementById("monthLabel");
  const monthSelect = document.getElementById("monthSelect");
  const yearSelect = document.getElementById("yearSelect");
  const pickerDialog = document.getElementById("pickerDialog");

  // Populate selects
  MONTH_FULL.forEach((m, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = m;
    monthSelect.appendChild(opt);
  });

  const thisYear = now.getFullYear();
  for (let y = 2026; y <= thisYear + 1; y++) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }

  monthSelect.value = currentMonth;
  yearSelect.value = currentYear;
  monthLabel.textContent = getMonthLabel(currentMonth, currentYear);

  // Picker toggle
  document.getElementById("monthChip").addEventListener("click", () => {
    pickerTarget = "collect";
    pickerDialog.classList.remove("hidden");
  });
  document.getElementById("pickerCancel").addEventListener("click", () => {
    pickerDialog.classList.add("hidden");
  });
  document.getElementById("pickerOk").addEventListener("click", () => {
    const ms = document.getElementById("monthSelect");
    const ys = document.getElementById("yearSelect");
    if (pickerTarget === "collect") {
      currentMonth = parseInt(ms.value, 10);
      currentYear = parseInt(ys.value, 10);
      monthLabel.textContent = getMonthLabel(currentMonth, currentYear);
      pickerDialog.classList.add("hidden");
      renderCollectList();
    } else {
      sumMonth = parseInt(ms.value, 10);
      sumYear = parseInt(ys.value, 10);
      document.getElementById("monthLabelSum").textContent = getMonthLabel(sumMonth, sumYear);
      document.getElementById("sumYearSelect").value = sumYear;
      pickerDialog.classList.add("hidden");
      renderSummary();
    }
  });

  // Arrow nav
  document.getElementById("prevMonth").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;
    monthLabel.textContent = getMonthLabel(currentMonth, currentYear);
    renderCollectList();
  });
  document.getElementById("nextMonth").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;
    monthLabel.textContent = getMonthLabel(currentMonth, currentYear);
    renderCollectList();
  });

  // Search
  document.getElementById("searchInput").addEventListener("input", e => {
    renderCollectList(e.target.value);
  });

  renderCollectList();
}

function renderCollectList(filter = "") {
  const members = getMembers();
  const list = document.getElementById("memberList");
  list.innerHTML = "";

  let collected = 0;
  let collectedAmt = 0;
  const filterLower = filter.toLowerCase();

  members.forEach(m => {
    const paid = isPaid(m.id, currentMonth, currentYear);
    if (filter && !m.name.toLowerCase().includes(filterLower) && !m.id.toLowerCase().includes(filterLower)) return;

    if (paid) {
      collected++;
      collectedAmt += m.amount;
    }

    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
      <div class="member-avatar ${paid ? 'paid' : ''}">${escapeHtml(m.name.charAt(0))}</div>
      <div class="member-info">
        <div class="member-name">${escapeHtml(m.name)}</div>
        <div class="member-id">${escapeHtml(m.id)}</div>
        <div class="member-amount">₹${m.amount.toLocaleString("en-IN")}/mo</div>
      </div>
      <div class="member-actions">
        <button class="btn-collect ${paid ? 'unpay' : 'pay'}" data-id="${escapeHtml(m.id)}">
          ${paid ? 'Undo' : 'Collect'}
        </button>
      </div>
    `;
    card.querySelector(".btn-collect").addEventListener("click", function () {
      const id = this.dataset.id;
      if (this.classList.contains("unpay")) {
        removePayment(id, currentMonth, currentYear);
        const history = getHistory();
        const monthKey = collectionKey(currentMonth, currentYear);
        const idx = history.findIndex(h => h.memberId === id && h.month === monthKey);
        if (idx >= 0) {
          history.splice(idx, 1);
          saveHistory(history);
        }
        renderCollectList(document.getElementById("searchInput").value);
      } else {
        openCollectSheet(id);
      }
    });
    list.appendChild(card);
  });

  document.getElementById("statCollected").textContent = collected;
  document.getElementById("statPending").textContent = members.length - collected;
  document.getElementById("statTotal").textContent = "₹" + collectedAmt.toLocaleString("en-IN");
}

// ===== SUMMARY PAGE =====
function setupSummaryPage() {
  const monthLabel = document.getElementById("monthLabelSum");
  const pickerDialog = document.getElementById("pickerDialog");

  document.getElementById("monthChipSum").addEventListener("click", () => {
    pickerTarget = "summary";
    document.getElementById("pickerDialog").classList.remove("hidden");
  });

  monthLabel.textContent = getMonthLabel(sumMonth, sumYear);

  // Year dropdown for overview
  const sumYearSelect = document.getElementById("sumYearSelect");
  const currentCalYear = new Date().getFullYear();
  for (let y = 2026; y <= 2036; y++) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    sumYearSelect.appendChild(opt);
  }
  sumYearSelect.value = sumYear;
  sumYearSelect.addEventListener("change", () => {
    sumYear = parseInt(sumYearSelect.value, 10);
    monthLabel.textContent = getMonthLabel(sumMonth, sumYear);
    renderSummary();
  });

  document.getElementById("prevMonthSum").addEventListener("click", () => {
    sumMonth--;
    if (sumMonth < 0) { sumMonth = 11; sumYear--; }
    monthLabel.textContent = getMonthLabel(sumMonth, sumYear);
    sumYearSelect.value = sumYear;
    renderSummary();
  });
  document.getElementById("nextMonthSum").addEventListener("click", () => {
    sumMonth++;
    if (sumMonth > 11) { sumMonth = 0; sumYear++; }
    monthLabel.textContent = getMonthLabel(sumMonth, sumYear);
    sumYearSelect.value = sumYear;
    renderSummary();
  });
}

function renderSummary() {
  const members = getMembers();
  const key = collectionKey(sumMonth, sumYear);
  const cols = getCollections();
  const paidIds = cols[key] || [];

  let expected = 0, collected = 0;
  members.forEach(m => {
    expected += m.amount;
    if (paidIds.includes(m.id)) collected += m.amount;
  });

  document.getElementById("sumExpected").textContent = "₹" + expected.toLocaleString("en-IN");
  document.getElementById("sumCollected").textContent = "₹" + collected.toLocaleString("en-IN");
  document.getElementById("sumPending").textContent = "₹" + (expected - collected).toLocaleString("en-IN");
  document.getElementById("sumPaid").textContent = paidIds.length;
  document.getElementById("sumUnpaid").textContent = members.length - paidIds.length;
  const pct = expected ? Math.round((collected / expected) * 100) : 0;
  document.getElementById("sumPercent").textContent = pct + "%";
  document.getElementById("progressPct").textContent = pct + "%";
  document.getElementById("progressFill").style.width = pct + "%";

  // Year overview
  document.getElementById("sumYearSelect").value = sumYear;
  const overview = document.getElementById("yearOverview");
  overview.innerHTML = "";
  MONTHS.forEach((m, i) => {
    const mk = collectionKey(i, sumYear);
    const monthPaidIds = cols[mk] || [];
    let monthCollected = 0;
    members.forEach(mem => {
      if (monthPaidIds.includes(mem.id)) monthCollected += mem.amount;
    });
    const mpct = expected ? Math.round((monthCollected / expected) * 100) : 0;

    const block = document.createElement("div");
    block.className = "month-block";
    block.innerHTML = `
      <div class="mb-name">${m}</div>
      <div class="mb-amount">₹${monthCollected.toLocaleString("en-IN")}</div>
      <div class="mb-pct">${mpct}%</div>
    `;
    block.addEventListener("click", () => {
      sumMonth = i;
      document.getElementById("monthLabelSum").textContent = getMonthLabel(sumMonth, sumYear);
      document.getElementById("sumYearSelect").value = sumYear;
      renderSummary();
    });
    overview.appendChild(block);
  });
}

// ===== MEMBERS PAGE =====
function setupMembersPage() {
  // FAB
  document.getElementById("btnAddMember").addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = "Add Member";
    document.getElementById("editMemberIndex").value = "";
    document.getElementById("mId").value = "";
    document.getElementById("mName").value = "";
    document.getElementById("mAmount").value = "";
    document.getElementById("mId").disabled = false;
    document.getElementById("memberSheet").classList.remove("hidden");
  });

  // Sheet scrim close
  document.getElementById("sheetScrim").addEventListener("click", () => {
    document.getElementById("memberSheet").classList.add("hidden");
  });

  // Cancel
  document.getElementById("btnCancelModal").addEventListener("click", () => {
    document.getElementById("memberSheet").classList.add("hidden");
  });

  // Save
  document.getElementById("btnSaveModal").addEventListener("click", () => {
    const id = document.getElementById("mId").value.trim();
    const name = document.getElementById("mName").value.trim().toUpperCase();
    const amount = parseInt(document.getElementById("mAmount").value, 10);

    if (!id || !name || !amount || amount <= 0) {
      showToast("Please fill all fields correctly");
      return;
    }

    const members = getMembers();
    const editIdx = document.getElementById("editMemberIndex").value;

    if (editIdx !== "") {
      // Edit - find by original ID
      const origId = members[editIdx].id;
      const member = members.find(m => m.id === origId);
      if (member) {
        member.id = id;
        member.name = name;
        member.amount = amount;
      }
      showToast("Member updated");
    } else {
      // Check duplicate
      if (members.some(m => m.id === id)) {
        showToast("Member ID already exists");
        return;
      }
      members.push({ id, name, amount });
      showToast("Member added");
    }

    saveMembers(members);
    document.getElementById("memberSheet").classList.add("hidden");
    renderMemberManage();
    renderCollectList(document.getElementById("searchInput").value);
  });

  // Search
  document.getElementById("memberSearch").addEventListener("input", () => {
    renderMemberManage();
  });
}

function renderMemberManage() {
  const members = getMembers();
  const filter = document.getElementById("memberSearch").value.toLowerCase();
  const list = document.getElementById("memberManageList");
  list.innerHTML = "";

  members.forEach((m, i) => {
    if (filter && !m.name.toLowerCase().includes(filter) && !m.id.toLowerCase().includes(filter)) return;

    const card = document.createElement("div");
    card.className = "manage-card";
    card.innerHTML = `
      <div class="member-avatar">${escapeHtml(m.name.charAt(0))}</div>
      <div class="manage-info">
        <div class="member-name">${escapeHtml(m.name)}</div>
        <div class="member-id">${escapeHtml(m.id)} &bull; ₹${m.amount.toLocaleString("en-IN")}/mo</div>
      </div>
      <div class="manage-actions">
        <button class="btn-icon btn-edit" data-id="${escapeHtml(m.id)}">Edit</button>
        <button class="btn-icon btn-delete" data-id="${escapeHtml(m.id)}">Del</button>
      </div>
    `;

    card.querySelector(".btn-edit").addEventListener("click", function () {
      const memberId = this.dataset.id;
      const allMembers = getMembers();
      const idx = allMembers.findIndex(mem => mem.id === memberId);
      const member = allMembers[idx];
      document.getElementById("modalTitle").textContent = "Edit Member";
      document.getElementById("editMemberIndex").value = idx;
      document.getElementById("mId").value = member.id;
      document.getElementById("mId").disabled = true;
      document.getElementById("mName").value = member.name;
      document.getElementById("mAmount").value = member.amount;
      document.getElementById("memberSheet").classList.remove("hidden");
    });

    card.querySelector(".btn-delete").addEventListener("click", function () {
      const memberId = this.dataset.id;
      const allMembers = getMembers();
      const member = allMembers.find(mem => mem.id === memberId);
      if (confirm(`Delete ${member.name}?`)) {
        const updated = allMembers.filter(mem => mem.id !== memberId);
        saveMembers(updated);
        renderMemberManage();
        renderCollectList(document.getElementById("searchInput").value);
        showToast("Member deleted");
      }
    });

    list.appendChild(card);
  });
}

// ===== HISTORY PAGE =====
function setupHistoryPage() {
  renderHistoryList();
}

function renderHistoryList() {
  const history = getHistory();
  const members = getMembers();
  const list = document.getElementById("historyList");
  const empty = document.getElementById("historyEmpty");
  list.innerHTML = "";

  if (history.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  history.forEach((entry, idx) => {
    const m = members.find(mem => mem.id === entry.memberId);
    const name = m ? m.name : entry.memberId;
    const initials = name.charAt(0);
    const [y, mo] = entry.month.split("-");
    const monthName = MONTHS[parseInt(mo, 10) - 1];
    const date = new Date(entry.date);
    const dateStr = date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
      <div class="member-avatar paid">${escapeHtml(initials)}</div>
      <div class="member-info">
        <div class="member-name">${escapeHtml(name)}</div>
        <div class="member-id">${monthName} ${y} &bull; ${dateStr}</div>
        <div class="member-amount">₹${(entry.amount || 0).toLocaleString("en-IN")}</div>
      </div>
      <div class="member-actions">
        <button class="btn-collect unpay" data-idx="${idx}">Undo</button>
      </div>
    `;
    card.querySelector(".btn-collect").addEventListener("click", function () {
      const i = parseInt(this.dataset.idx, 10);
      deleteFromHistory(i);
      toast("Collection undone");
      renderHistoryList();
    });
    list.appendChild(card);
  });
}

// ===== BACKUP =====
function setupBackup() {
  // Export JSON
  document.getElementById("btnExport").addEventListener("click", () => {
    const data = {
      members: getMembers(),
      collections: getCollections(),
      exportDate: new Date().toISOString(),
      organization: "Ekata Unnayan Sangstha"
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `EUS_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Backup downloaded");
  });

  // Import JSON
  document.getElementById("btnImport").addEventListener("click", () => {
    document.getElementById("importFile").click();
  });

  document.getElementById("importFile").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.members && data.collections) {
          // Migrate old index-based collections to ID-based
          const migrated = {};
          Object.keys(data.collections).forEach(key => {
            migrated[key] = data.collections[key].map(item => {
              if (typeof item === "string") return item;
              // Old format: index-based
              return data.members[item]?.id || "";
            }).filter(Boolean);
          });
          if (confirm(`Import data from ${data.exportDate || 'unknown date'}?\nThis will REPLACE all current data.`)) {
            saveMembers(data.members);
            saveCollections(migrated);
            renderCollectList();
            renderMemberManage();
            showToast("Data imported");
          }
        } else {
          showToast("Invalid backup file");
        }
      } catch {
        showToast("Error reading file");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  });

  // Export Excel
  document.getElementById("btnExportExcel").addEventListener("click", exportExcel);

  // Clear all
  document.getElementById("btnClearAll").addEventListener("click", () => {
    if (confirm("DELETE ALL DATA? This cannot be undone!")) {
      if (confirm("Are you absolutely sure?")) {
        localStorage.removeItem(STORAGE_MEMBERS);
        localStorage.removeItem(STORAGE_COLLECTIONS);
        localStorage.removeItem(STORAGE_HISTORY);
        location.reload();
      }
    }
  });
}

function exportExcel() {
  const members = getMembers();
  const cols = getCollections();

  let csv = "\uFEFF";
  csv += "EUS MONTHLY COLLECTION RECORD\n";
  csv += "SL No,Member ID,Member Name,Monthly (Rs)";

  const allKeys = Object.keys(cols).sort();
  const monthCols = new Set();
  allKeys.forEach(k => {
    const [y, m] = k.split("-");
    monthCols.add(`${MONTHS[parseInt(m, 10) - 1]} ${y}`);
  });

  if (monthCols.size === 0) {
    MONTHS.forEach(m => monthCols.add(`${m} ${currentYear}`));
  }

  const sortedCols = [...monthCols].sort((a, b) => {
    const [am, ay] = a.split(" ");
    const [bm, by] = b.split(" ");
    const ai = MONTHS.indexOf(am);
    const bi = MONTHS.indexOf(bm);
    return (parseInt(ay, 10) - parseInt(by, 10)) || (ai - bi);
  });

  sortedCols.forEach(mc => csv += "," + mc);
  csv += ",Total Collected\n";

  members.forEach((m, i) => {
    csv += `${i + 1},"${m.id}","${m.name}",${m.amount}`;
    let total = 0;
    sortedCols.forEach(mc => {
      const [monthName, yearStr] = mc.split(" ");
      const mIdx = MONTHS.indexOf(monthName);
      const y = parseInt(yearStr, 10);
      const key = collectionKey(mIdx, y);
      const paid = cols[key] && cols[key].includes(m.id);
      csv += "," + (paid ? m.amount : "");
      if (paid) total += m.amount;
    });
    csv += "," + total + "\n";
  });

  csv += ",,,TOTAL";
  sortedCols.forEach(mc => {
    const [monthName, yearStr] = mc.split(" ");
    const mIdx = MONTHS.indexOf(monthName);
    const y = parseInt(yearStr, 10);
    const key = collectionKey(mIdx, y);
    const paidList = cols[key] || [];
    let monthTotal = 0;
    paidList.forEach(pid => {
      const mem = members.find(m => m.id === pid);
      if (mem) monthTotal += mem.amount;
    });
    csv += "," + monthTotal;
  });
  let grandTotal = 0;
  Object.values(cols).flat().forEach(pid => {
    const mem = members.find(m => m.id === pid);
    if (mem) grandTotal += mem.amount;
  });
  csv += "," + grandTotal + "\n";

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `EUS_Collection_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Excel downloaded");
}

// ===== TOAST =====
function showToast(msg) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ===== SERVICE WORKER =====
function setupServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(reg => {
      reg.addEventListener("updatefound", () => {
        const newWorker = reg.installing;
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            toast("New version available! Refresh to update.");
          }
        });
      });
    }).catch(() => {});
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) { refreshing = true; window.location.reload(); }
    });
  }
}

// ===== INSTALL PROMPT =====
let deferredPrompt;
const installBtn = document.getElementById("installBtn");
installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "flex";
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === "accepted") {
    toast("App installed!");
  }
  deferredPrompt = null;
  installBtn.style.display = "none";
});

window.addEventListener("appinstalled", () => {
  installBtn.style.display = "none";
  deferredPrompt = null;
});
