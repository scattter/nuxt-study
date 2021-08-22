export const getData = function($axios) {
  return $axios.get('/nav/menu/tree').then(res => res.data.data)
}
