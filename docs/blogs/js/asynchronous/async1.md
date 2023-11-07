---
lang: zh-CN
title: promise 是什么时候将任务放在微任务队列中的？
description: 页面的描述
---

# promise是什么时候将任务放在微任务队列中的？

开始学习的时候有个疑惑，究竟是resolve() 时将任务放进微队列还是then() 时将任务放进微队列？
其实这两种情况都有可能，下面分析一下。

### 一、 使用 resolve 或 reject 函数来解决或拒绝 Promise 时，会触发微任务
      Promise 将任务放在微任务队列（Microtask Queue）的时机之一是在 Promise 的状态改变时，即从 pending（等待中）状态转换为 fulfilled（已解决）或 rejected（已拒绝）状态。当 Promise 的状态改变时，它会生成一个微任务，并将微任务放入微任务队列中。如果之前通过then()、catch()、finally()等方法注册了回调函数，那么这些回调函数会作为微任务放入微任务队列中。
注意：因为通常使用promise都是用来处理一些异步操作，所以通常then()、catch()、finally()等回调函数都是先于resolve() 或 reject() 执行之前组注册的。例如：

```js
const myPromise = new Promise((resolve, reject) => {
  // 异步操作
  if (/* 操作成功 */) {
    resolve("成功");
  } else {
    reject("失败");
  }
});

myPromise.then(result => {
  // 在这里处理成功情况
}).catch(error => {
  // 在这里处理失败情况
});

```
上述代码由于异步操作，所以then()、catch()、finally()等回调函数会先于resolve() 或 reject() 执行之前注册。这时候将任务放入微任务队列的时机就是resolve()或reject()。

### 二、 使用 then()、catch()、finally() 注册回调函数时，会触发微任务
      当使用then()、catch()、finally()等方法注册回调函数在resolve()或reject()之后，即promise状态改变之后，这时候将任务放入微任务队列的时机是在then()、catch()、finally()注册回调函数时。
比如下面这种情况：
```js
const myPromise = new Promise((resolve, reject) => {
  // 同步操作
  if (/* 操作成功 */) {
    resolve("成功");
  } else {
    reject("失败");
  }
});

myPromise.then(result => {
  // 在这里处理成功情况
}).catch(error => {
  // 在这里处理失败情况
});
```
如上述代码中，then()、catch()、finally()注册回调函数是在resolve()或reject()执行之后，即promise状态改变之后，这时候将任务放入微任务队列的时机是在then()、catch()、finally()注册回调函数时。


### 三、总结
当resolve() 或 reject()执行于then()、catch()、finally()注册之前，则将任务放入微任务队列的时机是then()、catch()、finally()注册时，
当resolve() 或 reject()执行于then()、catch()、finally()注册之后，则将任务放入微任务队列的时机是resolve()或reject()执行时。
