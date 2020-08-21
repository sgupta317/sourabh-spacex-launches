import 'isomorphic-unfetch';

export const request = async () => {
  const res = await fetch(
    'https://api.spaceXdata.com/v3/launches?limit=100')
  const json = await res.json()
  return json
}

export const getYears = data => {
  let year = []
  data.forEach(item => {
    if (year.indexOf(item.launch_year) == -1) {
      year.push(item.launch_year)
    }
  })
  return year
}
