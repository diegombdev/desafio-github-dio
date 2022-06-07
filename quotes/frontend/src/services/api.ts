export function api(url: string) {    
    const response = fetch(`http://localhost:3001/quote/${url}`)
    .then(res => res.json())
    .then(res => {return res})

    return response
}