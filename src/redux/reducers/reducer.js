let initList = {
  title: ['xiaomi'],
  wish_count: [2],
  collect_count: [3],
  dataList: [{'value': 2, 'name': 'xiaomi'}]
}
export function reducer (state=initList, action) {
  console.log('reducer', action)
  switch (action.type) {
    case 'GET_DATA':
      return {
        PubSubList: action.PubSubList
      }
    default:
      return {
        PubSubList: state
      };
  }
}