export function useTags() {
  const prismic = usePrismic()
  const tags = ref<string[][]>()
  const load = async () => {
    const { data, error } = await useAsyncData('all_products', () => prismic.client.getAllByType('product'))
    if (error.value) {
      console.log('ERRORE USE TAGS', error)
      return error
    }
    const _tags = data.value?.map(p => p.tags.flat(2))
    const _t = [...new Set (_tags?.flat(2))].sort()
    tags.value = _tags
    console.log('-----------TAGS ', _tags, _t)
    return tags
  }
  return {
    tags,
    load,
  }
}
