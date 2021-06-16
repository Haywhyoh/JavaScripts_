function string_animation (demo){
    const text = document.getElementById('demo');
    const doc_text = text.childNodes[0];
    let element = doc_text.data;
    
    setInterval(() => {
        element = element[element.length - 1] + element.substring(0, element.length -1);
        doc_text.data = element;
    }, 100);
}

string_animation();