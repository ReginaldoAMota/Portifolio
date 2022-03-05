export const getUsers = async () => {
  const result = await fetch('https://randomuser.me/api/?seed=foobar')
  const data = await result.json()
  return data.results
}
