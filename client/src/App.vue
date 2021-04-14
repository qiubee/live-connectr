<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
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

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>