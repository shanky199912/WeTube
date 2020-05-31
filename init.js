import app from "./app"; // ./ used when exporting using the deafult.

const PORT = 4000;

const handleListening = () => 
    console.log(`✅ 😍 Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);