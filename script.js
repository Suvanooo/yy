const febHolidays = [
    "Dear chameleon,",
    "First of all, jada mysterious banne ki koii zarurat nhi ",
    "because",
    "tumari aankhe sab bta deti hai",
    "And of course...",
    "vo perspective glass hamesha lagaya karo ",
    "unse aankhe protect rhti hai 👀",
    "sorry tumne mna kiya tha lekin fir bhi  ",
    "ankhe tumari jada hai usse jiski tum tarrif kar rhi thi ,",
    "pta nhi lekin chsma+chameleon=you 💕",
    "filhall DM karke tum bta skti ho agar marzi ho apki tou ",
    "♥️BADTE BADTE DARD DAWA BAN JATI HAI♥",
   "TUME KAISE PTA ",
  "bAkI BAAR HAQ mat kahna ",
    "BY THE WAY....",
    "TUM AAISE ACT kyu karti ho jaise tume kuch pta nhi ",
    "Aur sab bhool gyi hoo ",
    "kuch bhi yaad nhi ❤️",
    "jabki tume ",
    "sab kuch pta hota hai....",
    "aur han moonset wala moon YELLOW HI HOTA HAI ",
    "6 AM PE kon moon ko dekhta hai...(execpt us),",
    "average timing moon rising 7:20 pm and momoomoonet	6:30 am↑ 2",
    "bakki AI ",
    "tum tou tum hooo ",
    "with",
    "EMOTIONS",
    "AUR EMOTIONS HAI PIE KI VALUE JITNE AND THE VALUE OF PIE IS=3.1415926535 8979323846 2643383279 5028841971 6939937510
5820974944 5923078164 0628620899 8628034825 342117067",
    "AGAGR EMOTIONS hii nhi tou ai nhi hoo tum ",
    "aur ,",
    "human and you can understad shyari and gazzals..."
    "btw" ,
      "MUDATE" ,
     "ka matlab ho pta hai na tume" ,
      "mudate lag rhi hai 5march ke baad se"
      "aur paka hai na tum EID KE baad hii school aaogi",
        "khair yeh jaiko kon hai"
         "muje pta nhi hai na isiliye"
          "tumne weight ke liye mna kiya tha aur zulfoon ke liye"
           "correction",
            "-42kg ig...",
            "aur nazar wazar kuch nhi hota",
      "agar hota hai tou",
"can you explain" ,
  "good night 🌃",
  "because 3pm ke baad tum dekhogi issko",
             "okkk😴",
          cons ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
