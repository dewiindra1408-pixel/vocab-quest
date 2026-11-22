// Membuat docs/daftar-unit.md otomatis dari src/data.js
// Cara pakai:  node tools/kurikulum.js
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const g = {};
new Function("g", fs.readFileSync(path.join(root, "src", "data.js"), "utf8")
  .replace(/^const (SECTIONS|UNITS|SENT|GRAM|READ|CLOSE)=/gm, "g.$1=") )(g);
const kind = { pic: "bergambar", exp: "ungkapan", mix: "campuran" };
const JEN = { sd: "SD (kelas 3–6)", smp: "SMP", sma: "SMA", kuliah: "Kuliah" };
const out = []; let tw = 0, tu = 0;
for (const lv of Object.keys(JEN)) {
  out.push(`## ${JEN[lv]}\n`);
  for (const s of g.SECTIONS.filter(x => x.lv === lv)) {
    let sub = 0;
    const rows = s.units.map(u => { const U = g.UNITS[u]; const n = U.words.split("\n").length; sub += n; tu++;
      return `| ${u} | ${U.idn} · ${U.en} | ${kind[U.kind]} | ${n} |`; });
    const close = (g.CLOSE || []).find(c => c.region === s.id);
    if (close) rows.push(`| (akhir) | Bacaan Penutup · ${close.title} | reading | ${close.q.trim().split("\n").length} soal |`);
    tw += sub;
    out.push(`### ${s.icon} ${s.idn} (${s.en}) — ${sub} kata\n\n| Unit | Nama | Jenis | Isi |\n|---|---|---|---|\n${rows.join("\n")}\n`);
  }
  const gr = (g.GRAM || []).filter(x => x.lv === lv);
  if (gr.length) out.push(`### ✏️ Grammar ${JEN[lv]}\n\n| Unit | Topik | Soal |\n|---|---|---|\n${gr.map(x => `| ${x.id} | ${x.idn} · ${x.en} | ${x.items.trim().split("\n").length} |`).join("\n")}\n`);
  const rd = (g.READ || []).filter(x => x.lv === lv);
  if (rd.length) out.push(`### 📖 Reading ${JEN[lv]}\n\n| Unit | Bacaan | Soal |\n|---|---|---|\n${rd.map(x => `| ${x.id} | ${x.idn}: ${x.texts.map(t => t.title).join("; ")} | ${x.texts.reduce((a, t) => a + t.q.trim().split("\n").length, 0)} |`).join("\n")}\n`);
}
const head = `# Daftar Unit Vocab Quest\n\nDibuat otomatis oleh \`tools/kurikulum.js\`.\n\n- Kosakata: **${g.SECTIONS.length} wilayah · ${tu} unit · ${tw} kata & ungkapan**\n- Grammar: **${(g.GRAM||[]).length} unit**\n- Reading: **${(g.READ||[]).length} unit** (${(g.READ||[]).reduce((a,x)=>a+x.texts.length,0)} bacaan) + **${(g.CLOSE||[]).length} bacaan penutup**\n\n`;
fs.writeFileSync(path.join(root, "docs", "daftar-unit.md"), head + out.join("\n"));
console.log("docs/daftar-unit.md diperbarui");
