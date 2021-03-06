/**
     * Map:键值对的集合，但是键的范围不仅仅局限于字符串（对象也可以）
     * 1.初始化
     * eg:var map=new Map([["name","tom"],["age","18"]]);
     * 2.map中只要内存地址不一致，就是不同的键,同样值的两个实例也不一样
     * var m=new Map();
     * var k1=["1"];
     * var k2=["1"];
     * m.set(k1,11)
     * m.set(k2,22);
     * console.log(m)//Map(3) {Object {p: "11"} => "content", ["1"] => 11, ["1"] => 22}
     * 3.size
     * 4.set(k,v);
     * 5.get(k);
     * 6.has(k);
     * 7.delete(k);
     * 8.clear();
     * 9.遍历方法
     * 9.1.keys()键名遍历器
     * 9.2.values()键值遍历器
     * 9.3.entries()成员遍历器
     * 9.4.forEach()
     * eg:for(let key of map.keys())
     * eg：for(let key of map.values())
     * eg:
     * for(let obj of m.entries()) console.log(obj[0],obj[1])
     * map.forEach(function(v,k,map){},context)
     * 注意上面第一个是value
     * */
// const o = { text: 'hellp' }
const m = new Map([ [ 'name', 'tom' ], [ 'age', '18' ] ]);
// 任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数
var o = { p: '11' }
m.set(o, 'content')
console.log(m.has(o))
console.log(m.get(o))
