import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
/* Colors */
	--primary: #FF577F;
	--primary-50: #FF427F;
	--primary-negative: #59323F;
	--grey-0: #F8F9FA;
	--grey-1: #868E96;
	--grey-2: #343B41;
	--grey-3: #212529; 
	--grey-4: #121214; 
	--white: #FFFFFF;
	--overlay-shadow: #00000040;
	
	/* Toast Colors*/
	
	--negative: #E83F5B;
	--sucess: #3FE864;

  /* Size Elements */
	--height-large: 3rem;
	--height-medium: 2.5rem;
	--height-small: 2rem;

	--width-1: 100%;
	--width-2: 90%;
	--width-3: 80%;
	--width-4: 48.75rem;
	
	/* Text Sizes */
	--title-size-1: 3rem;
	--title-size-2: 2.38rem;
	--title-size-3: 1.75rem;
	--title-size-4: 1.25rem;
	--title-size-5: 1.15rem;
	--text-size-1: 1rem;
	--text-size-2: 0.88rem;
	--text-size-3: 0.75rem;
	
	/* Text Weight */
	--font-weight-1: 700;
	--font-weight-2: 600;
	--font-weight-3: 500;
	--font-weight-4: 400;

	/* Margins */
	--gap-1: 2rem;
	--gap-2: 1.75rem;
	--gap-3: 1.5rem;
	--gap-4: 1.25rem;
	--gap-5: 1rem;
	--gap-6: 0.5rem;

	/* Border Radius */
	--radius-1: 0.25rem;
	--radius-2: 0.5rem;
}

*{
  margin: 0;
  padding: 0;

  /* Box Model */
	box-sizing: border-box;
}

body{
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;

  background-color: var(--grey-4);
	font-family: "Inter", sans-serif;
}

header {
	width: var(--width-1);

	background-color: var(--grey-4);
}

nav {
	max-width: var(--width-1);
	height: var(--width-1);
	padding: 0 var(--gap-4);

	display: flex;
	justify-content: space-between;
	align-items: center;

}

section, ul,form, div{
	width: var(--width-1);

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
}

ul, ol, li{
  list-style: none;
}

select, input{
  outline: none;

  background: transparent;
  border-radius: var(--radius-2);
} 

a{
	text-decoration: none;

	display: inline-flex;
	align-items: center;
	justify-content: center;
	
	transition: 0.3s;
}

button{
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	
  cursor: pointer;

  border: none;
  background: transparent;
}

img{
  max-width: var(--width-1);
	height: var(--width-1);
}

.Toastify__toast-container{
	inset: unset;
  top: var(--gap-1);
  

	@media screen and (min-width: 320px) {
		width: calc(var(--width-4) / 2.6);

		right: var(--gap-5);
	}

	@media screen and (min-width: 540px) {
		width: calc(var(--width-4) / 2.5);
	}
}

.Toastify__toast{
	flex-direction: row;
}

.Toastify__toast-body{
    flex-direction: row;
    gap: var(--gap-6);

	.Toastify__toast-icon {
	width: var(--gap-2);

	& > svg {
		font-size: var(--title-size-3);
		}
	}	

	& > div{
		color: var(--grey-0);
	}
}

.Toastify__toast-theme--light{
	background-color: var(--grey-2);
}

.Toastify__close-button--light {
    color: var(--grey-1);
    opacity: 1;
}

.Toastify__progress-bar--error{
	background: var(--negative);
}

.Toastify__progress-bar--sucess{
	background: var(--sucess);
}

/* SCROLL BAR  */
::-webkit-scrollbar {
	width: var(--radius-1);
	height: var(--radius-1);
}

::-webkit-scrollbar-thumb {
	background-color: var(--grey-2);
	border-radius: var(--radius-1);
}

::-webkit-scrollbar-track {
	background-color: var(--grey-3);
	border-radius: var(--radius-1);
}

`;

export const Container = styled.div`
	max-width: var(--width-1);
	margin: 0 auto;
	padding: var(--gap-3) var(--gap-5);
`;
