export function useMenu() {
  const loadCategories = async () => {
    const { data } = await useAsyncData('[categories]', () => queryCollection('product').select('category').all())
    console.log('CATEGORIES ', data.value)
    return data
  }

  return {
    loadCategories,
  }
}
