import './App.css'

function App() {

  return (
      <div className='bg-slate-800 m-h-screen flex justify-center px-4'>     
        <main className='my-10 w-full md:max-w-2xl flex flex-col p-8'>
          <h1 className="text-white">
            Programadores
          </h1>
          <form className='flex flex-col'>
            <label className='text-slate-50 font-medium'>Nome:</label>
            <input 
              type="text" 
              placeholder='Digite o seu nome'
              className='w-full mb-5 p-2 rounded'
            />
            <label className='text-slate-50 font-medium'>Foto:</label>
            <input 
              type="text" 
              placeholder='Coloque a url de uma foto'
              className='w-full mb-5 p-2 rounded'
            />
            <label className='text-slate-50 font-medium'>Ocupação:</label>
            <input 
              type="text" 
              placeholder='Digite a sua ocupação'
              className='w-full mb-5 p-2 rounded'
            />
            <label className='text-slate-50 font-medium'>Linkedin:</label>
            <input 
              type="text" 
              placeholder='Coloque a url do seu linkedin'
              className='w-full mb-5 p-2 rounded'
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
          </main>   
      </div>
  )
}

export default App
