const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateResponse(message) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: message,
        config:{
            systemInstruction: `
              give me short and sweet answers.
            `
        }
    })

    return response.text;
}

module.exports = generateResponse;