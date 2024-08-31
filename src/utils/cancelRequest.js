// 页面请求的重复判断和跳转路由后的取消请求设置

// pengdingList: 盛放接口处于pengding（请求中）状态的容器，key是接口唯一标识，value是该接口的cancel请求的方法

// getFetchKey: 生成接口唯一标识的方法

// addPending：把请求加到pending容器的方法

// removePending：把请求从pengding容器中移除的方法

// cancelPending：取消请求并从pengding中移除的方法

/**
 * 重复请求取消上次请求
 */
import axios from 'axios'
// 存储pengding请求容器
export const pendingList = new Map()
// 生成各个请求标识
export const getFetchKey = (config) => {
    const { url, data, method } = config
    let token
    if (method === 'get') {
        token = [method, url].join('&')
    } else {
        token = [method, url, JSON.stringify(data)].join('&')
    }
    return token
}
// 添加pengding请求
export const addPending = (config) => {

    const fetchKey = getFetchKey(config)
    if (fetchKey) {
        config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
            if (!pendingList.has(fetchKey)) {
                pendingList.set(fetchKey, cancel)
            }
        })
    }
}
// 移除pengding请求
export const removePending = (config) => {
    const fetchKey = getFetchKey(config)
    if (fetchKey) {
      if (pendingList.has(fetchKey)) {
        pendingList.delete(fetchKey)
      }
    }
}
// 取消请求
export const cancelPending = (config) => {
    const fetchKey = getFetchKey(config)
    if (fetchKey) {
      if (pendingList.has(fetchKey)) {
        const cancel = pendingList.get(fetchKey)
        cancel('cancel')
        pendingList.delete(fetchKey)
      }
    }
}

