import { ChangeEvent, useEffect, useMemo, useState } from "react"

const initialValues = () => {
  return {
      real: 0,
      peso: 0,
      resultado: 0
  }
}

export default function  Kpi (){
  const [values, setValue] = useState(initialValues)
  const [resultado, setResultado] = useState(0)
  

  useEffect(() => {
    if (values.real > 0) {
      const resultado = (values.real * values.peso) / 100;
      
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
    value={values.real}
    
    onChange={(e)=> onChange(e)} 
    placeholder="seu real %"
    />

<input 
    type="text" 
    value={values.peso} 
    name="numero2"
    onChange={(e)=> onChange(e)} 
    placeholder="peso do kpi"
    />

   
    <p>R$ {resultado}</p>
    
    </>
  )
}