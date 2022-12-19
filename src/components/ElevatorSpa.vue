<template>
  <div class="main">
    <div id="stop" class="stop"></div>
        <div class="panel-floors">
    <button id="call5" @click="elevatorCall(1)">1 этаж</button> 
    <button id="call4" @click="elevatorCall(2)">2 этаж</button> 
    <button id="call3" @click="elevatorCall(3)">3 этаж</button> 
    <button id="call2" @click="elevatorCall(4)">4 этаж</button> 
    <button id="call1" @click="elevatorCall(5)">5 этаж</button> 
    </div>
    <table border="0">
      <tr><td class="elevator_sh"> </td></tr>
      <tr><td class="elevator_sh"> </td></tr>
      <tr><td class="elevator_sh"> </td></tr>
      <tr><td class="elevator_sh"> </td></tr>
      <tr><td class="elevator_sh"> </td></tr>
      <div id="elev" class="elev">
      </div>
    </table>
    <div class="elevator_sh">   
       <img id="elevator" class="elevator" src="@images/el.png" @transitionend="elevatorStop()"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ElevatorSpa',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
