const { pipeline } = require('@xenova/transformers');

// Load the model
async function loadModel() {
    const model = await pipeline('text-generation', 'Xenova/transformers', {
        model: 'path-to-your-lightweight-llm'
    });

    return model;
}

// Generate text
async function generateText() {
    const model = await loadModel();
    const result = await model('Your input text here');
    console.log(result);
}

generateText();
