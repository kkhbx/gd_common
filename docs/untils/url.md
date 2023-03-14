# url 相关函数

地址相关操作，包括获取参数等

## 参数字符串转换成对象形式

```js
/**
 * 参数字符串转换成对象形式，如：a=1&b=2 转换成 {a:1, b:2}
 * @param {String} str 需要转换的字符串
 * @param {String} [sep=&] 连接符，可选，默认 &
 * @param {String} [eq==] 键值间隔符，可选，默认 =
 * @returns {Object}
 */
export function parse(str, sep, eq) {
  const obj = {}
  str = (str || location.search).replace(/^[^]*\?/, '')
  sep = sep || '&'
  eq = eq || '='
  let arr
  const reg = new RegExp('(?:^|\\' + sep + ')([^\\' + eq + '\\' + sep + ']+)(?:\\' + eq + '([^\\' + sep + ']*))?', 'g')
  while ((arr = reg.exec(str)) !== null) {
    if (arr[1] !== str) {
      obj[decodeURIComponent(arr[1])] = decodeURIComponent(arr[2] || '')
    }
  }
  return obj
}
// 使用
this.parse(str, sep, eq)
```

## 键值对转换成查询字符串

```js
/**
 * 键值对转换成查询字符串
 * @param {object} query 键值对，对象
 * @returns {string} 查询参数字符串
 */
export function stringify(query) {
  const array = []
  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      array.push([key, encodeURIComponent(query[key])].join('='))
    }
  }
  return array.join('&')
}
// 使用
this.stringify(query)
```

## 获取 url 的 Host 段

```js
/**
 * 获取url的Host段，
 * @param {string} url URL地址
 * @returns {string} Host
 *
 * @example
 *
 * let url = 'http://127.0.0.1:8001/api/abc/123'
 * getHost(url) // -> http://127.0.0.1:8001/
 */
export function getHost(url) {
  const matches = url.match(hostRegex)
  if (matches) {
    return matches[0]
  }
  return ''
}
// 使用
this.getHost(url)
```

## path 中提取参数对象

```js
/**
 * 从url 的 path中提取参数对象，
 * @param {string} regexUrl url path规则表达式
 * @param {string} url URL
 * @returns {object} 参数键值对
 *
 * @example
 *
 * let regexUrl = '/api/:type/:id' ,
 *     url = '/api/abc/123'
 * getParams(regexUrl, url) // -> {type: 'abc', id: 123}
 *
 */
export function getParams(regexUrl, url) {
  const keys = [],
    host = getHost(regexUrl)
  // 先排除host段，因为host段的端口号与参数写法有冲突
  const regex = pathToRegex(regexUrl.replace(host, ''), keys)
  // 排除url参数部分
  const matches = regex.exec(url.split('?')[0].replace(host, ''))
  const params = {}
  if (matches && matches.length > 0) {
    keys.forEach((key, index) => {
      params[key.name] = matches[index + 1]
    })
  }
  return params
}
// 使用
this.getParams(regexUrl, url)
```
