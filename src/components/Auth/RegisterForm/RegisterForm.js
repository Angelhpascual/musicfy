import React from "react"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { auth } from "../../../utils/firebase"

import "./RegisterForm.scss"

export default function RegisterForm(props) {
  const onSubmit = () => {
    console.log("Hello There")
  }
  const { setSelectedForm } = props
  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo Electrónico"
            icon="mail outline"
          ></Input>
        </Form.Field>
        <Form.Field>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            icon="eye"
          ></Input>
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="¿Cómo deberíamos llamarte?"
            icon="user circle outline"
          ></Input>
        </Form.Field>
        <Button type="submit">Continuar</Button>
      </Form>
      <div className="register-form__options">
        <p>Volver</p>
        <p>¿Ya tienes Musicfy</p> <span>Iniciar Sesión</span>
      </div>
    </div>
  )
}
