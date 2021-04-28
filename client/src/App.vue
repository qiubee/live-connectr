<template>
	<router-view/>
</template>

<style>
@font-face {
    font-family: Tommy Soft;
    font-weight: 400;
    src: url("assets/fonts/tommy-soft-regular.otf") format("opentype");
}

@font-face {
    font-family: Tommy Soft;
    font-weight: 500;
    src: url("assets/fonts/tommy-soft-medium.otf") format("opentype");
}

@font-face {
    font-family: Tommy Soft;
    font-weight: 700;
    src: url("assets/fonts/tommy-soft-bold.otf") format("opentype");
}

@font-face {
    font-family: Tommy Soft;
    font-weight: 900;
    src: url("assets/fonts/tommy-soft-black.otf") format("opentype");
}

html, body, #app {
	height: 100%;
}

#app {
    margin: 0 0.75rem;
    display: flex;
    flex-direction: column;
    align-content: center;
}

#app > div {
    margin: auto;
}

body, body * {
	margin: 0;
    padding: 0;
    font-family: Tommy Soft, Avenir, Helvetica, Roboto, Ubuntu, Arial, sans-serif;
}

body {
	background-color: white;
}

ul, ol {
	list-style-type: none;
}

a {
	text-decoration: none;
}

.button {
	display: inline-block;
	background-color: #1d78ee;
    min-width: 5rem;
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
    text-align: center;
}

button {
    border: none;
    -webkit-appearance: none;
    appearance: none;
}

button:hover {
    cursor: pointer;
}
</style>