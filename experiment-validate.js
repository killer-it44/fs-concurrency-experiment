import fs from 'fs/promises'

while (true) {
    const rawContent = await fs.readFile('./experiment.json')
    try {
        rawContent.toString() ? JSON.parse(rawContent) : []
    } catch (e){
        console.log(rawContent.toString())
        throw e
    }
} 