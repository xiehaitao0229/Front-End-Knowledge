/*
* 事件代理:
*   如果一个节点中的子节点是动态生成的,那么子节点需要注册事件的话应该注册在父节点上
* */

/*
*
*
<ul id="ul">
	<li>1</li>
    <li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ul>
<script>
	 let ul = document.querySelector('##ul')
	 ul.addEventListener('click', (event) => {
        console.log(event.target);
	})
</script>
* */

事件代理的方式相对于直接给目标注册事件来说,有以下优点
	 节省内存
	 不需要给子节点注销事件