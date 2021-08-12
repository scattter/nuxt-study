export const getData = function($axios) {
  return $axios.get('/menu/tree').then(res => res.data.data)
}
