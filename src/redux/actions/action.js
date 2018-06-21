export function getData (title, wish_count, collect_count, dataList) {
  console.log('我执行了getData')
  return {
    type: 'GET_DATA',
    PubSubList: {
      title,
      wish_count,
      collect_count,
      dataList
    }
  }
}