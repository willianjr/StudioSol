//Api usando Fetch do JS
export default async (endpoint) => {
  const baseUrl = 'https://us-central1-ss-devops.cloudfunctions.net/'
  const dataApi = await fetch(`${baseUrl}${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      return { ...data, error: false }
    })
    .catch((error) => {
      return { ...data, error: true }
    })

  return dataApi
}
