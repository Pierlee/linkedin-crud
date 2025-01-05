import { FaPencil, FaTrash } from 'react-icons/fa6'
import './App.css'
import { api } from './services/api'
import { FormEvent, useEffect, useRef, useState } from 'react'

function App() {

  interface ProgrammerProps {
    id: string,    
    email: string,    
    name: string,
    linkedin: string,  
    position: string, 
    image: string,  
    created_at: string, 
    updated_at: string 
  }

  const [ programmer, setProgrammer ] = useState<ProgrammerProps[]>([])
  const [ isUpdate, setIsUpdate ] = useState<boolean>(true)

  const nameRef = useRef<HTMLInputElement | null>(null)
  const linkedinRef = useRef<HTMLInputElement | null>(null)
  const positionRef = useRef<HTMLInputElement | null>(null)
  const imageRef = useRef<HTMLInputElement | null>(null)

  const handleCustomer = async () => {
    const response = await api.get('/customers')
    console.log('API Response:', response.data);
    setProgrammer(response.data)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if(!nameRef.current?.value ||
      !linkedinRef.current?.value ||
      !positionRef.current?.value ||
      !imageRef.current?.value ) return

    const response = await api.post('./customer', {
      name: nameRef.current?.value,
      linkedin: linkedinRef.current?.value,
      position: positionRef.current?.value,
      image: imageRef.current?.value
    })

    setProgrammer((programmer) => [...programmer, response.data])

    nameRef.current.value = ''
    linkedinRef.current.value = ''
    positionRef.current.value = ''
    imageRef.current.value = ''
  }

  async function handleDelete(id: string){
    try{
      await api.delete('customer', {
        params: {
          id: id
        }
      })

      const allProgrammers = programmer.filter((programmer) => programmer.id !== id)
      setProgrammer(allProgrammers)

    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    handleCustomer()
  }, [])

  return (
      <div className='bg-slate-800 m-h-screen flex justify-center px-4'>     
        <main className='my-10 w-full md:max-w-2xl flex flex-col p-8'>
          <h1 className="text-white">
            Programadores
          </h1>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label className='text-slate-50 font-medium'>Nome:</label>
            <input 
              type="text" 
              placeholder='Digite o seu nome'
              className='w-full mb-5 p-2 rounded'
              ref={nameRef}
            />
            <label className='text-slate-50 font-medium'>Foto:</label>
            <input 
              type="text" 
              placeholder='Coloque a url de uma foto'
              className='w-full mb-5 p-2 rounded'
              ref={imageRef}
            />
            <label className='text-slate-50 font-medium'>Ocupação:</label>
            <input 
              type="text" 
              placeholder='Digite a sua ocupação'
              className='w-full mb-5 p-2 rounded'
              ref={positionRef}
            />
            <label className='text-slate-50 font-medium'>Linkedin:</label>
            <input 
              type="text" 
              placeholder='Coloque a url do seu linkedin'
              className='w-full mb-5 p-2 rounded'
              ref={linkedinRef}
            />
            <input 
              type='submit' 
              value="Cadastrar" 
              className='
                bg-blue-500 
                text-slate-100
                cursor-pointer
                w-full
                p-2
                rounded
                font-medium
                hover:opacity-80 duration-200
              '/>
          </form>

          <section className='flex flex-col my-12 gap-6'>
            {programmer.map((programmer)=>(                  
              <article 
                key={programmer.id}
                className='flex w-full bg-slate-100 p-2 rounded items-center gap-8 relative'
                >
                <header className='flex absolute items-center right-1 top-1 gap-2'>
                  <button className='w-7 h-7 items-center justify-center hover:scale-125 duration-200'>
                    <FaPencil size={18} />
                  </button>
                  <button className='w-7 h-7 items-center justify-center hover:scale-125 duration-200'>
                    <FaTrash size={18} color='red' onClick={() => handleDelete(programmer.id)}/>
                  </button>
                </header>

                <figure className='w-28 h-28'>
                  <img className='rounded-full' src={programmer.image} alt=''/>
                </figure>

                <div className='flex flex-col justify-center'>
                  <p>{programmer.name}</p>
                  <p>{programmer.position}</p>
                  <a 
                    href={programmer.linkedin} 
                    target='_blank'
                    className='hover:text-blue-500 duration-200'
                    >
                      Linkedin
                    </a>
                </div>
              </article>
            ))}
          </section>

          {isUpdate &&
            <section className='fixed bg-neutral-950/[.8] h-screen w-screen top-0 left-0 p-40'>
              <div className=''>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                  <label className='text-slate-50 font-medium'>Nome:</label>
                  <input 
                    type="text" 
                    placeholder='Digite o seu nome'
                    className='w-full mb-5 p-2 rounded'
                    ref={nameRef}
                  />
                  <label className='text-slate-50 font-medium'>Foto:</label>
                  <input 
                    type="text" 
                    placeholder='Coloque a url de uma foto'
                    className='w-full mb-5 p-2 rounded'
                    ref={imageRef}
                  />
                  <label className='text-slate-50 font-medium'>Ocupação:</label>
                  <input 
                    type="text" 
                    placeholder='Digite a sua ocupação'
                    className='w-full mb-5 p-2 rounded'
                    ref={positionRef}
                  />
                  <label className='text-slate-50 font-medium'>Linkedin:</label>
                  <input 
                    type="text" 
                    placeholder='Coloque a url do seu linkedin'
                    className='w-full mb-5 p-2 rounded'
                    ref={linkedinRef}
                  />
                  <input 
                    type='submit' 
                    value="Cadastrar" 
                    className='
                      bg-blue-500 
                      text-slate-100
                      cursor-pointer
                      w-full
                      p-2
                      rounded
                      font-medium
                      hover:opacity-80 duration-200
                    '/>
                </form>
              </div>
            </section>       
          }
        </main>   
      </div>
  )
}

export default App
