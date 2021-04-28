<script>
  export let name;
  let count = 0;
  
  function handleClick() {
    count += 1; 
  }
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 900px;
    padding: 40px;

    font-family: sans-serif;
    background: peachpuff;
    color:coral;
  }

  h2 {
    text-align: center;
    font-size: 4rem;
  }
  
 a {
   font-size: 2rem;
   color: orangered;
 } 
 
 button {
   font-size: 2rem;
   padding: 0.5em 1em;
   background-color: papayawhip;
 }
</style>

<div class="container">
  <h2>Oh hai {name}</h2>
  <button on:click={handleClick}>
    You clicked me {count} time{count === 1 ? '' : 's'}! {count > 0 ? '[]~(￣▽￣)~*' : '≡(▔﹏▔)≡'}
  </button>
  
  <ul>
    <li><a href="/index.html">Home</a></li>
    <li><a href="/react.html">Go to React app!</a></li>
    <li><a href="/vue.html">Go to Vue App!</a></li>
  </ul>
</div>