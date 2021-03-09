import { resin } from './resin.json';

const State = {
  filter: {},
  items: [],
  item: {},
  params: [],
  param: {},
};

const Edit = ({ resin }, id) => {
  return {
    resin:
    {
      ...resin,
      item: resin.items[id],
      params: resin.items[id].params ? resin.items[id].params : []
    }
  }
}

const replace = (arr, id, item) => {
  return arr.map((v, i) => (i === id ? { ...v, ...item } : v))
}

const Submit = ({ resin }, { id, item }) => {
  resin.item.params = resin.params
  if (id === "new") {
    return {
      resin: {
        ...resin,
        items: [...resin.items, item],
      }
    }
  }
  id = Number(id);
  return {
    resin: {
      ...resin,
      items: replace(resin.items, id, item),
    }
  }
}

const Resin = store => {
  store.on('@init', () => ({ resin: { ...State, ...resin } }))
  store.on('resin/paramAdd', ({ resin }) => {
    if (resin.param.name && resin.param.value) {
      return { resin: { ...resin, error: '', param: {}, params: [...resin.params, resin.param] } }
    }
    return { resin: { ...resin, error: "no name or value" } }
  });
  store.on('resin/paramUpdate', (store, payload) => {
    return store
  })

  store.on('resin/submit', Submit)
  store.on('resin/edit', Edit)
}

export default Resin;
