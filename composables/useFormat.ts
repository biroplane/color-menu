export const useFormat=()=>{
  const money=(d:string|number)=>{
    const m = typeof d ==='string' ? parseFloat(d):d
    return Intl.NumberFormat('it-IT',{style:"currency",currency:"EUR"}).format(m)
  }
  return{
    money
  }
}