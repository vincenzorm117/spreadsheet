


const subObject = (obj, keys) => keys.reduce((acc, key) => (acc[key] = obj[key], acc), {})


export {
    subObject
}