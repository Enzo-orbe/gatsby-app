import React from "react"
import { css } from "@emotion/core"

export default function Footer({ title }) {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p
        css={css`
          text-align: center;
          color: #ffff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        {title}. Todos los derechos reservados {year} &copy;{" "}
      </p>
    </footer>
  )
}
