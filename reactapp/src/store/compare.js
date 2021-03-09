// import { resin } from './resin.json';

const State = {
    filter: {},
    items: [],
    item: {},
    names: {},
};


const Compare = store => {
    store.on('@init', () => ({ compare: { ...State } }))

    store.on('add/compare', ({ compare, }, payload) => {
        const { items } = compare
        if (items.filter(v => v.name === payload.name).length){
            return ({ compare: { ...compare, items: items.filter(v => v.name !== payload.name) } })
        }else{
            if (payload.params) {
                payload.params.forEach(v => compare.names[v.name] = true)
            }
            return ({ compare: { ...compare, items: [...items, payload] } })
        }
        
    })
    // store.on('filter', ({ compare }, payload) => {
    //     console.log(payload);
    //     return ({ compare: { ...compare, filter: { ...compare.filter } } })
    // })

}

export default Compare;