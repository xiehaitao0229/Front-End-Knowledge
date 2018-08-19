/*
* 事件触发三个阶段:
    事件触发有三个阶段
    document 往事件触发处传播,遇到注册的捕获事件会触发
    传播到事件触发处时触发注册的事件
    从事件触发处往 document 传播,遇到注册的冒泡事件会触发
事件触发一般来说会按照上面的顺序进行,但是也有特例,如果给一个目标节点同
时注册冒泡和捕获事件,事件触发会按照注册的顺序执行。
* */

// 以下会先打印冒泡然后是捕获
node.addEventListener('click',(event) =>{
    console.log('冒泡')
},false);
node.addEventListener('click',(event) =>{
    console.log('捕获 ')
},true)

/*
* 注册事件:
*   通常我们使用 addEventListener 注册事件,该函数的第三个参数可以是布尔
*   值,也可以是对象。对于布尔值 useCapture 参数来说,该参数默认值为 false 。
*   一般来说,我们只希望事件只触发在目标上,这时候可以使用 stopPropagation
*   来阻止事件的进一步传播。通常我们认为 stopPropagation 是用来阻止事件冒泡的,
*   其实该函数也可以阻止捕获事件。stopImmediatePropagation 同样也能实现阻止事件,
*   但是还能阻止该事件目标执行别的注册事件。
* */