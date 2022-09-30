


export const createId = ()=>{
    let id = 1;
    const create = () => {
        return id++
    }
    create()
}
