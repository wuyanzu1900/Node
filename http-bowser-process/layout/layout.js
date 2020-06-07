// 样式 格式化处理
// font-size:bold
function getStyle(element){
    if(!element.style){
        element.style = {};
    }
    else{
        return element.style;
    }
    for (let prop in element.computerStyle){
        let value = element.computerStyle[prop]
        if(value.includes('px')){
            value = parseInt(value);
        }
        element.style[prop] = value;
    }
    return element.style;
}
function layout(element){
    // 获取 computerStyle
    if(!element.computerStyle)return;
    let elementStyle = getStyle(element);
    if(elementStyle.display !=='flex')return;
    // 主轴方向剩余空间
    let mainSpace = elementStyle.width;
    for(let child of elementStyle.children){
        let childStyle = getStyle(child);
        // mainSpace -= 
    }
}

module.export = layout;