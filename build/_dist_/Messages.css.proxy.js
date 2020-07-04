
const code = ".badge.svelte-1tpsxuz{display:inline-block;position:absolute;top:0;background-color:#4285f4;color:#d7e6fd;right:0;border-radius:9999px;font-size:12px;min-width:18px;line-height:18px;min-height:18px;text-align:center}.messages.svelte-1tpsxuz{min-width:400px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);