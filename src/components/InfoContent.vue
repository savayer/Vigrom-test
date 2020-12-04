<template>
  <article>
    <h1 id="5b1f" data-selectable-paragraph="">Why You Probably Shouldn&rsquo;t Use Vuex</h1>
    <p id="f02f" data-selectable-paragraph="">If you don&rsquo;t know Vuex already you can find more information here:&nbsp;<a href="https://vuex.vuejs.org/" rel="noopener nofollow">https://vuex.vuejs.org/</a>.</p>
    <p id="7169" data-selectable-paragraph="">Basically, Vuex is a state management plugin for Vue. It provides reactivity out of the box and also integrates nicely into the Vue dev tools.</p>
    <p id="119b" data-selectable-paragraph="">After using Vuex quite extensively I have to say that I&rsquo;m not really a fan of it. The reason for that is the unnecessary boilerplate code and structuring of your modules.</p>
    <h2 id="3e80" data-selectable-paragraph="">What Do Most People Try To Achieve With Vuex?</h2>
    <p id="71ec" data-selectable-paragraph="">I think the&nbsp;<span id="rmm">m</span>ost common use case is sharing state between your components. Furthermore, they want to ensure that the state of the application can only be changed within specific places of the app.</p>
    <p id="604f" data-selectable-paragraph="">And in my opinion, it is unnecessary to use Vuex for this use case. You can easily implement your own store without the restriction and complexity of Vuex.</p>
    <h2 id="fd7f" data-selectable-paragraph="">Boilerplate</h2>
    <p id="ad9b" data-selectable-paragraph="">Let me show you what I mean by that:</p>
    <pre><span id="52bc" data-selectable-paragraph="">let state = {<br />    count: 0<br />}<br /><br />let actions = {<br />    incrementCount({commit}) {<br />        commit('incrementCount')<br />    }<br />}<br /><br />let mutations = {<br />    incrementCount(state) {<br />        state.count++<br />    }<br />}<br /><br />export default {<br />    namespaced: true,<br />    state,<br />    mutations<br />}</span></pre>
    <p id="d63b" data-selectable-paragraph="">now let&rsquo;s look at what we actually need:</p>
    <pre><span id="8204" data-selectable-paragraph="">export const <strong><em>clickStore </em></strong>= {<br />    state: {<br />        count: 0<br />    },<br />    incrementCount() {<br />        <strong><em>clickStore</em></strong>.state.count++;    <br />    }<br />}</span></pre>
    <p id="34c9" data-selectable-paragraph="">And with growing stores, the problem only gets bigger since you always have to juggle the mutations and actions. I would suggest using the actions only for mutating the store. Every other kind of logic should be separated into service files.</p>
    <p id="9f5c" data-selectable-paragraph="">Since Vuex recommends you only changing the state from within the mutation block you are basically stuck with the boilerplate pattern above. But gladly we will implement an alternative in a few seconds :).</p>
    <p style="text-align: center; font-size: 15px;"><br /><br /></p>
  </article>
</template>

<script>
  export default {
    name: 'InfoContent',
  }
</script>