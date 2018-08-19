export default class Elememnt {
    /**
     * @param {String} tag 'div'
     * @param {Object} props { class: 'item' }
     * @param {Array} children [ Element1, 'text']
     * @param {String} key option
     */
     constructor(tag,props,children,key){
         this.tag = tag;
         this.props = props;
         if(Array.isArray(children)){
             this.children = children;
         }else if(this.isString(children)){
             this.key = children;
             this.children = null;
         }
         if(key){
             this.key = key;
         }
    }

    //  判断是否是字符串
    isString(str){
         return (typeof str=='string') && str.constructor==String;
    }

    //  渲染
    render(){
         let root = this._createElement(
             this.tag,
             this.props,
             this.children,
             this.key
         )
        document.body.appendChild(root);
         return root;
    }

    //  创建
    create(){
         return this._createElement(this.tag,this.props,this.children,this.key);
    }

    //  创建节点
    _createElement(tag,props,children,key){
         //  通过tag创建节点
        let el = document.createElement(tag);
        //  设置节点属性
        for(const key in props){
            if(props.hasOwnProperty(key)){
                const value = props[key];
                el.setAttribute(key,value);
            }
        }
        //  设置key的标识
        if(key){
            el.setAttribute('key',key)
        }
        //  递归添加子节点
        if(children){
            children.forEach(element=>{
                 let children;
                 if(element instanceof Elememnt){
                     children = this._createElement(
                         element.tag,
                         element.props,
                         element.children,
                         element.key
                     )
                 }else{
                     children = document.createTextNode(element);
                 }
                 el.appendChild(children);
            })
        }
        return el;
    }
}