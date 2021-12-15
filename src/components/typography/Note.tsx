import styled from "styled-components"
import { COMPOSITION_CONFIG } from "../../config"

export const Note = styled.p`
  color: ${COMPOSITION_CONFIG.TEXT.COLOR.REGULAR};
  font-size: ${COMPOSITION_CONFIG.TEXT.FONT_SIZE.SMALL};
  font-weight: 100;
  font-family: "Comic Sans MS", cursive, sans-serif;
`