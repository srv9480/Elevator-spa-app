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
  },
   data(){
    return{
      calls: [],
      call: 0,
    }
  },
  mounted() { 
    (localStorage.getItem('call') != 0) ? this.call = localStorage.getItem('call') : this.call = 0,
    (JSON.parse(localStorage.getItem('calls')).length != 0) ? this.calls = this.calls.concat(JSON.parse(localStorage.getItem('calls'))) : this.calls.length = 0,
    this.elevatorMove()
  },
   methods: {
        elevatorCall(lvl) {
      if(this.calls.length > 0){
        for(let i=0; i < this.calls.length; i++){
          if(lvl == this.calls[i]){
            return;
          }
        }
      }
      this.calls.push(lvl)
      this.command_calls()
    },
   command_calls() {
      document.getElementById('stop').style.display = 'none'
      if(this.calls.length > 0){
        this.call = this.calls[0]
        localStorage.setItem('call', this.call)
        setTimeout(this.elevatorMove, 500)
      }
    },
    elevatorMove() {
      let options = { 
        5: '100px',
        4: '250px',
        3: '400px',
        2: '550px',
        1: '700px'
      }
      document.getElementById('elevator').style.top = options[this.call]
    },
      elevatorStop() {
      this.calls.shift()
      localStorage.setItem('calls', JSON.stringify(this.calls))
      document.getElementById('stop').style.display = 'block'
      setTimeout(this.command_calls, 3000)
    },
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
