
import './App.css'
import { useForm } from 'react-hook-form'


function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const currentEmail = watch('email')


  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nombre:
          <input {...register("name", { required: true })} />
        </label>
        {errors.name && <p>El campo name es requerido</p>}

        <br />

        <label>
          Email:
          <input {...register('email', {
            required: true, pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Formato de email incorrecto'
            }
          })} />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
        <br />

        <button type='submit'> Enviar</button>
      </form>

    </>
  )
}

export default App
