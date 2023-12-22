import fs from 'fs/promises'
import crypto from 'crypto'

var counter = 0
while (true) {
    // console.log(counter)
    let rawContent
    do {
        rawContent = await fs.readFile('./experiment.json')
    } while (!rawContent.toString())
    const content = JSON.parse(rawContent)
    const entry = content.find(e => e.name === 'process-1')
    if (!entry) {
        content.push({"name": "process-1", "desc": crypto.randomUUID()})
    } else {
        entry.desc = crypto.randomUUID()
    }
    await fs.writeFile('./experiment.json', JSON.stringify(content))
    counter += 1
}