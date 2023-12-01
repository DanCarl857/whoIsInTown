export const processQuery = (query: string): string => {
    let p = query.replace('/', '%252F')
    let q = p.replace('?', '%253F')
    let r = q.replace('\"', '%27C')
    return r
}