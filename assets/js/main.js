/* Кнопки копирования команд из соответствующего блока. */
document.querySelectorAll('h3 button').forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(b.closest('.blk').querySelector('pre').textContent);b.textContent='Скопировано';setTimeout(()=>b.textContent='Копировать',1500)})
