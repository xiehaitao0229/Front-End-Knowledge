/**
 * 要实现一个单例模式，一个经典的方式是创建一个类，类中又一个方法能创建该类的实例对象，还有一个标记，
 * 记录是否已经创了过了实例对象。如果对象已经存在，就返回第一次实例化对象的引用。
 */

//  es6单例模式
class Singleton{
    constructor(name,age){
       this.name = name;
       this.age = age;
       this.instance = null;
    }
    static getInstance(name,age){
        if(!this.instance){
            this.instance = new Singleton(name,age);
        }
        return this.instance
    }
}

//  es5单例模式
function Singleton(name,age){
    this.name = name;
    this.age = age;
    this.instance = null;  // 单例对象的实例
}

//  提供一个静态方法
Singleton.getInstance = function(name,age){
    if(!this.instance){
        this.instance = new Singleton(name,age);
    }
    return this.instance;
}