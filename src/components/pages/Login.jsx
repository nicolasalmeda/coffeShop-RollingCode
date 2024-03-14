import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { iniciarSesion } from '../../helpers/queries';
import Swal from "sweetalert2";
import "../../css/login.css"

const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario)
    //pedir a la api verificar si existe ese usuario
    if(iniciarSesion(usuario)){
      Swal.fire({
        title: "Bienvenido",
        text: `Ingresaste al sistema rollingCoffee`,
        icon: "success",
      });
      setUsuarioLogueado(usuario.email)
      navegacion('/administrador')
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `campo/s invalido/s`,
        icon: "error",
      });
    }
  };

  return (
    <section className="container mainContainer loginContainer h-100">
      <h4 className="mt-1">Login</h4>
      <hr />
      <Form className="my-4 formContainer" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mt-3 mb-5 w-75 " controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: ejemplo@email.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: { value:/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
              message: "Debe ingresar un email valido",
                        },
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 40,
                message: "Debe ingresar como maximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-5 mt-3 w-75" controlId="formPassword">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            {...register("password", {
              required: "La contraseña es obligatorio",
              minLength: {
                value: 5,
                message: "Debe ingresar una contraseña mayor a 5 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Debe ingresar una contraseña menor a 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  )
}

export default Login