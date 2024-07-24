<template>
  <div id="app">
    <h1>Text Generation with Transformer.js</h1>
    <textarea v-model="inputText" placeholder="Enter some text here..."></textarea>
    <button @click="generateText">Generate Text</button>
    <div v-if="generatedText">
      <h2>Generated Text:</h2>
      <p>{{ generatedText }}</p>
    </div>
  </div>
</template>

<script>
import { pipeline } from '@xenova/transformers';

export default {
  name: 'App',
  data() {
    return {
      inputText: '',
      generatedText: ''
    };
  },
  methods: {
    async generateText() {
      const model = await pipeline('text-generation', 'gpt2');
      const output = await model(this.inputText);
      this.generatedText = output[0].generated_text;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

textarea {
  width: 80%;
  height: 100px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}

h2 {
  margin-top: 20px;
}

p {
  font-size: 18px;
}
</style>
