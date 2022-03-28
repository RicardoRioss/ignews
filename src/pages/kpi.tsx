import { ChangeEvent, useEffect, useMemo, useState } from "react"

const initialValues = () => {
  return {
      numero1: 0,
      numero2: 90,
      resultado: 0
  }
}

export default function  Kpi (){
  const [values, setValue] = useState(initialValues)
  const [resultado, setResultado] = useState(0)
  

  useEffect(() => {
    if (values.numero1 > 0) {
      const resultado = (values.numero1 * values.numero2) / 100;
      
      setResultado(resultado);
    }
  }, [values]);
  
  


  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValue({ ...values, [name]: Number(value.replace(/[^0-9]/g,'')) 
    ? Number(value.replace(/[^0-9]/g,'')) : 0 })
  }

  return (
    <>
    <input 
    type="number" 
    name="numero1"
    value={values.numero1}
    
    onChange={(e)=> onChange(e)} 
    placeholder="seu real %"
    />

<input 
    type="text" 
    value={values.numero2} 
    name="numero2"
    onChange={(e)=> onChange(e)} 
    placeholder="peso do kpi"
    />

   
    <p>R$ {resultado}</p>
    
    </>
  )
}